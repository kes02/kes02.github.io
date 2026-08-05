---
title: "\bDocker Jenkins 사용"
date: "2024-07-24T11:21:11.539Z"
slug: "Docker-Jenkins-사용"
url: "https://velog.io/@kes02/Docker-Jenkins-%EC%82%AC%EC%9A%A9"
tags: ["Springboot","aws ec2","docker","jenkins"]
velog_id: "06e40372-54db-460f-b67b-4261cc2cbd7f"
---
# docker로 jenkins 사용법

1. 도커 설치 완료 후 컨테이너 생성
```sudo docker run [container이름] [포트포워딩 port]:[host port] jenkins/jenkins:[본인이설치한 jdk버전]```
2. 컨테이너 연결
```docker exec distrip cat /var/jenkins_home/secrets/initialAdminPassword```


## 문제
ec2 상에서 8080으로 nohup을 실행시켜 포트 충돌

### 시도한 방법
1. 기본 포트인 8080에서 9999로 변경
 ```docker run -itd --env JENKINS_OPTS=--httpPort=9999 -p 9999:9999 -v ~/jenkins:/var/jenkins_home --name jenkins jenkins/jenkins:jdk17```
 -> 되지 않음
2. 기본 포트는 8080이고 들어가는 입구 포트를 80으로 변경
```sudo docker run -d --name distrip -p 80:8080 jenkins/jenkins:jdk17```
	- sudo su : root로 로그인
-> 되지 않음....
    cd var/lib/containers/hostconfig.json 으로 접속하여 port 수정
    sudo systemctl restart
    sudo systemctl daemon-reload
    
### 참고
https://forums.docker.com/t/solved-edit-container-details-ports-and-restarts-etc/64699

## github webhook 설정

https://woodcock.tistory.com/20
