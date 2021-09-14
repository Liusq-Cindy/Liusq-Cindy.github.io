参考文章：

[JS常见手写代码题（一）](https://www.jianshu.com/p/68aad73963e8?utm_campaign=maleskine)

[【javascript】手写call,apply,bind函数](https://www.cnblogs.com/vickylinj/p/14427534.html)

[手写 实现call、apply和bind方法 超详细！！！_前端圆圆-CSDN博客](https://blog.csdn.net/weixin_45844049/article/details/118026630?utm_medium=distribute.wap_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0.wap_blog_relevant_pic)

以下为一些常见的js手写代码系列

1. [call](https://www.notion.so/JS-1-1a766bb7ad8242b8953ac65a863b4c08)
2. **[apply](https://www.notion.so/JS-1-1a766bb7ad8242b8953ac65a863b4c08)**
3. **[bind](https://www.notion.so/JS-1-1a766bb7ad8242b8953ac65a863b4c08)**
4. **[new](https://www.notion.so/JS-1-1a766bb7ad8242b8953ac65a863b4c08)**
5. **数组扁平化**
6. **数组去重**
7. **原型继承**

# 一、JS实现一个call

**方法或函数fun.call(obj, 参数1，参数2，...)，第一个值是改变this指向到obj，后面是参数队列，调用call立即执行方法fun**

### call的定义和用法

```jsx
// call方法第一个参数指的是this的指向；接受一个参数列表;方法立即执行
// Function.prototype.call()样例
function fun(arg1, arg2) {
  console.log(this.name)
  console.log(arg1 + arg2)
}
const _this = { name: 'YIYING' }
// 这里把fun里的this，指向对象_this，然后立即执行，由此才可以输出YIYING
fun.call(_this, 1, 2)
// 输出
YIYING
3
```

### 手写实现call

```jsx
Funcion.prototype.mockCall = function (context = window, ...args) {
	const key = Symbol()
	context[key] = this
	const result = context[key](...args)
	delete context[key]
	return result
}
或者：
Function.prototype.myCall = function(context) {
    if (typeof context === "undefined" || context === null) {
        context = window
    }
   //context=context||window  和上面的代码一样
    context.fn = this//(因为call的调用方式形如：myFun.call(obj)，
    // 因此此时call方法的this指向为myFun，因此context.fn = this即为context.fn = myFun)
    const args = [...arguments].slice(1)//第一个参数为context，要去除
    const result = context.fn(...args)
    delete context.fn
    return result
}
```

### 实现分析

- 首先context为可选参数，如果不传的话默认上下文是window
- 接下来给content创建一个独一无二的属性(Symbol表示)，并将值设置为需要调用的函数
- 因为call可以传入多个参数作为调用函数的参数，这里用的...扩展运算符
- 然后调用函数并将对象上的函数删除

# 二、JS实现一个apply

**方法或函数fun.apply(obj, [参数1，参数2，...])，改变this指向到obj，立即执行方法fun**

apply接受两个参数，第一个参数是要**绑定给this的值**，第二个参数是一个**参数数组。**apply和call实现类似，不同的就是参数的处理

```jsx
Function.protoType.mockApply = function (context = window, args) {
	const key = Symbol()
	context[key] = this
	const result = context[key](...args)
	delete context[key]
	return result
}
```

# 三、JS实现一个bind

[【一篇终结你的困惑】JavaScript中call()、apply()、bind()的区别_Linda的前端开发路-CSDN博客](https://blog.csdn.net/u010176097/article/details/80348447)

### 用法：

```jsx
this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();  // 9

var boundGetX = retrieveX.bind(module);
boundGetX(); // 81  返回的是方法
```

Function.prototype.bind 第一个参数是**this的指向**，从第二个参数开始是**接收的参数列表**。和call的区别在于bind方法返回值是函数以及bind接收的参数列表的使用。

### 区别new的使用

```jsx
// bind的使用 区分普通调用和new调用
function A(a,b){
    console.log('this传入'+this.name + this.old + "参数传入" + a + b)
}
const obj = {
    name:"Bill",
    old: "两岁"
}
var bindFn = A.bind(obj,3) // 修改this的作用域，返回一个函数
var newFn = new bindFn(4) // 对bin的函数执行new操作符，打印 this传入undefinedundefined参数传入34
// 当使用new时，相当于 newFn = new A(...args1,...args2),将new传入，与这个obj无关
var doFn = bindFn(5) // 调用函数，传入额外参数 打印 this传入Bill两岁参数传入35
```

实现思路：

- 利用闭包保存调用bind时的this，这时的this就是原函数
- 使用call/apply指定this
- 返回一个绑定函数
- 当返回的绑定函数被new运算符调用的时候，绑定的上下文指向new运算符创建的对象
- 将绑定函数的prototype修改为原函数的prototype

无传参简易的版本

```jsx
Function.prototype.mockBind = function () {
  // 将arguments类数组转成数组
  let args = Array.prototype.slice.call(arguments);
	// 取出第一个对象和后面的参数
  let t = args.shift(); // args会删去第一项
	// 保留this,这个this指向对应的原函数（调用bind的这个函数）
  let samp = this;
  // 返回一个函数,将原函数的this指向传入的t对象并返回这个函数
	return function() {
		return samp.apply(t, args)
	}
}
```

或有传参的版本

```jsx
Function.protoType.mockBind = function (context = window, ...initArgs) {
	const foo = this
	var bindFoo = function (...args) {
		if(this instanceof bindFoo){
      return new foo(...initArgs, ...args)
    }
		return foo.call(context, ...initArgs, ...args)
	}
	return bindFoo
}
```

或

```jsx
// 参考：https://www.cnblogs.com/BoatGina/p/11220731.html
Function.prototype.mybind = function (context = window, ...argus) {
    const fn = this
    const fBound = function (...argus2) {
				// 判断是否是new调用，整合传参
        return fn.apply(this instanceof fBound ? this : context, [...argus, ...argus2])
    }
    fBound.prototype = Object.create(this.prototype)
		// mybind 执行后返回的函数fBound修改prototype的时候，不应该影响到fn.prototype，两者应该是独立的。
    // 所以源码使用了fBound.prototype = Object.create(this.prototype)， 而不是fBound.prototype = this.prototype。
    return fBound
}
```

**其他版本：一步步优化：**

参考：[https://www.cnblogs.com/echolun/p/12178655.html](https://www.cnblogs.com/echolun/p/12178655.html)

```jsx
版本一：不支持传参
Function.prototype.mockBind = function(ctx){
    let fn = this
    return function(){
        fn.apply(ctx)
    }  
}
版本二：处理参数
Function.prototype.bind_ = function (ctx) {
    //第0位是this，所以得从第一位开始裁剪
    var args = Array.prototype.slice.call(arguments, 1);
    var fn = this;
    return function () {
        fn.apply(ctx, args);
    };
};
版本三：支持柯里化
Function.prototype.bind_ = function (ctx) {
    //第0位是this，所以得从第一位开始裁剪
    var args = Array.prototype.slice.call(arguments, 1);
    var fn = this;
    return function () {
        //二次调用我们也抓取arguments对象
        var params = Array.prototype.slice.call(arguments);
        //注意concat的顺序
        fn.apply(ctx, args.concat(params));
    };
};
版本四：完整实现，
Function.prototype.bind_ = function (obj) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    };
    var args = Array.prototype.slice.call(arguments, 1);
    var fn = this;
    //创建中介函数
    var miFn = function () {};
    var bound = function () {
        var params = Array.prototype.slice.call(arguments); // 传入的额外参数
        //通过constructor判断调用方式，为true this指向实例，否则为obj
        fn.apply(this.constructor === fn ? this : obj, args.concat(params));
        console.log(this);
    };
    // 维护原型关系--参考寄生组合式继承
    miFn.prototype = fn.prototype;
    bound.prototype = new miFn();
    return bound;
};
```

第一个参数是**this的指向**，从第二个参数开始是**接收的参数列表**。区别在于bind方法返回值是函数以及bind接收的参数列表的使用。

### 完整实现原理：[https://blog.csdn.net/q3254421/article/details/82999718](https://blog.csdn.net/q3254421/article/details/82999718)

# 四、手写一个new的实现

### 正常使用new

```jsx
function Dog(name){
    this.name = name
		// 如果构造函数做个改动，执行时返回一个对象，那么new 返回这个对象
		 // return {
		 //  name: 'gg'+ name
		 // }
}
Dog.prototype.sayName = function(){
    console.log('名字', this.name)
}
var dog1 = new Dog('小狗')
dog1.sayName() // 输出--名字 小狗
// 如果加上了return这部分，那么dog1 = {name: 'gg小狗'},
// dog1.sayName会打印出：dog1.sayName is not a function
```

思考一下new 操作符做了哪些事情？

- 创建一个新对象
- 新对象会被执行 `__proto__`链接，关联到构造函数的`.prototype` 属性上,即和构造函数用的一个原型，从而可调用原型上的方法
- 函数调用的this绑定到新对象上
- 如果函数没有返回其他对象，那么new表达式中的函数会调用自动返回这个新对象

### 手写new实现

```jsx
function mockNew (foo, ...args) {
	if (typeof foo !== 'function') {
    throw Error('foo is not a constructor')
  }
	// 基于obj的原型创建一个新的对象
  const newObj = Object.create(foo.prototype);
  // 添加属性到新创建的newObj上, 并获取foo函数执行的结果.
  const result = foo.apply(newObj, rest);
  // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
  return typeof result === 'object' ? result : newObj;
}

new的具体步骤
1. 创建一个空对象 var obj = {}
2. 修改obj.__proto__=Dog.prototype
3. 只改this指向并且把参数传递过去,call和apply都可以
4. 根据规范，fn如果不返回数据或返回 null 和 undefined ，则new会返回这个新对象obj，
如果fn返回一个对象，那么优先返回fn的这个执行结果。
参考：https://juejin.cn/post/6844903937405878280
```

# 五、数组扁平化

### 方法一：es6 flat方法

```jsx
var arr = [1,2,[3,4,[5,6,[7]]]]
arr.flat(Infinity) // [1,2,3,4,5,6,7]
```

### 方法二：递归

```jsx
var flatArr = function(arr1) {
	let newArr = [];
  function getChild(arr) {
		for(let i = 0; i<arr.length;i++) {
			if(arr[i] instanceof Array === false) {
				newArr.push(arr[i])
			} else {
				getChild(arr[i])
			}
		}
	}
	getChild(arr1);
	return newArr;
}

// 调用：
var a = [[1,2,2], [6,7,8, [11,12, [12,13,[14]]], 10]];
console.log('水电费', flatArr(a))
// [1, 2, 2, 6, 7, 8, 11, 12, 12, 13, 14, 10]
```

### 方法三：正则

```jsx
const res2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',');
res2.map(item=> parseInt(item))
```

### 方案四: toString方法

 [1,[2,[3,[4,5,[6]]]]].toString = "1,2,3,4,5,6"

```jsx
*function* flatArr(*arr1*) {
 let ans = *arr1*.toString().split(',');
 return ans.map(*item* *=>* +*item*)
}
```

# 六、数组去重

### 方法一：es6 Set

```jsx
var arr = [1,2,3,3,4,4,5]
var newArr = Array.from(new Set(arr)); // [1,2,3,4,5]
// 或者arr = [...set]      Array.from() 将伪数组转换为数组
```

### 方法二：循环遍历数组

```jsx
function filterArr(arr){
	var newArr = [];
	arr.forEach(item => {
		if(!newArr.includes(item)) { // 也可以是!newArr.indexOf(item)
			newArr.push(item)
		}
	})
	return newArr
}
```

### 方法三：hash表

```jsx
let arr = [1,1,2,3,2,1,2]
function unique(arr){
    let obj = {}
    arr.forEach((item) => {
        obj[item] = true
    })
    let keys = Object.keys(obj)
    keys = keys.map(item => parseInt(item)) // 转为数字
    return keys
}
console.log(unique(arr))
```

# 七、原型继承（寄生组合继承）

```jsx
这里只写寄生组合继承了，中间还有几个演变过来的继承但都有一些缺陷
function Parent() {
  this.name = 'parent';
}
function Child() {
  Parent.call(this);
  this.type = 'children';
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
```