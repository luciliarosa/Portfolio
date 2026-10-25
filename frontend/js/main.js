let lang = localStorage.getItem('nb_lang') || 'pt';

function setLang(l) {
  lang = l;
  localStorage.setItem('nb_lang', l);
  document.body.classList.add('lang-switching');
  setTimeout(function() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      if (T[l] && T[l][key] !== undefined) {
        el.innerHTML = T[l][key];
      }
    });
    document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en';
    document.title = l === 'pt' ? 'Lucilia Rosa — Software Developer' : 'Lucilia Rosa — Software Developer';
    const btnPt = document.getElementById('btn-pt');
    const btnEn = document.getElementById('btn-en');
    if (btnPt) btnPt.classList.toggle('active', l === 'pt');
    if (btnEn) btnEn.classList.toggle('active', l === 'en');

    // Atualiza dinamicamente o link de download do currículo
    const cvLink = document.querySelector('a[href*="lucilia-rosa-resume-"]');
    if (cvLink) {
      cvLink.href = l === 'pt' ? '../docs/lucilia-rosa-resume-pt.pdf' : '../docs/lucilia-rosa-resume-en.pdf';
    }

    document.body.classList.remove('lang-switching');
  }, 160);
}

/* ─── CARROSSEL INTERATIVO COM PAUSA, SETAS E DOTS ─── */
function buildCarousels() {
  document.querySelectorAll('.card-carousel').forEach(container => {
    const raw = container.getAttribute('data-images');
    let images = [];

    try {
      images = JSON.parse(raw);
    } catch(e) {
      console.error('Erro no JSON do carousel', e);
      return;
    }

    if (!images.length) return;

    container.innerHTML = ''; // Limpa conteúdo anterior

    // Track
    const track = document.createElement('div');
    track.classList.add('carousel-track');

    images.forEach((src, idx) => {
      const slide = document.createElement('div');
      slide.classList.add('carousel-slide');

      const img = document.createElement('img');
      img.src = src;
      img.alt = `Preview do projeto - imagem ${idx + 1}`;
      img.loading = 'lazy';

      slide.appendChild(img);
      track.appendChild(slide);
    });

    container.appendChild(track);

    if (images.length <= 1) return;

    // Contador de slides (ex: 1 / 4)
    const counter = document.createElement('span');
    counter.className = 'carousel-counter';
    counter.textContent = `1 / ${images.length}`;
    container.appendChild(counter);

    // Controles: Dots
    const dotsWrap = document.createElement('div');
    dotsWrap.className = 'carousel-dots';
    images.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Ir para slide ${i + 1}`);
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        goTo(i);
      });
      dotsWrap.appendChild(dot);
    });
    container.appendChild(dotsWrap);

    // Controles: Setas Prev e Next
    const btnPrev = document.createElement('button');
    btnPrev.type = 'button';
    btnPrev.className = 'carousel-nav-btn prev';
    btnPrev.setAttribute('aria-label', 'Slide anterior');
    btnPrev.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>';
    btnPrev.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      goTo(current - 1);
    });

    const btnNext = document.createElement('button');
    btnNext.type = 'button';
    btnNext.className = 'carousel-nav-btn next';
    btnNext.setAttribute('aria-label', 'Próximo slide');
    btnNext.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>';
    btnNext.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      goTo(current + 1);
    });

    container.appendChild(btnPrev);
    container.appendChild(btnNext);

    let current = 0;
    let timer = null;

    function goTo(n) {
      current = (n + images.length) % images.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      counter.textContent = `${current + 1} / ${images.length}`;
      dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    function startAuto() {
      stopAuto();
      timer = setInterval(() => {
        goTo(current + 1);
      }, 3500);
    }

    function stopAuto() {
      if (timer) clearInterval(timer);
    }

    startAuto();

    // Pausa no hover do card inteiro (para análise detalhada da imagem)
    const cardParent = container.closest('.project-card') || container;
    cardParent.addEventListener('mouseenter', stopAuto);
    cardParent.addEventListener('mouseleave', startAuto);

    // Suporte a swipe em telas touch
    let touchStartX = 0;
    container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAuto();
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) goTo(current + 1);
        else goTo(current - 1);
      }
      startAuto();
    }, { passive: true });
  });
}

/* ─── BOTÃO VOLTAR AO TOPO ─── */
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if (btn) {
    btn.classList.toggle('visible', window.scrollY > 350);
  }
});

/* ─── EXPANDIR / RECOLHER PROJETOS DA EXPERIÊNCIA ─── */
function toggleExpProjects(id, btn) {
  const panel = document.getElementById(id);
  if (!panel) return;
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  const arrow = btn.querySelector('span:last-child');
  if (arrow) arrow.textContent = isOpen ? '▾' : '▴';
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  setLang(lang);
  buildCarousels();
});

const T = {
  pt: {
    nav_home: "Home",
    nav_about: "Sobre mim",
    nav_projects: "Projetos",
    nav_areas: "Frontend · Backend · Fullstack",
    nav_notebook: "Caderno de Estudos",
    hero_title: "Software Developer · Automação & Full-Stack",
    hero_badge: "São Paulo, Brasil",
    hero_status: "Disponível para novas oportunidades",
    hero_location: "São Paulo, SP · Brasil",
    hero_bio: "Desenvolvedora focada em automação de processos, integração de sistemas, banco de dados SQL e desenvolvimento web full-stack. Experiência na criação de soluções corporativas eficientes que otimizam rotinas e resolvem problemas reais com Python e tecnologias modernas.",
    cta_projects: "Ver projetos",
    cta_about: "Sobre mim",
    sec_skills: "Habilidades & Tecnologias",
    sec_projects: "Projetos em Destaque",
    sec_projects_desc: "Aplicações reais em produção, com código aberto e arquitetura moderna.",
    btn_live_demo: "Deploy",
    btn_details: "Detalhes →",
    status_live: "Live",
    sec_about: "Sobre mim",
    sec_experience: "Experiência Profissional",
    skills_cat_backend: "Back-end & Dados",
    skills_cat_frontend: "Front-end & Web",
    skills_cat_automation: "Automação & Processos",
    exp_summary: "Trajetória profissional em desenvolvimento de sistemas, sustentação e infraestrutura.",
    cm_years_label: "em Tecnologia (desde 2018)",
    cm_focus_label: "Python · Playwright · OpenAI",
    cm_prod_label: "Sustentação corporativa crítica",
    exp_model_hybrid: "Híbrido · São Paulo, SP",
    exp_model_fulltime: "Full-time · São Paulo, SP",
    btn_proj: "Ver projetos desenvolvidos",
    exp_date1: "Jul 2025 – Presente",
    exp_date2: "Mar 2022 – Jul 2025",
    exp_date3: "Abr 2018 – Mar 2022",
    exp_badge_current: "Atual",
    exp_role1: "Desenvolvedora de Sistemas",
    exp1_role: "Desenvolvedora de Sistemas",
    exp1_li1: "Desenvolvimento de aplicações e automações em Python para eliminar processos manuais e aumentar a eficiência operacional.",
    exp1_li2: "Elaboração de consultas SQL para extração, validação de regras de negócio e alimentação de dashboards analíticos.",
    exp1_li3: "Integrações de sistemas internos, bancos de dados relacionais, ambientes SharePoint e APIs de serviços externos.",
    senai_p1_title: "Automação de análise com IA",
    senai_p1_desc: "Desenvolvi uma automação em Python para processar planilhas Excel, estruturar dados e enviar análises geradas por IA automaticamente por e-mail aos responsáveis. A solução reduziu um processo operacional de aproximadamente 1 dia para menos de 1 hora.",
    senai_p2_title: "Automação web com Playwright",
    senai_p2_desc: "Implementei uma automação web com Playwright para acessar portais de pesquisa, realizar downloads automáticos de relatórios e integrar os dados ao Power BI, eliminando atividades manuais recorrentes.",
    exp_role2: "Analista de Sustentação",
    exp2_role: "Analista de Sustentação",
    exp2_li1: "Análise e resolução de incidentes críticos em plataformas e sistemas corporativos em produção.",
    exp2_li3: "Execução de consultas avançadas, extrações e manipulação de bases relacionais com SQL.",
    exp2_li2: "Manutenção e ajustes de interface frontend utilizando HTML, CSS e JavaScript.",
    vertem_p2_title: "Automação de relatórios",
    vertem_p2_desc: "Desenvolvi scripts em Python para automatizar a geração de relatórios diários e semanais, reduzindo atividades manuais e minimizando erros operacionais.",
    vertem_p3_title: "Gestão de incidentes críticos",
    vertem_p3_desc: "Participei ativamente de war rooms para resolução de incidentes críticos em produção, realizando troubleshooting e análise rápida de impacto.",
    exp_role3: "Técnica em Redes",
    exp3_role: "Técnica em Redes de Computadores",
    exp3_li1: "Diagnóstico e resolução de incidentes de infraestrutura de redes em ambientes de data center.",
    exp3_li2: "Monitoramento contínuo de ativos de rede, incluindo rádios wireless, backbones de fibra e telefonia.",
    exp3_li3: "Suporte técnico especializado para clientes corporativos de telecomunicações e equipes em campo.",
    telium_p1_title: "Mapeamento de infraestrutura",
    telium_p1_desc: "Participei de um projeto de mapeamento de ativos de rede para identificar equipamentos que necessitavam de manutenção ou substituição.",
    telium_p2_title: "Operação NOC",
    telium_p2_desc: "Atuei no Network Operations Center (NOC) realizando monitoramento contínuo de ativos de rede, suporte remoto e análise de incidentes.",
    exp_focus1: "Automação de processos corporativos com Python, integração com IA e consultas analíticas em SQL.",
    exp_focus2: "Sustentação de plataformas corporativas de missão crítica, troubleshooting em produção e manipulação de bases SQL.",
    exp_focus3: "Operação de redes em ambiente NOC, monitoramento de infraestrutura de telecomunicações e suporte a ativos Cisco e MikroTik.",
    exp_btn: "Ver trajetória completa →",
    proj1_name: "Lucilia's Notebook",
    proj1_cat: "Web Application",
    proj1_desc: "Caderno digital de estudos sobre engenharia de software e full-stack. Reúne conceitos de lógica, Python, bancos de dados e Git. Desenvolvido no front-end com JavaScript puro, HTML5 e CSS3 moderno.",
    proj2_name: "Luci College",
    proj2_cat: "Full-Stack Web App",
    proj2_desc: "Plataforma web de catálogo e resgate de recompensas para alunos com gamificação acadêmica. Arquitetura robusta com back-end em Python, persistência em PostgreSQL e interface responsiva em JavaScript.",
    proj3_name: "Jogo da Velha",
    proj3_cat: "Interactive UI",
    proj3_desc: "Aplicação interativa desenvolvida com foco em manipulação de DOM, boas práticas em JavaScript puro e regras de vitória/empate em tempo real.",
    proj_link: "Ver projeto →",
    all_projects: "Ver todos os projetos →",
    about_h1: "Perfil & Abordagem",
    about_p1: "Desenvolvedora de Software baseada em São Paulo, com sólida experiência em sustentação corporativa, desenvolvimento e automação de fluxos. Atualmente aprofundando engenharia de software com Python e ecossistemas cloud, combinando rigor técnico a soluções focadas em impacto de negócio.",
    about_h2: "Principais Entregas & Competências",
    about_li1: "Desenvolvimento de aplicações web completas e APIs RESTful",
    about_li2: "Automação de rotinas corporativas com Python e Power Platform",
    about_li3: "Modelagem relacional, consultas avançadas e sustentação em SQL",
    about_li4: "Criação de dashboards gerenciais e fluxos orientados a dados",
    about_li5: "Controle de versão, colaboração e boas práticas com Git & GitHub",
    full_about: "Ler história completa →",
    fcta_eyebrow: "// Vamos conversar?",
    fcta_title: "Tem um projeto ou oportunidade em mente?",
    fcta_desc: "Estou disponível para novas oportunidades como Software Developer, automações de processos e projetos web full-stack.",
    fcta_btn_contact: "Enviar E-mail",
    fcta_btn_cv: "Currículo (PDF)",
    footer_bio: "Desenvolvedora de Software focada em automação com Python, modelagem em SQL e desenvolvimento web full-stack.",
    footer_col_nav: "Navegação",
    footer_col_connect: "Conectar",
    footer_home: "Home",
    footer_about: "Sobre mim",
    footer_projects: "Projetos",
    footer_dev_concepts: "Conceitos Dev",
    footer_location: "📍 São Paulo, SP · Brasil",
    footer_top: "Voltar ao topo ↑",
    footer_rights: "Todos os direitos reservados."
  },
  en: {
    nav_home: "Home",
    nav_about: "About me",
    nav_projects: "Projects",
    nav_areas: "Frontend · Backend · Fullstack",
    nav_notebook: "Study Notebook",
    hero_title: "Software Developer · Automation & Full-Stack",
    hero_badge: "São Paulo, Brazil",
    hero_status: "Available for new opportunities",
    hero_location: "São Paulo, Brazil",
    hero_bio: "Developer focused on process automation, systems integration, SQL databases, and full-stack web development. Experienced in building efficient corporate solutions that streamline workflows and solve real problems using Python and modern web technologies.",
    cta_projects: "View projects",
    cta_about: "About me",
    sec_skills: "Skills & Technologies",
    sec_projects: "Featured Projects",
    sec_projects_desc: "Real-world production applications with open-source code and modern architecture.",
    btn_live_demo: "Deploy",
    btn_details: "Details →",
    status_live: "Live",
    sec_about: "About me",
    sec_experience: "Professional Experience",
    skills_cat_backend: "Back-end & Data",
    skills_cat_frontend: "Front-end & Web",
    skills_cat_automation: "Automation & Workflows",
    exp_summary: "Professional trajectory across software development, systems support, and infrastructure.",
    cm_years_label: "in Technology (since 2018)",
    cm_focus_label: "Python · Playwright · OpenAI",
    cm_prod_label: "Critical enterprise support",
    exp_model_hybrid: "Hybrid · São Paulo, Brazil",
    exp_model_fulltime: "Full-time · São Paulo, Brazil",
    btn_proj: "View company projects",
    exp_date1: "Jul 2025 – Present",
    exp_date2: "Mar 2022 – Jul 2025",
    exp_date3: "Apr 2018 – Mar 2022",
    exp_badge_current: "Current",
    exp_role1: "Software Developer",
    exp1_role: "Software Developer",
    exp1_li1: "Developed Python applications and automation solutions to eliminate manual processes and increase operational efficiency.",
    exp1_li2: "Designed and executed SQL queries for data extraction, business rule validation, and analytics dashboards.",
    exp1_li3: "Integrated internal systems, relational databases, SharePoint environments, and external web APIs.",
    senai_p1_title: "AI-Powered Analysis Automation",
    senai_p1_desc: "Developed a Python automation workflow to process Excel spreadsheets, structure data, and automatically email AI-generated analyses to stakeholders, reducing a 1-day task to under an hour.",
    senai_p2_title: "Playwright Web Automation",
    senai_p2_desc: "Implemented a Playwright-based web automation solution to access survey platforms, automatically download reports, and integrate data into Power BI, eliminating repetitive manual work.",
    exp_role2: "Systems Support Analyst",
    exp2_role: "Systems Support Analyst",
    exp2_li1: "Analyzed and resolved critical incidents across enterprise platforms and production systems.",
    exp2_li3: "Executed advanced queries, data extraction, and relational database manipulation using SQL.",
    exp2_li2: "Performed frontend maintenance and UI enhancements using HTML, CSS, and JavaScript.",
    vertem_p2_title: "Report Automation",
    vertem_p2_desc: "Developed Python scripts to automate daily and weekly report generation, reducing manual overhead and operational errors.",
    vertem_p3_title: "Critical Incident Management",
    vertem_p3_desc: "Actively participated in production war rooms to resolve critical incidents, performing troubleshooting and rapid impact analysis.",
    exp_role3: "Network Technician",
    exp3_role: "Network Technician",
    exp3_li1: "Diagnosed and resolved network infrastructure issues within data center environments.",
    exp3_li2: "Monitored network assets continuously, including wireless radios, fiber backbones, and telephony equipment.",
    exp3_li3: "Provided specialized technical support for enterprise telecom clients and field technicians.",
    telium_p1_title: "Infrastructure Mapping",
    telium_p1_desc: "Participated in an infrastructure mapping project to audit network assets and identify hardware requiring maintenance or replacement.",
    telium_p2_title: "NOC Operations",
    telium_p2_desc: "Worked within the Network Operations Center (NOC), monitoring network assets, providing remote support, and analyzing incidents.",
    exp_focus1: "Corporate workflow automation using Python, AI integration, and analytical SQL queries.",
    exp_focus2: "Mission-critical enterprise platform support, production troubleshooting, and relational database operations.",
    exp_focus3: "NOC network operations, telecom infrastructure monitoring, and Cisco/MikroTik support.",
    exp_btn: "View full experience →",
    proj1_name: "Lucilia's Notebook",
    proj1_cat: "Web Application",
    proj1_desc: "Digital study platform covering software engineering and full-stack development. Summarizes programming logic, Python, databases, and Git. Built with pure JavaScript, HTML5, and modern CSS3.",
    proj2_name: "Luci College",
    proj2_cat: "Full-Stack Web App",
    proj2_desc: "Web catalog and reward redemption platform for students with academic gamification. Robust architecture with a Python back-end, PostgreSQL persistence, and responsive JavaScript interface.",
    proj3_name: "Tic-Tac-Toe",
    proj3_cat: "Interactive UI",
    proj3_desc: "Interactive web application focused on DOM manipulation, vanilla JavaScript state handling, and real-time victory/draw detection without external libraries.",
    proj_link: "View project →",
    all_projects: "View all projects →",
    about_h1: "Profile & Approach",
    about_p1: "Software Developer based in São Paulo, with solid corporate experience in technical support, software engineering, and process automation. Currently focusing on Python back-end and cloud environments, bridging technical rigor and tangible business value.",
    about_h2: "Core Competencies & Deliverables",
    about_li1: "Full-stack web application development and RESTful APIs",
    about_li2: "Corporate workflow automation using Python and Power Platform",
    about_li3: "Relational data modeling, advanced queries, and database support in SQL",
    about_li4: "Management dashboards and data-driven automated pipelines",
    about_li5: "Version control, code collaboration, and best practices with Git & GitHub",
    full_about: "Read full story →",
    fcta_eyebrow: "// Let's connect",
    fcta_title: "Have a project or opportunity in mind?",
    fcta_desc: "Available for new software development opportunities, workflow automation, and full-stack web applications.",
    fcta_btn_contact: "Send Email",
    fcta_btn_cv: "Resume (PDF)",
    footer_bio: "Software Developer specialized in Python automation, SQL database modeling, and full-stack web development.",
    footer_col_nav: "Navigation",
    footer_col_connect: "Connect",
    footer_home: "Home",
    footer_about: "About me",
    footer_projects: "Projects",
    footer_dev_concepts: "Dev Concepts",
    footer_location: "📍 São Paulo, SP · Brazil",
    footer_top: "Back to top ↑",
    footer_rights: "All rights reserved."
  }
};
