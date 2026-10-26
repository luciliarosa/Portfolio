# 💻 Lucilia Rosa — Professional Portfolio

<p align="center">
  <strong>Modern, responsive, and bilingual portfolio for Software Engineering and Full-Stack Development</strong>
</p>

<p align="center">
  <a href="README.md"><strong>Português</strong></a> •
  <a href="README.en.md"><strong>English</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/Tech%20Stack-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue?style=flat-square" alt="Tech Stack">
  <img src="https://img.shields.io/badge/Design-Minimalist%20%7C%20Neutral-0f172a?style=flat-square" alt="Design">
  <img src="https://img.shields.io/badge/Languages-PT--BR%20%7C%20EN-64748b?style=flat-square" alt="Languages">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
</p>

---

## 📌 About the Project

This repository contains the source code for my **professional developer portfolio**. Designed with a strong focus on **clarity, high performance, neutral aesthetics, and contemporary software engineering design standards** (inspired by product references like *Linear, Vercel, and GitHub*).

The purpose of this portfolio is to showcase my expertise as a **Software Developer**, highlighting:
- **Process Automation with Python** (scripting, data pipelines, web scrapers with Playwright, and system integrations);
- **Relational Databases & SQL** (PostgreSQL, SQL Server, complex queries, and data modeling);
- **Full-Stack Web Development** (RESTful APIs, responsive interfaces built with modern JavaScript and React);
- **Career Trajectory, Formal Education, and International Certifications**.

---

## 🚀 Key Features

- 🎨 **Modern & Neutral Tech Design System**:
  - Clean *Slate/Zinc* color palette (`#0f172a`, `#334155`, `#e2e8f0`, `#ffffff`).
  - Professional typography powered by **Inter** and **JetBrains Mono**.
  - Minimalist *Bento Grid* components, subtle card elevations, and crisp SVG badges.
- 🌐 **Native Bilingual Support (i18n)**:
  - Instant toggle between **Portuguese (PT-BR)** and **English (EN)** without page reloads.
  - Automatically preserves language preference in `localStorage`.
- 📁 **Embedded Certificate Viewer (Interactive Modal)**:
  - Frosted glass modal (*backdrop-filter*) that allows viewing official certifications (TOEIC, Canada SGIC Exchange Program, Postgraduate Degree, and Bachelor’s Degrees) directly in the browser, without forcing immediate blind downloads.
- 📊 **Dynamic Project Filters with Real-Time Counters**:
  - Combined filtering by category (*HTML & CSS, Python, JavaScript, SQL*) and status (*Live, In Progress, Study*).
  - Metrics and project counters calculated dynamically in the DOM.
- 📱 **100% Responsive & Lightweight**:
  - Built with pure **Vanilla JavaScript**—no heavy third-party libraries or bloated dependencies, ensuring lightning-fast load times and cross-browser consistency.

---

## 📂 Folder and File Architecture

The repository follows a clean, modular Full-Stack architecture with explicit separation between **frontend**, **backend**, and **centralized documentation**:

```
Portfolio/
├── index.html                 # Root entrypoint with automatic redirection to frontend
│
├── frontend/                  # Web Client & Interface Layer
│   ├── index.html             # Landing page (Hero, Featured Projects, Skills, and Summary)
│   ├── pages/                 # Inner application pages
│   │   ├── about-me.html      # Full trajectory, work experience, education, and language roadmap
│   │   ├── projects.html      # Interactive project catalog with live filtering and status badges
│   │   └── dev-area.html      # Technical concepts guide: Frontend, Backend, and Fullstack
│   ├── css/                   # Modularized stylesheets
│   │   ├── style.css          # Global design tokens and Homepage styling
│   │   ├── about-me.css       # Styles for About Me page and certificate modal
│   │   ├── project.css        # Styles for Projects page, filters, and carousels
│   │   └── dev-area.css       # Styles for Dev Area concept guide
│   ├── js/                    # Client-side JavaScript & internationalization
│   │   ├── main.js            # Homepage interactions, carousels, and i18n dictionary
│   │   ├── about-me.js        # About Me logic, certificate modal handler, and animated counters
│   │   ├── projects.js        # Multi-criteria filtering system and project stats calculator
│   │   └── dev-area.js        # Supporting scripts for dev-area page
│   └── assets/                # Static frontend assets
│       └── img/               # Project screenshots, photography, and brand assets
│
├── backend/                   # Server & Services Layer (Python / FastAPI)
│   ├── app/
│   │   ├── main.py            # RESTful API (health, projects, and contact endpoints)
│   │   ├── models/            # Pydantic v2 data validation schemas
│   │   │   └── schemas.py
│   │   └── services/          # Automation pipelines & message processing
│   │       └── automation.py
│   ├── requirements.txt       # Python dependencies (FastAPI, Uvicorn, Pydantic)
│   ├── .env.example           # Environment variables template
│   └── README.md              # Backend execution and testing guide
│
├── docs/                      # Centralized credentials, resumes, and certificates
│   ├── lucilia-rosa-resume-pt.pdf   # Resume in Portuguese
│   ├── lucilia-rosa-resume-en.pdf   # Resume in English
│   ├── English-Intermediate.pdf     # Official TOEIC certificate
│   ├── cert-english-canada.pdf      # Canada SGIC exchange program certificate
│   ├── cert-descomplica.pdf         # Postgraduate certificate in Full Stack Development
│   ├── cert-fatec-carapicuiba.pdf   # Systems Analysis & Development degree certificate
│   └── cert-fatec-barueri.pdf       # IT Management degree certificate
│

├── README.md                  # Documentation in Portuguese
└── README.en.md               # Documentation in English
```

---

## 🛠️ Tech Stack & Tools

| Technology | Purpose & Implementation |
| :--- | :--- |
| **HTML5** | Semantic structure, accessibility standards, and SEO metadata |
| **Modern CSS3** | Custom properties (tokens), CSS Grid, Flexbox, backdrop-filter, and smooth transitions |
| **JavaScript (ES6+)** | Dynamic i18n switching, reactive filtering, modal dialogs, and carousels |
| **Google Fonts** | Industry-standard typography featuring **Inter** and **JetBrains Mono** |
| **Vector SVGs** | Scalable, high-density icons for socials, flags, and UI controls |

---

## 💻 Running Locally

Because this project is built entirely on native web standards, it requires no build steps or package managers.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/luciliarosa/Portfolio.git
   cd Portfolio
   ```

2. **Open in your browser:**
   - Double-click `index.html` to open it locally, or
   - Use VS Code's **Live Server** extension, or
   - Start a lightweight Python web server:
     ```bash
     python3 -m http.server 8000
     ```
     Then navigate to: `http://localhost:8000`

---

## 📬 Contact & Socials

- **LinkedIn:** [linkedin.com/in/lucilia-rosa](https://www.linkedin.com/in/lucilia-rosa)
- **GitHub:** [github.com/luciliarosa](https://github.com/luciliarosa)
- **Email:** [lucilia.passos.rosa@outlook.com](mailto:lucilia.passos.rosa@outlook.com)

---

<p align="center">
  Crafted with care by <strong>Lucilia Rosa</strong> © 2026.
</p>
