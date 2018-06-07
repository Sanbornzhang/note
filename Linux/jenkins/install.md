# Jenkins
## install 
### ubuntu 18.04 
1. install java 8 cause Jenkins still use Java 8
```
sudo add-apt-repository ppa:webupd8team/java
sudo apt install oracle-java8-installer
```
2. add Jenkins's signing key and repository
```
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -

```
3.  install stable Jenkins server

```
sudo apt-add-repository "deb https://pkg.jenkins.io/debian-stable binary/"
```
4.  `sudo apt-get update && sudo apt-get install jenkins -y`
5.  navigate your browser to url: http://jenkins-ubuntu:8080
6.  sudo cat /var/lib/jenkins/secrets/initialAdminPassword 
  

![finish](./image/finish.png)
