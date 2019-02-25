# Secret
## REF:
[官方文档 Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)
[深入解析Pod对象(二): 使用进阶](https://time.geekbang.org/column/article/40466)
## 创建
### 使用`kubectl create secret` 创建
```
echo 'user' > user
echo 'pass' > password
kubectl create secret generic user --from-file=./user
  secret/user created
kubectl create secret generic pass --from-file=./password
secret/pass created
```

### 使用 `API` 创建

在使用`yml`创建的时候 `secret` 对象要求必须为`Base64`编码,所以需要先进行`base64`编码
```
echo -n '123213'|base64
  MTIzMjEz
echo -n 'test'|base64
  dGVzdA==
```
`vi my-secret.yml`

```
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
type: Opaque
data:
  user: dGVzdA==
  pass: MTIzMjEz
```
在使用 `kubectl create -f my-secret.yml` 创建

### 查询
```
kube-shell> kubectl get secrets mysecret
NAME       TYPE     DATA   AGE
mysecret   Opaque   2      3h12m
kube-shell> kubectl get secrets mysecret -o yaml
apiVersion: v1
data:
  pass: MTIzMjEz
  user: dGVzdA==
kind: Secret
metadata:
  creationTimestamp: "2019-01-16T03:37:38Z"
  name: mysecret
  namespace: default
  resourceVersion: "2341900"
  selfLink: /api/v1/namespaces/default/secrets/mysecret
  uid: 12513d47-1940-11e9-a704-00163e10704a
type: Opaque
```

## 删除
```
kube-shell> kubectl delete secret user
secret "user" deleted
kube-shell> kubectl get secrets
NAME                  TYPE                                  DATA   AGE
default-token-rf2mq   kubernetes.io/service-account-token   3      18d
mysecret              Opaque                                2      3h14m
pass                  Opaque                                1      3h20m
```