---
title: "SpringBoot - EC2 배포"
date: "2024-05-13T15:10:31.943Z"
slug: "SpringBoot-EC2-배포"
url: "https://velog.io/@kes02/SpringBoot-EC2-%EB%B0%B0%ED%8F%AC"
tags: []
velog_id: "6ea2eb0d-6816-44a4-974b-587496dbb22a"
---
## 문제
communication link failure 오류로 local에서만 커넥션이 되고 있었다.
결국 원인을 모르고 해결하지도 못 하였다.
![](https://velog.velcdn.com/images/kes02/post/a57332b4-673e-46d2-9396-45da325cd209/image.png)


## 세팅
EC2 - RDS 연결
SpringBoot - EC2 -> RDS 연결로 보안

## 해결하기 위한 한 방법
1. 인바운드 규칙 모두 public 오픈
2. vpc 퍼블릭 오픈
3. jar파일 임의 생성
4. 인바운드 규칙에 ec2 private ip 추가

위 방법 모두가 해결이 안 되었다.

## 임시 해결
![](https://velog.velcdn.com/images/kes02/post/7b64f1d3-d99f-45c4-a643-d783bcdd4ba4/image.png)
아래의 clean 을 누르고 build를 하여 scp 명령어로 ec2에 업로드 하였다.
