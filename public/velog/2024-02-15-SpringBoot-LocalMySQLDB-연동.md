---
title: "SpringBoot - Local MySQL 연동 기록"
date: "2024-02-15T04:49:22.223Z"
slug: "SpringBoot-LocalMySQLDB-연동"
url: "https://velog.io/@kes02/SpringBoot-LocalMySQLDB-%EC%97%B0%EB%8F%99"
tags: ["Springboot","db연동","mysql","웹개발"]
velog_id: "fb1f77d6-c3f4-4118-a4e4-6640f4350851"
---
## 환경세팅
mac M1
SpringBoot 3.2.2
Java Version 17
MySQL Version 8.0.36

### application properties 작성
```
spring.datasource.url=jdbc:mysql://localhost:[DB port]/[데이터베이스 이름]?serverTimezone=UTC&useSSL=false&allowPublicKeyRetrieval=true
spring.datasource.username=[사용자이름]
spring.datasource.password=[비밀번호]
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=validate //or update, create
spring.jpa.properties.hibernate.dialect.storage_engine=innodb
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.properties.hibernate.use_sql_comments=true
````
- DB 연결을 위한 datasource.url 작성
   - 이때, port는 DB에서 사용되는 port number를 사용해야함. 
   - 맥북은 기본 포트넘버거 3306으로 설정되어 있음.
- dirver-class-name은 MySQL 버전이 8.0 이상이면 com.mysql.cj.jdbc.Driver로 작성해야 동작
   - com.mysql.jdbc.Driver로 작성시 에러가 난다면 cj를 추가
- ddl-auto에서 validate를 사용하여 기존에 구축해둔 DB와 연결
   - create: 기존 DB를 없애고 새로운 DB 구축
      - DB 연결이 잘 되지 않을때 sql 문 확인을 위해서 사용해봐도 됨
   - update: 변경사항을 DB에 적용
   - validate를 사용하는 것이 안전
   
---
### 오류 목록
1. drvier-class-name 빌드 오류
문제점: 로컬에서 사용하는 MySQL 버전이 8.2.0로 라이브러리 지원이 안 됨
해결방법
   - MySQL 삭제 후 8.0.36LTS 버전으로 재설치
   - build.gradle 파일에 ```implementation 'com.mysql:mysql-connector-j``` 추가
      - implementation 'com.mysql:mysql-connector-java'는 8.0 보다 낮은 버전에 유효
2. DB 매핑 오류
문제점: validate 설정 시 DB 연결은 되나, Entity 클래스에서 name을 설정했음에도 매핑이 제대로 되지 않음
해결방법
   - ddl-auto: create로 변경하여 sql 문 확인
   - DB 테이블 명의 첫번째 글자가 대문자인 것을 모두 소문자로 변경 적용
      - 중간에 테이블 명 변경 시 매핑 오류가 발생하기 때문에 처음 DB 구축 시에 테이블 명은 모두 소문자로 작성할 것

### 유의할 점
- DB에서 열리는 포트는 맥북 기준 3306이 기본으로 application.properties 작성 시 포트는 3306임
- localhost:3306/테이블 명 유의해서 작성할 것
- test 패키지에서의 .json을 활용한 http API콜 테스트 시 URI는 localhost:8080
   - DB의 port number != 서버의 port number
   - 테이블 명은 작성하지 않음
- RESTful API path 매핑
   - 동일한 path로는 Post, Get, Put, Delete 가능. path는 기능을 불러오는 주소라고 생각하면 됨
      - 동일한 path로 Get 2개는 안 됨
   - RESTful API path와 웹에 보여지는 path는 별개
