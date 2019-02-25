# POD
1. pod 是 `kubernetes` 的最小API对象,是`kubernetes`项目的原子调度单位.
2. `kubernetes`的`pod`是为了解决成组调度的问题
3. `pod` 中是使用的同一个 `Network Namespace` 以及可以声明共享同一个`volume`
#### 如何使用pod
REF:
sidecar 设计模式
https://www.usenix.org/conference/hotcloud16/workshop-program/presentation/burns