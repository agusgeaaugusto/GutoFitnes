
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

function getProgKey(plan, day){ return `gf.v3.${plan}.${day}`; }
function getProgByKey(key){ try{return JSON.parse(localStorage.getItem(key)||"{}");}catch(_ ){return {}} }
function setProgByKey(key, v){ localStorage.setItem(key, JSON.stringify(v)); }
function getKey(){ return getProgKey(state.plan, state.day); }
function getProgV3(){ return getProgByKey(getKey()); }
function setProgV3(v){ setProgByKey(getKey(), v); }

function allDays(){ return ["Lunes","Martes","Miércoles","Jueves","Viernes"]; }
function planDays(plan){ return window.PLANES?.[plan] || {}; }
function getAllExercisesForPlan(plan){
  const d = planDays(plan);
  let total = 0, done = 0;
  allDays().forEach(day=>{
    const arr = (d[day]||[]);
    total += arr.length;
    const p = getProgKey(plan, day);
    const prog = getProgByKey(p);
    arr.forEach((_,i)=>{ if(prog[i]?.done) done++; });
  });
  return {total,done};
}
function levelFromPct(pct){ return Math.max(1, Math.min(5, Math.floor(pct/20)+1)); }
function badgesFromPct(pct){
  return [
    {name:"Bronce 25%", req:25},
    {name:"Plata 50%", req:50},
    {name:"Oro 75%", req:75},
    {name:"Diamante 100%", req:100}
  ].map(b=>({...b, earned: pct>=b.req}));
}
function updateTopProgress(){
  const {total,done} = getAllExercisesForPlan(state.plan);
  const pct = total? Math.round((done/total)*100): 0;
  const bar = document.getElementById('globalProgress');
  const lvl = document.getElementById('globalLevel');
  if(bar) bar.querySelector('span').style.width = pct + '%';
  if(lvl) lvl.textContent = 'Lv ' + levelFromPct(pct);
  localStorage.setItem('gf.v3.progress.'+state.plan, JSON.stringify({pct}));
}
function showProgressModal(){
  const el = document.getElementById('progressBody');
  const {total,done} = getAllExercisesForPlan(state.plan);
  const pct = total? Math.round((done/total)*100): 0;
  const badges = badgesFromPct(pct);
  el.innerHTML = `
    <h2 style="margin:0 0 6px">Progreso del Entrenamiento ${state.plan}</h2>
    <p style="margin:0 0 10px">Completados: <b>${done}/${total}</b> • ${pct}%</p>
    <div class="progress-bar"><span style="width:${pct}%"></span></div>
    <div class="badges">
      ${badges.map(b=>`<span class="badge ${b.earned?'is-earned':''}">${b.name}</span>`).join('')}
    </div>
  `;
  document.getElementById('progressModal').setAttribute('aria-hidden','false');
}
function hideProgressModal(){
  document.getElementById('progressModal').setAttribute('aria-hidden','true');
}
document.getElementById('btnProgress').addEventListener('click', showProgressModal);
document.getElementById('closeProgress').addEventListener('click', hideProgressModal);

function card(ex, idx){
  const p = getProgV3();
  const done = p[idx]?.done || false;
  const kg1 = p[idx]?.kg1 ?? "";
  const kg2 = p[idx]?.kg2 ?? "";
  const kg3 = p[idx]?.kg3 ?? "";
  const lockCls = done ? ' lock' : '';
  return `
  <article class="card${lockCls}">
    <div class="thumb">
      <img src="${ytThumb(ex.video)}" alt="${ex.name}" loading="lazy"/>
      <button class="play" data-vid="${ytEmbed(ex.video)}">▶</button>
      <a class="btn open-yt" href="https://www.youtube.com/results?search_query=${encodeURIComponent(ex.name)}" target="_blank" rel="noopener">YouTube</a>
    </div>
    <div class="body">
      <h3 class="title">${ex.name}</h3>
      <div class="meta">${ex.time || ""}</div>
      <div class="sets">
        <input type="number" step="0.5" min="0" placeholder="Set 1 (kg)" value="${kg1}" data-idx="${idx}" data-set="1" class="kg" ${done?'disabled':''} />
        <input type="number" step="0.5" min="0" placeholder="Set 2 (kg)" value="${kg2}" data-idx="${idx}" data-set="2" class="kg" ${done?'disabled':''} />
        <input type="number" step="0.5" min="0" placeholder="Set 3 (kg)" value="${kg3}" data-idx="${idx}" data-set="3" class="kg" ${done?'disabled':''} />
      </div>
      <div class="row">
        <button class="btn ${done?'':'primary'} toggle" data-idx="${idx}" ${done?'disabled':''}>${done?'Hecho':'Marcar Hecho'}</button>
      </div>
    </div>
  </article>`;
}

function normalizeDay(s){
  const map = {"Miercoles":"Miércoles","miercoles":"Miércoles","Sabado":"Sábado","sabado":"Sábado"};
  return map[s] || s;
}
function render(){
  let dayPlan = (window.PLANES?.[state.plan]?.[state.day]) || []; if(dayPlan.length===0){ dayPlan = (window.PLANES?.[state.plan]?.[normalizeDay(state.day)]) || []; }
  list.innerHTML = dayPlan.map((ex,i)=>card(ex,i)).join("") || "<p>No hay ejercicios para este día.</p>";
  $$(".play", list).forEach(b=> b.addEventListener('click', e=> openModal(e.currentTarget.dataset.vid)));
  $$(".kg", list).forEach(inp => inp.addEventListener('input', e=>{
    const idx = +e.currentTarget.dataset.idx;
    const setn = +e.currentTarget.dataset.set;
    const p = getProgV3(); p[idx] = p[idx] || {}; p[idx]['kg'+setn] = e.currentTarget.value; setProgV3(p);
  }));
  $$(".toggle", list).forEach(btn => btn.addEventListener('click', e=>{
    const idx = +e.currentTarget.dataset.idx;
    const p = getProgV3(); p[idx] = p[idx] || {}; p[idx].done = true; setProgV3(p); render(); updateTopProgress();
  }));
  updateTopProgress();
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

// Restore progress bar width if stored
(function(){
  const saved = localStorage.getItem('gf.v3.progress.'+state.plan);
  if(saved){ try{ const o = JSON.parse(saved); const bar = document.getElementById('globalProgress'); if(bar) bar.querySelector('span').style.width=(o.pct||0)+'%'; }catch(_ ){} }
})();

render();

document.addEventListener('DOMContentLoaded', ()=>{ render(); setTimeout(render, 50); setTimeout(render, 150); });
