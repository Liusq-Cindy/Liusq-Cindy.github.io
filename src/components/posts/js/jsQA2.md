这里总结了一些JS中的基础概念

1. [深拷贝、浅拷贝](https://www.notion.so/JS-2-set-map-82e4f9f01e894532a5d57733fa933ebd)
2. [Set 和 Map 数据结构](https://www.notion.so/JS-2-set-map-82e4f9f01e894532a5d57733fa933ebd)

# 一、深拷贝、浅拷贝

[js浅拷贝与深拷贝的区别和实现方式](https://www.jianshu.com/p/1c142ec2ca45)

### 简单理解：

1. JS中，基础数据类型存放在栈中，引用数据类型存放在堆中，而栈中存放的只是指向堆中的值的指针；
2. 如果我们复制一个引用数据类型，只是复制了指针，其实指向的是同一个值，那么通过一个指针改变值，另一个也会跟着改变。
3. 深拷贝与浅拷贝，简单点来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝，拿人手短，如果B没变，那就是深拷贝，自食其力。

## 1、实现浅拷贝的方法

**1）for···in只循环第一层，则第一层不会随之改变，而没有被循环到的下一层都是浅拷贝，会随之改变**

```jsx
// 只复制第一层的浅拷贝
function simpleCopy(obj1) {
   var obj2 = Array.isArray(obj1) ? [] : {};
   for (let i in obj1) {
   obj2[i] = obj1[i];
  }
   return obj2;
}
var obj1 = {
   a: 1,
   b: 2,
   c: {
         d: 3
      }
}
var obj2 = simpleCopy(obj1);
obj2.a = 3;
obj2.c.d = 4;
alert(obj1.a); // 1
alert(obj2.a); // 3
alert(obj1.c.d); // 4
alert(obj2.c.d); // 4
```

**（2）Object.assign方法**

```jsx
var obj = {
    a: 1,
    b: 2
}
var obj1 = Object.assign(obj);
obj1.a = 3;
console.log(obj.a) // 3
```

**（3）直接用=赋值，对于数组、对象，都属于浅拷贝**

```jsx
let a=[0,1,2,3,4],
    b=a;
console.log(a===b); // true
a[0]=1;
console.log(a,b); // [1,1,2,3,4][1,1,2,3,4]
```

## 2、 实现深拷贝的方法

**（1）采用递归去拷贝所有层级属性  (手写一个深拷贝)**

```jsx
function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                //判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key] && typeof obj[key] ==="object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}    
let a=[1,2,3,4],
    b=deepClone(a);
a[0]=2;
console.log(a,b);
```

**（2） 通过JSON对象来实现深拷贝 ，序列化反序列化**

```jsx
function deepClone2(obj) {
  var _obj = JSON.stringify(obj),
    objClone = JSON.parse(_obj);
  return objClone;
}
缺点： 无法实现对对象中方法的深拷贝，会显示为undefined
```

**（3）通过jQuery的extend方法实现深拷贝**

```jsx
var array = [1,2,3,4];
var newArray = $.extend(true,[],array); // true为深拷贝，false为浅拷贝
```

**（4）lodash函数库实现深拷贝**

`let result = _.cloneDeep(test)`

**（5）手动实现深拷贝,手动将一个对象的值一个个赋值给另一个对象**

（）如果对象的value是基本类型的话，也可以用Object.assign来实现深拷贝，但是要把它赋值给一个空对象

```jsx
var obj = {
    a: 1,
    b: 2
}
var obj1 = Object.assign({}, obj); // obj赋值给一个空{}
obj1.a = 3;
console.log(obj.a)；// 1
```

**（6）用slice实现对数组的深拷贝**

```jsx
// 当数组里面的值是基本数据类型，比如String，Number，Boolean时，属于深拷贝
// 当数组里面的值是引用数据类型，比如Object，Array时，属于浅拷贝
var arr1 = ["1","2","3"]; 
var arr2 = arr1.slice(0);
arr2[1] = "9";
console.log("数组的原始值：" + arr1 );
console.log("数组的新值：" + arr2 );
```

**（7）用concat实现对数组的深拷贝**

```jsx
// 当数组里面的值是基本数据类型，比如String，Number，Boolean时，属于深拷贝
var arr1 = ["1","2","3"];
var arr2 = arr1.concat();
arr2[1] = "9";
console.log("数组的原始值：" + arr1 );
console.log("数组的新值：" + arr2 );
// 当数组里面的值是引用数据类型，比如Object，Array时，属于浅拷贝
var arr1 = [{a:1},{b:2},{c:3}];
var arr2 = arr1.concat();
arr2[0].a = "9";
console.log("数组的原始值：" + arr1[0].a ); // 数组的原始值：9
console.log("数组的新值：" + arr2[0].a ); // 数组的新值：9
```

**(8)使用扩展运算符实现深拷贝**

```jsx
// 当value是基本数据类型，比如String，Number，Boolean时，是可以使用拓展运算符进行深拷贝的
// 当value是引用类型的值，比如Object，Array，引用类型进行深拷贝也只是拷贝了引用地址，所以属于浅拷贝
var car = {brand: "BMW", price: "380000", length: "5米"}
var car1 = { ...car, price: "500000" }
console.log(car1); // { brand: "BMW", price: "500000", length: "5米" }
console.log(car); // { brand: "BMW", price: "380000", length: "5米" }
```

# 二、set、map数据结构

[ES6 入门教程](https://es6.ruanyifeng.com/#docs/set-map)

## 理解

1. set集合，类似于数组，但是不含重复元素。可以理解为数组衍生出来的新的数据结构。
2. map映射，类似于对象，但是对象的健只能是字符串。可以理解为从对象衍生出来的。而Map“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。

## 1、set

### 基本用法

```jsx
1、初始化数组，数组去重
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]
去除数组的重复成员可以直接这样：[...new Set(array)]
也可以用于，去除字符串里面的重复字符：[...new Set('ababbc')].join('')

2、set中加入值，是不会类型转换的，相当于===，但是NaN不会重复添加。
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // Set {NaN}
上面代码向 Set 实例添加了两次NaN，但是只会加入一个。这表明，在 Set 内部，两个NaN是相等的。

另外，两个对象总是不相等的。
let set = new Set();
set.add({});
set.size // 1
set.add({});
set.size // 2
```

### Set 实例的属性和方法

Set是一个构造函数，set实例包括操作方法（用于操作数据）和遍历方法（用于遍历成员）。

**操作方法：**

- `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
- `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `Set.prototype.clear()`：清除所有成员，没有返回值。

```jsx
let s = new Set();
s.add(1).add(2).add(2);
// 注意2被加入了两次
s.size // 2
s.has(1) // true
s.has(2) // true
s.has(3) // false
s.delete(2);
s.has(2) // false
```

`**Array.from`方法可以将 Set 结构转为数组。**

```jsx
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
function dedupe(array) {
  return Array.from(new Set(array));
}
// 数组去重
dedupe([1, 1, 2, 3]) // [1, 2, 3]
```

**遍历方法：**

- `Set.prototype.keys()`：返回键名的遍历器
- `Set.prototype.values()`：返回键值的遍历器,和键名一样
- `Set.prototype.entries()`：返回键值对的遍历器
- `Set.prototype.forEach()`：使用回调函数遍历每个成员

Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致

```jsx
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```

**new Set[]将数组转为Set,[...set]扩展可将set转为数组(或者利用Array.from方法)，数组的`map`和`filter`方法也可以间接用于 Set 了。**

```jsx
let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// 返回Set结构：{2, 4, 6}

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
// 返回Set结构：{2, 4}
```

## 2、Map

### 含义和基本用法

```jsx
Map 结构的set方法，将对象o当作m的一个键，然后又使用get方法读取这个键，
接着使用delete方法删除了这个键
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
// 作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
// 注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
const map = new Map();
map.set(['a'], 555);
map.get(['a']) // undefined
上面代码的set和get方法，表面是针对同一个键，但实际上这是两个不同的数组实例，
内存地址是不一样的，因此get方法无法读取该键，返回undefined

```

### 实例的属性和操作方法

**（1）size 属性**

`size`属性返回 Map 结构的成员总数。

**（2）Map.prototype.set(key, value)**

set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。

set方法返回的是当前的Map对象，因此可以采用链式写法。

**（3）Map.prototype.get(key)**

`get`方法读取`key`对应的键值，如果找不到`key`，返回`undefined`。

**（4）Map.prototype.has(key)**

`has`方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。

**（5）Map.prototype.delete(key)**

`delete`方法删除某个键，返回`true`。如果删除失败，返回`false`。

**（6）Map.prototype.clear()**

`clear`方法清除所有成员，没有返回值。

**遍历方法**

- `Map.prototype.keys()`：返回键名的遍历器。
- `Map.prototype.values()`：返回键值的遍历器。
- `Map.prototype.entries()`：返回所有成员的遍历器。
- `Map.prototype.forEach()`：遍历 Map 的所有成员。

Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。

```jsx
const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

[...map.keys()]
// [1, 2, 3]

[...map.values()]
// ['one', 'two', 'three']

[...map.entries()]
// [[1,'one'], [2, 'two'], [3, 'three']]

[...map]
// [[1,'one'], [2, 'two'], [3, 'three']]
```

**Map 转为对象**

如果所有 Map 的键都是字符串，它可以无损地转为对象。

```jsx
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

const myMap = new Map()
  .set('yes', true)
  .set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }

```

如果有非字符串的键名，那么这个键名会被转成字符串，再作为对象的键名。

**对象转为 Map**

对象转为 Map 可以通过`Object.entries()`。

```jsx
let obj = {"a":1, "b":2};
let map = new Map(Object.entries(obj));
```