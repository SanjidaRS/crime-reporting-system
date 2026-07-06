from fastapi import FastAPI
from app.routers.reports import router

app = FastAPI()

app.include_router(router)

@app.get("/")
def home():
    return {"message": "Crime Reporting API Running"}