var lang = localStorage.getItem('nb_lang') || 'pt';

function setLang(l) {
  lang = l;
  localStorage.setItem('nb_lang', l);
  document.body.classList.add('lang-switching');
  setTimeout(function() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      const page = document.body.getAttribute('data-page');
      var v = T[l][el.getAttribute('data-i18n')];
      if (v !== undefined) el.innerHTML = v;
    });
    document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en';
    document.title = l === 'pt' ? 'Sobre Mim — Lucilia Rosa' : 'About Me — Lucilia Rosa';
    document.getElementById('btn-pt').classList.toggle('active', l === 'pt');
    document.getElementById('btn-en').classList.toggle('active', l === 'en');
    document.body.classList.remove('lang-switching');
  }, 180);
}

if (lang === 'en') setLang('en');

// ── FOTO DE PERFIL ──
var photoInput = document.getElementById('photoInput');
if (photoInput) {
  photoInput.addEventListener('change', function() {
    if (!this.files[0]) return;
    document.getElementById('photoFrame').innerHTML =
      '<img src="' + URL.createObjectURL(this.files[0]) + '" alt="Lucilia Rosa" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"/>';
  });
}

// ── FOTOS DA FAMÍLIA ──
function loadFamPhoto(n, input) {
  if (!input.files[0]) return;
  document.getElementById('famPhoto' + n).innerHTML =
    '<img src="' + URL.createObjectURL(input.files[0]) + '" alt="foto" class="fam-photo-img"/>';
}

// ── GALERIA ──
var lbCurrent = 0;

function openLightbox(n) {
  lbCurrent = n;
  var slot = document.querySelectorAll('.gal-slot')[n];
  var img = slot ? slot.querySelector('img') : null;
  document.getElementById('lb-img').src = img ? img.src : '';
  document.getElementById('lightbox').classList.add('open');
}

function closeLightbox(e) {
  if (!e || e.target === document.getElementById('lightbox') || (e.target && e.target.classList.contains('lb-close')))
    document.getElementById('lightbox').classList.remove('open');
}

function lbNav(dir, e) {
  if (e) e.stopPropagation();
  var total = document.querySelectorAll('.gal-slot').length;
  lbCurrent = ((lbCurrent + dir) + total) % total;
  openLightbox(lbCurrent);
}

document.addEventListener('keydown', function(e) {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'ArrowRight') lbNav(1, null);
  if (e.key === 'ArrowLeft')  lbNav(-1, null);
  if (e.key === 'Escape')     document.getElementById('lightbox').classList.remove('open');
});

// ── CONTADORES ANIMADOS ──
function animateCounter(id, target, suffix) {
  suffix = suffix || '';
  var el = document.getElementById(id);
  if (!el) return;
  var current = 0;
  var step = Math.ceil(target / 40);
  var timer = setInterval(function() {
    current = Math.min(current + step, target);
    el.textContent = current + suffix;
    if (current >= target) clearInterval(timer);
  }, 35);
}

function startCounters() {
  animateCounter('cnt-years', 5, '+');
  animateCounter('cnt-companies', 3, '');
  animateCounter('cnt-edu', 4, '');
  animateCounter('cnt-skills', 15, '+');
}

// Dispara após 800ms — tempo suficiente para o setLang inicial terminar
setTimeout(startCounters, 800);

// ── VOLTAR AO TOPO ──
window.addEventListener('scroll', function() {
  var btn = document.getElementById('backToTop');
  if (btn) btn.classList.toggle('visible', window.scrollY > 400);
});

// ── PROJETOS DA EXPERIÊNCIA ──
function toggleExpProjects(id, btn) {
  var panel = document.getElementById(id);
  var isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  var arrow = btn.querySelector('span:last-child');
  if (arrow) arrow.textContent = isOpen ? '▾' : '▴';
}

// ── DETALHES DA FORMAÇÃO ──
function toggleEduDetails(id, btn) {
  var panel = document.getElementById(id);
  var isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  var arrow = btn.querySelector('span:last-child');
  if (arrow) arrow.textContent = isOpen ? '▾' : '▴';
}

// ── DROPDOWN NAV ──
function toggleNavDropdown() {
  var btn   = document.getElementById('navDropdownBtn');
  var panel = document.getElementById('navDropdownPanel');
  var open  = panel.classList.contains('open');
  btn.classList.toggle('open', !open);
  panel.classList.toggle('open', !open);
}

document.addEventListener('click', function(e) {
  var dd = document.getElementById('navDropdown');
  if (dd && !dd.contains(e.target)) {
    var b = document.getElementById('navDropdownBtn');
    var p = document.getElementById('navDropdownPanel');
    if (b) b.classList.remove('open');
    if (p) p.classList.remove('open');
  }
});

// ── GERADOR DE CV ──
function downloadCV(l) {
  var isPT = l === 'pt';
  var html = isPT ? generateCVPT() : generateCVEN();
  var blob = new Blob([html], {type:'text/html;charset=utf-8'});
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = isPT ? 'curriculo-lucilia-rosa-pt.html' : 'resume-lucilia-rosa-en.html';
  a.click();
  URL.revokeObjectURL(url);
}

function generateCVPT() {
  var s = [];
  s.push('<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"/>');
  s.push('<title>Curriculo Lucilia Rosa</title>');
  s.push('<style>*{box-sizing:border-box;margin:0;padding:0;}body{font-family:Arial,sans-serif;color:#1c1917;background:#fff;max-width:800px;margin:0 auto;padding:2rem;}h1{font-size:26px;font-weight:700;margin-bottom:4px;}.subtitle{font-size:14px;color:#78716c;margin-bottom:12px;}.contacts{font-size:12px;color:#44403c;display:flex;flex-wrap:wrap;gap:10px;margin-bottom:20px;border-bottom:2px solid #1c1917;padding-bottom:12px;}h2{font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;border-bottom:1px solid #e7e5e4;padding-bottom:4px;margin:18px 0 10px;}.exp-block{margin-bottom:14px;}.exp-header{display:flex;justify-content:space-between;align-items:flex-start;}.exp-role{font-size:13.5px;font-weight:700;}.exp-co{font-size:12.5px;color:#2563a8;font-weight:600;}.exp-period{font-size:11px;color:#78716c;white-space:nowrap;}ul{list-style:disc;padding-left:18px;margin-top:6px;}li{font-size:12px;color:#44403c;line-height:1.6;margin-bottom:2px;}.skills-row{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px;}.skill{font-size:11px;background:#f3efe8;color:#44403c;padding:2px 8px;border-radius:4px;}.edu-row{display:flex;justify-content:space-between;margin-bottom:8px;}.edu-deg{font-size:13px;font-weight:700;}.edu-inst{font-size:12px;color:#2563a8;}.edu-per{font-size:11px;color:#78716c;}@media print{body{padding:1rem;}}</sty'+'le></head><body>');
  s.push('<h1>Lucilia Rosa</h1><p class="subtitle">Fullstack &amp; Automation Developer &middot; São Paulo, Brasil</p>');
  s.push('<div class="contacts"><span>lucilia.passos.rosa@outlook.com</span><span>linkedin.com/in/lucilia-rosa</span><span>github.com/luciliarosa</span><span>São Paulo, SP &mdash; Brasil</span></div>');
  s.push('<h2>Resumo</h2><p style="font-size:12.5px;color:#44403c;line-height:1.7;">Desenvolvedora Fullstack &amp; Automation com mais de 5 anos de experiência em desenvolvimento de sistemas, automação e suporte técnico. Especialista em Python, SQL e Microsoft Power Platform.</p>');
  s.push('<h2>Experiência Profissional</h2>');
  s.push('<div class="exp-block"><div class="exp-header"><div><p class="exp-role">Systems Developer</p><p class="exp-co">SENAI Brás &mdash; Full-time</p></div><p class="exp-period">Jul 2025 &ndash; Presente</p></div><ul><li>Automação Python que lê Excel, envia para IA analisar e encaminha por e-mail — 1 dia de trabalho para menos de 1 hora</li><li>Automação web com Playwright para download automático de pesquisas de satisfação para o Power BI</li><li>Desenvolvimento e manutenção de dashboards com Power BI</li><li>Criação de workflows com Power Automate</li><li>Modelagem e manipulação de dados com SQL</li></ul><div class="skills-row"><span class="skill">Python</span><span class="skill">SQL</span><span class="skill">Power BI</span><span class="skill">Power Automate</span><span class="skill">Playwright</span></div></div>');
  s.push('<div class="exp-block"><div class="exp-header"><div><p class="exp-role">Application Support Analyst</p><p class="exp-co">Vertem &mdash; Full-time</p></div><p class="exp-period">Mar 2022 &ndash; Jul 2025</p></div><ul><li>Análise e resolução de problemas em plataforma de troca de pontos</li><li>Scripts Python para automação de relatórios diários e semanais</li><li>Ajustes de frontend com HTML, CSS e JavaScript</li><li>Documentação técnica e treinamentos</li><li>Participação em salas de crise para resolução de incidentes críticos</li></ul><div class="skills-row"><span class="skill">SQL</span><span class="skill">HTML</span><span class="skill">CSS</span><span class="skill">JavaScript</span><span class="skill">Python</span></div></div>');
  s.push('<div class="exp-block"><div class="exp-header"><div><p class="exp-role">Computer Network Technician</p><p class="exp-co">Telium Networks &mdash; Full-time</p></div><p class="exp-period">Abr 2018 &ndash; Mar 2022</p></div><ul><li>NOC com monitoramento de rádios wireless, backbones e telefonia</li><li>Suporte remoto a técnicos em campo para fibra ótica</li><li>Suporte técnico a clientes de internet dedicada</li></ul><div class="skills-row"><span class="skill">TCP/IP</span><span class="skill">Cisco</span><span class="skill">MikroTik</span><span class="skill">Fibra Óptica</span><span class="skill">NOC</span></div></div>');
  s.push('<h2>Habilidades Técnicas</h2><div class="skills-row"><span class="skill">Python</span><span class="skill">JavaScript</span><span class="skill">React</span><span class="skill">HTML</span><span class="skill">CSS</span><span class="skill">SQL Server</span><span class="skill">MySQL</span><span class="skill">Power BI</span><span class="skill">Power Automate</span><span class="skill">Power Apps</span><span class="skill">Git</span><span class="skill">GitHub</span><span class="skill">APIs REST</span><span class="skill">Playwright</span></div>');
  s.push('<h2>Formação Acadêmica</h2>');
  s.push('<div class="edu-row"><div><p class="edu-deg">Pós-Graduação &mdash; Desenvolvimento Full Stack</p><p class="edu-inst">Descomplica</p></div><p class="edu-per">Mai 2023 &ndash; Out 2024</p></div>');
  s.push('<div class="edu-row"><div><p class="edu-deg">Bacharelado em Análise e Desenvolvimento de Sistemas</p><p class="edu-inst">FATEC Carapicuíba</p></div><p class="edu-per">Fev 2022 &ndash; Dez 2024</p></div>');
  s.push('<div class="edu-row"><div><p class="edu-deg">Bacharelado em Gestão da Tecnologia da Informação</p><p class="edu-inst">FATEC Barueri</p></div><p class="edu-per">Fev 2015 &ndash; Dez 2017</p></div>');
  s.push('<div class="edu-row"><div><p class="edu-deg">Técnico em Redes de Computadores</p><p class="edu-inst">SENAI Jandira</p></div><p class="edu-per">Jul 2012 &ndash; Jul 2014</p></div>');
  s.push('<h2>Idiomas</h2><div class="skills-row"><span class="skill">Português &mdash; Nativo</span><span class="skill">Inglês &mdash; Intermediário</span></div>');
  s.push('</bo'+'dy></html>');
  return s.join('\n');
}

function generateCVEN() {
  var s = [];
  s.push('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/>');
  s.push('<title>Resume Lucilia Rosa</title>');
  s.push('<style>*{box-sizing:border-box;margin:0;padding:0;}body{font-family:Arial,sans-serif;color:#1c1917;background:#fff;max-width:800px;margin:0 auto;padding:2rem;}h1{font-size:26px;font-weight:700;margin-bottom:2px;}.subtitle{font-size:13px;color:#78716c;margin-bottom:4px;}.contacts{font-size:12px;color:#44403c;display:flex;flex-wrap:wrap;gap:12px;margin-bottom:6px;}.divider{border:none;border-top:2px solid #1c1917;margin:10px 0 16px;}h2{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;border-bottom:1px solid #e7e5e4;padding-bottom:3px;margin:16px 0 8px;}.summary{font-size:12.5px;color:#44403c;line-height:1.65;}.exp-block{margin-bottom:13px;}.exp-header{display:flex;justify-content:space-between;align-items:baseline;gap:8px;}.exp-role{font-size:13px;font-weight:700;}.exp-co{font-size:12px;color:#44403c;font-style:italic;}.exp-period{font-size:11px;color:#78716c;white-space:nowrap;flex-shrink:0;}ul{list-style:disc;padding-left:16px;margin-top:5px;}li{font-size:12px;color:#44403c;line-height:1.55;margin-bottom:2px;}.skills-section{display:grid;grid-template-columns:130px 1fr;gap:4px 12px;margin-top:4px;}.skill-cat{font-size:12px;font-weight:700;}.skill-val{font-size:12px;color:#44403c;}.edu-block{margin-bottom:8px;}.edu-header{display:flex;justify-content:space-between;align-items:baseline;}.edu-deg{font-size:13px;font-weight:700;}.edu-inst{font-size:12px;color:#44403c;font-style:italic;}.edu-per{font-size:11px;color:#78716c;white-space:nowrap;}@media print{body{padding:1rem;}}</sty'+'le></head><body>');
  s.push('<h1>Lucilia Rosa</h1><p class="subtitle">Fullstack &amp; Automation Developer</p>');
  s.push('<div class="contacts"><span>lucilia.passos.rosa@outlook.com</span><span>linkedin.com/in/lucilia-rosa</span><span>github.com/luciliarosa</span><span>São Paulo, Brazil (Open to Canada)</span></div>');
  s.push('<hr class="divider"/><h2>Professional Summary</h2>');
  s.push('<p class="summary">Results-driven Fullstack &amp; Automation Developer with 5+ years of experience in systems development, process automation, and technical support. Proficient in Python, SQL, and Microsoft Power Platform. One automation reduced a full day of work to under one hour. Seeking opportunities in Canada.</p>');
  s.push('<h2>Work Experience</h2>');
  s.push('<div class="exp-block"><div class="exp-header"><div><p class="exp-role">Systems Developer</p><p class="exp-co">SENAI Bras &middot; São Paulo, Brazil</p></div><p class="exp-period">Jul 2025 &ndash; Present</p></div><ul><li>Developed Python automation that reads Excel, sends to AI for analysis, emails results — reducing a full day to under 1 hour</li><li>Built Playwright web automation to download surveys and feed Power BI dashboards automatically</li><li>Designed and maintained Power BI dashboards for educational data monitoring</li><li>Created Power Automate workflows to streamline internal processes</li><li>Modeled and queried relational databases using SQL</li></ul></div>');
  s.push('<div class="exp-block"><div class="exp-header"><div><p class="exp-role">Application Support Analyst</p><p class="exp-co">Vertem &middot; São Paulo, Brazil</p></div><p class="exp-period">Mar 2022 &ndash; Jul 2025</p></div><ul><li>Diagnosed and resolved platform issues for a loyalty and rewards system</li><li>Developed Python scripts to automate daily and weekly report generation</li><li>Performed frontend maintenance using HTML, CSS, and JavaScript</li><li>Participated in war rooms for critical incident response</li><li>Authored technical documentation and delivered training to teams</li></ul></div>');
  s.push('<div class="exp-block"><div class="exp-header"><div><p class="exp-role">Computer Network Technician (NOC)</p><p class="exp-co">Telium Networks &middot; São Paulo, Brazil</p></div><p class="exp-period">Apr 2018 &ndash; Mar 2022</p></div><ul><li>Operated NOC monitoring wireless radios, backbones, and telephony equipment</li><li>Supported field technicians remotely in identifying fiber optic breaks</li><li>Provided technical support to dedicated internet clients</li></ul></div>');
  s.push('<h2>Technical Skills</h2><div class="skills-section"><span class="skill-cat">Languages</span><span class="skill-val">Python, JavaScript, HTML, CSS</span><span class="skill-cat">Frameworks</span><span class="skill-val">React, Node.js, Playwright</span><span class="skill-cat">Databases</span><span class="skill-val">SQL Server, MySQL</span><span class="skill-cat">Platforms</span><span class="skill-val">Power BI, Power Automate, Power Apps, SharePoint</span><span class="skill-cat">Tools</span><span class="skill-val">Git, GitHub, Postman, VS Code, Jira</span></div>');
  s.push('<h2>Education</h2>');
  s.push('<div class="edu-block"><div class="edu-header"><div><p class="edu-deg">Postgraduate Certificate &mdash; Full Stack Development</p><p class="edu-inst">Descomplica</p></div><p class="edu-per">May 2023 &ndash; Oct 2024</p></div></div>');
  s.push('<div class="edu-block"><div class="edu-header"><div><p class="edu-deg">Bachelor\'s Degree &mdash; Systems Analysis and Development</p><p class="edu-inst">FATEC Carapicuiba (Public, selective entry)</p></div><p class="edu-per">Feb 2022 &ndash; Dec 2024</p></div></div>');
  s.push('<div class="edu-block"><div class="edu-header"><div><p class="edu-deg">Bachelor\'s Degree &mdash; Information Technology Management</p><p class="edu-inst">FATEC Barueri (Public, selective entry)</p></div><p class="edu-per">Feb 2015 &ndash; Dec 2017</p></div></div>');
  s.push('<div class="edu-block"><div class="edu-header"><div><p class="edu-deg">Technical Diploma &mdash; Computer Networks</p><p class="edu-inst">SENAI Jandira</p></div><p class="edu-per">Jul 2012 &ndash; Jul 2014</p></div></div>');
  s.push('<h2>Languages</h2><div class="skills-section"><span class="skill-cat">Portuguese</span><span class="skill-val">Native</span><span class="skill-cat">English</span><span class="skill-val">Intermediate &middot; Exchange at SGIC, Vancouver, Canada (2019)</span></div>');
  s.push('</bo'+'dy></html>');
  return s.join('\n');
}

var T = {
    pt: {
    nav_home:"Home", nav_about:"Sobre mim", nav_projects:"Projetos",
    nav_dd_about:"Sobre mim", nav_dd_about_desc:"Trajetória, habilidades e história",
    nav_dd_projects:"Projetos", nav_dd_projects_desc:"HTML, Python, JavaScript e React",
    nav_dd_areas:"Frontend, Backend &amp; Fullstack", nav_dd_areas_desc:"O que é cada área e como se conectam",
    eyebrow:"// sobre mim",
    hero_role:"Fullstack &amp; Automation Developer · São Paulo, Brasil",
    tag_exp:"+5 anos de experiência", tag_wit:"Mulher na Tech", tag_canada:"Open to Canada",
    cnt_years:"anos de experiência", cnt_companies:"empresas", cnt_edu:"formações", cnt_skills:"tecnologias",
    btn_cv_pt:"Baixar Currículo (PT)", btn_cv_en:"Download Resume (EN)",
    sec_about:"Quem sou eu",
    about_p1:'Sou <strong>Fullstack &amp; Automation Developer</strong> com mais de 5 anos de experiência em desenvolvimento de sistemas, automação e suporte técnico. Tenho uma trajetória que começou nas redes de computadores e foi evoluindo naturalmente para o desenvolvimento de software — sempre movida pela curiosidade e pela vontade de resolver problemas reais com tecnologia.',
    about_p2:'Trabalho com <strong>Python, SQL e Microsoft Power Platform</strong> para construir automações, dashboards e soluções orientadas a dados. Tenho uma base sólida em frontend e uma visão full stack que me permite enxergar o projeto como um todo, do banco de dados à interface.',
    about_p3:'Sou de <strong>São Paulo</strong>, tenho o sonho de morar no <strong>Canadá</strong> — onde já fiz intercâmbio — e acredito que tecnologia é muito mais do que código: é <em>autonomia, liberdade e possibilidade</em>.',
    sec_wit:"Mulher na tecnologia", wit_title:"💜 Para as que ainda estão chegando",
    wit_p1:"Entrar na área de tecnologia sendo mulher nunca foi o caminho mais fácil. Desde o Técnico em Redes no SENAI até hoje como desenvolvedora, eu aprendi que o lugar da gente na tech não é uma concessão — é uma conquista que se reconstrói todo dia.",
    wit_p2:"Em anos de mercado, aprendi que <strong>a nossa presença muda a forma como a tecnologia é feita</strong>. Trazemos perspectivas diferentes, questionamos o óbvio e construímos soluções mais humanas. Não somos a exceção — somos parte essencial desse ecossistema.",
    wit_p3:"Se você está começando agora, saiba: vai ter dias difíceis, momentos de síndrome da impostora, projetos que parecem impossíveis. Mas cada bug resolvido, cada script que funciona, cada deploy bem-sucedido é prova de que você pertence aqui. <strong>Você pertence aqui.</strong>",
    sec_lupus:"Tecnologia e saúde — minha história com o lúpus", lupus_title:"🎗️ Quando a tecnologia se torna medicina",
    lupus_p1:"Tenho <strong>lúpus</strong> — uma doença autoimune crônica que afeta o corpo de formas imprevisíveis. Dias bons e dias ruins. Crises e remissões. Uma convivência que exige adaptação constante e muita escuta do próprio corpo.",
    lupus_p2:"A tecnologia entrou na minha vida como ferramenta de trabalho, mas se tornou algo muito maior: <strong>uma forma de ter controle onde o controle é escasso</strong>. Quando o corpo não coopera, o trabalho remoto me permite contribuir sem me expor. Quando a energia é limitada, a automação que construo poupa esforço — meu e de toda a equipe.",
    lupus_p3:"Aprender a programar durante períodos de crise me ensinou algo que nenhuma faculdade ensina: <strong>a paciência com o processo</strong>. Um bug por vez. Uma linha de código por vez. Às vezes um dia inteiro pra entender um conceito — e tudo bem. O progresso não precisa ser linear para ser real.",
    lupus_p4:"O lúpus me ensinou a priorizar o que importa, a pedir ajuda, a celebrar pequenas vitórias. E curiosamente, essas são exatamente as habilidades que fazem uma boa desenvolvedora.",
    lupus_quote:'"A tecnologia me deu algo que o lúpus tentou tirar: a sensação de que sou capaz."',
    sec_family:"Meu porto seguro",
    fam_vini:"Meu noivo e companheiro de vida. O primeiro a comemorar cada conquista e a segurar a mão nos dias difíceis.",
    fam_ragnar:"O corajoso. Tem o nome de um viking e atitudes de um rei. Presença constante nos dias de home office.",
    fam_luke:"O mais carinhoso. May the force be with you — e com o Luke, a força da fofura é imbatível.",
    fam_mae:"Minha mãe, exemplo de cuidado e coragem. Minha irmã, minha melhor amiga de vida. Parceira de risadas e segredos.",
    sec_timeline:"Trajetória", tl_present:"Presente",
    tl1_desc:"Python, Power BI, Power Automate — automações e dashboards para dados educacionais.",
    tl_pos_title:"Pós-Graduação — Desenvolvimento Full Stack",
    tl_pos_desc:"Frontend, Backend, React, Node.js, AWS Cloud e banco de dados.",
    tl2_desc:"Suporte a plataformas, ajustes de frontend, SQL, documentação técnica e treinamentos.",
    tl_ads_title:"Bacharelado em Análise e Desenvolvimento de Sistemas",
    tl_ads_desc:"Engenharia de software, POO, banco de dados, estrutura de dados e segurança da informação.",
    tl3_desc:"NOC, monitoramento de infraestrutura, suporte técnico a clientes e operadores em campo.",
    tl_gti_title:"Bacharelado em Gestão da Tecnologia da Informação",
    tl_gti_desc:"Gestão de TI, governança, infraestrutura, sistemas de informação e planejamento estratégico.",
    tl4_title:"Técnico em Redes de Computadores",
    tl4_desc:"Cabeamento, roteadores, switches, fibra óptica — onde tudo começou.",
    exp1_role:"Desenvolvedor de Sistemas", exp1_period:"Jul 2025 – Presente",
    exp1_li1:"Desenvolvimento e manutenção de dashboards com Power BI",
    exp1_li2:"Scripts de automação em Python para processamento de dados",
    exp1_li3:"Modelagem e manipulação de dados com SQL",
    exp1_li4:"Criação de workflows com Power Automate",
    exp1_li5:"Contribuição para iniciativas de cultura de dados",
    exp2_role:"Analista de Sustentação", exp2_period:"Mar 2022 – Jul 2025",
    exp2_li1:"Análise e resolução de problemas em plataformas e sistemas",
    exp2_li2:"Ajustes de frontend com HTML, CSS e JavaScript",
    exp2_li3:"Análise de banco de dados e manipulação com SQL",
    exp2_li4:"Produção e manutenção de documentação técnica",
    exp2_li5:"Treinamento de equipes internas e novos colaboradores",
    exp3_role:"Técnico em Redes de Computadores",
    exp3_li1:"Diagnóstico e resolução de problemas de infraestrutura de rede",
    exp3_li2:"Monitoramento de ativos: rádios wireless, backbones e equipamentos de telefonia",
    exp3_li3:"Suporte técnico a clientes de internet dedicada e operadores em campo",
    exp3_li4:"Gerenciamento de acesso e infraestrutura em data center",
    btn_proj:"Ver projetos desenvolvidos",
    senai_p1_title:"Automação de análise com IA",
    senai_p1_desc:"Script Python que lê uma planilha Excel com dados, organiza as informações, envia para uma IA analisar e encaminha o resultado por e-mail aos responsáveis. O que levava 1 dia de trabalho passou a ser feito em menos de 1 hora.",
    senai_p2_title:"Automação com Playwright",
    senai_p2_desc:"Automação web com Playwright que acessa um portal de pesquisas de satisfação de alunos, faz o download automático dos relatórios e os encaminha para o Power BI — eliminando o processo manual diário.",
    vertem_p1_title:"Documentação técnica e treinamentos",
    vertem_p1_desc:"Criação de documentação técnica completa de ferramentas e procedimentos internos. Condução de treinamentos para novos colaboradores e equipes de outros setores.",
    vertem_p2_title:"Automação de relatórios",
    vertem_p2_desc:"Scripts Python para automatizar a geração de relatórios diários e semanais que antes eram feitos manualmente — reduzindo erros e liberando tempo da equipe.",
    vertem_p3_title:"Gestão de crises",
    vertem_p3_desc:"Participação ativa em salas de crise para resolução de incidentes críticos em produção. Experiência com diagnóstico rápido e comunicação sob pressão.",
    telium_p1_title:"Mapeamento de infraestrutura",
    telium_p1_desc:"Projeto para mapear todos os ativos de rede da empresa — identificando equipamentos que precisavam de manutenção ou substituição. Iniciado a partir de uma exigência de padronização da ENEL.",
    telium_p2_title:"Operação NOC",
    telium_p2_desc:"Monitoramento contínuo de todos os ativos da empresa e suporte remoto a técnicos em campo para identificação de rompimentos de fibra ótica.",
    sec_skills:"Habilidades técnicas", sk_lang:"Linguagens &amp; Frameworks", sk_auto:"Automação &amp; Plataformas",
    sk_db:"Banco de Dados", sk_tools:"Ferramentas", sk_web:"Web &amp; Sistemas",
    sk_erp:"ERP Systems", sk_int:"System Integration", sk_doc:"Documentation", sk_web_maint:"Web Maintenance",
    sec_edu:"Formação acadêmica",
    edu1_deg:"Pós-Graduação — Desenvolvimento Full Stack", edu1_per:"Mai 2023 – Out 2024",
    edu2_deg:"Bacharelado em Análise e Desenvolvimento de Sistemas",
    edu3_deg:"Bacharelado em Gestão da Tecnologia da Informação",
    edu4_deg:"Técnico em Redes de Computadores",
    btn_edu:"Ver grade e ênfases", btn_cert:"Baixar certificado",
    edu1_focus_title:"Ênfase do curso",
    edu1_desc:"Especialização focada em formação prática full stack — do frontend com HTML, CSS, JavaScript e React até o backend com Node.js, estratégias de banco de dados e serviços de cloud na AWS.",
    edu1_highlight:"<strong>Destaque:</strong> curso 100% online com metodologia orientada ao mercado, microcertificados por módulo e acesso a ferramentas reais como AWS, GitHub e bancos de dados relacionais.",
    edu2_focus_title:"Ênfase do curso",
    edu2_desc:"Tecnologia em Análise e Desenvolvimento de Sistemas com foco em desenvolvimento de software completo — da lógica de programação e estruturas de dados até engenharia de software, banco de dados, redes e segurança.",
    edu2_highlight:"<strong>Destaque:</strong> instituição pública gratuita com ingresso via vestibular do Centro Paula Souza (CPS). Formação tecnológica reconhecida pelo MEC com forte ênfase prática e mercado de trabalho.",
    edu3_focus_title:"Ênfase do curso",
    edu3_desc:"Curso com visão híbrida entre gestão e tecnologia — abrangendo tanto a parte técnica quanto a gestão empresarial (planejamento estratégico, governança de TI, gestão de equipes, projetos e finanças).",
    edu3_highlight:"<strong>Destaque:</strong> também ofertado pela FATEC com ingresso via vestibular do CPS. Este curso foi o ponto de partida da jornada na área de tecnologia — combinando visão técnica e gerencial.",
    edu4_focus_title:"Ênfase do curso",
    edu4_desc:"Formação técnica focada em implantação, manutenção e administração de redes de computadores — desde montagem de hardware e cabeamento estruturado até configuração de roteadores, switches, firewalls e redes wireless.",
    edu4_highlight:"<strong>Destaque:</strong> o SENAI também tem ingresso seletivo e é referência nacional em educação profissional industrial. Este foi o início de tudo — onde o interesse por tecnologia virou carreira.",
    sec_exchange:"🇨🇦 Intercâmbio em Vancouver", exc_title:"✈️ Um mês no Canadá — julho de 2019",
    exc_p1:'Em julho de 2019 realizei um dos maiores sonhos da minha vida: fiz um intercâmbio de um mês em <strong>Vancouver, Canadá</strong>. Estudei inglês em período integral na <strong>SGIC (St. George International College)</strong>, uma das escolas mais completas da cidade, e mergulhei de cabeça em uma nova cultura, um novo idioma e uma nova versão de mim mesma.',
    exc_p2:'E o melhor: <strong>passei meu aniversário lá</strong>. No dia 4 de julho, a família anfitriã preparou uma festinha especial com bolo e uma mistura de comidas brasileiras e canadenses — um presente que nunca vou esquecer.',
    exc_p3:'Durante esse mês, explorei lugares incríveis: <strong>Whistler</strong>, com suas montanhas de tirar o fôlego, o animado <strong>Lonsdale Quay</strong>, o lindo <strong>Stanley Park</strong> à beira-mar, e o tranquilo <strong>Joffre Lakes</strong> com seus lagos de um azul impossível.',
    exc_gallery_title:"Memórias em fotos",
    sec_lang:"Idiomas", lang_pt_name:"Português", lang_pt_level:"Nativo",
    lang_en_name:"Inglês", lang_en_level:"Inglês Intermediário",
    lang_en_note:"Intercâmbio no St. George International College, Vancouver, Canadá — Jul 2019",
    lang_toeic_label:"Teste oficial — TOEIC 2024",
    lang_toeic_score:"Pontos no TOEIC",
    lang_toeic_note:"Em evolução constante",
    lang_toeic_btn:"Baixar certificado TOEIC",
  },
  en: {
    nav_home:"Home", nav_about:"About me", nav_projects:"Projects",
    nav_dd_about:"About me", nav_dd_about_desc:"Background, skills and story",
    nav_dd_projects:"Projects", nav_dd_projects_desc:"HTML, Python, JavaScript and React",
    nav_dd_areas:"Frontend, Backend &amp; Fullstack", nav_dd_areas_desc:"What each area is and how they connect",
    eyebrow:"// about me",
    hero_role:"Fullstack &amp; Automation Developer · São Paulo, Brazil",
    tag_exp:"+5 years of experience", tag_wit:"Woman in Tech", tag_canada:"Open to Canada",
    cnt_years:"years of experience", cnt_companies:"companies", cnt_edu:"degrees", cnt_skills:"technologies",
    btn_cv_pt:"Download Currículo (PT)", btn_cv_en:"Download Resume (EN)",
    sec_about:"Who I am",
    about_p1:'I\'m a <strong>Fullstack &amp; Automation Developer</strong> with over 5 years of experience in systems development, automation, and technical support. My journey started in computer networks and naturally evolved into software development — always driven by curiosity and the desire to solve real-world problems with technology.',
    about_p2:'I work with <strong>Python, SQL and Microsoft Power Platform</strong> to build automations, dashboards and data-driven solutions. I have a solid frontend foundation and a full stack mindset that allows me to see the whole picture, from database to interface.',
    about_p3:'I\'m from <strong>São Paulo</strong>, dream of living in <strong>Canada</strong> — where I\'ve already done an exchange program — and I believe technology is much more than code: it\'s <em>autonomy, freedom and possibility</em>.',
    sec_wit:"Woman in technology", wit_title:"💜 For those still on their way",
    wit_p1:"Entering the tech industry as a woman was never the easiest path. From my Computer Networks degree at SENAI to working as a developer today, I learned that our place in tech is not a concession — it's a conquest rebuilt every single day.",
    wit_p2:"After years in the industry, I've learned that <strong>our presence changes how technology is made</strong>. We bring different perspectives, question the obvious, and build more human solutions. We're not the exception — we're an essential part of this ecosystem.",
    wit_p3:"If you're just starting out, know this: there will be hard days, imposter syndrome moments, projects that seem impossible. But every bug solved, every script that works, every successful deploy is proof that you belong here. <strong>You belong here.</strong>",
    sec_lupus:"Technology and health — my story with lupus", lupus_title:"🎗️ When technology becomes medicine",
    lupus_p1:"I have <strong>lupus</strong> — a chronic autoimmune disease that affects the body in unpredictable ways. Good days and bad days. Flares and remissions. A coexistence that demands constant adaptation and deep listening to your own body.",
    lupus_p2:"Technology came into my life as a work tool, but became something much greater: <strong>a way to have control where control is scarce</strong>. When my body doesn't cooperate, remote work lets me contribute without overexposing myself. When energy is limited, the automation I build saves effort — mine and the whole team's.",
    lupus_p3:"Learning to code during crisis periods taught me something no university teaches: <strong>patience with the process</strong>. One bug at a time. One line of code at a time. Sometimes a whole day just to understand one concept — and that's okay. Progress doesn't have to be linear to be real.",
    lupus_p4:"Lupus taught me to prioritize what matters, to ask for help, to celebrate small victories. And curiously, those are exactly the skills that make a great developer.",
    lupus_quote:'"Technology gave me something lupus tried to take away: the feeling that I am capable."',
    sec_family:"My safe haven",
    fam_vini:"My fiancé and life partner. The first to celebrate every achievement and to hold my hand on the hard days.",
    fam_ragnar:"The brave one. Named after a viking, acts like a king. A constant presence during home office days.",
    fam_luke:"The most affectionate. May the force be with you — and with Luke, the force of cuteness is unbeatable.",
    fam_mae:"My mother, an example of care and courage. My sister, my best friend for life. Partner in laughter and secrets.",
    sec_timeline:"Career timeline", tl_present:"Present",
    tl1_desc:"Python, Power BI, Power Automate — automations and dashboards for educational data.",
    tl_pos_title:"Postgraduate Certificate — Full Stack Development",
    tl_pos_desc:"Frontend, Backend, React, Node.js, AWS Cloud and databases.",
    tl2_desc:"Platform support, frontend fixes, SQL, technical documentation and training.",
    tl_ads_title:"Bachelor's Degree — Systems Analysis and Development",
    tl_ads_desc:"Software engineering, OOP, databases, data structures and information security.",
    tl3_desc:"NOC, infrastructure monitoring, technical support for clients and field operators.",
    tl_gti_title:"Bachelor's Degree — Information Technology Management",
    tl_gti_desc:"IT management, governance, infrastructure, information systems and strategic planning.",
    tl4_title:"Technical Degree — Computer Networks",
    tl4_desc:"Cabling, routers, switches, fiber optics — where it all started.",
    exp1_role:"Systems Developer", exp1_period:"Jul 2025 – Present",
    exp1_li1:"Developed and maintained dashboards using Power BI",
    exp1_li2:"Built Python automation scripts for data processing and operational tasks",
    exp1_li3:"Modeled and manipulated data using SQL",
    exp1_li4:"Created workflows and automations with Power Automate",
    exp1_li5:"Contributed to process optimization and data culture initiatives",
    exp2_role:"Application Support Analyst", exp2_period:"Mar 2022 – Jul 2025",
    exp2_li1:"Analyzed and resolved platform-related issues",
    exp2_li2:"Performed frontend adjustments using HTML, CSS, and JavaScript",
    exp2_li3:"Executed database analysis and data manipulation using SQL",
    exp2_li4:"Produced and maintained technical documentation",
    exp2_li5:"Trained internal teams and new employees on system functionalities",
    exp3_role:"Computer Network Technician",
    exp3_li1:"Diagnosed and resolved network infrastructure issues",
    exp3_li2:"Monitored assets: wireless radios, backbones and telephony equipment",
    exp3_li3:"Provided technical support to dedicated internet clients and field operators",
    exp3_li4:"Managed access control and infrastructure in data center environments",
    btn_proj:"View projects",
    senai_p1_title:"AI-powered analysis automation",
    senai_p1_desc:"Python script that reads an Excel spreadsheet, organizes the data, sends it to an AI for analysis, and automatically emails the results to the responsible team. What used to take a full day of work is now done in under 1 hour.",
    senai_p2_title:"Playwright web automation",
    senai_p2_desc:"Web automation using Playwright that accesses a student satisfaction survey portal, automatically downloads the reports, and sends them to Power BI — eliminating the daily manual process.",
    vertem_p1_title:"Technical documentation and training",
    vertem_p1_desc:"Created comprehensive technical documentation for internal tools and procedures. Led training sessions for new employees and teams from other departments — ensuring autonomy and process standardization.",
    vertem_p2_title:"Report automation",
    vertem_p2_desc:"Python scripts to automate the generation of daily and weekly reports that were previously done manually — reducing errors and freeing the team's time for more strategic activities.",
    vertem_p3_title:"Crisis management",
    vertem_p3_desc:"Active participation in war rooms for critical incident response and resolution under pressure. Experience with rapid diagnosis and collaborative problem solving.",
    telium_p1_title:"Infrastructure mapping",
    telium_p1_desc:"Project to map all of the company's network assets — identifying equipment that needed maintenance or replacement. Initiated from a standardization requirement from ENEL.",
    telium_p2_title:"NOC operations",
    telium_p2_desc:"Continuous monitoring of all company assets and remote support to field technicians for fiber optic break identification.",
    sec_skills:"Technical skills", sk_lang:"Languages &amp; Frameworks", sk_auto:"Automation &amp; Platforms",
    sk_db:"Databases", sk_tools:"Tools", sk_web:"Web &amp; Systems",
    sk_erp:"ERP Systems", sk_int:"System Integration", sk_doc:"Documentation", sk_web_maint:"Web Maintenance",
    sec_edu:"Education",
    edu1_deg:"Postgraduate Degree — Full Stack Development", edu1_per:"May 2023 – Oct 2024",
    edu2_deg:"Bachelor's Degree in Systems Analysis and Development",
    edu3_deg:"Bachelor's Degree in Information Technology Management",
    edu4_deg:"Technical Degree in Computer Networks",
    btn_edu:"View curriculum &amp; highlights", btn_cert:"Download certificate",
    edu1_focus_title:"Course focus",
    edu1_desc:"Specialization focused on practical full stack training — from frontend with HTML, CSS, JavaScript and React to backend with Node.js, database strategies and AWS cloud services.",
    edu1_highlight:"<strong>Highlight:</strong> 100% online course with market-oriented methodology, module microcertificates and access to real tools like AWS, GitHub and relational databases.",
    edu2_focus_title:"Course focus",
    edu2_desc:"Technology in Systems Analysis and Development focused on complete software development — from programming logic and data structures to software engineering, databases, networks and security.",
    edu2_highlight:"<strong>Highlight:</strong> free public institution with entry via the Centro Paula Souza (CPS) entrance exam. MEC-recognized technology degree with strong practical emphasis and market focus.",
    edu3_focus_title:"Course focus",
    edu3_desc:"Course with a hybrid vision between management and technology — covering both the technical side and business management (strategic planning, IT governance, team management, projects and finance).",
    edu3_highlight:"<strong>Highlight:</strong> also offered by FATEC with entry via the CPS entrance exam. This course was the starting point of the technology journey — combining technical and managerial vision.",
    edu4_focus_title:"Course focus",
    edu4_desc:"Technical training focused on implementing, maintaining and administering computer networks — from hardware assembly and structured cabling to configuring routers, switches, firewalls and wireless networks.",
    edu4_highlight:"<strong>Highlight:</strong> SENAI also has a selective admissions process and is a national reference in industrial professional education. This was where it all began — where interest in technology became a career.",
    sec_exchange:"🇨🇦 Exchange Program in Vancouver", exc_title:"✈️ One month in Canada — July 2019",
    exc_p1:'In July 2019, I fulfilled one of my biggest dreams: a one-month exchange program in <strong>Vancouver, Canada</strong>. I studied full-time English at <strong>SGIC (St. George International College)</strong>, one of the most complete schools in the city, and fully immersed myself in a new culture, a new language, and a new version of myself.',
    exc_p2:'And the best part: <strong>I celebrated my birthday there</strong>. On July 4th, my host family threw a special little party with cake and a mix of Brazilian and Canadian foods — a gift I\'ll never forget.',
    exc_p3:'During that month, I explored incredible places: <strong>Whistler</strong>, with its breathtaking mountains, the lively <strong>Lonsdale Quay</strong>, the beautiful waterfront <strong>Stanley Park</strong>, and the serene <strong>Joffre Lakes</strong> with their impossibly blue waters.',
    exc_gallery_title:"Memories in photos",
    sec_lang:"Languages", lang_pt_name:"Portuguese", lang_pt_level:"Native",
    lang_en_name:"English", lang_en_level:"English Intermediate",
    lang_en_note:"Exchange program at St. George International College, Vancouver, Canada — July 2019",
    lang_toeic_label:"Official test — TOEIC 2024",
    lang_toeic_score:"TOEIC score",
    lang_toeic_note:"Continuously improving",
    lang_toeic_btn:"Download TOEIC certificate",
    }
  }
