# Buffer
## buffer.toString()
```
const buf = new Buffer('test')

buf.toString('base64')
// dGVzdA==
buf.toString('ascii')
// test
buf.toString('utf8')
// test
buf.toString('hex')
// 74657374

const decodeBuf = Buffer.from('dGVzdA==','base64').toString('utf8')
// 默认为ut8编码
```
### Buffer.toString('hex')
hex 转换为16进制需要注意的是 1字节的数据会转换为2个字符