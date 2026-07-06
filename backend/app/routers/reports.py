from fastapi import APIRouter
from app.models.report import CrimeReport
from app.services.report_service import create_report

router = APIRouter()

@router.post("/report")
def report(report: CrimeReport):
    return create_report(report)

print("Router loaded successfully")
print(router)    