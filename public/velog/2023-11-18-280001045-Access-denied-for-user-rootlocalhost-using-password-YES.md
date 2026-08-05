---
title: "[28000][1045] Access denied for user 'root'@'localhost' (using password: YES)."
date: "2023-11-18T10:47:47.990Z"
slug: "280001045-Access-denied-for-user-rootlocalhost-using-password-YES"
url: "https://velog.io/@kes02/280001045-Access-denied-for-user-rootlocalhost-using-password-YES"
tags: ["error","mysql"]
velog_id: "9a8dc462-b299-4c80-952c-5f7ef83d70f0"
---
## 에러 발생 코드
[28000][1045] Access denied for user '[user]'@'localhost' (using password: YES).


## 해결방법
1. $mysql -u root -p 또는 ./mysql -u root -p -> mysql 접속
2. mysql>ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password'; 작성
3. **mysql> flush privileges;**
	이것을 하는 이유는 저장하지 않으면 root에 다시 접속할 수 없기 때문이다.
4. database 연결 테스트 확인
