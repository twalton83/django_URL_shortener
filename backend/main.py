from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from validate_url import validate_url


class URL(BaseModel):
    url: str


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/")
async def urlSubmit(url: URL):
    if validate_url(url):
        return {"message": "The URL submitted is " + url.url}
    else:
        return {"message": "Not a valid URL"}
