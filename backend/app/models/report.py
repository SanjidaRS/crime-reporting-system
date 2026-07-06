from pydantic import BaseModel

class CrimeReport(BaseModel):

    crime_type: str
    location: str
    description: str
    suspects: int