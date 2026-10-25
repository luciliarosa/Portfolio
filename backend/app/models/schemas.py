from typing import List, Optional
from pydantic import BaseModel, EmailStr, Field

class HealthResponse(BaseModel):
    status: str
    version: str
    environment: str

class ContactMessage(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: Optional[str] = Field("Contato via Portfólio", max_length=150)
    message: str = Field(..., min_length=10, max_length=2000)

class ProjectItem(BaseModel):
    id: str
    title: str
    category: str
    status: str
    description_pt: str
    description_en: str
    techs: List[str]
    repo_url: Optional[str] = None
    demo_url: Optional[str] = None
    images: List[str]
