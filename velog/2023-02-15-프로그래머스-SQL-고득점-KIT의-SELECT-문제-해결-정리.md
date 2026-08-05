---
title: "[프로그래머스]  SQL 고득점 KIT의 SELECT 문제 해결 정리"
date: "2023-02-15T15:43:26.312Z"
slug: "프로그래머스-SQL-고득점-KIT의-SELECT-문제-해결-정리"
url: "https://velog.io/@kes02/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-SQL-%EA%B3%A0%EB%93%9D%EC%A0%90-KIT%EC%9D%98-SELECT-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0-%EC%A0%95%EB%A6%AC"
tags: ["sql","고득점 Kit","프로그래머스"]
velog_id: "64a8fc1f-fe43-435b-901f-57f45dacb151"
---
# SELECT 문제
현재 총 19문제로 구성
링크는 아래와 같음
https://school.programmers.co.kr/learn/courses/30/parts/17042

---
## 난이도 LV.1
### 평균 일일 대여요금 구하기
~~~ sql
SELECT ROUND(AVG(DAILY_FEE), 0) AS AVERAGE_FEE
FROM CAR_RENTAL_COMPANY_CAR
WHERE CAR_TYPE = 'SUV'
~~~
- AVG함수를 이용해 평균을 구하고, ROUND 함수를 이용해 소수점을 잘라내서 표기
- AS AVERAGE_FEE 구문을 이용해 열 이름은 AVERAGE_FEE
### 과일로 만든 아이스크림 구하기
~~~sql
SELECT FIRST_HALF.FLAVOR
FROM FIRST_HALF JOIN ICECREAM_INFO
ON FIRST_HALF.FLAVOR = ICECREAM_INFO.FLAVOR
WHERE INGREDIENT_TYPE = 'fruit_based' AND TOTAL_ORDER > 3000
ORDER BY TOTAL_ORDER DESC
~~~
### 강원도에 위치한 생산공장 목록 출력하기
~~~sql
SELECT FACTORY_ID, FACTORY_NAME, ADDRESS
FROM FOOD_FACTORY
WHERE ADDRESS LIKE '강원도%'
ORDER BY FACTORY_ID ASC
~~~
- LIKE를 이용해 강원도가 포함된 주소목록만 출력. ASC는 굳이 안 붙여도 됨.
### 12세 이하인 여자 환자 목록 출력하기
~~~sql
SELECT PT_NAME, PT_NO, GEND_CD, AGE, IFNULL(TLNO, 'NONE') AS TLNO
FROM PATIENT
WHERE AGE <= 12 AND GEND_CD = 'W'
ORDER BY AGE DESC, PT_NAME
~~~
- IFNULL을 사용해 TLNO의 목록이 NULL이면 NONE으로 바꿔서 표시
- ORDER BY에서 AGE 다음, PT_NAME으로 우선순위 설정
### 흉부외과 또는 일반외과 의사 목록 출력하기
~~~sql
SELECT DR_NAME, DR_ID, MCDP_CD, DATE_FORMAT(HIRE_YMD, "%Y-%m-%d") AS HIRE_YMD
FROM DOCTOR
WHERE MCDP_CD = 'CS' OR MCDP_CD = 'GS'
ORDER BY HIRE_YMD DESC, DR_NAME
~~~
- DATE_FORMAT을 활용하여 HIRE_YMD가 출력되도록 함.
- Year 표기
     + %Y &rarr; 2023 으로 출력
     - %y &rarr; 23 으로 출력
 - Month 표기
   - %M &rarr; February 로 출력
   - %m &rarr; 02 로 출력
 - Day 표기
   - %D &rarr; 16 으로 출력
   - %d &rarr; 1st 로 출력
### 조건에 맞는 도서 리스트 출력하기
~~~ sql
SELECT BOOK_ID, DATE_FORMAT(PUBLISHED_DATE, "%Y-%m-%d") AS PUBLISHED_DATE
FROM BOOK 
WHERE CATEGORY = '인문' AND YEAR(PUBLISHED_DATE) = '2021'
ORDER BY PUBLISHED_DATE
~~~
### 인기있는 아이스크림
~~~ sql
SELECT FLAVOR FROM FIRST_HALF
ORDER BY TOTAL_ORDER DESC, SHIPMENT_ID
~~~
### 모든 레코드 조회하기
~~~ sql
SELECT * FROM ANIMAL_INS ORDER BY ANIMAL_ID
~~~
### 역순 정렬하기
~~~ sql
SELECT NAME, DATETIME 
FROM ANIMAL_INS 
ORDER BY ANIMAL_ID DESC
~~~
### 아픈 동물 찾기
~~~ sql
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS 
WHERE INTAKE_CONDITION = 'Sick' 
ORDER BY ANIMAL_ID ASC
~~~
### 어린 동물 찾기
~~~ sql
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS 
WHERE INTAKE_CONDITION != 'Aged' 
ORDER BY ANIMAL_ID ASC
~~~
### 동물의 아이디와 이름
~~~ sql
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
~~~
### 여러 기준으로 정렬하기
~~~ sql
SELECT ANIMAL_ID, NAME, DATETIME FROM ANIMAL_INS 
ORDER BY NAME, DATETIME DESC
~~~
### 상위 n개 레코드
~~~ sql
SELECT NAME FROM ANIMAL_INS 
WHERE DATETIME = (SELECT MIN(DATETIME) FROM ANIMAL_INS)
~~~
- WHERE에서 MIN 함수를 사용하여 최소 데이터 값을 찾음
### 조건에 맞는 회원수 구하기
~~~ sql
SELECT COUNT(USER_ID) as USERS
FROM USER_INFO
WHERE YEAR(JOINED) = '2021' AND AGE >= 20 AND AGE <= 29
~~~
---
## 난이도 LV.2
### 3월에 태어난 여성 회원 목록 출력하기
~~~ sql
SELECT MEMBER_ID, MEMBER_NAME, GENDER, DATE_FORMAT(DATE_OF_BIRTH, '%Y-%m-%d') AS DATE_OF_BIRTH
FROM MEMBER_PROFILE
WHERE DATE_OF_BIRTH LIKE '%03%'
AND TLNO is not null AND GENDER = 'W'
ORDER BY MEMBER_ID
~~~
### 재구매가 일어난 상품과 회원 리스트 구하기
~~~ sql
SELECT USER_ID, PRODUCT_ID
FROM ONLINE_SALE
GROUP BY USER_ID, PRODUCT_ID
HAVING COUNT(*) >= 2 #이때 모든 열 선택
ORDER BY USER_ID, PRODUCT_ID DESC
~~~
---
## 난이도 LV.4
### 서울에 위치한 식당 목록 출력하기
~~~ sql
SELECT A.REST_ID, B.REST_NAME, B.FOOD_TYPE, B.FAVORITES, B.ADDRESS, ROUND(AVG(A.REVIEW_SCORE), 2) AS SCORE
FROM REST_REVIEW A #별칭 설정 review=A 테이블이 기준
JOIN REST_INFO B #별칭 설정 INFO=B
ON A.REST_ID = B.REST_ID
GROUP BY A.REST_ID 
HAVING B.ADDRESS LIKE '서울%'
ORDER BY SCORE DESC, B.FAVORITES DESC
~~~
- REVIEW의 REST_ID를 기준으로 테이블을 묶고, 이때 REST_INFO 테이블의 ADDRESS가 서울인 곳만 찾음.
### 오프라인/온라인 판매 데이터 통합하기
~~~ sql
SELECT DATE_FORMAT(SALES_DATE, '%Y-%m-%d') AS SALES_DATE, PRODUCT_ID, USER_ID, SALES_AMOUNT
FROM ONLINE_SALE
WHERE SALES_DATE >= '2022-03-01' and SALES_DATE < '2022-04-01'

UNION ALL

SELECT DATE_FORMAT(SALES_DATE, '%Y-%m-%d') AS SALES_DATE, PRODUCT_ID, NULL as USER_ID, SALES_AMOUNT
FROM OFFLINE_SALE
WHERE SALES_DATE >= '2022-03-01' and SALES_DATE < '2022-04-01'

ORDER BY SALES_DATE, PRODUCT_ID, USER_ID ASC
~~~
- UNION ALL을 이용해서 쿼리문 2개를 합치는 방식으로, UNION과 달리 ALL을 사용할 경우 중복되는 값도 그대로 출력된다.
---
KIT 문제 추가 시에 유동적으로 추가할 예정
