# install
这里其实最好应该使用其他方式安装，因为`gitlab`并不是一个单一的应用程序.使用 `compose` 或者 `k8s`都可以.
## docker install
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
## allow local web hook
`curl -X PUT --header "PRIVATE-TOKEN: XXXXXXXXXXXXXXXXXXXX" 'http://sample.gitlab.com/api/v4/application/settings?allow_local_requests_from_hooks_and_services=true'
`  
