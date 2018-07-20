## docker insatll
`sudo docker pull gitlab/gitlab-ce`
### 运行
```
sudo docker run -d \
    --name gitlab\
    -p 443:443 \
    -p 80:80 \
    -p 9021:22 \
    -v /home/gitlab/config:/etc/gitlab \
    -v /home/gitlab/logs:/var/log/gitlab \
    -v /home/gitlab/data:/var/opt/gitlab \
    gitlab/gitlab-ce
```
### 修改文件
`vi /etc/gitlab/gitlab.rb`
```
external_url 'http://0.0.0.0:443'
gitlab_rails['gitlab_shell_ssh_port'] = 9021
```