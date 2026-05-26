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

// ── GERADOR DE CV PDF ──

function cvStyle() {
  return `
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html {
    background: #fff;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11px;
    line-height: 1.45;
    color: #1a1a1a;
    background: #fff;
    padding: 42px 52px 42px 52px;
    max-width: 100%;
  }

  .cv-header {
    border-bottom: 2px solid #1a1a1a;
    padding-bottom: 10px;
    margin-bottom: 13px;
  }

  h1 {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 23px;
    font-weight: 700;
    letter-spacing: 0.02em;
    margin-bottom: 2px;
    color: #1a1a1a;
  }

  .subtitle {
    font-size: 11px;
    color: #555;
    font-style: italic;
    margin-bottom: 7px;
  }

  .contacts {
    font-size: 10px;
    color: #333;
    line-height: 1.8;
  }

  .contacts span {
    display: inline-block;
    margin-right: 14px;
    white-space: nowrap;
  }

  h2 {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #1a1a1a;
    border-bottom: 1px solid #1a1a1a;
    padding-bottom: 3px;
    margin: 14px 0 8px;
    page-break-after: avoid;
  }

  .summary {
    font-size: 10.5px;
    line-height: 1.6;
    color: #333;
  }

  .block {
    margin-bottom: 9px;
    page-break-inside: avoid;
  }

  .block-header {
    overflow: hidden;
    margin-bottom: 4px;
  }

  .block-period {
    float: right;
    font-size: 10px;
    color: #555;
    font-style: italic;
    white-space: nowrap;
    margin-left: 10px;
    padding-top: 1px;
  }

  .block-left {
    overflow: hidden;
  }

  .block-role {
    font-size: 11px;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.3;
  }

  .block-org {
    font-size: 10.5px;
    color: #555;
    margin-top: 1px;
  }

  ul {
    padding-left: 14px;
    margin: 0;
  }

  li {
    font-size: 10.5px;
    color: #333;
    line-height: 1.55;
    margin-bottom: 2px;
  }

  table.sk-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 4px;
    table-layout: fixed;
  }

  table.sk-table td {
    padding: 2px 0;
    vertical-align: top;
    font-size: 10.5px;
  }

  .sk-cat {
    font-weight: 700;
    color: #1a1a1a;
    width: 90px;
    padding-right: 10px !important;
    white-space: nowrap;
  }

  .sk-val {
    color: #333;
  }
</style>`;
}

function downloadCV(l) {
  var isPT = l === 'pt';
  var content = isPT ? generateCVPT() : generateCVEN();

  var container = document.createElement('div');
  container.innerHTML = content;

  html2pdf()
    .set({
      margin: 0,
      filename: isPT ? 'Lucilia_Rosa_Curriculo.pdf' : 'Lucilia_Rosa_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        windowWidth: 750,
        scrollX: 0,
        scrollY: 0
      },
      jsPDF: {
        unit: 'px',
        format: [750, 1056],
        orientation: 'portrait',
        hotfixes: ['px_scaling']
      },
      pagebreak: { mode: ['css', 'legacy'], avoid: ['.block'] }
    })
    .from(container)
    .save();
}

function generateCVPT() {
  var s = [];
  s.push('<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"/>');
  s.push('<meta name="viewport" content="width=750"/>');
  s.push('<title>Currículo — Lucilia Rosa</title>');
  s.push(cvStyle());
  s.push('</head><body>');

  s.push('<div class="cv-header">');
  s.push('<h1>Lucilia Rosa</h1>');
  s.push('<p class="subtitle">Desenvolvedora Full Stack &amp; Automação</p>');
  s.push('<div class="contacts">');
  s.push('<span>lucilia.passos.rosa@outlook.com</span>');
  s.push('<span>linkedin.com/in/lucilia-rosa</span>');
  s.push('<span>github.com/luciliarosa</span>');
  s.push('<span>São Paulo, SP — Brasil</span>');
  s.push('</div></div>');

  s.push('<h2>Resumo Profissional</h2>');
  s.push('<p class="summary">Desenvolvedora Full Stack e Automação com mais de 5 anos de experiência em desenvolvimento de sistemas, automação de processos, análise de dados e suporte técnico. Atua com Python, SQL e Microsoft Power Platform na criação de soluções que aumentam a eficiência operacional e reduzem tarefas manuais. Experiência em ambientes corporativos com forte capacidade analítica e resolução de problemas.</p>');

  s.push('<h2>Experiência Profissional</h2>');

  s.push('<div class="block"><div class="block-header">');
  s.push('<span class="block-period">Jul 2025 – Presente</span>');
  s.push('<div class="block-left"><p class="block-role">Desenvolvedora de Sistemas</p><p class="block-org">SENAI Brás — São Paulo, SP</p></div>');
  s.push('</div><ul>');
  s.push('<li>Desenvolvi automação em Python para processar planilhas, integrar análises com IA e enviar relatórios por e-mail automaticamente, reduzindo um processo de 1 dia para menos de 1 hora.</li>');
  s.push('<li>Criei automações web com Playwright para coleta automática de relatórios e integração com Power BI.</li>');
  s.push('<li>Desenvolvi e mantive dashboards analíticos no Power BI para monitoramento de indicadores operacionais.</li>');
  s.push('<li>Implementei workflows com Power Automate para otimização de processos internos.</li>');
  s.push('<li>Realizei modelagem e manipulação de dados com SQL.</li>');
  s.push('</ul></div>');

  s.push('<div class="block"><div class="block-header">');
  s.push('<span class="block-period">Mar 2022 – Jul 2025</span>');
  s.push('<div class="block-left"><p class="block-role">Analista de Sustentação</p><p class="block-org">Vertem — São Paulo, SP</p></div>');
  s.push('</div><ul>');
  s.push('<li>Diagnostiquei e resolvi incidentes em plataformas corporativas de fidelidade e recompensas.</li>');
  s.push('<li>Desenvolvi scripts Python para automatizar geração de relatórios operacionais diários e semanais.</li>');
  s.push('<li>Realizei manutenção frontend com HTML, CSS e JavaScript.</li>');
  s.push('<li>Participei de war rooms para diagnóstico e resolução de incidentes críticos em produção.</li>');
  s.push('<li>Produzi documentação técnica e conduzi treinamentos para equipes internas e novos colaboradores.</li>');
  s.push('</ul></div>');

  s.push('<div class="block"><div class="block-header">');
  s.push('<span class="block-period">Abr 2018 – Mar 2022</span>');
  s.push('<div class="block-left"><p class="block-role">Técnica em Redes de Computadores</p><p class="block-org">Telium Networks — São Paulo, SP</p></div>');
  s.push('</div><ul>');
  s.push('<li>Atuei no NOC com monitoramento contínuo de rádios wireless, backbones e equipamentos de telefonia.</li>');
  s.push('<li>Prestei suporte remoto a equipes de campo na identificação de falhas em fibra óptica.</li>');
  s.push('<li>Realizei suporte técnico para clientes corporativos de internet dedicada.</li>');
  s.push('</ul></div>');

  s.push('<h2>Habilidades Técnicas</h2>');
  s.push('<table class="sk-table"><tbody>');
  s.push('<tr><td class="sk-cat">Linguagens</td><td class="sk-val">Python, JavaScript, HTML, CSS</td></tr>');
  s.push('<tr><td class="sk-cat">Frameworks</td><td class="sk-val">React, Node.js, Playwright</td></tr>');
  s.push('<tr><td class="sk-cat">Banco de Dados</td><td class="sk-val">SQL Server, MySQL</td></tr>');
  s.push('<tr><td class="sk-cat">Plataformas</td><td class="sk-val">Power BI, Power Automate, Power Apps, SharePoint</td></tr>');
  s.push('<tr><td class="sk-cat">Ferramentas</td><td class="sk-val">Git, GitHub, Postman, VS Code, Jira</td></tr>');
  s.push('</tbody></table>');

  s.push('<h2>Formação Acadêmica</h2>');
  s.push('<div class="block"><div class="block-header"><span class="block-period">Mai 2023 – Out 2024</span><div class="block-left"><p class="block-role">Pós-Graduação — Desenvolvimento Full Stack</p><p class="block-org">Descomplica</p></div></div></div>');
  s.push('<div class="block"><div class="block-header"><span class="block-period">Fev 2022 – Dez 2024</span><div class="block-left"><p class="block-role">Tecnólogo em Análise e Desenvolvimento de Sistemas</p><p class="block-org">FATEC Carapicuíba — São Paulo, SP</p></div></div></div>');
  s.push('<div class="block"><div class="block-header"><span class="block-period">Fev 2015 – Dez 2017</span><div class="block-left"><p class="block-role">Tecnólogo em Gestão da Tecnologia da Informação</p><p class="block-org">FATEC Barueri — São Paulo, SP</p></div></div></div>');
  s.push('<div class="block"><div class="block-header"><span class="block-period">Jul 2012 – Jul 2014</span><div class="block-left"><p class="block-role">Técnico em Redes de Computadores</p><p class="block-org">SENAI Jandira — São Paulo, SP</p></div></div></div>');

  s.push('<h2>Idiomas</h2>');
  s.push('<table class="sk-table"><tbody>');
  s.push('<tr><td class="sk-cat">Português</td><td class="sk-val">Nativo</td></tr>');
  s.push('<tr><td class="sk-cat">Inglês</td><td class="sk-val">Intermediário — Intercâmbio no SGIC, Vancouver, Canadá (2019)</td></tr>');
  s.push('</tbody></table>');

  s.push('</body></html>');
  return s.join('\n');
}

function generateCVEN() {
  var s = [];
  s.push('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/>');
  s.push('<meta name="viewport" content="width=750"/>');
  s.push('<title>Resume — Lucilia Rosa</title>');
  s.push(cvStyle());
  s.push('</head><body>');

  s.push('<div class="cv-header">');
  s.push('<h1>Lucilia Rosa</h1>');
  s.push('<p class="subtitle">Full Stack &amp; Automation Developer</p>');
  s.push('<div class="contacts">');
  s.push('<span>lucilia.passos.rosa@outlook.com</span>');
  s.push('<span>linkedin.com/in/lucilia-rosa</span>');
  s.push('<span>github.com/luciliarosa</span>');
  s.push('<span>São Paulo, Brazil &nbsp;|&nbsp; Open to relocation to Canada</span>');
  s.push('</div></div>');

  s.push('<h2>Professional Summary</h2>');
  s.push('<p class="summary">Results-driven Full Stack and Automation Developer with 5+ years of experience in software development, process automation, data analysis, and technical support. Proven track record delivering Python-based automation workflows, Power BI dashboards, and operational tools that reduce manual work and improve efficiency. Experienced in both backend and frontend development, with strong analytical and collaborative skills in corporate environments.</p>');

  s.push('<h2>Work Experience</h2>');

  s.push('<div class="block"><div class="block-header">');
  s.push('<span class="block-period">Jul 2025 – Present</span>');
  s.push('<div class="block-left"><p class="block-role">Systems Developer</p><p class="block-org">SENAI Brás &middot; São Paulo, Brazil</p></div>');
  s.push('</div><ul>');
  s.push('<li>Developed a Python automation workflow to process Excel spreadsheets, integrate AI-generated insights, and deliver automated email reports — reducing a full day of manual work to under one hour.</li>');
  s.push('<li>Built Playwright-based web automations to collect survey reports and feed data into Power BI dashboards, eliminating repetitive manual tasks.</li>');
  s.push('<li>Designed and maintained Power BI dashboards to support operational decision-making and KPI monitoring.</li>');
  s.push('<li>Created Power Automate workflows to streamline internal business processes.</li>');
  s.push('<li>Modeled and queried relational databases using SQL.</li>');
  s.push('</ul></div>');

  s.push('<div class="block"><div class="block-header">');
  s.push('<span class="block-period">Mar 2022 – Jul 2025</span>');
  s.push('<div class="block-left"><p class="block-role">Application Support Analyst</p><p class="block-org">Vertem &middot; São Paulo, Brazil</p></div>');
  s.push('</div><ul>');
  s.push('<li>Diagnosed and resolved incidents affecting enterprise loyalty and rewards platforms.</li>');
  s.push('<li>Developed Python scripts to automate daily and weekly operational report generation, reducing manual workload and minimizing errors.</li>');
  s.push('<li>Performed frontend maintenance and enhancements using HTML, CSS, and JavaScript.</li>');
  s.push('<li>Participated in production war rooms to troubleshoot and resolve critical incidents under pressure.</li>');
  s.push('<li>Authored technical documentation and delivered training sessions for internal teams and new employees.</li>');
  s.push('</ul></div>');

  s.push('<div class="block"><div class="block-header">');
  s.push('<span class="block-period">Apr 2018 – Mar 2022</span>');
  s.push('<div class="block-left"><p class="block-role">Computer Network Technician (NOC)</p><p class="block-org">Telium Networks &middot; São Paulo, Brazil</p></div>');
  s.push('</div><ul>');
  s.push('<li>Monitored wireless radios, backbone infrastructure, and telephony equipment within the NOC environment.</li>');
  s.push('<li>Provided remote support to field technicians for identifying and resolving fiber optic failures.</li>');
  s.push('<li>Delivered technical support to dedicated internet corporate clients.</li>');
  s.push('</ul></div>');

  s.push('<h2>Technical Skills</h2>');
  s.push('<table class="sk-table"><tbody>');
  s.push('<tr><td class="sk-cat">Languages</td><td class="sk-val">Python, JavaScript, HTML, CSS</td></tr>');
  s.push('<tr><td class="sk-cat">Frameworks</td><td class="sk-val">React, Node.js, Playwright</td></tr>');
  s.push('<tr><td class="sk-cat">Databases</td><td class="sk-val">SQL Server, MySQL</td></tr>');
  s.push('<tr><td class="sk-cat">Platforms</td><td class="sk-val">Power BI, Power Automate, Power Apps, SharePoint</td></tr>');
  s.push('<tr><td class="sk-cat">Tools</td><td class="sk-val">Git, GitHub, Postman, VS Code, Jira</td></tr>');
  s.push('</tbody></table>');

  s.push('<h2>Education</h2>');
  s.push('<div class="block"><div class="block-header"><span class="block-period">May 2023 – Oct 2024</span><div class="block-left"><p class="block-role">Postgraduate Certificate — Full Stack Development</p><p class="block-org">Descomplica</p></div></div></div>');
  s.push('<div class="block"><div class="block-header"><span class="block-period">Feb 2022 – Dec 2024</span><div class="block-left"><p class="block-role">Associate Degree — Systems Analysis and Development</p><p class="block-org">FATEC Carapicuíba &middot; São Paulo, Brazil</p></div></div></div>');
  s.push('<div class="block"><div class="block-header"><span class="block-period">Feb 2015 – Dec 2017</span><div class="block-left"><p class="block-role">Associate Degree — Information Technology Management</p><p class="block-org">FATEC Barueri &middot; São Paulo, Brazil</p></div></div></div>');
  s.push('<div class="block"><div class="block-header"><span class="block-period">Jul 2012 – Jul 2014</span><div class="block-left"><p class="block-role">Technical Diploma — Computer Networks</p><p class="block-org">SENAI Jandira &middot; São Paulo, Brazil</p></div></div></div>');

  s.push('<h2>Languages</h2>');
  s.push('<table class="sk-table"><tbody>');
  s.push('<tr><td class="sk-cat">Portuguese</td><td class="sk-val">Native</td></tr>');
  s.push('<tr><td class="sk-cat">English</td><td class="sk-val">Intermediate — Exchange program at St. George International College, Vancouver, Canada (2019)</td></tr>');
  s.push('</tbody></table>');

  s.push('</body></html>');
  return s.join('\n');
}

var T = {
  pt: {
    nav_home:"Home",
    nav_about:"Sobre mim",
    nav_projects:"Projetos",

    tl_company:"Empresa",
    tl_institution:"Instituição",
    tl_role:"Cargo",

    nav_dd_about:"Sobre mim",
    nav_dd_about_desc:"Trajetória, habilidades e história",

    nav_dd_projects:"Projetos",
    nav_dd_projects_desc:"HTML, Python, JavaScript e React",

    nav_dd_areas:"Frontend, Backend &amp; Fullstack",
    nav_dd_areas_desc:"O que é cada área e como se conectam",

    hero_role:"Full Stack & Automation Developer · Python · SQL · Power Platform",

    tag_exp:"+5 anos de experiência",
    tag_wit:"Mulher na Tech",
    tag_canada:"Open to Canada",

    cnt_years:"anos de experiência",
    cnt_companies:"empresas",
    cnt_edu:"formações",
    cnt_skills:"tecnologias",

    btn_cv_pt:"Baixar Currículo (PT)",
    btn_cv_en:"Download Resume (EN)",

    sec_about:"Quem sou eu",

    about_p1:'Desenvolvedora Full Stack e Automation Developer com experiência em desenvolvimento de sistemas, automação de processos, análise de dados e suporte técnico. Minha trajetória começou em infraestrutura e redes, evoluindo naturalmente para desenvolvimento de software e soluções orientadas à automação.',

    about_p2:'Atualmente trabalho com Python, SQL, Power BI e Power Platform para desenvolver automações, dashboards e ferramentas internas que reduzem tarefas manuais e aumentam a eficiência operacional. Tenho experiência tanto em backend quanto frontend, além de forte capacidade analítica e resolução de problemas.',

    about_p3:'Também possuo experiência em sustentação de sistemas, troubleshooting, documentação técnica e suporte a ambientes corporativos. Busco continuamente aprimorar minhas habilidades em desenvolvimento full stack, cloud e engenharia de software.',

    sec_timeline:"Trajetória",
    tl_present:"Presente",

    tl1_title:"Atuação como Desenvolvedora de Sistemas",
    tl1_desc:"Desenvolvimento de automações, dashboards e soluções orientadas a dados com Python, SQL e Power Platform.",

    tl_pos_title:"Pós-Graduação em Desenvolvimento Full Stack",
    tl_pos_desc:"Especialização prática em desenvolvimento frontend, backend, cloud computing e banco de dados.",

    tl2_title:"Atuação como Analista de Sustentação",
    tl2_desc:"Suporte técnico a plataformas corporativas, análise SQL, ajustes frontend e documentação técnica.",

    tl_ads_title:"Graduação em Análise e Desenvolvimento de Sistemas",
    tl_ads_desc:"Formação em engenharia de software, programação orientada a objetos, banco de dados e segurança da informação.",

    tl3_title:"Atuação como Técnica em Redes de Computadores",
    tl3_desc:"Monitoramento de infraestrutura, operação NOC e suporte técnico em ambientes de telecomunicações.",

    tl_gti_title:"Graduação em Gestão da Tecnologia da Informação",
    tl_gti_desc:"Formação voltada para governança de TI, infraestrutura, sistemas corporativos e gestão estratégica.",

    tl4_title:"Curso Técnico em Redes de Computadores",
    tl4_desc:"Base técnica em infraestrutura de redes, conectividade, fibra óptica e administração de equipamentos.",

    exp1_role:"Atuação como Desenvolvedora de Sistemas",
    exp1_period:"Jul 2025 – Presente",

    exp1_li1:"Desenvolvi e mantive dashboards analíticos utilizando Power BI",
    exp1_li2:"Criei scripts de automação em Python para processamento e integração de dados",
    exp1_li3:"Modelei e manipulei bases de dados utilizando SQL",
    exp1_li4:"Implementei workflows automatizados com Power Automate",
    exp1_li5:"Contribuí para iniciativas de cultura orientada a dados e otimização operacional",

    senai_p1_title:"Automação de análise com IA",
    senai_p1_desc:"Desenvolvi uma automação em Python para processar planilhas Excel, estruturar dados e enviar análises geradas por IA automaticamente por e-mail aos responsáveis. A solução reduziu um processo operacional de aproximadamente 1 dia para menos de 1 hora.",
    senai_p2_title:"Automação web com Playwright",
    senai_p2_desc:"Implementei uma automação web com Playwright para acessar portais de pesquisa, realizar downloads automáticos de relatórios e integrar os dados ao Power BI, eliminando atividades manuais recorrentes.",

    exp2_role:"Atuação como Analista de Sustentação",
    exp2_period:"Mar 2022 – Jul 2025",

    exp2_li1:"Analisei e resolvi incidentes em plataformas e sistemas corporativos",
    exp2_li2:"Realizei ajustes frontend utilizando HTML, CSS e JavaScript",
    exp2_li3:"Executei consultas, análises e manipulação de dados com SQL",
    exp2_li4:"Produzi e mantive documentação técnica de processos e sistemas",
    exp2_li5:"Treinei equipes internas e novos colaboradores em ferramentas e fluxos operacionais",

    vertem_p1_title:"Documentação técnica e treinamentos",
    vertem_p1_desc:"Desenvolvi documentação técnica para ferramentas, processos internos e fluxos operacionais, além de conduzir treinamentos para novos colaboradores e equipes multidisciplinares, promovendo padronização e autonomia operacional.",
    vertem_p2_title:"Automação de relatórios",
    vertem_p2_desc:"Desenvolvi scripts em Python para automatizar a geração de relatórios diários e semanais, reduzindo atividades manuais, minimizando erros operacionais e liberando tempo da equipe para demandas estratégicas.",
    vertem_p3_title:"Gestão de incidentes críticos",
    vertem_p3_desc:"Participei ativamente de war rooms para resolução de incidentes críticos em produção, realizando troubleshooting, análise rápida de impacto e comunicação colaborativa entre equipes técnicas.",

    exp3_role:"Atuação como Técnica em Redes de Computadores",

    exp3_li1:"Diagnostiquei e resolvi problemas de infraestrutura de redes",
    exp3_li2:"Monitorei ativos de rede, incluindo rádios wireless, backbones e equipamentos de telefonia",
    exp3_li3:"Prestei suporte técnico para clientes corporativos e operadores em campo",
    exp3_li4:"Gerenciei acessos e infraestrutura em ambientes de data center",

    telium_p1_title:"Mapeamento de infraestrutura",
    telium_p1_desc:"Participei de um projeto de mapeamento de ativos de rede para identificar equipamentos que necessitavam de manutenção ou substituição, contribuindo para iniciativas de padronização e confiabilidade da infraestrutura.",
    telium_p2_title:"Operação NOC",
    telium_p2_desc:"Atuei no Network Operations Center (NOC) realizando monitoramento contínuo de ativos de rede, suporte remoto a técnicos em field e análise de incidentes relacionados a conectividade e fibra óptica.",

    btn_proj:"Ver projetos desenvolvidos",

    edu1_deg:"Pós-Graduação — Desenvolvimento Full Stack",
    edu1_per:"Mai 2023 – Out 2024",
    edu1_focus_title:"Principais áreas de estudo",
    edu1_desc:"Especialização prática em desenvolvimento full stack, abrangendo aplicações frontend com HTML, CSS, JavaScript e React, além de desenvolvimento backend com Node.js, APIs REST, bancos de dados relacionais e fundamentos de cloud computing na AWS.",
    edu1_highlight:"<strong>Destaque:</strong> Formação orientada ao mercado com projetos práticos, microcertificações por módulo e experiência com ferramentas amplamente utilizadas na indústria de tecnologia.",

    edu2_deg:"Tecnólogo em Análise e Desenvolvimento de Sistemas",
    edu2_focus_title:"Principais áreas de estudo",
    edu2_desc:"Graduação focada em engenharia de software, programação orientada a objetos, estruturas de dados, modelagem de banco de dados, desenvolvimento de sistemas, segurança da informação e arquitetura de software.",
    edu2_highlight:"<strong>Destaque:</strong> Formação tecnológica com forte abordagem prática, voltada para desenvolvimento de software, resolução de problemas e aplicação de boas práticas de engenharia.",

    edu3_deg:"Tecnólogo em Gestão da Tecnologia da Informação",
    edu3_focus_title:"Principais áreas de estudo",
    edu3_desc:"Graduação com foco em governança de TI, infraestrutura, sistemas corporativos, gestão de projetos, banco de dados, processos de negócio e planejamento estratégico aplicado à tecnologia.",
    edu3_highlight:"<strong>Destaque:</strong> Formação que combinou visão técnica e gerencial, proporcionando experiência tanto em tecnologia quanto em gestão de ambientes corporativos.",

    edu4_deg:"Técnico em Redes de Computadores",
    edu4_focus_title:"Principais áreas de estudo",
    edu4_desc:"Formação técnica voltada para infraestrutura de redes, conectividade, protocolos TCP/IP, cabeamento estruturado, fibra óptica, configuração de roteadores e switches, além de administração e suporte de ambientes de rede.",
    edu4_highlight:"<strong>Destaque:</strong> Base técnica sólida em infraestrutura e telecomunicações, responsável pelo início da trajetória profissional na área de tecnologia.",

    btn_edu:"Ver grade e ênfases",
    btn_cert:"Baixar certificado",
    sec_skills:"Habilidades técnicas",

    sec_edu:"Formação acadêmica",

    sec_exchange:"🇨🇦 Intercâmbio em Vancouver",

    sec_lang:"Idiomas",

    lang_pt_name:"Português",
    lang_pt_level:"Nativo",

    lang_en_name:"Inglês",
    lang_en_level:"Inglês Intermediário",

    lang_en_note:"Intercâmbio no St. George International College, Vancouver, Canadá — Jul 2019",

    lang_toeic_label:"Teste oficial — TOEIC 2024",
    lang_toeic_score:"Pontos no TOEIC",
    lang_toeic_note:"Em evolução constante",
    lang_toeic_btn:"Baixar certificado TOEIC",
  },

  en: {
    nav_home:"Home",
    nav_about:"About me",
    nav_projects:"Projects",

    tl_company:"Company",
    tl_institution:"Institution",
    tl_role:"Role",

    nav_dd_about:"About me",
    nav_dd_about_desc:"Background, skills and story",

    nav_dd_projects:"Projects",
    nav_dd_projects_desc:"HTML, Python, JavaScript and React",

    nav_dd_areas:"Frontend, Backend &amp; Fullstack",
    nav_dd_areas_desc:"What each area is and how they connect",

    hero_role:"Full Stack & Automation Developer · Python · SQL · Power Platform",

    tag_exp:"+5 years of experience",
    tag_wit:"Woman in Tech",
    tag_canada:"Open to Canada",

    cnt_years:"years of experience",
    cnt_companies:"companies",
    cnt_edu:"degrees",
    cnt_skills:"technologies",

    btn_cv_pt:"Download Currículo (PT)",
    btn_cv_en:"Download Resume (EN)",

    sec_about:"Who I am",

    about_p1:'Full Stack and Automation Developer with experience in software development, process automation, data analysis, and technical support. My career started in infrastructure and networking and naturally evolved into software engineering and automation-focused solutions.',

    about_p2:'Currently working with Python, SQL, Power BI, and Microsoft Power Platform to build automations, dashboards, and internal tools that reduce manual work and improve operational efficiency. Experienced in both backend and frontend development, with strong analytical and problem-solving skills.',

    about_p3:'Also experienced in systems support, troubleshooting, technical documentation, and corporate environments. Continuously improving technical skills in full stack development, cloud technologies, and software engineering.',

    sec_timeline:"Career Timeline",
    tl_present:"Present",

    tl1_title:"Professional Experience as Systems Developer",
    tl1_desc:"Development of automation workflows, dashboards and data-driven solutions using Python, SQL and Microsoft Power Platform.",

    tl_pos_title:"Postgraduate Degree in Full Stack Development",
    tl_pos_desc:"Practical specialization in frontend, backend, cloud computing and database technologies.",

    tl2_title:"Professional Experience as Support Analyst",
    tl2_desc:"Technical support for enterprise platforms, SQL analysis, frontend maintenance and technical documentation.",

    tl_ads_title:"Degree in Systems Analysis and Development",
    tl_ads_desc:"Academic background in software engineering, object-oriented programming, databases and information security.",

    tl3_title:"Professional Experience as Network Technician",
    tl3_desc:"Infrastructure monitoring, NOC operations and technical support within telecommunications environments.",

    tl_gti_title:"Degree in Information Technology Management",
    tl_gti_desc:"Education focused on IT governance, infrastructure, enterprise systems and strategic management.",

    tl4_title:"Technical Program in Computer Networks",
    tl4_desc:"Technical foundation in networking infrastructure, connectivity, fiber optics and network equipment administration.",

    exp1_role:"Professional Experience as Systems Developer",
    exp1_period:"Jul 2025 – Present",

    exp1_li1:"Developed and maintained analytical dashboards using Power BI",
    exp1_li2:"Built Python automation scripts for data processing and integration",
    exp1_li3:"Modeled and manipulated data using SQL",
    exp1_li4:"Implemented automated workflows with Power Automate",
    exp1_li5:"Contributed to data-driven culture initiatives and operational optimization",

    senai_p1_title:"AI-Powered Analysis Automation",
    senai_p1_desc:"Developed a Python automation workflow to process Excel spreadsheets, structure data, and automatically deliver AI-generated analysis reports by email. The solution reduced an operational process from nearly one full day to less than one hour.",
    senai_p2_title:"Playwright Web Automation",
    senai_p2_desc:"Implemented a Playwright-based web automation solution to access survey platforms, download reports automatically, and integrate data into Power BI dashboards, eliminating repetitive manual tasks.",

    exp2_role:"Professional Experience as Support Analyst",
    exp2_period:"Mar 2022 – Jul 2025",

    exp2_li1:"Analyzed and resolved incidents across enterprise platforms and systems",
    exp2_li2:"Performed frontend enhancements using HTML, CSS, and JavaScript",
    exp2_li3:"Executed SQL queries, data analysis, and database manipulation",
    exp2_li4:"Produced and maintained technical documentation for systems and processes",
    exp2_li5:"Trained internal teams and new employees on operational workflows and tools",

    vertem_p1_title:"Technical Documentation and Training",
    vertem_p1_desc:"Developed technical documentation for internal tools, operational processes, and workflows, while leading training sessions for new employees and cross-functional teams to improve standardization and operational autonomy.",
    vertem_p2_title:"Report Automation",
    vertem_p2_desc:"Developed Python scripts to automate daily and weekly report generation, reducing manual activities, minimizing operational errors, and allowing the team to focus on strategic tasks.",
    vertem_p3_title:"Critical Incident Management",
    vertem_p3_desc:"Actively participated in production war rooms to resolve critical incidents, performing troubleshooting, rapid impact analysis, and collaborative communication across technical teams.",

    exp3_role:"Professional Experience as Network Technician",

    exp3_li1:"Diagnosed and resolved network infrastructure issues",
    exp3_li2:"Monitored network assets, including wireless radios, backbones, and telephony equipment",
    exp3_li3:"Provided technical support for enterprise clients and field technicians",
    exp3_li4:"Managed access control and infrastructure within data center environments",

    telium_p1_title:"Infrastructure Mapping",
    telium_p1_desc:"Participated in a network asset mapping project to identify equipment requiring maintenance or replacement, contributing to infrastructure standardization and reliability initiatives.",
    telium_p2_title:"NOC Operations",
    telium_p2_desc:"Worked within the Network Operations Center (NOC), monitoring network assets, providing remote support to field technicians, and analyzing connectivity and fiber optic incidents.",

    btn_proj:"View projects",

    sec_skills:"Technical Skills",

    edu1_deg:"Postgraduate Degree — Full Stack Development",
    edu1_per:"May 2023 – Oct 2024",
    edu1_focus_title:"Key areas of study",
    edu1_desc:"Practical specialization in full stack development, covering frontend applications with HTML, CSS, JavaScript, and React, as well as backend development with Node.js, REST APIs, relational databases, and AWS cloud computing fundamentals.",
    edu1_highlight:"<strong>Highlight:</strong> Market-oriented program focused on hands-on projects, micro-certifications, and experience with widely used industry tools and technologies.",

    edu2_deg:"Associate Degree in Systems Analysis and Development",
    edu2_focus_title:"Key areas of study",
    edu2_desc:"Degree focused on software engineering, object-oriented programming, data structures, database modeling, systems development, information security, and software architecture.",
    edu2_highlight:"<strong>Highlight:</strong> Technology-focused program with a strong practical approach to software development, problem-solving, and engineering best practices.",

    edu3_deg:"Associate Degree in Information Technology Management",
    edu3_focus_title:"Key areas of study",
    edu3_desc:"Degree focused on IT governance, infrastructure, enterprise systems, project management, databases, business processes, and strategic technology planning.",
    edu3_highlight:"<strong>Highlight:</strong> Academic background combining both technical and business perspectives, providing experience in technology and corporate management environments.",

    edu4_deg:"Technical Program in Computer Networks",
    edu4_focus_title:"Key areas of study",
    edu4_desc:"Technical education focused on networking infrastructure, connectivity, TCP/IP protocols, structured cabling, fiber optics, router and switch configuration, and network administration and support.",
    edu4_highlight:"<strong>Highlight:</strong> Strong technical foundation in infrastructure and telecommunications, marking the beginning of my professional career in technology.",

    sec_edu:"Education",

    btn_edu:"View curriculum and focus areas",
    btn_cert:"Download certificate",

    sec_exchange:"🇨🇦 Exchange Program in Vancouver",

    sec_lang:"Languages",

    lang_pt_name:"Portuguese",
    lang_pt_level:"Native",

    lang_en_name:"English",
    lang_en_level:"Intermediate English",

    lang_en_note:"Exchange program at St. George International College, Vancouver, Canada — Jul 2019",

    lang_toeic_label:"Official test — TOEIC 2024",
    lang_toeic_score:"TOEIC score",
    lang_toeic_note:"Continuously improving",
    lang_toeic_btn:"Download TOEIC certificate",
  }
}