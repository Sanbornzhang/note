# Symbol
## 概述
Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
## 使用方式
1. 防止冲突
```
> const a = Symbol()
undefined
> const b = Symbol()
undefined
> a === b //false
false

> const d = Symbol('foo')
undefined
> const c = Symbol('foo')
undefined
> d === c
false
```
2. 属性名
> 注意不能使用`.`运算符
```
> const key = Symbol()
undefined
> const vObject = {}
undefined
> vObject[key] = 'value'
'value'
> vObject.key = 'not same'
'not same'
> vObject.key
'not same'
> vObject[key]
'value'
> Object.keys(vObject) //遍历在后面
[ 'key' ]
```
3. 消除魔术字符串
#### 错误的写法:
```
function getArea(shape, options) {
  let area = 0;

  switch (shape) {
    case 'Triangle': // 魔术字符串 这种就很难维护
      area = .5 * options.width * options.height;
      break;
    /* ... more code ... */
  }

  return area;
}

getArea('Triangle', { width: 100, height: 100 }); // 魔术字符串

```
#### 正确的写法:
```
const shapeType = {
  triangle: Symbol()
};

function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
  }
  return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });
```

4. 遍历
可以通过　`Object.getOwnPropertySymbols`
```
const vObject = {}
const vSymbol = Symbol('foo')
vObject[vSymbol] = 'hi'
Object.getOwnPropertySymbols(vObject)

> const vObject = {}
undefined
> const vSymbol = Symbol('foo')
undefined
> vObject[vSymbol] = 'hi'
'hi'
> Object.getOwnPropertySymbols(vObject)
[ Symbol(foo) ]
```

5. `Symbol.for()` `Symbol.keyFor()`
```
const foo = Symbol.for('foo')
const foo1 = Symbol.for('foo')
foo === foo1
Symbol.keyFor(foo)

> const foo = Symbol.for('foo')
undefined
> const foo1 = Symbol.for('foo')
undefined
> foo === foo1
true
> Symbol.keyFor(foo)
'foo'
```
6. Symbol.species
Ref: http://es6.ruanyifeng.com/#docs/symbol#Symbol-species