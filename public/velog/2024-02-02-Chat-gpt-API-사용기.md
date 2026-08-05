---
title: "Chat gpt API 적용 기록"
date: "2024-02-02T09:05:59.847Z"
slug: "Chat-gpt-API-사용기"
url: "https://velog.io/@kes02/Chat-gpt-API-%EC%82%AC%EC%9A%A9%EA%B8%B0"
tags: ["gpt-Api","python"]
velog_id: "e87fb87a-1e6a-403a-9b40-493affa62094"
---
***현재는 GPT 측에서 무료 크레딧을 제공하지 않는 상황이다. Only 유료. 거기다가 tax 10프로도 더 붙는다....눈물***
추가로 api 한 번 사용시 0.01크레딧이 사용된다.

### 기본적인 GPT API 사용 코드

```python
import os
from openai import OpenAI

OPENAI_API_KEY = "발급 받은 본인의 API Key"  
client = OpenAI(api_key=OPENAI_API_KEY)
OpenAI.api_key = os.getenv('OPENAI_API_KEY')

query = "본인이 질문하고 싶은 것"

completion = client.chat.completions.create(
  model="gpt-3.5-turbo", #model
  messages=[
    {
    	"role": "system", 
        "content": "You are a helpful assistant."
    }, {
    	"role": "user", 
        "content": query
    }
])

print(completion.choices[0].message.content)
```

### 엑셀 파일을 수정해주는 GPT API 사용 코드
```python
import os
from openai import OpenAI
import pandas as pd

excel_file_path = "칼럼을 추가할 엑셀 파일 경로"

#엑셀 파일 읽기
df = pd.read_excel(excel_file_path)

#description 컬럼 생성
df['description'] = ""

# 발급받은 API 키 설정
OPENAI_API_KEY = "발급 받은 본인의 API Key"

client = OpenAI(api_key=OPENAI_API_KEY)

# openai API 키 인증
OpenAI.api_key = os.getenv('OPENAI_API_KEY')

# 새로운 컬럼 "description" 추가 및 GPT 답변 작성
df['description'] = ""

for index, row in df.iterrows():
    query = f"Tell me about {row['장소 이름']}"

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
            	"role": "system", 
                "content": "You are a helpful assistant."
            }, {
            	"role": "user", 
            	"content": query
           }
    ])
    
    df.at[index, 'description'] = completion.choices[0].message.content

# 새로운 엑셀 파일로 저장
output_excel_path = "output_description_file.xlsx"
df.to_excel(output_excel_path, index=False)

#api 성공 메시지
print("gpt api 성공")
```


### 참고
https://stackoverflow.com/questions/77505030/openai-api-error-you-tried-to-access-openai-chatcompletion-but-this-is-no-lon
https://velog.io/@yule/OpenAI-API-%EB%B0%9C%EA%B8%89
