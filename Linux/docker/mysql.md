
```
sudo docker run -d \
    --name mysql \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=${yourPassword} \
    -v /home/mysql/config:/etc/mysql/mysql.conf.d \
    -v /home/mysql/data:/var/lib/mysql \
    mysql:5.7
    ```
docker update --restart=always mysql

docker run -d \
    --name redis \
    -p 6379:6379 \
    --restart=always \
    redis
