# crypto
## crypto.randomBytes(size[, callback])
生成加密强伪随机数据. size参数是指示要生成的字节数的数值。
例:
```
// 生成16位随机数
crypto.randomBytes(16).toString('hex')
// 83fd27fb33c526df591452a9d4625914
```