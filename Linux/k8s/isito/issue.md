# 遇到过的问题
## 删除 ns 时 istio-system 一直处于 Terminating 状态
1. `kubectl proxy & ` 打开api服务器
2. `kubectl get namespace istio-system -o json > tmp.json`
3. 删除`finalizers[*]`中的`kubernetes`
4. `curl -k -H "Content-Type: application/json" -X PUT --data-binary @tmp.json http://127.0.0.1:8001/api/v1/namespaces/istio-system/finalize`
## 