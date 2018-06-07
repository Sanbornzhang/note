# docker
## 基础的一些东西
### WORKDIR 
指定工作目录(如果目录不存在则建立目录 root 用户创建！！！)
### USER
指定当前用户以及之后的镜像层使用的用户

### COPY
```
COPY [--chown=<user>:<group>] <src>... <dest>
COPY [--chown=<user>:<group>] ["<src>",... "<dest>"] 
COPY --chown=55:mygroup files* /somedir/
COPY --chown=bin files* /somedir/
COPY --chown=1 files* /somedir/
COPY --chown=10:11 files* /somedir/
```
### EXPOSE
`EXPOSE` 对应是在 `docker run -P  `  
`docker run -p 80:3000`
docker `3000` 端口到 宿主机`80` 端口
### RUN
`RUN` 有两种执行方式
1. `RUN ls -la`
2. `RUN ["/bin/ls","-l","-a"]`
### CMD
CMD 一个dockerfile 只有一个CMD 
HEALTHCHECK  --interval=5m --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost:3000 || exit 1