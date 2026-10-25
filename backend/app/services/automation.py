"""
Serviço de Automação e Processamento de Mensagens / Dados.
Exemplifica as competências de automação em Python para rotinas corporativas.
"""
from datetime import datetime
from typing import Dict, Any

class AutomationService:
    @staticmethod
    def process_contact_submission(data: Dict[str, Any]) -> Dict[str, Any]:
        """
        Simula o pipeline de automação para mensagens recebidas:
        1. Sanitização dos dados
        2. Registro em log estruturado
        3. Enfileiramento para envio de notificação / webhook
        """
        timestamp = datetime.utcnow().isoformat()
        
        # Estruturação para webhook ou persistência SQL
        payload = {
            "received_at": timestamp,
            "sender_name": data.get("name"),
            "sender_email": data.get("email"),
            "subject": data.get("subject"),
            "status": "processed",
            "audit_id": f"MSG-{int(datetime.utcnow().timestamp())}"
        }
        
        return payload

    @staticmethod
    def generate_metrics_summary(projects: list) -> Dict[str, int]:
        """
        Calcula indicadores consolidados de projetos para relatórios e dashboards.
        """
        metrics = {
            "total": len(projects),
            "live": sum(1 for p in projects if "live" in p.get("status", "")),
            "wip": sum(1 for p in projects if "wip" in p.get("status", "")),
            "study": sum(1 for p in projects if "study" in p.get("status", "")),
        }
        return metrics
