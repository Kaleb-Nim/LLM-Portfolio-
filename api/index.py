from http.server import BaseHTTPRequestHandler
from fastapi.middleware.cors import CORSMiddleware
from .PineconeUtils.Query import PineconeQuery
import os
import json
import requests
from fastapi import FastAPI, Request, HTTPException

from dotenv import load_dotenv

PATH_TO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
print(os.path.join(PATH_TO_ROOT, ".env"))
# Check if dev or prod
load_dotenv(dotenv_path=os.path.join(PATH_TO_ROOT, ".env"))

# Init PineconeQuery
PINECONE_API_KEY:str = os.getenv("PINECONE_API_KEY")
PINECONE_ENVIRONMENT:str = os.getenv("PINECONE_ENVIRONMENT")
INDEX_NAME:str = os.getenv("PINECONE_INDEX_NAME")
print(PINECONE_API_KEY,PINECONE_ENVIRONMENT,INDEX_NAME)
pineconeQuery:PineconeQuery = PineconeQuery(PINECONE_API_KEY,PINECONE_ENVIRONMENT,INDEX_NAME)

from fastapi import FastAPI
app = FastAPI()

# Configure CORS to allow all origins, methods, and headers
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # This allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # This allows all HTTP methods
    allow_headers=["*"],  # This allows all headers
)
@app.get("/api/python")
def hello_world():
    return {"message": "Hello World"}

@app.post("/api/message")
async def post_chat(req: Request):

    try:
        data = await req.json()

        # Extract the last message
        query = data.get("messages", [])[-1]['content']
        print('query: ', query)

        results = pineconeQuery.fetch(query=query,namespace="personal")
        # Concat all the text into one string
        text = ""
        for result in results:
            text += result["metadata"]["text"] + " "
        # Extract the text 
        return {"Relevant docs results": text}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))