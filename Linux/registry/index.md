# Registry

```

docker run -d \
    -p 5000:5000 \
    --name registry \
    --restart=always  \
    -v /home/user/registry/config.yml:/etc/docker/registry/config.yml \
    registry:2
```