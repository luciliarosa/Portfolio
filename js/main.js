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
      eyebrow:"// fullstack & automation developer",
      hero_title:"Fullstack &amp; Automation Developer", hero_badge:"São Paulo, BR",
      hero_bio:"Desenvolvedora com foco em automação, aplicações web e aprendizado contínuo. Apaixonada por código limpo, boas interfaces e resolver problemas reais com tecnologia.",
      cta_projects:"Ver projetos", cta_about:"Sobre mim",
      hero_status:"Disponível para oportunidades",
      sec_skills:"Habilidades", sec_projects:"Projetos em destaque", sec_about:"Sobre mim",
      proj1_name:"Lucilia's Notebook", 
      proj1_desc:"Caderno digital de anotações de aulas sobre desenvolvimento full-stack. Reúne conceitos de lógica de programação, Python, Git, GitHub, banco de dados e outros tópicos. Desenvolvido inteiramente no front-end com HTML, CSS e JavaScript, sem dependências externas.",
      proj2_name:"Luci College", 
      proj2_desc:"Aplicação web full-stack de catálogo de prêmios para alunos da Luci College Technology Campus. Alunos acumulam pontos por atividades acadêmicas e os resgatam por produtos e serviços exclusivos. Interface construída em HTML, CSS e JavaScript, back-end em Python e dados persistidos em PostgreSQL.",
      proj3_name:"Interfaces React", 
      proj3_desc:"Componentes e aplicações com React — hooks, estado e consumo de APIs externas.",
      proj_link:"Ver →", all_projects:"Ver todos os projetos →",
      about_h1:"Quem sou eu", 
      about_p1:"Desenvolvedora Fullstack &amp; Automation com base em São Paulo. Estou em constante evolução, combinando cursos, projetos práticos e muita documentação — além de um caderno de estudos que virou projeto por si só.",
      about_h2:"O que eu faço",
      about_li1:"Desenvolvimento web (Frontend &amp; Fullstack)", 
      about_li2:"Automação com Python", 
      about_li3:"Modelagem e consultas SQL", 
      about_li4:"Controle de versão com Git &amp; GitHub",
      full_about:"Ler história completa →",
      footer_rights:"Todos os direitos reservados.", 
      footer_made:"Feito com 🍫 e muito código"
    },
    en:{
      nav_home:"Home", nav_about:"About me", nav_projects:"Projects",
      nav_areas:"Frontend · Backend · Fullstack", nav_notebook:"Study Notebook",
      eyebrow:"// fullstack & automation developer",
      hero_title:"Fullstack &amp; Automation Developer", hero_badge:"São Paulo, BR",
      hero_bio:"Developer focused on automation and web applications.",
      cta_projects:"View projects", cta_about:"About me",
      hero_status:"Open to opportunities",
      sec_skills:"Skills", sec_projects:"Featured projects", sec_about:"About me",
      proj1_name:"Lucilia's Notebook", proj1_desc:"A digital class notebook covering full-stack development concepts. Includes notes on programming logic, Python, Git, GitHub, databases, and more. Built entirely on the front-end using HTML, CSS, and JavaScript, with no external dependencies.",
      proj2_name:"Luci College", proj2_desc:"A full-stack web application for a rewards catalog at Luci College Technology Campus. Students accumulate points through academic activities and redeem them for exclusive products and services. Front-end built with HTML, CSS, and JavaScript, back-end powered by Python, and data persisted in PostgreSQL.", 
      proj3_name:"React Interfaces", proj3_desc:"Components and applications with React — hooks, state and external API consumption.",
      proj_link:"View →", all_projects:"View all projects →",
      about_h1:"Who I am", 
      about_p1:"Fullstack &amp; Automation Developer based in São Paulo. Constantly evolving, combining courses, hands-on projects and lots of documentation — plus a study notebook that became a project of its own.",
      about_h2:"What I do",
      about_li1:"Web development (Frontend &amp; Fullstack)", 
      about_li2:"Automation with Python", 
      about_li3:"SQL modeling and queries", 
      about_li4:"Version control with Git &amp; GitHub",
      full_about:"Read full story →",
      footer_rights:"All rights reserved.", 
      footer_made:"Made with 🍫 and code"
    }
  }