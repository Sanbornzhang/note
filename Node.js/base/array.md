# Array 
## Base
Ref: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
## prototype
### concat
```
let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```
在ES6中可以这样写
```
let vArray1 = ['a', 'b', 'c'];
let vArray2 = ['d', 'e', 'f'];
[...vArray1,...vArray2]
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
```
### fill
填充  
语法: `arr.fill(value[, start[, end]])`  
**但是需要注意**
```
> arr = Array(3).fill({}) 
[ {}, {}, {} ]
> arr[0].hi='hi'
'hi'
> arr
[ { hi: 'hi' }, { hi: 'hi' }, { hi: 'hi' } ]
这里可以这么解释
> obj={}
{}
> arr = Array(3).fill(obj) 
[ {}, {}, {} ]
> arr
[ {}, {}, {} ]
> obj.hi='hi'
'hi'
> arr
[ { hi: 'hi' }, { hi: 'hi' }, { hi: 'hi' } ]

```
### find
### filter
### map
### findIndex
### includes
 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

语法: `arr.includes(searchElement, fromIndex)`
```
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```
### sort
就地（ in-place ）的算法对数组的元素进行排序，并返回数组。 sort 排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。
TODO: 本地中文字符
### reverse
将数组中元素的位置颠倒。
### pop
删除数组末尾的元素
### shift
删除数组头部的元素
### unshift
添加元素到素组头部
### splice
删除现有元素和/或添加新元素来更改一个数组的内容。
```
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
myFish.splice(2, 0, 'drum'); // 在索引为2的位置插入'drum'
// myFish 变为 ["angel", "clown", "drum", "mandarin", "sturgeon"]
myFish.splice(2, 1); // 从索引为2的位置删除一项（也就是'drum'这一项）
// myFish 变为 ["angel", "clown", "mandarin", "sturgeon"]
```


#### 参数
`array.splice(start, deleteCount, item1, item2, ...)`
##### start​
指定修改的开始位置（从0计数）。  
如果超出了数组的长度，则从数组末尾开始添加内容；  
如果是负值，则表示从数组末位开始的第几位（从1计数)；  
若只使用start参数而不使用deleteCount、item，如：array.splice(start) ，表示删除[start，end]的元素。
##### deleteCount 可选
整数，表示要移除的数组元素的个数。  
如果 deleteCount 是 0，则不移除元素。这种情况下，至少应添加一个新元素。  
如果 deleteCount 大于start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。  
如果deleteCount被省略，则其相当于(arr.length - start)。
##### item1, item2, ... 可选
要添加进数组的元素,从start 位置开始。  
如果不指定，则 splice() 将只删除数组元素。  
splice方法使用deleteCount参数来控制是删除还是添加：  
start参数是必须的，表示开始的位置（从0计数），  
如：start=0从第一个开始；start>= array.length-1表示从最后一个开始。  

①、从start位置开始删除[start，end]的元素。
array.splice(start)
②、从start位置开始删除[start，Count]的元素。
array.splice(start, deleteCount)    
③、从start位置开始添加item1, item2, ...元素。
array.splice(start, 0, item1, item2, ...)   


### slice
拷贝　*浅拷贝*  
`slice(start,end)`
```
let vArray = [1,2,3]
let newArray = vArray.slice()
vArray.slice(2)
vArray.slice(１,3)
vArray.slice(1,9) 
```
## 非实例方法
### Array.from()
也可以用于拷贝素组　但是相对与`slice` 会复杂一点,也更灵活一点.

`Array.from(arrayLike, mapFn, thisArg)`
#### 参数
##### arrayLike
想要转换成数组的伪数组对象或可迭代对象。
arrayLike　类型可以是
* String 默认单个字符分割
```
> Array.from('测试test')
[ '测', '试', 't', 'e', 's', 't' ]
```
* Set
```
> Array.from(new Set(['ssss','ddd']))
[ 'ssss', 'ddd' ]
```

* Map
```

> Array.from(new Map([['ssss','ddd'],['ccc','bbb']]))
[ [ 'ssss', 'ddd' ], [ 'ccc', 'bbb' ] ]
```
* arguments  
也就是`function()`中的参数
```
function f() {
  return Array.from(arguments);
}
f(1,2,3,4)
```

##### mapFn (可选参数)
如果指定了该参数，新数组中的每个元素会执行该回调函数。
```
Array.from([1,2,3],x => x + 1)
Array.from({length:5},(v,i)=> i)

```

`> Array.from({length:5},(v,i)=> i)`  
`[ 0, 1, 2, 3, 4 ]`
为什么返回值为`[ 0, 1, 2, 3, 4 ]`   
是因为　相当于　`Array.from(arrayLike).map()`
解释为　
```
> vArrayLike = {length:5}
{ length: 5 }
> vArrayLike = Array.from(vArrayLike) //已经转换成为了　Array
[ undefined, undefined, undefined, undefined, undefined ]

> vArrayLike.map((v,i)=>i)
arrayLike：
let fakeArray = {length:5};
fakeArray.length //5
let realArray = [1,2,3,4,5];
realArray.length //5

new Array(5).fill(1).map((v,i)=>i)
[ 0, 1, 2, 3, 4 ]
```

##### thisArg (可选参数)
可选参数，执行回调函数 mapFn 时 this 对象。
#### 返回值
一个新数组

### 比较有意思的写法
#### 切割成二维数组
```
const doChunk = (list, size) => list.reduce((r, v) =>
  (!r.length || r[r.length - 1].length === size ?
    r.push([v]) : r[r.length - 1].push(v)) && r
, []);
r -> 返回的整个集合
v -> 本次 value
```

#### 交换顺序
```
Array.prototype.move = function(from,to){
  this.splice(to,0,this.splice(from,1)[0]);
  return this;
};
```

#### 行列转换
```
function transpose(arr) {
  return Object.keys(arr[0]).map(function (c) {
    return arr.map(function (r) {
      return r[c];
    });
  });
}
```
