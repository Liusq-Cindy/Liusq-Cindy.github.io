## 1、对象Object

基础理解：

[你不懂JS：this与对象原型 第三章：对象](https://www.jianshu.com/p/8fec6f287a9d)

要点总结：

1、简单基本类型 （string，number，boolean，null，和undefined）自身 不是 object，存在几种特殊的对象子类型，我们可以称之为 复杂基本类型，从字面上看，他们与基本类型有一些联系，其实内在关系更复杂：（以下为一些特殊的**对象子类型**）

- `String`
- `Number`
- `Boolean`
- `Object`
- `Function`
- `Array`
- `Date`
- `RegExp`
- `Error`

这些内建函数的每一个都可以被用作**构造器**（也就是，一个函数**可以和new操作符一起调用**），其结果是一个**新 构建 的相应子类型的对象**。

```jsx
var strPrimitive = "I am a string";
typeof strPrimitive;                            // "string"
strPrimitive instanceof String;                 // false

var strObject = new String( "I am a string" );
typeof strObject;                               // "object"
strObject instanceof String;                    // true

// 考察 object 子类型
Object.prototype.toString.call( strObject );    // [object String]
```

2、如 var a = 'aaa', string基本类型只是一个字面量，但在我们的使用中，可以操作a.length,a.charAt( 3 )等方法，是因为**语言自动地将"string"基本类型转换为了String对象类型**。

3、对象来自于两种形式，字面和构造形式，一般都用的是字面形式；两者的结果是完全同种类的对象，只是字面形式可以一次添加多个键值。

```jsx
var myObj = {
    key: value
    // 字面形式
};

var myObj = new Object(); // 构造形式
myObj.key = value;
```

4、在对象中，在容器内存储的是这些属性的名称，它们像指针，而值，引擎会根据自己的实现来存储，指针是为了指向这些值的。

5、对象访问通常是属性访问（.a）和键访问（[a]）,键访问的方式可以接收任何兼容UTF-8/unicode的字符串作为属性名，在ES6中还可以接受计算型属性名

```jsx
var prefix = "foo";

var myObject = {
    [prefix + "bar"]: "hello",
    [prefix + "baz"]: "world"
};

myObject["foobar"]; // hello
myObject["foobaz"]; // world
```

6、对象复制

（1）对于JSON安全的对象（也就是，可以被序列化为一个JSON字符串，之后还可以被重新变换为拥有相同的结构和值的对象）可以简单地这样 复制

```jsx
var newObj = JSON.parse( JSON.stringify( someObj ) );
```

(2）js中定义的浅拷贝：Object.assign(targetObj, obj1)

`Object.assign(..)`接收 *目标* 对象作为第一个参数，然后是一个或多个 *源* 对象作为后续参数。它会在 *源* 对象上迭代所有的 *可枚举（enumerable）*，*owned keys*（**直接拥有的键**），并把它们拷贝到 *目标* 对象上（仅通过`=`赋值）。

```jsx
var newObj = Object.assign( {}, myObject );
```

7、对象的属性配置

```jsx
var myObject = {
    a: 2
};

Object.getOwnPropertyDescriptor( myObject, "a" );
// {
//    value: 2, // 属性值
//    writable: true, // 是否可写
//    enumerable: true, // 可枚举性,在for in时可选择是否可枚举
//    configurable: true // 可配置性,如果为false，则不能调用defineProperty对齐进行配置
// 注意，这是一个单向操作，不可撤销！
// configurable:false阻止的另外一个事情是使用delete操作符移除既存属性的能力。
// }

// 可以定义一个对象的某个属性，设置为不可写

var myObject = {};

Object.defineProperty( myObject, "a", {
    value: 2,
    writable: false, // not writable!
    configurable: true,
    enumerable: true
} );

myObject.a = 3; // TypeError 当修改时，严格模式下，会报错的
```

8、一些用法

**Object.preventExtensions( myObject );** 防止对象扩展，即不可添加其他属性，现存属性也不可配置

**Object.seal(..)**创建一个“封印”的对象，这意味着它实质上在当前的对象上调用，不可写

**Object.freeze(..)**创建一个冻结的对象，这意味着它实质上在当前的对象上调用

**myObject.propertyIsEnumerable( "a" )**测试一个给定的属性名是否直 接存 在于对象上，并且是可枚举enumerable:true。

**Object.keys(..)**返回一个所有可枚举属性的数组

**Object.getOwnPropertyNames(..)**返回一个 所有 属性的数组，不论能不能枚举。

```jsx
var myObject = { };

Object.defineProperty(
    myObject,
    "a",
    // 使`a`可枚举，如一般情况
    { enumerable: true, value: 2 }
);

Object.defineProperty(
    myObject,
    "b",
    // 使`b`不可枚举
    { enumerable: false, value: 3 }
);

myObject.propertyIsEnumerable( "a" ); // true
myObject.propertyIsEnumerable( "b" ); // false

Object.keys( myObject ); // ["a"]
Object.getOwnPropertyNames( myObject ); // ["a", "b"]
```

## 2、原型Prototype

基础理解：

[你不懂JS：this与对象原型 第五章：原型（Prototype）](https://www.jianshu.com/p/eef62a19e7c1)

要点总结：

1、**每个构造函数内部，都有一个默认的.prototype链接**

2、**当试图在一个对象上进行属性访问，而对象没有该属性时，会根据对象内部的`[[Prototype]]`链接向上查找。这种对象到对象的串行链接定义了对象的“原形链”，在解析属性时发挥作用**。

```jsx
var anotherObject = {
    a: 2
};

// 创建一个链接到`anotherObject`的对象
var myObject = Object.create( anotherObject );

myObject.a; // 2
```

3、原形链的顶端：内建的**Object.prototype**，所有普通的对象都能访问到，如果属性没能在链条的前面任何地方找到，属性解析就会在这里停止。`toString()`，`valueOf()`，和其他几种共同工具都存在于这个`Object.prototype`对象上，这解释了语言中所有的对象是如何能够访问他们的。

4、使用new关键字，可以将两个对象相互链接在一起，每个由调用new Foo()而创建的对象将最终被[[Prototype]]链接到这个“Foo.原型”对象。

```jsx
function Foo() {
    // ...
}

var a = new Foo();

Object.getPrototypeOf( a ) === Foo.prototype; // true
```

5、如果一个普通的名为`foo`的数据访问属性在`[[Prototype]]`链的高层某处被找到，**而且没有被标记为只读（`writable:false`）**，那么一个名为`foo`的新属性就直接添加到`myObject`上，形成一个 **遮蔽属性**

```jsx
myObject.foo = "bar"; // 如果myObject上面设置了属性foo,他的原型链高层某处也有，
// 但没有被标为只读，那么这个foo新属性会被添加到myObject上，高层不受影响

```

6、一些对象用法 Object.getPrototypeOf（）， Object.create（），.hasOwnProperty()

```jsx
// 1、
Object.getPrototypeOf（a）; // 获取a对象的原型

// 2、
var anotherObject = {
    a: 2
};

var myObject = Object.create( anotherObject ); // 创建一个对象
anotherObject.hasOwnProperty( "a" ); // true 判断anotherObject是否自身含有这个a属性
myObject.hasOwnProperty( "a" ); // false

// 3、Object.defineProperty 定义原型属性
function Foo() { /* .. */ }

Foo.prototype = { /* .. */ }; // 创建一个新的prototype对象

// 需要正确地“修复”丢失的`.construcor`
// 新对象上的属性以`Foo.prototype`的形式提供。
// `defineProperty(..)`的内容见第三章。
Object.defineProperty( Foo.prototype, "constructor" , {
    enumerable: false,
    writable: true,
    configurable: true,
    value: Foo    // 使`.constructor`指向`Foo`
} );
```