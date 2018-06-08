const crypto = require('crypto')

const hash = (algorithm,data)=>{
  console.time(algorithm)
  const hashValue = crypto.createHash(algorithm).update(data).digest('hex')
  console.timeEnd(algorithm)
  return hashValue
}
const encipherData = ()=>{
  const fs = require('fs')
  const process = require('process')
  const fileName = process.argv[1]
  return fs.readFileSync(fileName)
}
const testHash = ()=>{
  const hashAlgorithm = crypto.getHashes()
  const data = encipherData()

  hashAlgorithm.forEach(algorithm=>{
    hash(algorithm,data)
  })
}

const hmac = (algorithm,key,data)=>{
  console.time(algorithm)
  const hmacValue = crypto.createHmac(algorithm,key).update(data).digest('hex')
  console.timeEnd(algorithm)
  return hmacValue
}

const testHmac = ()=>{
  const hashAlgorithm = crypto.getHashes()
  const data = encipherData()
  hashAlgorithm.forEach(algorithm=>{
    hmac(algorithm,'secret',data)
  })
}
// testHash()
testHmac()