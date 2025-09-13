
const $ = (s,ctx=document)=>ctx.querySelector(s);
const $$ = (s,ctx=document)=>[...ctx.querySelectorAll(s)];
function ytId(url){ try{const u=new URL(url); if(u.searchParams.get('v')) return u.searchParams.get('v'); const p=u.pathname.split('/').filter(Boolean); if(p[0]==='shorts') return p[1]; return p.pop();}catch(e){return url;} }
function ytEmbed(url){ return `https://www.youtube-nocookie.com/embed/${ytId(url)}`; }
function ytThumb(url){ return `https://img.youtube.com/vi/${ytId(url)}/hqdefault.jpg`; }

const selector = $("#planSelector");
const list = $("#list");
const days = $$(".day");
const modal = $("#videoModal");
const player = $("#player");
const closeModalBtn = $("#closeModal");

let state = { plan: selector.value, day: "Lunes" };

function key(){ return `gf.v2.${state.plan}.${state.day}`; }
function getProg(){ try{return JSON.parse(localStorage.getItem(key())||"{}");}catch(_){return{}} }
function setProg(p){ localStorage.setItem(key(), JSON.stringify(p)); }

function card(ex, idx){
  const p = getProg();
  const done = p[idx]?.done || false;
  const weight = p[idx]?.kg ?? "";
  return `
  <article class="card">
    <div class="thumb">
      <img src="${ytThumb(ex.video)}" alt="${ex.name}" loading="lazy"/>
      <button class="play" data-vid="${ytEmbed(ex.video)}">▶</button>
    </div>
    <div class="body">
      <h3 class="title">${ex.name}</h3>
      <div class="meta">${ex.time || ""}</div>
      <div class="row">
        <input type="number" step="0.5" min="0" placeholder="kg" value="${weight}" data-idx="${idx}" class="kg"/>
        <button class="btn ${done?'':'primary'} toggle" data-idx="${idx}">${done?'Completado':'Marcar'}</button>
      </div>
    </div>
  </article>`;
}

function render(){
  const dayPlan = (window.PLANES?.[state.plan]?.[state.day]) || [];
  list.innerHTML = dayPlan.map((ex,i)=>card(ex,i)).join("") || "<p>No hay ejercicios para este día.</p>";
  // eventos dentro de la lista
  $$(".play", list).forEach(b=> b.addEventListener('click', e=> openModal(e.currentTarget.dataset.vid)));
  $$(".kg", list).forEach(inp => inp.addEventListener('input', e=>{
    const idx = +e.currentTarget.dataset.idx;
    const p = getProg(); p[idx] = p[idx] || {}; p[idx].kg = e.currentTarget.value; setProg(p);
  }));
  $$(".toggle", list).forEach(btn => btn.addEventListener('click', e=>{
    const idx = +e.currentTarget.dataset.idx;
    const p = getProg(); p[idx] = p[idx] || {}; p[idx].done = !p[idx].done; setProg(p); render();
  }));
}

selector.addEventListener('change', e=>{ state.plan = e.target.value; render(); });
days.forEach(d=> d.addEventListener('click', e=>{
  days.forEach(x=>x.classList.remove('is-active'));
  e.currentTarget.classList.add('is-active');
  state.day = e.currentTarget.dataset.day;
  render();
}));

function openModal(src){
  modal.setAttribute('aria-hidden','false');
  player.src = src + "?autoplay=1&modestbranding=1&rel=0";
}
function closeModal(){
  modal.setAttribute('aria-hidden','true');
  player.src = "";
}
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{ if(e.target===modal) closeModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });

render();
