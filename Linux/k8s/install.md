# 安装
## Master节点
1. etcd
2. apiserver
3. controller-manager
4. scheduler
## node节点
1. docker 
2. kubelet 主程序
3. 
4. proxy
### quick install
```
apt-get update && apt-get install -y apt-transport-https curl
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
```
also can use proxy `curl -x youtproxy -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -`
```
cat <<EOF >/etc/apt/sources.list.d/kubernetes.list
deb https://apt.kubernetes.io/ kubernetes-xenial main
EOF
apt-get update
apt-get install -y kubelet kubeadm kubectl
apt-mark hold kubelet kubeadm kubectl
```
### Master 节点安装
+ ~~**使用镜像安装**~~
#### 使用代理
`vi /lib/systemd/system/docker.service`  
在`[Service]`中添加你的代理服务器地址(怎么使用查看 /linux/proxy/index.md)
```
Environment=HTTP_PROXY=http://127.0.0.1:8123/
Environment=HTTPS_PROXY=http://127.0.0.1:8123/
Environment=NO_PROXY=localhost,127.0.0.1
```
执行 ` kubeadm init `

```
Your Kubernetes master has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

You can now join any number of machines by running the following on each node
as root:

  192.168.0.19:6443 --token 1111.111111 --discovery-token-ca-cert-hash sha256:11111111111111111111111111111111111111111111111111
```

在`Master`节点需要做(非`root`用户)
```
  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config
```
`root` 用户 `export KUBECONFIG=/etc/kubernetes/admin.conf`
### Node节点
#### 坑
节点的 `hostname` 必须和`master` 节点不一致
#### 加入节点
运行`master`节点执行 `kubeadm init` 最后的语句： 
`  kubeadm join 192.168.0.19:6443 --token 1111.111111 --discovery-token-ca-cert-hash sha256:11111111111111111111111111111111111111111111111111`
#### 删除节点
- 主节点运行
```
kubectl drain <node name> --delete-local-data --force --ignore-daemonsets
kubectl delete node <node name>
```

- 子节点运行
`kubeadm reset`


## 修改nodePort端口限制
vi /etc/kubernetes/manifests/kube-apiserver.yaml
add `--service-node-port-range=80-32767` then save
systemctl restart kubelet

## 基础的一些操作
### 修改配置[service]
`kubectl edit svc  ${serviceName}`
### 查看日志
`kubectl logs -f ${podName} -c ${containerName}`
### 对容器打开新的tty
`kubectl exec -it ${podName} -c ${containerName} -- /bin/sh`

### 日志的其他方式
`kubectl delete svc -v=7`
或者是查看 `kube-controller-manager`的日志