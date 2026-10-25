
/* ─── i18n ─── */
var T = {
  pt:{
    nav_home:"Home", nav_about:"Sobre mim", nav_projects:"Projetos",
    nav_areas:"Frontend · Backend · Fullstack",
    eyebrow:"// Meus projetos",
    hero_title:"O que eu<br><em>construí</em>",
    hero_sub:"Projetos que demonstram experiência em desenvolvimento de software, automação de processos, integração de sistemas e desenvolvimento web, utilizando tecnologias como Python, SQL, JavaScript e APIs.",
    sec_stats:"Em números",
    sec_stats_sub:"Métricas e distribuição de tecnologias nos projetos",
    stat_total:"Total de Projetos",
    stat_total_sub:"Showcases documentados",
    stat_html:"HTML & CSS",
    stat_html_sub:"Semântica & Estilos",
    stat_python:"Python & APIs",
    stat_python_sub:"Flask & Automação",
    stat_js:"JavaScript",
    stat_js_sub:"DOM Engine & Reatividade",
    stat_sql:"PostgreSQL / SQL",
    stat_sql_sub:"Bancos Relacionais",
    sec_projects:"Projetos",
    search_placeholder:"Buscar projetos por título, tecnologia (ex: Python, SQL, JS, DOM, API)...",
    btn_clear_filters:"Limpar filtros",
    filter_all:"Todos",filter_all_status:"Todos os status",btn_view:"Ver projeto",
    tab_gallery:"Galeria",tab_simulator:"Simulador",
    sim_btn_run:"▶ Executar",sim_btn_reset:"Reiniciar",
    status_live:"Live",status_wip:"Em andamento",status_study:"Estudo",
    empty_msg:"Nenhum projeto encontrado para os critérios de busca.",
    p1_title:"Lucilia's Notebook",p1_desc:"Caderno digital de anotações de aulas sobre desenvolvimento full-stack. Reúne conceitos de lógica de programação, Python, Git, GitHub, banco de dados e outros tópicos. Desenvolvido inteiramente no front-end com HTML, CSS e JavaScript, sem dependências externas.",
    p2_title:"Jogo da Velha",p2_desc:"Jogo da velha interativo feito do zero com HTML, CSS e JavaScript puro. Detecta vitória, empate e permite reiniciar a partida — sem dependências externas.",
    p3_title:"Automação de Relatórios",p3_desc:"Script que coleta dados de planilhas Excel, processa indicadores e gera relatórios em PDF automaticamente via agendamento. Usado internamente no SENAI.",
    p4_title:"Luci College",p4_desc:"Aplicação web full-stack de catálogo de prêmios para alunos da Luci College Technology Campus. Alunos acumulam pontos por atividades acadêmicas e os resgatam por produtos e serviços exclusivos. Interface construída em HTML, CSS e JavaScript, back-end em Python e dados persistidos em PostgreSQL.",
    p5_title:"Task Manager App",p5_desc:"Aplicação de gerenciamento de tarefas com drag-and-drop, filtros por status, persistência em localStorage e modo escuro. 100% Vanilla JS, sem dependências.",
    p6_title:"Weather App",p6_desc:"App de previsão do tempo que consome a API OpenWeatherMap, exibe condições atuais, previsão de 5 dias e troca de unidades °C/°F em tempo real.",
    p7_title:"Finance Tracker",p7_desc:"App de controle financeiro pessoal com categorização de despesas, gráficos interativos de gastos por mês e exportação para CSV. Construído com React + Recharts.",
    p8_title:"Kanban Board",p8_desc:"Quadro kanban com colunas customizáveis, drag-and-drop entre colunas, tags coloridas por prioridade e persistência em localStorage. Inspirado no Trello.",
    btn_no_repo:"Sem repositório",btn_soon:"Em breve",
    sec_highlights_label:"Destaques da Arquitetura:",
    p1_h1:"<strong>Arquitetura Front-end Pura:</strong> HTML5 semântico, CSS3 moderno e Vanilla JS sem dependências externas.",
    p1_h2:"<strong>Módulos Estruturados:</strong> Conteúdos sobre lógica, Python, modelagem relacional SQL e versionamento Git.",
    p1_h3:"<strong>Performance & Acessibilidade:</strong> Carregamento instantâneo, navegação por âncoras e alta legibilidade.",
    p4_h1:"<strong>Back-end RESTful em Python:</strong> Arquitetura com Flask para processamento de regras acadêmicas e validação de pontos.",
    p4_h2:"<strong>Persistência em PostgreSQL:</strong> Modelagem de dados relacional para alunos, extratos de pontos e catálogo de resgates.",
    p4_h3:"<strong>Interface Responsiva & Gamificada:</strong> Front-end interativo com catálogo dinâmico e feedback imediato de transações.",
    p2_h1:"<strong>Motor de Jogo Determinístico:</strong> Checagem imediata de 8 condições de vitória e empates.",
    p2_h2:"<strong>Manipulação Dinâmica do DOM:</strong> Atualização de elementos sem recarregar e animações em CSS puro.",
    p2_h3:"<strong>Gestão de Estado em Memória:</strong> Controle de alternância de turnos e persistência de placar durante a sessão.",
    footer_rights:"Todos os direitos reservados.",
  },
  en:{
    nav_home:"Home", nav_about:"About me", nav_projects:"Projects",
    nav_areas:"Frontend · Backend · Fullstack",
    eyebrow:"// My projects",
    hero_title:"What I've<br><em>built</em>",
    hero_sub:"Projects showcasing experience in software development, process automation, systems integration, and web development using technologies such as Python, SQL, JavaScript, and APIs.",
    sec_stats:"By the numbers",
    sec_stats_sub:"Key metrics and technology breakdown across projects",
    stat_total:"Total Projects",
    stat_total_sub:"Documented showcases",
    stat_html:"HTML & CSS",
    stat_html_sub:"Semantics & Styles",
    stat_python:"Python & APIs",
    stat_python_sub:"Flask & Automation",
    stat_js:"JavaScript",
    stat_js_sub:"DOM Engine & Reactivity",
    stat_sql:"PostgreSQL / SQL",
    stat_sql_sub:"Relational Databases",
    sec_projects:"Projects",
    search_placeholder:"Search projects by title, technology (e.g. Python, SQL, JS, DOM, API)...",
    btn_clear_filters:"Clear filters",
    filter_all:"All",filter_all_status:"All statuses",btn_view:"View project",
    tab_gallery:"Gallery",tab_simulator:"Simulator",
    sim_btn_run:"▶ Run",sim_btn_reset:"Reset",
    status_live:"Live",status_wip:"In progress",status_study:"Study",
    empty_msg:"No projects found matching the current search criteria.",
    p1_title:"Lucilia's Notebook",p1_desc:"A digital class notebook covering full-stack development concepts. Includes notes on programming logic, Python, Git, GitHub, databases, and more. Built entirely on the front-end using HTML, CSS, and JavaScript, with no external dependencies.",
    p2_title:"Tic-Tac-Toe",p2_desc:"Interactive tic-tac-toe game built from scratch with plain HTML, CSS and JavaScript. Detects win, draw and allows restarting the match — no external dependencies.",
    p3_title:"Report Automation",p3_desc:"Script that collects data from Excel spreadsheets, processes indicators and automatically generates PDF reports on a schedule. Used internally at SENAI.",
    p4_title:"Luci College",p4_desc:"A full-stack web application for a rewards catalog at Luci College Technology Campus. Students accumulate points through academic activities and redeem them for exclusive products and services. Front-end built with HTML, CSS, and JavaScript, back-end powered by Python, and data persisted in PostgreSQL.",
    p5_title:"Task Manager App",p5_desc:"Task management app with drag-and-drop, status filters, localStorage persistence and dark mode. 100% Vanilla JS, no dependencies.",
    p6_title:"Weather App",p6_desc:"Weather forecast app consuming the OpenWeatherMap API, showing current conditions, 5-day forecast and real-time °C/°F unit toggle.",
    p7_title:"Finance Tracker",p7_desc:"Personal finance control app with expense categorization, interactive monthly spending charts and CSV export. Built with React + Recharts.",
    p8_title:"Kanban Board",p8_desc:"Kanban board with customizable columns, drag-and-drop between columns, color-coded priority tags and localStorage persistence. Inspired by Trello.",
    btn_no_repo:"No repository",btn_soon:"Coming soon",
    sec_highlights_label:"Architecture Highlights:",
    p1_h1:"<strong>Pure Front-end Architecture:</strong> Semantic HTML5, modern CSS3, and Vanilla JS with zero external dependencies.",
    p1_h2:"<strong>Structured Modules:</strong> In-depth content on logic, Python, relational SQL modeling, and Git version control.",
    p1_h3:"<strong>Performance & Accessibility:</strong> Instant load times, anchor-based navigation, and high readability.",
    p4_h1:"<strong>RESTful Python Back-end:</strong> Flask architecture processing academic rules and point validation.",
    p4_h2:"<strong>PostgreSQL Persistence:</strong> Relational data modeling for students, point statements, and redemption catalog.",
    p4_h3:"<strong>Responsive & Gamified UI:</strong> Interactive front-end featuring dynamic catalog and instant transaction feedback.",
    p2_h1:"<strong>Deterministic Game Engine:</strong> Instant verification of 8 win conditions and draw states.",
    p2_h2:"<strong>Dynamic DOM Manipulation:</strong> Seamless element updates without page reloads and pure CSS animations.",
    p2_h3:"<strong>In-Memory State Management:</strong> Turn-switching control and session score persistence.",
    footer_rights:"All rights reserved.",
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
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const v=T[l][el.getAttribute('data-i18n-placeholder')];
      if(v!==undefined) el.placeholder=v;
    });
    document.documentElement.lang=l==='pt'?'pt-BR':'en';
    document.title=l==='pt'?'Projetos — Lucilia Rosa':'Projects — Lucilia Rosa';
    document.getElementById('btn-pt').classList.toggle('active',l==='pt');
    document.getElementById('btn-en').classList.toggle('active',l==='en');
    document.body.classList.remove('lang-switching');
    filterProjects();
  },180);
}
if(lang==='en') setLang('en');

/* ─── FILTROS & PESQUISA ─── */

function handleProjectSearch() {
  const query = (document.getElementById('projectSearchInput')?.value || '').trim();
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.style.display = query.length > 0 ? 'inline-flex' : 'none';
  filterProjects();
}

function clearProjectSearch() {
  const input = document.getElementById('projectSearchInput');
  if (input) input.value = '';
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.style.display = 'none';
  filterProjects();
  if (input) input.focus();
}

function resetAllFilters() {
  const searchInput = document.getElementById('projectSearchInput');
  if (searchInput) searchInput.value = '';
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.style.display = 'none';

  document.querySelectorAll('.filter-btn[data-cat]').forEach(b => b.classList.remove('active'));
  document.querySelector('.filter-btn[data-cat="all"]')?.classList.add('active');

  document.querySelectorAll('.filter-btn[data-status]').forEach(b => b.classList.remove('active'));
  document.querySelector('.filter-btn[data-status="all"]')?.classList.add('active');

  document.querySelectorAll('.exec-stat-card').forEach(c => c.classList.remove('active-filter'));

  filterProjects();
}

// Filtro rápido clicando nos cards da seção "Em números"
function filterByStat(targetCat) {
  document.querySelectorAll('.exec-stat-card').forEach(c => c.classList.remove('active-filter'));
  const clickedCard = document.querySelector(`.exec-stat-card[data-stat-cat="${targetCat}"]`);
  if (clickedCard) clickedCard.classList.add('active-filter');

  const catBtn = document.querySelector(`.filter-btn[data-cat="${targetCat}"]`);
  if (catBtn) {
    document.querySelectorAll('.filter-btn[data-cat]').forEach(b => b.classList.remove('active'));
    catBtn.classList.add('active');
  }
  filterProjects();

  // Scroll suave até a seção de projetos
  const secEl = document.getElementById('projectsGrid');
  if (secEl) {
    secEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

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

// Aplica busca textual + filtro de categoria + filtro de status
function filterProjects(){
  const query = (document.getElementById('projectSearchInput')?.value || '').trim().toLowerCase();
  const cat = document.querySelector('.filter-btn[data-cat].active')?.getAttribute('data-cat') || 'all';
  const status = document.querySelector('.filter-btn[data-status].active')?.getAttribute('data-status') || 'all';

  const cards = document.querySelectorAll('.project-card');
  let visible = 0;
  const counts = { html:0, python:0, js:0, react:0 };

  cards.forEach(card => {
    const cardCat    = card.getAttribute('data-cat') || '';
    const cardStatus = (card.getAttribute('data-status') || '').split(' ');

    const titleText = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
    const descText = card.querySelector('.card-desc')?.textContent.toLowerCase() || '';
    const techsText = Array.from(card.querySelectorAll('.exp-tech-badge')).map(b => b.textContent.toLowerCase()).join(' ');
    const highlightsText = card.querySelector('.card-highlights')?.textContent.toLowerCase() || '';

    const matchQuery = !query || 
      titleText.includes(query) || 
      descText.includes(query) || 
      techsText.includes(query) || 
      highlightsText.includes(query);

    const matchCat = cat === 'all' || cardCat === cat;
    const matchStatus = status === 'all' || cardStatus.includes(status);

    const show = matchQuery && matchCat && matchStatus;
    card.classList.toggle('hidden', !show);

    if(show){
      visible++;
      if(counts[cardCat] !== undefined) counts[cardCat]++;
    }
  });

  // Atualiza Empty State
  const emptyEl = document.getElementById('emptyState');
  if (emptyEl) emptyEl.style.display = visible === 0 ? 'block' : 'none';

  // Atualiza Badge de Resultados
  const countBadge = document.getElementById('searchResultCount');
  if (countBadge) {
    if (lang === 'pt') {
      countBadge.textContent = visible === 1 ? '1 projeto encontrado' : `${visible} projetos encontrados`;
    } else {
      countBadge.textContent = visible === 1 ? '1 project found' : `${visible} projects found`;
    }
  }

  // Exibe/oculta botão "Limpar filtros"
  const resetBtn = document.getElementById('resetAllFiltersBtn');
  const hasFilterActive = query.length > 0 || cat !== 'all' || status !== 'all';
  if (resetBtn) resetBtn.style.display = hasFilterActive ? 'inline-flex' : 'none';

  // Atualiza Contadores da Seção "Em Números"
  const elTotal = document.getElementById('stat-total');
  const elHtml = document.getElementById('stat-html');
  const elPy = document.getElementById('stat-python');
  const elJs = document.getElementById('stat-js');
  const elReact = document.getElementById('stat-react');

  if (elTotal) elTotal.textContent = visible;
  if (elHtml) elHtml.textContent = counts.html;
  if (elPy) elPy.textContent = counts.python;
  if (elJs) elJs.textContent = counts.js;
  if (elReact) elReact.textContent = counts.react;
}

/* ─── STATS INICIAIS ─── */
(function buildStats(){
  const cards = document.querySelectorAll('.project-card');
  const elTotal = document.getElementById('stat-total');
  if (elTotal) elTotal.textContent = cards.length;
  const counts = {html:0,python:0,js:0,react:0};
  cards.forEach(c => {
    const k = c.getAttribute('data-cat');
    if(counts[k] !== undefined) counts[k]++;
  });
  if (document.getElementById('stat-html')) document.getElementById('stat-html').textContent = counts.html;
  if (document.getElementById('stat-python')) document.getElementById('stat-python').textContent = counts.python;
  if (document.getElementById('stat-js')) document.getElementById('stat-js').textContent = counts.js;
  if (document.getElementById('stat-react')) document.getElementById('stat-react').textContent = counts.react;
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

/* ─── CONTROLE DE MODOS: GALERIA VS SIMULADOR ─── */
function switchPreviewMode(btn, mode, simType) {
  const mediaWrap = btn.closest('.card-media-wrap');
  if (!mediaWrap) return;

  mediaWrap.querySelectorAll('.pm-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const carousel = mediaWrap.querySelector('.card-carousel');
  const simulator = mediaWrap.querySelector('.card-simulator');

  if (mode === 'gallery') {
    if (carousel) carousel.classList.remove('hidden');
    if (simulator) simulator.classList.remove('active');
  } else {
    if (carousel) carousel.classList.add('hidden');
    if (simulator) simulator.classList.add('active');

    if (simType === 'notebook') {
      const activeBtn = simulator.querySelector('.sim-pill-btn.active');
      if (activeBtn) switchNotebookLab('dom', activeBtn);
    } else if (simType === 'college') {
      updateCollegeDisplay();
    } else if (simType === 'tictactoe') {
      initTTT();
    }
  }
}

/* ─── SIMULADOR 1: LUCILIA'S NOTEBOOK (INTERACTIVE DOM, PYTHON & SQL) ─── */
let nbCounter = 0;

function switchNotebookLab(tab, btn) {
  const sim = document.getElementById('sim-notebook');
  if (!sim) return;

  sim.querySelectorAll('.sim-pill-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const vDom = document.getElementById('nbViewDom');
  const vPy = document.getElementById('nbViewPython');
  const vSql = document.getElementById('nbViewSql');

  if (vDom) vDom.style.display = tab === 'dom' ? 'flex' : 'none';
  if (vPy)  vPy.style.display  = tab === 'python' ? 'flex' : 'none';
  if (vSql) vSql.style.display = tab === 'sql' ? 'flex' : 'none';
}

function nbChangeCounter(delta) {
  nbCounter += delta;
  const numEl = document.getElementById('nbCounterVal');
  const logEl = document.getElementById('nbDomLog');
  if (numEl) numEl.textContent = nbCounter;
  if (logEl) {
    const time = new Date().toLocaleTimeString();
    logEl.textContent = `[${time}] Event: 'click' disparado no elemento #btn-calc\n` +
      `> Operação: estado anterior + (${delta}) = ${nbCounter}\n` +
      `> DOM Mutation: document.getElementById('nbCounterVal').innerText = ${nbCounter}\n` +
      `> Performance: 60fps | Zero layout-thrashing detectado.`;
  }
}

function nbResetCounter() {
  nbCounter = 0;
  const numEl = document.getElementById('nbCounterVal');
  const logEl = document.getElementById('nbDomLog');
  if (numEl) numEl.textContent = '0';
  if (logEl) {
    logEl.textContent = `> Contador resetado com sucesso para 0.\n> Estado limpo no escopo de execução Vanilla JS.`;
  }
}

function runNotebookPython() {
  const inputEl = document.getElementById('nbPyInput');
  const logEl = document.getElementById('nbPyLog');
  if (!logEl) return;

  const raw = inputEl ? inputEl.value : '8.5, 9.0, 7.5';
  const nums = raw.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));

  if (nums.length === 0) {
    logEl.textContent = `[ValueError] Insira ao menos um número válido separado por vírgula.`;
    return;
  }

  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  const avg = (sum / nums.length).toFixed(2);
  const status = avg >= 7.0 ? 'APROVADA COM EXCELÊNCIA 🚀' : 'EM RECUPERAÇÃO ⚠️';

  logEl.textContent = `// Execução Python Engine (Emulated Sandbox):
def calcular_media(notas: list[float]) -> float:
    return sum(notas) / len(notas)

> Entradas recebidas: [${nums.join(', ')}]
> Soma total: ${sum.toFixed(2)} | Qtd: ${nums.length}
> Média calculada: ${avg}
> Status Acadêmico: ${status}
> Tempo de execução: 1.4ms (Exit Code: 0)`;
}

function runNotebookSql() {
  const logEl = document.getElementById('nbSqlLog');
  if (!logEl) return;

  logEl.textContent = `> EXECUTING QUERY:
SELECT id, modulo, duracao_aulas, status
FROM notebook_curriculo
WHERE concluido = TRUE
ORDER BY id ASC;

RESULT SET (3 rows in 6.4ms):
+----+----------------------------------+-------+------------+
| ID | MÓDULO                           | AULAS | STATUS     |
+----+----------------------------------+-------+------------+
| 01 | HTML5 Semântico & Acessibilidade |    24 | Concluído  |
| 02 | CSS Moderno & Flex/Grid          |    32 | Concluído  |
| 03 | Vanilla JavaScript & DOM Engine  |    48 | Concluído  |
+----+----------------------------------+-------+------------+
> Integridade referencial OK: Schema normalizado.`;
}

/* ─── SIMULADOR 2: LUCI COLLEGE (PYTHON / FLASK / POSTGRESQL API) ─── */
let collegePoints = 1450;

function updateCollegeDisplay() {
  const disp = document.getElementById('collegePointsDisplay');
  if (disp) disp.textContent = collegePoints;
}

function collegeAddPoints(amount) {
  collegePoints += amount;
  updateCollegeDisplay();
  const out = document.getElementById('collegeSimOutput');
  if (out) {
    out.textContent = `> POST /api/v1/student/deposit-points HTTP/1.1
> Saldo recarregado com sucesso (+${amount} pts).
> Saldo atual da aluna Lucilia Rosa: ${collegePoints} pts.
> Transação bancária acadêmica concluída (200 OK).`;
  }
}

function collegeRedeemItem(itemName, cost) {
  const out = document.getElementById('collegeSimOutput');
  if (!out) return;

  if (collegePoints >= cost) {
    collegePoints -= cost;
    updateCollegeDisplay();
    const time = new Date().toLocaleTimeString();
    out.textContent = `[${time}] POST /api/v1/rewards/redeem HTTP/1.1 (Latency: 18ms)
Status: 200 OK — Resgate Concluído!

{
  "transaction_id": "TX-${Math.floor(10000 + Math.random() * 90000)}",
  "item": "${itemName}",
  "cost_deducted": ${cost},
  "current_balance": ${collegePoints},
  "student": "Lucilia Rosa"
}

> PostgreSQL Query Executada:
BEGIN;
UPDATE students SET points = ${collegePoints} WHERE student_id = 1042;
INSERT INTO redemptions (item_name, points_spent, created_at)
VALUES ('${itemName}', ${cost}, NOW());
COMMIT;`;
  } else {
    out.textContent = `[400 Bad Request] POST /api/v1/rewards/redeem
Status: Erro de Validação de Regra de Negócio (Python/Flask)

{
  "error": "INSUFFICIENT_FUNDS",
  "message": "Saldo insuficiente (${collegePoints} pts) para resgatar '${itemName}' (${cost} pts).",
  "missing_points": ${cost - collegePoints}
}
> Dica: Clique no botão [+ 300 pts] acima para recarregar seu saldo acadêmico!`;
  }
}

/* ─── SIMULADOR 3: JOGO DA VELHA (VANILLA JS / DOM ENGINE) ─── */
let tttBoard = ['', '', '', '', '', '', '', '', ''];
let tttCurrentTurn = 'X';
let tttGameOver = false;
let tttScores = { X: 0, O: 0, draw: 0 };

function initTTT() {
  const boardEl = document.getElementById('tttBoard');
  if (!boardEl) return;

  boardEl.innerHTML = '';
  tttBoard.forEach((cell, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ttt-cell';
    btn.dataset.index = idx;
    btn.textContent = cell;
    btn.addEventListener('click', () => handleTTTClick(idx));
    boardEl.appendChild(btn);
  });

  updateTTTStatus();
}

function handleTTTClick(index) {
  if (tttGameOver || tttBoard[index] !== '') return;

  tttBoard[index] = tttCurrentTurn;
  const boardEl = document.getElementById('tttBoard');
  const cells = boardEl ? boardEl.querySelectorAll('.ttt-cell') : [];
  if (cells[index]) {
    cells[index].textContent = tttCurrentTurn;
  }

  const winCombo = checkTTTWin();
  if (winCombo) {
    tttGameOver = true;
    winCombo.forEach(i => {
      if (cells[i]) cells[i].classList.add('win');
    });
    tttScores[tttCurrentTurn]++;
    updateTTTScoreBoard();
    const statusMsg = document.getElementById('tttTurnStatus');
    if (statusMsg) statusMsg.textContent = `🎉 Vitória de ${tttCurrentTurn}!`;
    return;
  }

  if (tttBoard.every(c => c !== '')) {
    tttGameOver = true;
    tttScores.draw++;
    updateTTTScoreBoard();
    const statusMsg = document.getElementById('tttTurnStatus');
    if (statusMsg) statusMsg.textContent = '🤝 Empate!';
    return;
  }

  tttCurrentTurn = tttCurrentTurn === 'X' ? 'O' : 'X';
  updateTTTStatus();
}

function checkTTTWin() {
  const wins = [
    [0,1,2], [3,4,5], [6,7,8], // linhas
    [0,3,6], [1,4,7], [2,5,8], // colunas
    [0,4,8], [2,4,6]          // diagonais
  ];
  for (const combo of wins) {
    const [a, b, c] = combo;
    if (tttBoard[a] && tttBoard[a] === tttBoard[b] && tttBoard[a] === tttBoard[c]) {
      return combo;
    }
  }
  return null;
}

function updateTTTStatus() {
  const statusMsg = document.getElementById('tttTurnStatus');
  if (statusMsg && !tttGameOver) {
    statusMsg.textContent = `Vez: Jogador ${tttCurrentTurn}`;
  }
}

function updateTTTScoreBoard() {
  const elX = document.getElementById('scoreX');
  const elO = document.getElementById('scoreO');
  const elD = document.getElementById('scoreDraw');
  if (elX) elX.textContent = tttScores.X;
  if (elO) elO.textContent = tttScores.O;
  if (elD) elD.textContent = tttScores.draw;
}

function resetTTT() {
  tttBoard = ['', '', '', '', '', '', '', '', ''];
  tttGameOver = false;
  tttCurrentTurn = 'X';
  const boardEl = document.getElementById('tttBoard');
  if (boardEl) {
    boardEl.querySelectorAll('.ttt-cell').forEach(c => {
      c.textContent = '';
      c.classList.remove('win');
    });
  }
  updateTTTStatus();
}

// Inicializar tabuleiros
document.addEventListener('DOMContentLoaded', () => {
  initTTT();
});