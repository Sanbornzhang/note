function foo(x){
  x.push(4)
  console.log(x)

  x = [4, 5, 6] // x 被赋值到另外的一个空间地址去了
  x.push(7)
  console.log(x)
}
const a = [1, 2, 3]
foo(a)
console.log(a)
// [ 1, 2, 3, 4 ]
// [ 4, 5, 6, 7 ]
// [ 1, 2, 3, 4 ]
