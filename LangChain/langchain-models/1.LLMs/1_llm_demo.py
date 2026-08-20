from langchain_openai import OpenAI #basellm model ke inherite kore
from dotenv import load_dotenv #it will load my secret key to current file (api key)

load_dotenv() #function ke envoke korlam

LLM = OpenAI(model='gpt-3.5-turbo-instruct') #creating object of OpenAI

result = LLM.invoke("Capital of Bangladesh?") #communicate with gpt3.5 model | er vetor question pathay dibo

# invoke() -> hit the model (3.5) -> process the prompt -> generate response -> get output

print(result) #output ekhane asbe: clear ekta string result korbe.

#llms onk purano hoye gese