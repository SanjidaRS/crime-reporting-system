from datetime import datetime

report_counter = 1

def generate_report_id():
    global report_counter

    year = datetime.now().year

    report_id = f"CR-{year}-{report_counter:06d}"

    report_counter += 1

    return report_id