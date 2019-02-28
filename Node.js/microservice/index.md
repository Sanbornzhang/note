# API网关

API网关是一个服务器，是系统的唯一入口。从面向对象设计的角度看，它与外观模式类似。API网关封装了系统内部架构，为每个客户端提供一个定制的API。它可能还具有其它职责，如身份验证、监控、负载均衡、缓存、请求分片与管理、静态响应处理。
API网关方式的核心要点是，所有的客户端和消费端都通过统一的网关接入微服务，在网关层处理所有的非业务功能。通常，网关也是提供REST/HTTP的访问API。服务端通过API-GW注册和管理服务。
## 服务注册

  - 主动　主动访问对应的微服务,且记录API返回的时间数以及访问频率. (GET: https://product.api.com, {"startTime": "xxx", "uptime": "1000000ms", "cpu": "20%", "memory": "80%"})

    ``` 
      POST: https://api.com/register
      payload:
        serviceName: "userLogin"
        serviceIP: this.request.ip
        servicePort: 3000
        acls: []
        router: "/login"
    ```  
    - 每隔一段时间访问客户端 `192.168.1.111:3000`,如果不能访问服务则服务下线
  + ~~被动 [客户端通知服务端]~~ 单一
- 系统状态包 (动态分配连接数)
### 路由注册
当多个服务的 `router` 是一致的时候启动负载均衡
## 服务发现
服务注册中心的例子：
1. Netﬂix Eureka：
2. etcd：高度可用，分布式，一致性的键值存储，用来共享配置或作为服务注册中心。  Kubernetes和Cloud Foundry 这两个著名的项目使用了它；
3. Consul：一个发现和配置服务的工具，提供了API允许客户端注册并发现服务，也能通过健康检查来确定服务的可用性；
Apache ZooKeeper：用于分布式应用的广泛使用的、高性能的协调服务。开始作为Hadoop的子项目，但是现在是一个独立的顶级项目；
## 反向代理
## 负载均衡

### 轮循
### 权重
### 随机
### hash
### 最小连接数
## 认证
### 身份认证
### 权限认证
## 日志
## 缓存
## 服务治理
1. 服务注册，服务发现，服务健康监控 - 使用 consul或者etcd
2. 负债均衡 ， 使用nginx
3. 统一配置管理，使用confd
4. 消息系统，使用MQ
### 熔断
### 降级
### 限流
#### 令牌桶算法
## 优雅的退出
1. 收到 `SIGINT` 信号
2. 拒绝新请求[请求降级]
3. 等待所有请求执行完毕
4. stop

```
nginx -s quit
kill -2 pid
```