
/* ─── i18n ─── */
var T = {
  pt:{
    nav_home:"Home", nav_about:"Sobre mim", nav_projects:"Projetos",
    nav_areas:"Frontend · Backend · Fullstack",
    eyebrow:"// meus projetos",
    hero_title:"O que eu<br><em>construí</em>",
    hero_sub:"Projetos reais, estudos e experimentos. Cada um representa uma etapa da jornada — do HTML puro até automações em Python e interfaces em React.",
    sec_stats:"Em números",stat_total:"Projetos",sec_projects:"Projetos",
    filter_all:"Todos",filter_all_status:"Todos os status",btn_view:"Ver projeto",
    status_live:"Live",status_wip:"Em andamento",status_study:"Estudo",
    empty_msg:"Nenhum projeto encontrado nessa categoria ainda.",
    p1_title:"Lucilia's Notebook",p1_desc:"Caderno digital de anotações de aulas sobre desenvolvimento full-stack. Reúne conceitos de lógica de programação, Python, Git, GitHub, banco de dados e outros tópicos. Desenvolvido inteiramente no front-end com HTML, CSS e JavaScript, sem dependências externas.",
    p2_title:"Jogo da Velha",p2_desc:"Jogo da velha interativo feito do zero com HTML, CSS e JavaScript puro. Detecta vitória, empate e permite reiniciar a partida — sem dependências externas.",
    p3_title:"Automação de Relatórios",p3_desc:"Script que coleta dados de planilhas Excel, processa indicadores e gera relatórios em PDF automaticamente via agendamento. Usado internamente no SENAI.",
    p4_title:"Luci College",p4_desc:"Aplicação web full-stack de catálogo de prêmios para alunos da Luci College Technology Campus. Alunos acumulam pontos por atividades acadêmicas e os resgatam por produtos e serviços exclusivos. Interface construída em HTML, CSS e JavaScript, back-end em Python e dados persistidos em PostgreSQL.",
    p5_title:"Task Manager App",p5_desc:"Aplicação de gerenciamento de tarefas com drag-and-drop, filtros por status, persistência em localStorage e modo escuro. 100% Vanilla JS, sem dependências.",
    p6_title:"Weather App",p6_desc:"App de previsão do tempo que consome a API OpenWeatherMap, exibe condições atuais, previsão de 5 dias e troca de unidades °C/°F em tempo real.",
    p7_title:"Finance Tracker",p7_desc:"App de controle financeiro pessoal com categorização de despesas, gráficos interativos de gastos por mês e exportação para CSV. Construído com React + Recharts.",
    p8_title:"Kanban Board",p8_desc:"Quadro kanban com colunas customizáveis, drag-and-drop entre colunas, tags coloridas por prioridade e persistência em localStorage. Inspirado no Trello.",
    btn_no_repo:"Sem repositório",btn_soon:"Em breve",
  },
  en:{
    nav_home:"Home", nav_about:"About me", nav_projects:"Projects",
    nav_areas:"Frontend · Backend · Fullstack",
    eyebrow:"// my projects",
    hero_title:"What I've<br><em>built</em>",
    hero_sub:"Real projects, studies and experiments. Each one represents a step in the journey — from plain HTML to Python automation and React interfaces.",
    sec_stats:"By the numbers",stat_total:"Projects",sec_projects:"Projects",
    filter_all:"All",filter_all_status:"All statuses",btn_view:"View project",
    status_live:"Live",status_wip:"In progress",status_study:"Study",
    empty_msg:"No projects found in this category yet.",
    p1_title:"Lucilia's Notebook",p1_desc:"A digital class notebook covering full-stack development concepts. Includes notes on programming logic, Python, Git, GitHub, databases, and more. Built entirely on the front-end using HTML, CSS, and JavaScript, with no external dependencies.",
    p2_title:"Tic-Tac-Toe",p2_desc:"Interactive tic-tac-toe game built from scratch with plain HTML, CSS and JavaScript. Detects win, draw and allows restarting the match — no external dependencies.",
    p3_title:"Report Automation",p3_desc:"Script that collects data from Excel spreadsheets, processes indicators and automatically generates PDF reports on a schedule. Used internally at SENAI.",
    p4_title:"Luci College",p4_desc:"A full-stack web application for a rewards catalog at Luci College Technology Campus. Students accumulate points through academic activities and redeem them for exclusive products and services. Front-end built with HTML, CSS, and JavaScript, back-end powered by Python, and data persisted in PostgreSQL.",
    p5_title:"Task Manager App",p5_desc:"Task management app with drag-and-drop, status filters, localStorage persistence and dark mode. 100% Vanilla JS, no dependencies.",
    p6_title:"Weather App",p6_desc:"Weather forecast app consuming the OpenWeatherMap API, showing current conditions, 5-day forecast and real-time °C/°F unit toggle.",
    p7_title:"Finance Tracker",p7_desc:"Personal finance control app with expense categorization, interactive monthly spending charts and CSV export. Built with React + Recharts.",
    p8_title:"Kanban Board",p8_desc:"Kanban board with customizable columns, drag-and-drop between columns, color-coded priority tags and localStorage persistence. Inspired by Trello.",
    btn_no_repo:"No repository",btn_soon:"Coming soon",
  }
};

let lang = localStorage.getItem('nb_lang') || 'pt';
function setLang(l){
  lang=l; localStorage.setItem('nb_lang',l);
  document.body.classList.add('lang-switching');
  setTimeout(()=>{
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const v=T[l][el.getAttribute('data-i18n')];
      if(v!==undefined) el.innerHTML=v;
    });
    document.documentElement.lang=l==='pt'?'pt-BR':'en';
    document.title=l==='pt'?'Projetos — Lucilia Rosa':'Projects — Lucilia Rosa';
    document.getElementById('btn-pt').classList.toggle('active',l==='pt');
    document.getElementById('btn-en').classList.toggle('active',l==='en');
    document.body.classList.remove('lang-switching');
  },180);
}
if(lang==='en') setLang('en');

/* ─── FILTROS ─── */

// Controla qual categoria está ativa
function setCatFilter(btn){
  document.querySelectorAll('.filter-btn[data-cat]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterProjects();
}

// Controla qual status está ativo
function setStatusFilter(btn){
  document.querySelectorAll('.filter-btn[data-status]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterProjects();
}

// Aplica os dois filtros combinados e atualiza os contadores
function filterProjects(){
  const cat = document.querySelector('.filter-btn[data-cat].active')?.getAttribute('data-cat') || 'all';
  const status = document.querySelector('.filter-btn[data-status].active')?.getAttribute('data-status') || 'all';

  const cards = document.querySelectorAll('.project-card');
  let visible = 0;
  const counts = { html:0, python:0, js:0, react:0 };

  cards.forEach(card => {
    const cardCat    = card.getAttribute('data-cat') || '';
    // data-status pode ter múltiplos valores separados por espaço, ex: "study wip"
    const cardStatus = (card.getAttribute('data-status') || '').split(' ');

    const matchCat    = cat === 'all' || cardCat === cat;
    const matchStatus = status === 'all' || cardStatus.includes(status);

    const show = matchCat && matchStatus;
    card.classList.toggle('hidden', !show);

    if(show){
      visible++;
      if(counts[cardCat] !== undefined) counts[cardCat]++;
    }
  });

  document.getElementById('emptyState').style.display = visible === 0 ? 'block' : 'none';
  document.getElementById('stat-total').textContent  = visible;
  document.getElementById('stat-html').textContent   = counts.html;
  document.getElementById('stat-python').textContent = counts.python;
  document.getElementById('stat-js').textContent     = counts.js;
  document.getElementById('stat-react').textContent  = counts.react;
}

/* ─── STATS INICIAIS ─── */
(function buildStats(){
  const cards = document.querySelectorAll('.project-card');
  document.getElementById('stat-total').textContent = cards.length;
  const counts = {html:0,python:0,js:0,react:0};
  cards.forEach(c => {
    const k = c.getAttribute('data-cat');
    if(counts[k] !== undefined) counts[k]++;
  });
  document.getElementById('stat-html').textContent   = counts.html;
  document.getElementById('stat-python').textContent = counts.python;
  document.getElementById('stat-js').textContent     = counts.js;
  document.getElementById('stat-react').textContent  = counts.react;
})();

/* ─── CARROSSEL ─── */
function buildCarousels(){
  document.querySelectorAll('.card-carousel').forEach(container => {
    const raw = container.getAttribute('data-images');
    const badgeClass = container.getAttribute('data-badge');
    const badgeText  = container.getAttribute('data-badge-text') || '';
    let images = [];
    try { images = JSON.parse(raw); } catch(e){}

    const validImgs = images.filter(u =>
      u && !u.startsWith('COLOQUE') && u.trim() !== ''
    );

    const badge = document.createElement('span');
    badge.className = `preview-badge ${badgeClass}`;
    badge.innerHTML = badgeText;
    container.appendChild(badge);

    if(validImgs.length === 0){
      const ph = document.createElement('div');
      ph.className = 'carousel-placeholder';
      ph.innerHTML = '<span>🖼️</span><p>imagens em breve</p>';
      container.appendChild(ph);
      return;
    }

    const track = document.createElement('div');
    track.className = 'carousel-track';

    validImgs.forEach(src => {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.loading = 'lazy';
      img.draggable = false;
      slide.appendChild(img);
      track.appendChild(slide);
    });
    container.appendChild(track);

    const dotsWrap = document.createElement('div');
    dotsWrap.className = 'carousel-dots';
    validImgs.forEach((_, i) => {
      const d = document.createElement('span');
      d.className = 'carousel-dot' + (i===0?' active':'');
      d.addEventListener('click', e => { e.stopPropagation(); goTo(i); });
      dotsWrap.appendChild(d);
    });
    container.appendChild(dotsWrap);

    const btnPrev = document.createElement('button');
    btnPrev.className = 'carousel-btn prev';
    btnPrev.innerHTML = '&#8592;';
    btnPrev.setAttribute('aria-label','Anterior');
    const btnNext = document.createElement('button');
    btnNext.className = 'carousel-btn next';
    btnNext.innerHTML = '&#8594;';
    btnNext.setAttribute('aria-label','Próximo');

    if(validImgs.length <= 1){
      btnPrev.disabled = true;
      btnNext.disabled = true;
    }
    container.appendChild(btnPrev);
    container.appendChild(btnNext);

    let current = 0;

    function goTo(n){
      current = (n + validImgs.length) % validImgs.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      dotsWrap.querySelectorAll('.carousel-dot').forEach((d,i) =>
        d.classList.toggle('active', i === current)
      );
    }

    btnPrev.addEventListener('click', e => { e.stopPropagation(); goTo(current - 1); });
    btnNext.addEventListener('click', e => { e.stopPropagation(); goTo(current + 1); });

    let timer = validImgs.length > 1
      ? setInterval(() => goTo(current + 1), 3000)
      : null;

    container.addEventListener('mouseenter', () => { if(timer){ clearInterval(timer); timer=null; } });
    container.addEventListener('mouseleave', () => {
      if(validImgs.length > 1 && !timer)
        timer = setInterval(() => goTo(current + 1), 3000);
    });

    let touchStartX = 0;
    container.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, {passive:true});
    container.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if(Math.abs(dx) > 40) goTo(dx < 0 ? current+1 : current-1);
    });
  });
}

/* ─── INIT ─── */
buildCarousels();