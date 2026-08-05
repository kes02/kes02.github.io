---
title: "VsCode lightgbm 라이브러리 설치 에러"
date: "2024-05-05T04:08:57.044Z"
slug: "VsCode-lightgbm-라이브러리-설치-에러"
url: "https://velog.io/@kes02/VsCode-lightgbm-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%84%A4%EC%B9%98-%EC%97%90%EB%9F%AC"
tags: ["LightGBM"]
velog_id: "1845e56f-cf1b-4f8f-a974-130f1d688e9c"
---
## 상황
주피터 환경에서 사용하기 위해 ligthtgbm 설치

## 세팅환경
M1 Air
VSCode 최신 환경
python micromamba 3.9

## 문제
lightgbm이 계속해서 설치가 안 되는 상황
![](https://velog.velcdn.com/images/kes02/post/aca40090-dcd6-4b23-a200-52c76d30f380/image.png)

## 해결하기 위해 사용해본 방법
1. gcc 및 cmake 설치 후 직접 /User/micromamba 경로 들어가서 pip install lightgbm -> permission denyed로 설치 안됨
2. 직접 경로 입력 Settings -> default interpreter Path 검색 후 경로 지정 (기존에 깔려있는 python 3.10과 충돌 방지)
![](https://velog.velcdn.com/images/kes02/post/f9bcb813-a9b5-4400-b7f8-141f3c012b6c/image.png)


## 최종 해결법
```pip install --no-binary :all: lightgbm ``` 명령어 실행 -> 최종 해결

.. 진짜 파이썬은 경로나 버전이 맞지 않으면 실행이 안 된다는 점이 너무 어렵고 많이 검색해봤지만 각 환경마다 안 된다는 점이 너무 골치 아픈 것 같다

## 참고 사이트
https://shinminyong.tistory.com/20
https://bigdaheta.tistory.com/84
https://somjang.tistory.com/entry/GCC-macOS-%EC%97%90-gcc-%EC%BB%B4%ED%8C%8C%EC%9D%BC%EB%9F%AC-%EC%84%A4%EC%B9%98%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95
