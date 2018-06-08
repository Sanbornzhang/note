const process = require('process')
const genArray = (length)=> Array.from({length:length},(v,i)=>i)
const testArray = genArray(999999)
const sum = (array)=>{
  let sum = 0
  for(let i = 0;i < array.length;i++){
    sum += array[i]
  }
  return sum
}
const sumCache = (array)=>{
  let sum = 0
  const length = array.length
  for(let i = 0;i < length;i++){
    sum += array[i]
  }
  return sum
}
const sumForIn = (array)=>{
  let sum = 0
  for (let i in array){
    sum += array[i]
  }
  return sum
}
const sumForOf = (array)=>{
  let sum = 0
  for (let v of array){
    sum += v
  }
  return sum
}
const sumForEach = (array = [])=>{
  let sum = 0
  array.forEach(v=>{
    sum += v
  })
  return sum
}
const sumReduce = (array = [])=>{
  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue;
  }
  return array.reduce(reducer)
}

const executeTime = (length,func,funcArguments)=>{
  let sumTime = 0
  for(let i = 0;i < length; i++){
    const startTime = process.hrtime()
    func(funcArguments)
    const duration = process.hrtime(startTime)
    const ms = duration[0] * 1000 + duration[1] / 1e6
    // console.log(ms)
    sumTime += ms
  }
  return sumTime
}
sumAvg = (array,loopCount = 1)=>{
  const result = {}
  result.sum = executeTime(loopCount,sum,array) / loopCount

  result.sumCache = executeTime(loopCount,sumCache,array) / loopCount

  result.sumForIn = executeTime(loopCount,sumForIn,array) / loopCount

  result.sumForOf = executeTime(loopCount,sumForOf,array) / loopCount

  result.sumForEach = executeTime(loopCount,sumForEach,array) / loopCount

  result.sumReduce = executeTime(loopCount,sumReduce,array) / loopCount

  return result
}
console.time('test Array')
let array = genArray(10)
const loopCount = 10000
console.log('Array length: ', array.length, '\n', sumAvg(array,loopCount))

array = genArray(100)
console.log('Array length: ', array.length, '\n', sumAvg(array,loopCount))

array = genArray(1000)
console.log('Array length: ', array.length, '\n', sumAvg(array,loopCount))

array = genArray(10000)
console.log('Array length: ', array.length, '\n', sumAvg(array,loopCount))

array = genArray(100000)
console.log('Array length: ', array.length, '\n', sumAvg(array,loopCount))

array = genArray(1000000)
console.log('Array length: ', array.length, '\n', sumAvg(array,loopCount))
console.timeEnd('test Array')

