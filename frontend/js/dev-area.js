
var T = {
  pt: {
    nav_home:"Home", nav_about:"Sobre mim", nav_projects:"Projetos",
    nav_dd_about:"Sobre mim",nav_dd_about_desc:"Trajetória, habilidades e história",
    nav_dd_projects:"Projetos",nav_dd_projects_desc:"HTML, Python, JavaScript e React",
    nav_dd_areas:"Frontend, Backend &amp; Fullstack",nav_dd_areas_desc:"O que é cada área e como se conectam",
    nav_home:"Home",nav_this:"Frontend, Backend &amp; Fullstack",
    eyebrow:"// conceitos essenciais · desenvolvimento web",
    article_title:"Frontend, Backend<br>&amp; Fullstack —<br><span style='font-size:.6em;font-style:italic;color:var(--ink3);'>O que é cada área e como se conectam</span>",
    tag_level:"Iniciante",meta_sub:"Guia completo para entender as áreas do dev",
    sec_intro:"A grande divisão do desenvolvimento web",
    intro_p1:"Quando falamos em desenvolvimento web, tudo que existe num site ou aplicação pode ser dividido em duas grandes partes: <strong>o que o usuário vê</strong> (Frontend) e <strong>o que acontece nos bastidores</strong> (Backend). Quem trabalha com as duas é chamado de <strong>Fullstack</strong>.",
    intro_p2:"Entender essa divisão é fundamental — tanto para escolher seu caminho de carreira quanto para trabalhar em equipe e entender o que cada pessoa faz no projeto.",
    intro_quote:"\"Se o desenvolvimento web fosse um restaurante: o Frontend seria o salão, a decoração e o cardápio — tudo que o cliente vê. O Backend seria a cozinha — onde o trabalho real acontece, mas o cliente nunca vê.\"",
    sec_areas:"As três áreas explicadas",
    front_tag:"Lado do cliente",front_desc:"Tudo que o usuário vê e interage diretamente — botões, formulários, animações, layout, cores.",
    techs_title:"Tecnologias",
    front_t1:"estrutura do conteúdo",front_t2:"estilo e layout",front_t3:"interatividade",front_t4:"interfaces modernas",front_t5:"outros frameworks",
    back_tag:"Lado do servidor",back_desc:"A lógica de negócio, banco de dados, autenticação e APIs — o motor que faz tudo funcionar.",
    back_t1:"Django, FastAPI, Flask",back_t2:"JavaScript no servidor",back_t3:"banco de dados",back_t4:"comunicação com o front",back_t5:"linguagens enterprise",
    full_tag:"Os dois lados",full_desc:"Trabalha tanto no frontend quanto no backend. Consegue desenvolver uma aplicação completa sozinho.",
    full_t1:"stack JavaScript completa",full_t2:"combo muito popular",full_t3:"framework fullstack",full_t4:"banco de dados",full_t5:"versionamento e entrega",
    sec_relation:"Como as camadas se comunicam",
    relation_p:"Num sistema web, as três camadas conversam em sequência. O usuário interage com o <strong>Frontend</strong>, que faz requisições para o <strong>Backend</strong>, que consulta o <strong>Banco de Dados</strong> e devolve a resposta.",
    rd_front_sub:"Roda no navegador do usuário",rd_arrow1:"requisição HTTP / API",rd_back_sub:"Roda no servidor",rd_arrow2:"query SQL / consulta",rd_db_label:"Banco de Dados",rd_db_sub:"Armazena os dados",
    relation_tip:"💡 <strong>Exemplo prático:</strong> quando você faz login num site, o Frontend envia seu email e senha para o Backend via API. O Backend consulta o Banco de Dados para verificar suas credenciais e retorna um token de autenticação para o Frontend exibir sua conta.",
    sec_compare:"Comparativo das áreas",col_aspect:"Aspecto",
    cmp1_label:"Foco",cmp1_front:"Interface e experiência do usuário",cmp1_back:"Lógica, dados e segurança",cmp1_full:"Visão completa do sistema",
    cmp2_label:"Onde roda",cmp2_front:"Navegador do usuário",cmp2_back:"Servidor / cloud",cmp2_full:"Nos dois ambientes",
    cmp3_label:"Linguagens",cmp3_front:"HTML, CSS, JavaScript",cmp3_back:"Python, Java, Node.js, C#",cmp3_full:"Combina os dois lados",
    cmp4_label:"Vê resultado",cmp4_front:"Imediatamente na tela",cmp4_back:"Via logs, APIs e testes",cmp4_full:"De ponta a ponta",
    cmp5_label:"Habilidades extras",cmp5_front:"Design, UX, responsividade",cmp5_back:"Banco de dados, segurança, DevOps",cmp5_full:"Gestão de projeto, arquitetura",
    cmp6_label:"Curva de aprendizado",cmp6_front:"Resultados visuais rápidos",cmp6_back:"Mais abstrato no início",cmp6_full:"Mais longa, mais ampla",
    sec_career:"Qual caminho escolher?",
    car1_h:"Escolha Frontend se...",car1_p:"Você gosta de ver resultado visual imediato, tem interesse em design e experiência do usuário, e quer criar interfaces bonitas e acessíveis.",car1_tip:"💡 Comece com HTML + CSS + JavaScript. Depois aprenda React ou Vue.",
    car2_h:"Escolha Backend se...",car2_p:"Você gosta de resolver problemas lógicos, trabalhar com dados, criar sistemas robustos e não se importa de trabalhar sem uma interface visual direta.",car2_tip:"💡 Comece com Python + SQL. Depois aprenda um framework como Django ou FastAPI.",
    car3_h:"Escolha Fullstack se...",car3_p:"Você quer entender o sistema como um todo, trabalhar em startups ou projetos menores, ou ter a flexibilidade de atuar em qualquer parte do projeto.",car3_tip:"💡 Domine uma área primeiro antes de expandir para o outro lado.",
    car4_h:"E a Lucilia?",car4_p:"Comecei pelas redes, migrei para o Backend com Python e SQL, e fui expandindo para o Frontend com HTML, CSS e JavaScript — me tornando Fullstack naturalmente.",car4_tip:"💡 Não existe caminho certo. O melhor é aquele que faz sentido pra você.",
    sec_rec:"Onde estudar — minhas indicações",
    rec_intro:"Estudar tecnologia por conta própria exige boas fontes. Essas são as duas plataformas que eu indico com convicção — cada uma para um perfil e momento diferente.",
    rec_alura_tag:"🎯 Para quem está começando ou quer evoluir no dia a dia",
    rec_alura_desc:"A maior plataforma de tecnologia do Brasil. Cursos práticos, didáticos e sempre atualizados — do HTML básico ao Machine Learning. Eu uso e recomendo de verdade.",
    rec_alura_badge:"🏷️ Desconto com meu link de indicação",
    rec_alura_p1:"Trilhas completas por área: Frontend, Backend, Data Science, DevOps",
    rec_alura_p2:"Cursos em português, bem didáticos e com projetos práticos",
    rec_alura_p3:"Sempre tem promoção — com meu link o desconto é garantido",
    rec_alura_p4:"Certificados reconhecidos pelo mercado",
    rec_alura_p5:"Acesso a toda a plataforma com uma assinatura só",
    rec_alura_note:"💬 <strong>Minha opinião:</strong> perfeita para quem quer aprender no próprio ritmo, com conteúdo de qualidade e sem gastar muito. Ideal para complementar a grade de uma faculdade ou para quem está migrando de área.",
    rec_alura_btn:"Acessar com desconto",
    rec_disclaimer:"* link de indicação — você ganha desconto e me apoia 🤍",
    rec_fiap_tag:"🏆 Para quem quer formação premium com foco no mercado",
    rec_fiap_desc:"Uma das faculdades de tecnologia mais respeitadas do Brasil. Metodologia mão na massa, professores do mercado e network de alto nível. É um investimento — e vale cada centavo.",
    rec_fiap_badge:"💎 Ensino premium · Investimento alto · Vale muito",
    rec_fiap_p1:"Metodologia 100% prática — você aprende fazendo projetos reais",
    rec_fiap_p2:"Professores atuantes no mercado, não só acadêmicos",
    rec_fiap_p3:"Network poderoso — alunos e ex-alunos em grandes empresas",
    rec_fiap_p4:"Cursos de graduação, pós e MBAs reconhecidos",
    rec_fiap_p5:"Parceria com empresas como IBM, Oracle e Microsoft",
    rec_fiap_note:"💬 <strong>Minha opinião:</strong> não fiz FIAP, mas acompanho de perto quem fez e o nível é outro. Se você tem condições de investir em uma formação mais robusta, é uma das melhores escolhas que você pode fazer na área de tech.",
    rec_fiap_btn:"Conhecer a FIAP",
    summary_h:"📌 Resumo",
    sum1:"<strong>Frontend</strong> — o que o usuário vê: HTML, CSS, JavaScript, React.",
    sum2:"<strong>Backend</strong> — o motor nos bastidores: Python, Node.js, SQL, APIs.",
    sum3:"<strong>Fullstack</strong> — trabalha nos dois lados e enxerga o sistema completo.",
    sum4:"As camadas se comunicam via <strong>requisições HTTP e APIs REST</strong>.",
    sum5:"Não existe área melhor — existe a área que combina com seu perfil e objetivos.",
    sum6:"O mercado valoriza muito quem entende as duas partes, mesmo que se especialize em uma.",
  },
  en: {
    nav_home:"Home", nav_about:"About me", nav_projects:"Projects",
    nav_dd_about:"About me",nav_dd_about_desc:"Background, skills and story",
    nav_dd_projects:"Projects",nav_dd_projects_desc:"HTML, Python, JavaScript and React",
    nav_dd_areas:"Frontend, Backend &amp; Fullstack",nav_dd_areas_desc:"What each area is and how they connect",
    nav_home:"Home",nav_this:"Frontend, Backend &amp; Fullstack",
    eyebrow:"// essential concepts · web development",
    article_title:"Frontend, Backend<br>&amp; Fullstack —<br><span style='font-size:.6em;font-style:italic;color:var(--ink3);'>What each area is and how they connect</span>",
    tag_level:"Beginner",meta_sub:"Complete guide to understanding dev areas",
    sec_intro:"The great division of web development",
    intro_p1:"When we talk about web development, everything in a site or application can be split into two major parts: <strong>what the user sees</strong> (Frontend) and <strong>what happens behind the scenes</strong> (Backend). Someone who works with both is called a <strong>Fullstack</strong> developer.",
    intro_p2:"Understanding this division is essential — both for choosing your career path and for working in a team and understanding what each person does on a project.",
    intro_quote:"\"If web development were a restaurant: the Frontend would be the dining room, the decor and the menu — everything the customer sees. The Backend would be the kitchen — where the real work happens, but the customer never sees.\"",
    sec_areas:"The three areas explained",
    front_tag:"Client side",front_desc:"Everything the user sees and directly interacts with — buttons, forms, animations, layout, colors.",
    techs_title:"Technologies",
    front_t1:"content structure",front_t2:"styling and layout",front_t3:"interactivity",front_t4:"modern interfaces",front_t5:"other frameworks",
    back_tag:"Server side",back_desc:"Business logic, database, authentication and APIs — the engine that makes everything work.",
    back_t1:"Django, FastAPI, Flask",back_t2:"JavaScript on the server",back_t3:"database",back_t4:"communication with the front",back_t5:"enterprise languages",
    full_tag:"Both sides",full_desc:"Works on both frontend and backend. Can develop a complete application independently.",
    full_t1:"full JavaScript stack",full_t2:"very popular combo",full_t3:"fullstack framework",full_t4:"database",full_t5:"versioning and delivery",
    sec_relation:"How the layers communicate",
    relation_p:"In a web system, the three layers communicate in sequence. The user interacts with the <strong>Frontend</strong>, which makes requests to the <strong>Backend</strong>, which queries the <strong>Database</strong> and sends the response back.",
    rd_front_sub:"Runs in the user's browser",rd_arrow1:"HTTP request / API",rd_back_sub:"Runs on the server",rd_arrow2:"SQL query / database call",rd_db_label:"Database",rd_db_sub:"Stores the data",
    relation_tip:"💡 <strong>Practical example:</strong> when you log into a website, the Frontend sends your email and password to the Backend via API. The Backend queries the Database to verify your credentials and returns an authentication token for the Frontend to display your account.",
    sec_compare:"Area comparison",col_aspect:"Aspect",
    cmp1_label:"Focus",cmp1_front:"Interface and user experience",cmp1_back:"Logic, data and security",cmp1_full:"Complete system view",
    cmp2_label:"Where it runs",cmp2_front:"User's browser",cmp2_back:"Server / cloud",cmp2_full:"In both environments",
    cmp3_label:"Languages",cmp3_front:"HTML, CSS, JavaScript",cmp3_back:"Python, Java, Node.js, C#",cmp3_full:"Combines both sides",
    cmp4_label:"Sees result",cmp4_front:"Immediately on screen",cmp4_back:"Via logs, APIs and tests",cmp4_full:"End to end",
    cmp5_label:"Extra skills",cmp5_front:"Design, UX, responsiveness",cmp5_back:"Database, security, DevOps",cmp5_full:"Project management, architecture",
    cmp6_label:"Learning curve",cmp6_front:"Quick visual results",cmp6_back:"More abstract at first",cmp6_full:"Longer, broader",
    sec_career:"Which path to choose?",
    car1_h:"Choose Frontend if...",car1_p:"You like seeing immediate visual results, are interested in design and user experience, and want to create beautiful and accessible interfaces.",car1_tip:"💡 Start with HTML + CSS + JavaScript. Then learn React or Vue.",
    car2_h:"Choose Backend if...",car2_p:"You enjoy solving logical problems, working with data, building robust systems and don't mind working without a direct visual interface.",car2_tip:"💡 Start with Python + SQL. Then learn a framework like Django or FastAPI.",
    car3_h:"Choose Fullstack if...",car3_p:"You want to understand the system as a whole, work in startups or smaller projects, or have the flexibility to work on any part of the project.",car3_tip:"💡 Master one area first before expanding to the other side.",
    car4_h:"And Lucilia?",car4_p:"I started with computer networks, moved to Backend with Python and SQL, and gradually expanded to Frontend with HTML, CSS and JavaScript — becoming Fullstack naturally.",car4_tip:"💡 There is no right path. The best one is the one that makes sense for you.",
    sec_rec:"Where to study — my recommendations",
    rec_intro:"Studying technology on your own requires good sources. These are the two platforms I recommend wholeheartedly — each for a different profile and moment.",
    rec_alura_tag:"🎯 For those starting out or growing day by day",
    rec_alura_desc:"Brazil's largest technology platform. Practical, didactic and always up-to-date courses — from basic HTML to Machine Learning. I use it and recommend it genuinely.",
    rec_alura_badge:"🏷️ Discount with my referral link",
    rec_alura_p1:"Complete learning paths: Frontend, Backend, Data Science, DevOps",
    rec_alura_p2:"Courses in Portuguese, well-taught and with hands-on projects",
    rec_alura_p3:"Always has promotions — my link guarantees a discount",
    rec_alura_p4:"Market-recognized certificates",
    rec_alura_p5:"Access to the entire platform with a single subscription",
    rec_alura_note:"💬 <strong>My take:</strong> perfect for those who want to learn at their own pace, with quality content without spending a lot. Ideal for complementing a degree or for career changers.",
    rec_alura_btn:"Access with discount",
    rec_disclaimer:"* referral link — you get a discount and support me 🤍",
    rec_fiap_tag:"🏆 For those who want premium training with a market focus",
    rec_fiap_desc:"One of Brazil's most respected technology schools. Hands-on methodology, industry professors and a top-level network. It's an investment — and worth every penny.",
    rec_fiap_badge:"💎 Premium education · High investment · Very much worth it",
    rec_fiap_p1:"100% hands-on methodology — you learn by doing real projects",
    rec_fiap_p2:"Active industry practitioners as professors, not just academics",
    rec_fiap_p3:"Powerful network — students and alumni at major companies",
    rec_fiap_p4:"Recognized undergraduate, postgraduate and MBA programs",
    rec_fiap_p5:"Partnerships with companies like IBM, Oracle and Microsoft",
    rec_fiap_note:"💬 <strong>My take:</strong> I didn't attend FIAP, but I closely follow those who did and the level is something else. If you can invest in more robust training, it's one of the best choices you can make in tech.",
    rec_fiap_btn:"Explore FIAP",
    summary_h:"📌 Summary",
    sum1:"<strong>Frontend</strong> — what the user sees: HTML, CSS, JavaScript, React.",
    sum2:"<strong>Backend</strong> — the engine behind the scenes: Python, Node.js, SQL, APIs.",
    sum3:"<strong>Fullstack</strong> — works on both sides and sees the complete system.",
    sum4:"The layers communicate via <strong>HTTP requests and REST APIs</strong>.",
    sum5:"There is no better area — there is the area that matches your profile and goals.",
    sum6:"The market greatly values those who understand both sides, even if they specialize in one.",
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
    document.title='Frontend, Backend & Fullstack — Lucilia\'s Notebook';
    document.getElementById('btn-pt').classList.toggle('active',l==='pt');
    document.getElementById('btn-en').classList.toggle('active',l==='en');
    document.body.classList.remove('lang-switching');
  },180);
}
if(lang==='en') setLang('en');

function toggleNavDropdown(){
  const btn=document.getElementById('navDropdownBtn');
  const panel=document.getElementById('navDropdownPanel');
  const open=panel.classList.contains('open');
  btn.classList.toggle('open',!open);
  panel.classList.toggle('open',!open);
}
document.addEventListener('click',e=>{
  const dd=document.getElementById('navDropdown');
  if(dd&&!dd.contains(e.target)){
    document.getElementById('navDropdownBtn')?.classList.remove('open');
    document.getElementById('navDropdownPanel')?.classList.remove('open');
  }

  /* ─── BOTÃO VOLTAR AO TOPO ─── */
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if (btn) {
    btn.classList.toggle('visible', window.scrollY > 400);
  }
});
});