kubectl delete configmap istio-crd-10 istio-crd-11 istio-crd-certmanager-10
kubectl delete serviceaccounts istio-init-service-account     
kubectl delete clusterroles.rbac.authorization.k8s.io istio-init-default  
kubectl delete clusterrolebindings.rbac.authorization.k8s.io istio-init-admin-role-binding-default
kubectl delete jobs.batch jobs.batch istio-init-crd-10 istio-init-crd-11 istio-init-crd-certmanager-10