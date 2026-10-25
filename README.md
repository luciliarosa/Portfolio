# 💻 Lucilia Rosa — Portfólio Profissional

<p align="center">
  <strong>Portfólio moderno, responsivo e bilíngue de Engenharia de Software e Desenvolvimento Full-Stack</strong>
</p>

<p align="center">
  <a href="README.md"><strong>Português</strong></a> •
  <a href="README.en.md"><strong>English</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Ativo-success?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/Tecnologias-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue?style=flat-square" alt="Tecnologias">
  <img src="https://img.shields.io/badge/Design-Minimalista%20%7C%20Neutro-0f172a?style=flat-square" alt="Design">
  <img src="https://img.shields.io/badge/Idiomas-PT--BR%20%7C%20EN-64748b?style=flat-square" alt="Idiomas">
  <img src="https://img.shields.io/badge/Licen%C3%A7a-MIT-green?style=flat-square" alt="Licença">
</p>

---

## 📌 Sobre o Projeto

Este repositório contém o código-fonte do **meu portfólio profissional**. Desenvolvido com foco em **clareza, performance, estética neutra e padrões modernos de engenharia de software** (inspirado em referências como *Linear, Vercel e GitHub*).

O objetivo do site é apresentar minha atuação como **Desenvolvedora de Software**, com ênfase em:
- **Automação de Processos com Python** (scripts, manipulação de dados, robôs com Playwright e integrações);
- **Modelagem e Consultas Avançadas em SQL** (PostgreSQL, SQL Server e bancos relacionais);
- **Desenvolvimento Web Full-Stack** (APIs RESTful, interfaces responsivas com JavaScript e React);
- **Trajetória Profissional, Formação Acadêmica e Certificações Internacionais**.

---

## 🚀 Principais Recursos

- 🎨 **Design System Neutro & Contemporâneo**:
  - Paleta limpa em tons de *Slate/Zinc* (`#0f172a`, `#334155`, `#e2e8f0`, `#ffffff`).
  - Tipografia moderna com as fontes **Inter** e **JetBrains Mono**.
  - Componentes minimalistas em estilo *Bento Grid*, cartões com elevação sutil e badges SVG.
- 🌐 **Arquitetura Bilíngue Nativa (i18n)**:
  - Alternância instantânea entre **Português (PT-BR)** e **Inglês (EN)** sem recarregamento de página.
  - Persistência da preferência de idioma do usuário via `localStorage`.
- 📁 **Visualizador Embutido de Certificados (Modal Interativo)**:
  - Modal com efeito de vidro (*backdrop-filter*) que permite visualizar certificados oficiais (TOEIC, Intercâmbio SGIC no Canadá, Pós-graduação e Graduações) diretamente no navegador, sem forçar downloads cegos.
- 📊 **Filtros Dinâmicos de Projetos com Métricas em Tempo Real**:
  - Filtragem combinada por categoria (*HTML & CSS, Python, JavaScript, SQL*) e por status (*Live, Em andamento, Estudo*).
  - Contadores numéricos calculados dinamicamente no DOM.
- 📱 **100% Responsivo & Leve**:
  - Construído com **Vanilla JavaScript** puro, sem bibliotecas pesadas ou frameworks desnecessários, garantindo carregamento ultrarrápido e compatibilidade universal.

---

## 📂 Estrutura de Pastas e Arquivos

O projeto adota uma arquitetura Full-Stack limpa, modular e com separação explícita entre **frontend**, **backend** e **documentação centralizada**:

```
Portfolio/
├── index.html                 # Ponto de entrada raiz com redirecionamento automático
│
├── frontend/                  # Camada de Interface & Cliente (Web Client)
│   ├── index.html             # Página inicial (Hero, Destaques, Skills e Resumo)
│   ├── pages/                 # Páginas internas da aplicação
│   │   ├── about-me.html      # Trajetória completa, experiência, formação e idiomas
│   │   ├── projects.html      # Catálogo de projetos com filtros dinâmicos e status
│   │   └── dev-area.html      # Guia conceitual: Frontend, Backend e Fullstack
│   ├── css/                   # Folhas de estilo modularizadas
│   │   ├── style.css          # Design tokens globais e estilos da Home
│   │   ├── about-me.css       # Estilos da página Sobre Mim e do visualizador de certificados
│   │   ├── project.css        # Estilos da página de Projetos e carrosséis
│   │   └── dev-area.css       # Estilos da página de conceitos dev
│   ├── js/                    # Scripts client-side e internacionalização
│   │   ├── main.js            # Lógica da Home, carrosséis e dicionário i18n
│   │   ├── about-me.js        # Lógica da Sobre Mim, modais e contadores animados
│   │   ├── projects.js        # Sistema de filtros e contadores reativos
│   │   └── dev-area.js        # Scripts de apoio da página dev-area
│   └── assets/                # Ativos visuais estáticos do frontend
│       └── img/               # Imagens de projetos, fotos e ativos visuais
│
├── backend/                   # Camada de Servidor & Serviços (Python / FastAPI)
│   ├── app/
│   │   ├── main.py            # API RESTful (endpoints de health, projetos e contato)
│   │   ├── models/            # Schemas de validação de dados (Pydantic v2)
│   │   │   └── schemas.py
│   │   └── services/          # Serviços de automação e processamento de rotinas
│   │       └── automation.py
│   ├── requirements.txt       # Dependências Python (FastAPI, Uvicorn, Pydantic)
│   ├── .env.example           # Variáveis de ambiente de exemplo
│   └── README.md              # Documentação específica de execução do backend
│
├── docs/                      # Documentos e credenciais centralizadas
│   ├── lucilia-rosa-resume-pt.pdf   # Currículo em Português
│   ├── lucilia-rosa-resume-en.pdf   # Resume em Inglês
│   ├── English-Intermediate.pdf     # Certificado oficial TOEIC
│   ├── cert-english-canada.pdf      # Certificado de intercâmbio (SGIC Vancouver)
│   ├── cert-descomplica.pdf         # Certificado Pós-graduação Full Stack
│   ├── cert-fatec-carapicuiba.pdf   # Certificado Tecnólogo ADS (FATEC)
│   └── cert-fatec-barueri.pdf       # Certificado Tecnólogo GTI (FATEC)
│
├── project/                   # Projetos e aplicações integradas ao portfólio
│   ├── README.md              # Documentação dos projetos integrados
│   └── notebook/              # Lucilia's Notebook (Caderno Digital Full-Stack)
│       ├── index.html         # Redirecionador para a página principal
│       ├── notebook.html      # Página principal e catálogo de aulas
│       ├── chatbot.js         # Assistente virtual de estudos em JavaScript puro
│       ├── frontend/          # Módulos cliente (HTML5, CSS3, JavaScript ES6+ e React)
│       ├── backend/           # Módulos servidor e dados (Python, Flask, Django e PostgreSQL)
│       ├── devops/            # Controle de versão (Git, GitHub e fluxos de branch)
│       ├── fundamentals/      # Base computacional (Lógica de Programação e Algoritmos)
│       └── languages/         # Idiomas e comunicação técnica (Inglês e Francês)
│
├── README.md                  # Documentação em Português
└── README.en.md               # Documentação em Inglês
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição / Uso |
| :--- | :--- |
| **HTML5** | Estruturação semântica, acessibilidade e metatags |
| **CSS3 Moderno** | Custom properties (tokens), CSS Grid, Flexbox, backdrop-filter e transições |
| **JavaScript (ES6+)** | Lógica de i18n, filtros reativos, controle de modais e carrosséis |
| **Google Fonts** | Tipografia profissional com **Inter** e **JetBrains Mono** |
| **Vetores SVG** | Ícones vetoriais em alta resolução para redes sociais, bandeiras e UI |

---

## 💻 Como Executar Localmente

Como o projeto foi desenvolvido com tecnologias web nativas, não há necessidade de instalação de dependências ou comandos de build.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/luciliarosa/Portfolio.git
   cd Portfolio
   ```

2. **Abra diretamente no navegador:**
   - Dê um duplo clique no arquivo `index.html`, ou
   - Utilize a extensão **Live Server** no VS Code, ou
   - Inicie um servidor local simples com Python:
     ```bash
     python3 -m http.server 8000
     ```
     Depois, acesse no navegador: `http://localhost:8000`

---

## 📬 Contato

- **LinkedIn:** [linkedin.com/in/lucilia-rosa](https://www.linkedin.com/in/lucilia-rosa)
- **GitHub:** [github.com/luciliarosa](https://github.com/luciliarosa)
- **E-mail:** [lucilia.passos.rosa@outlook.com](mailto:lucilia.passos.rosa@outlook.com)

---

<p align="center">
  Desenvolvido com dedicação por <strong>Lucilia Rosa</strong> © 2026.
</p>
