let lang = localStorage.getItem('nb_lang') || 'pt';

function setLang(l) {
  lang = l;
  localStorage.setItem('nb_lang', l);
  document.body.classList.add('lang-switching');
  setTimeout(function() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var v = T[l][el.getAttribute('data-i18n')];
      if (v !== undefined) el.innerHTML = v;
    });
    document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en';
    document.title = l === 'pt' ? 'Lucilia Rosa' : 'Lucilia Rosa';
    document.getElementById('btn-pt').classList.toggle('active', l === 'pt');
    document.getElementById('btn-en').classList.toggle('active', l === 'en');
    document.body.classList.remove('lang-switching');
  }, 180);
}

if (lang === 'en') setLang('en');

/* ─── CARROSSEL FUNCIONANDO ─── */
function buildCarousels(){
  document.querySelectorAll('.card-carousel').forEach(container => {

    const raw = container.getAttribute('data-images');
    let images = [];

    try {
      images = JSON.parse(raw);
    } catch(e){
      console.error('Erro no JSON do carousel', e);
      return;
    }

    if (!images.length) return;

    const track = document.createElement('div');
    track.classList.add('carousel-track');

    images.forEach(src => {
      const slide = document.createElement('div');
      slide.classList.add('carousel-slide');

      const img = document.createElement('img');
      img.src = src;

      slide.appendChild(img);
      track.appendChild(slide);
    });

    container.appendChild(track);

    let index = 0;

    setInterval(() => {
      index = (index + 1) % images.length;
      track.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
  });
}

/* ─── BOTÃO VOLTAR AO TOPO ─── */
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if (btn) {
    btn.classList.toggle('visible', window.scrollY > 400);
  }
});

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  setLang(lang);
  buildCarousels();
});

const T = {
    pt:{
      nav_home:"Home", nav_about:"Sobre mim", nav_projects:"Projetos",
      nav_areas:"Frontend · Backend · Fullstack", nav_notebook:"Caderno de Estudos",
      hero_title:"Software Developer", hero_badge:"São Paulo, BR",
      hero_bio:"Desenvolvedora focada em automação, aplicações web e soluções orientadas a dados. Experiência com Python, SQL, Power Platform e desenvolvimento full-stack, criando ferramentas que melhoram processos e resolvem problemas reais.",
      cta_projects:"Ver projetos", cta_about:"Sobre mim",
      hero_status:"Open to Work",
      sec_skills:"Habilidades", sec_projects:"Projetos em destaque", sec_about:"Sobre mim",
      sec_experience:"Experiência",
      exp_summary:"Experiência profissional em desenvolvimento de software, automação e soluções tecnológicas.",
      exp_th_role:"Cargo", exp_th_company:"Empresa", exp_th_focus:"Foco",
      exp_role1:"Desenvolvedora de Sistemas", exp_focus1:"Python, Automação e Soluções de Dados",
      exp_role2:"Analista de Sustentação",    exp_focus2:"SQL, Frontend e Suporte a Sistemas",
      exp_role3:"Técnica em Redes",           exp_focus3:"Infraestrutura e Monitoramento de Redes",
      exp_btn:"Ver experiência completa →",
      proj1_name:"Lucilia's Notebook", 
      proj1_desc:"Caderno digital de anotações de aulas sobre desenvolvimento full-stack. Reúne conceitos de lógica de programação, Python, Git, GitHub, banco de dados e outros tópicos. Desenvolvido inteiramente no front-end com HTML, CSS e JavaScript, sem dependências externas.",
      proj2_name:"Luci College", 
      proj2_desc:"Aplicação web full-stack de catálogo de prêmios para alunos da Luci College Technology Campus. Alunos acumulam pontos por atividades acadêmicas e os resgatam por produtos e serviços exclusivos. Interface construída em HTML, CSS e JavaScript, back-end em Python e dados persistidos em PostgreSQL.",
      proj3_name:"Jogo da Velha",
      proj3_desc:"Jogo da velha interativo feito do zero com HTML, CSS e JavaScript puro. Detecta vitória, empate e permite reiniciar a partida — sem dependências externas.",
      proj_link:"Ver →", all_projects:"Ver todos os projetos →",
      about_h1:"Quem sou eu", 
      about_p1:"Desenvolvedora Full-Stack e Automation Developer baseada em São Paulo, com experiência em suporte técnico, automação de processos e desenvolvimento de soluções digitais. Atualmente focada em Python, engenharia de software e tecnologias cloud, combinando experiência corporativa com projetos práticos e aprendizado contínuo.",
      about_h2:"O que eu faço",
      about_li1:"Desenvolvimento de aplicações web e soluções full-stack", 
      about_li2:"Automação de processos com Python e Power Platform", 
      about_li3:"Modelagem, consultas e análise de dados com SQL", 
      about_li4:"Criação de dashboards e soluções orientadas a dados",
      about_li5:"Controle de versão e colaboração com Git & GitHub",
      full_about:"Ler história completa →",
      footer_rights:"Todos os direitos reservados."
    },
    en:{
      nav_home:"Home", nav_about:"About me", nav_projects:"Projects",
      nav_areas:"Frontend · Backend · Fullstack", nav_notebook:"Study Notebook",
      hero_title:"Software Developer", hero_badge:"São Paulo, BR",
      hero_bio:"Developer focused on automation, web applications, and data-driven solutions. Experienced with Python, SQL, Power Platform, and full-stack development, building tools that improve processes and solve real-world problems.",
      cta_projects:"View projects", cta_about:"About me",
      hero_status:"Open to Work",
      sec_skills:"Skills", sec_projects:"Featured projects", sec_about:"About me",
      sec_experience:"Experience",
      exp_summary:"Professional experience in software development, automation and technology solutions.",
      exp_th_role:"Role", exp_th_company:"Company", exp_th_focus:"Focus",
      exp_role1:"Systems Developer",  exp_focus1:"Python, Automation & Data Solutions",
      exp_role2:"Support Analyst",    exp_focus2:"SQL, Frontend & Systems Support",
      exp_role3:"Network Technician", exp_focus3:"Infrastructure & Network Monitoring",
      exp_btn:"View full experience →",
      proj1_name:"Lucilia's Notebook", proj1_desc:"Digital notebook for full-stack development studies and class notes. Covers programming logic, Python, Git, GitHub, databases, and other technology topics. Fully built on the front-end using HTML, CSS and JavaScript, with no external dependencies",
      proj2_name:"Luci College", proj2_desc:"A full-stack web application for a rewards catalog at Luci College Technology Campus. Students accumulate points through academic activities and redeem them for exclusive products and services. Front-end built with HTML, CSS, and JavaScript, back-end powered by Python, and data persisted in PostgreSQL.", 
      proj3_name:"Tic-Tac-Toe", proj3_desc:"Interactive tic-tac-toe game built from scratch with plain HTML, CSS and JavaScript. Detects win, draw and allows restarting the match — no external dependencies.",
      proj_link:"View →", all_projects:"View all projects →",
      about_h1:"Who I am", 
      about_p1:"Full-Stack and Automation Developer based in São Paulo, with experience in technical support, process automation, and digital solutions development. Currently focused on Python, software engineering, and cloud technologies, combining corporate experience with hands-on projects and continuous learning.",
      about_h2:"What I do",
      about_li1:"Web application and full-stack solutions development", 
      about_li2:"Process automation using Python and Power Platform", 
      about_li3:"Data modeling, querying, and analysis with SQL", 
      about_li4:"Dashboard creation and data-driven solutions",
      about_li5:"Version control and collaboration using Git & GitHub",
      full_about:"Read full story →",
      footer_rights:"All rights reserved."
    }
  }