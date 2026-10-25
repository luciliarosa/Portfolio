"""
API Backend do Portfólio — Lucilia Rosa
FastAPI REST API para gestão de contatos, projetos e serviços de automação.
"""
from typing import List
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware

from app.models.schemas import HealthResponse, ContactMessage, ProjectItem
from app.services.automation import AutomationService

app = FastAPI(
    title="Lucilia Rosa — Portfolio API",
    description="Backend API para suporte a rotinas, consultas de projetos e integrações do portfólio.",
    version="1.0.0"
)

# Configuração de CORS para permitir requisições do frontend local e produção
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PROJECTS_DATABASE: List[dict] = [
    {
        "id": "lucilias-notebook",
        "title": "Lucilia's Notebook",
        "category": "html",
        "status": "live",
        "description_pt": "Caderno digital de estudos sobre full-stack com conceitos de lógica, Python e banco de dados.",
        "description_en": "Digital full-stack study notebook covering programming logic, Python, and databases.",
        "techs": ["HTML5", "CSS3", "JavaScript"],
        "repo_url": "https://github.com/luciliarosa/notebookon.git",
        "demo_url": "https://lucilliarosa.com.br/notebook/notebook.html",
        "images": ["assets/img/project1.png", "assets/img/project2.png"]
    },
    {
        "id": "luci-college",
        "title": "Luci College",
        "category": "python",
        "status": "study wip",
        "description_pt": "Aplicação web full-stack de catálogo de prêmios com backend em Python e persistência em PostgreSQL.",
        "description_en": "Full-stack web rewards catalog application powered by Python and PostgreSQL.",
        "techs": ["Python", "Flask", "PostgreSQL", "JavaScript"],
        "repo_url": "https://github.com/luciliarosa/LuciCollege.git",
        "demo_url": "https://luci-college.vercel.app/",
        "images": ["assets/img/project2-1.png", "assets/img/project2-2.png"]
    },
    {
        "id": "jogo-da-velha",
        "title": "Jogo da Velha",
        "category": "js",
        "status": "live",
        "description_pt": "Jogo interativo com manipulação avançada de DOM e detecção de vitória/empate em tempo real.",
        "description_en": "Interactive tic-tac-toe game built with vanilla DOM manipulation and game logic.",
        "techs": ["JavaScript", "HTML5", "CSS3"],
        "repo_url": "https://github.com/luciliarosa/jogodavelha-master.git",
        "demo_url": "https://jogodavelha-master.vercel.app",
        "images": ["assets/img/project3-1.png", "assets/img/project3-2.png"]
    }
]

@app.get("/", tags=["Root"])
def root():
    return {
        "message": "Lucilia Rosa Portfolio API está online.",
        "docs": "/docs",
        "version": "1.0.0"
    }

@app.get("/api/health", response_model=HealthResponse, tags=["Health"])
def health_check():
    return HealthResponse(
        status="healthy",
        version="1.0.0",
        environment="production"
    )

@app.get("/api/projects", response_model=List[ProjectItem], tags=["Projects"])
def get_projects(category: str = None):
    if category and category != "all":
        filtered = [p for p in PROJECTS_DATABASE if p["category"] == category]
        return filtered
    return PROJECTS_DATABASE

@app.post("/api/contact", status_code=status.HTTP_201_CREATED, tags=["Contact & Automation"])
def send_contact_message(msg: ContactMessage):
    try:
        result = AutomationService.process_contact_submission(msg.dict())
        return {
            "success": True,
            "message": "Mensagem recebida e processada com sucesso!",
            "audit": result
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Erro interno no processamento: {str(e)}"
        )
