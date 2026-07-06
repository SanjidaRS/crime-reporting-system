from app.utils.report_id import generate_report_id

def create_report(report):

    return {

        "report_id": generate_report_id(),

        "status": "Pending",

        "report": report

    }