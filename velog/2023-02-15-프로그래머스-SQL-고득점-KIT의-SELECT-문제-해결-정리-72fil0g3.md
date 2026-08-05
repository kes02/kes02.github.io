---
title: "[프로그래머스] SQL 고득점 KIT의 IS NULL 문제 해결 정리"
date: "2023-02-15T16:04:14.218Z"
slug: "프로그래머스-SQL-고득점-KIT의-SELECT-문제-해결-정리-72fil0g3"
url: "https://velog.io/@kes02/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-SQL-%EA%B3%A0%EB%93%9D%EC%A0%90-KIT%EC%9D%98-SELECT-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0-%EC%A0%95%EB%A6%AC-72fil0g3"
tags: ["sql","고득점 Kit","프로그래머스"]
velog_id: "6911e5a8-8c03-4d5f-be3e-cd7c2214c76e"
---
# IS NULL 문제
현재 총 5문제로 구성
링크는 아래와 같음
https://school.programmers.co.kr/learn/courses/30/parts/17045

---
## 난이도 LV.1
### 경기도에 위치한 식품 창고 목록 출력하기
~~~ sql
SELECT WAREHOUSE_ID, WAREHOUSE_NAME, ADDRESS, IFNULL(FREEZER_YN, 'N') as FREEZER_YN
FROM FOOD_WAREHOUSE
WHERE ADDRESS LIKE '경기도%'
ORDER BY WAREHOUSE_ID
~~~
### 이름이 없는 동물의 아이디
~~~ sql
SELECT ANIMAL_ID
FROM ANIMAL_INS
WHERE NAME is null
~~~
### 이름이 있는 동물의 아이디
~~~ sql
SELECT ANIMAL_ID
FROM ANIMAL_INS
WHERE NAME is not null
~~~
### 나이 정보가 없는 회원 수 구하기
~~~ sql
SELECT COUNT(*) as USERS FROM USER_INFO WHERE AGE is null
~~~
- COUNT(*) 구문을 이용해 모든 행 COUNT

---
## 난이도 LV.2
### NULL 처리하기
~~~ sql
SELECT ANIMAL_TYPE, IFNULL(NAME, 'No name') as NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
~~~
