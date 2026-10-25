# 🐍 Backend API & Serviços de Automação — Lucilia Rosa

API RESTful desenvolvida em **Python** utilizando **FastAPI** para centralizar serviços de automação, endpoints de dados e processamento de mensagens do portfólio.

---

## 🛠️ Tecnologias
- **Python 3.10+**
- **FastAPI**
- **Uvicorn**
- **Pydantic v2**

---

## 🚀 Como Executar

1. **Acesse a pasta do backend:**
   ```bash
   cd backend
   ```

2. **Crie e ative um ambiente virtual:**
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate   # Linux/macOS
   # ou .venv\Scripts\activate no Windows
   ```

3. **Instale as dependências:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

5. **Acesse a documentação interativa Swagger:**
   - Swagger UI: `http://localhost:8000/docs`
   - Redoc: `http://localhost:8000/redoc`
