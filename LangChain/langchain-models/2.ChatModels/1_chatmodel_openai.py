from langchain_openai import ChatOpenAI #chatmodel theke inherite korteseche eita -> basechatmodel ke inherite kore
from dotenv import load_dotenv

load_dotenv()

model = ChatOpenAI(model='gpt-4') #gpt models
model = ChatOpenAI(model='gpt-4',temerature=0) 
model = ChatOpenAI(model='gpt-4',temerature=0,max_completion_tokens=10) #resopnse e maximum koto word lagbe -> now maximum 10 tokens

#temerature -> how much creative model I need?
#I can control how it will give result
# 0 - 0.3 -> math, code, facts
# 0.5 - 0.7 -> general question
# 0.9 - 1.2 -> creative writing
# 1.5 + -> maximum randomness + brainstroming

result = model.invoke("What is the capital of Bangladesh?")

print(result)
print(result.content) #-> this is the main output


# this result will be: content='The capital of Bangladesh is Dhaka.' additional_kwargs={'refusal': None} response_metadata={'token_usage': {'completion_tokens': 9, 'prompt_tokens': 14, 'total_tokens': 23, 'completion_tokens_details': {'accepted_prediction_tokens': 0, 'audio_tokens': 0, 'reasoning_tokens': 0, 'rejected_prediction_tokens': 0}, 'prompt_tokens_details': {'audio_tokens': 0, 'cached_tokens': 0}}, 'model_name': 'gpt-4-0613', 'system_fingerprint': None, 'finish_reason': 'stop', 'logprobs': None} id='run-50960ad6-1055-4a0a-8a70-71e0b47ee4d0' usage_metadata={'input_tokens': 14, 'output_tokens': 9, 'total_tokens': 23, 'input_token_details': {'audio': 0, 'cache_read': 0}, 'output_token_details': {'audio': 0, 'reasoning': 0}} -> not a plain text:  token | Metadata