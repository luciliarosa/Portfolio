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

function downloadCV(lang) {
  const files = {
    pt: 'doc/lucilia-rosa-curriculo-pt.pdf',
    en: 'doc/lucilia-rosa-resume-en.pdf'
  };

  const link = document.createElement('a');
  link.href = files[lang];
  link.download = lang === 'pt' ? 'curriculo.pdf' : 'resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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