# ES5
在ES6之前我们通过`var` 定义变量，但是`var`会引起作用域的提升问题
```
console.log(a) //undefined
console.log(d) //ReferenceError: d is not defined

var a = 1
let d = 1

for (var index = 0; index < 10; index++) {
  
}
console.log(index) //10
```
##　let 
1. 块级作用域
    ```
    {
      let a = 1
    }
    console.log(a) //ReferenceError
    ```
2. 不能重复声明
    ```
    let a = 1
    let a = 2　//SyntaxError: Identifier 'a' has already been declared
    ```
## const 
  声明一个常量.对于简单值而言声明以后不可以被修改.对于复合值来说:声明以后引用地址不可以修改．[一般在定义的时候能用`const`就不要用`let`了]
```
const a = 1
a = 2 //TypeError: Assignment to constant variable
const a = 3 //SyntaxError: Identifier 'a' has already been declared

const array = [1,2,3]
array = [1,1,1] //TypeError: Assignment to constant variable.
array.push(1) //[ 1, 2, 3, 1 ]

const object = {a:1,d:2}
object.a = 2 //{ a: 2, d: 2 }
```