
// Utilities
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => [...ctx.querySelectorAll(sel)];

// Convert YouTube URL to nocookie embed + thumbnail
function ytId(url){
  const u = new URL(url);
  if (u.searchParams.get('v')) return u.searchParams.get('v');
  const parts = u.pathname.split('/').filter(Boolean);
  if (parts[0] === 'shorts') return parts[1];
  return parts.pop();
}
function ytEmbed(url){ return `https://www.youtube-nocookie.com/embed/${ytId(url)}`; }
function ytThumb(url){ return `https://img.youtube.com/vi/${ytId(url)}/hqdefault.jpg`; }

const PLAN = window.__PLAN__;

const state = {
  day: PLAN[0].day,
  filter: 'Todos'
};

function render(){
  // tabs
  $$('.tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.day === state.day);
    btn.setAttribute('aria-selected', btn.dataset.day === state.day ? 'true' : 'false');
  });

  // data
  const dayData = PLAN.find(d => d.day === state.day);
  const grid = $('#grid');
  grid.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = `${dayData.day} — ${dayData.title}`;
  title.className = 'badge';
  grid.appendChild(title);

  dayData.blocks
    .filter(b => state.filter==='Todos' || dayData.focus.includes(state.filter))
    .forEach((block, idx) => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <div class="thumb">
          <img src="${ytThumb(block.video)}" alt="Miniatura: ${block.name}" loading="lazy" />
        </div>
        <div>
          <h3>${idx+1}. ${block.name}</h3>
          <div class="meta">${dayData.focus.join(' · ')}</div>
        </div>
        <footer>
          <span class="badge">Duración: ${block.time}</span>
          <button class="button" data-url="${ytEmbed(block.video)}">Ver demo</button>
        </footer>
      `;
      grid.appendChild(card);
    });

  if (grid.children.length === 1) {
    const p = document.createElement('p');
    p.textContent = 'No hay ejercicios para este filtro.';
    grid.appendChild(p);
  }
}

document.addEventListener('click', (e) => {
  if (e.target.matches('.tab')) {
    state.day = e.target.dataset.day;
    render();
  }
  if (e.target.matches('.button')) {
    const url = e.target.getAttribute('data-url');
    openModal(url);
  }
});

$('#filter').addEventListener('change', (e) => {
  state.filter = e.target.value;
  render();
});

// Modal logic
const modal = $('#modal');
const player = $('#player');
const closeModalBtn = $('#closeModal');

function openModal(src){
  modal.setAttribute('aria-hidden','false');
  player.src = src + '?autoplay=1&modestbranding=1&rel=0';
}
function closeModal(){
  modal.setAttribute('aria-hidden','true');
  player.src = '';
}
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{ if(e.target===modal) closeModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });

// First render
render();
