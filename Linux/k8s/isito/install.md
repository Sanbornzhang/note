## sidecar-injection
[sidecar-injection](https://istio.io/zh/docs/setup/kubernetes/sidecar-injection/)
### enable injection
`kubectl label namespace default istio-injection=enabled`

### disable injection

`kubectl label namespace default istio-injection-`


### list ns
`kubectl get namespace -L istio-injection`
