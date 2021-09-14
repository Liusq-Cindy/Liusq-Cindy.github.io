[前端经典面试题(60道前端面试题包含JS、CSS、React、网络、浏览器、程序题等)](https://segmentfault.com/a/1190000020391424)

这里总结了一些JS中的基础概念，包括闭包、冒泡等等，面试常常问到的

1. 闭包与作用域
2. 事件冒泡
3. call、apply、bind
4. [for in和for of的区别和用法](https://www.notion.so/JS-1-call-for-in-bfc240f826d94622a452c0667909588d)
5. 变量声明提升、函数提升
6. JS的数据类型
7. js的垃圾hui

# 一、闭包与作用域

### 1、思维导图：

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/48f108bc-8913-4357-be0b-689274490f13/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/48f108bc-8913-4357-be0b-689274490f13/Untitled.png)

### 2、说明:

1. 在js作用域环境中访问变量的权利是由内向外的，在外层作用域下无法获取内层作用域下的变量
2. **闭包有3个特性：**

    ①函数嵌套函数

    ②函数内部可以引用函数外部的参数和变量

    ③参数和变量不会被垃圾回收机制回收

3. 好处

    ①保护函数内的变量安全 ，实现封装，防止变量流入其他环境发生命名冲突

    ②在内存中维持一个变量，可以做缓存（但使用多了同时也是一项缺点，消耗内存）

    ③匿名自执行函数可以减少内存消耗

4. 坏处

    ①其中一点上面已经有体现了，就是被引用的私有变量不能被销毁，增大了内存消耗，造成内存泄漏，解决方法是可以在使用完变量后手动为它赋值为null；

    ②其次由于闭包涉及跨域访问，所以会导致性能损失，我们可以通过把跨作用域变量存储在局部变量中，然后直接访问局部变量，来减轻对执行速度的影响

### 3、表现

**函数作为返回值**

```jsx
function bag(){
	let a = 100;
  return function() {
	  console.log(a);
  }
}
let a = 200;
let ans = bag();
ans();  //  应该返回100，这个a自由变量，是从函数定义的地方从上级作用域查找
```

**函数作为参数传递**

```jsx
function bag(fn1) {
	 a = 100;
  fn1();
}
let  a = 200;
let fn1 = function() {
  console.log(a)
}
bag(fn1); // 应该返回200，这个a自由变量，是从函数定义的地方，从上级作用域查找
```

### 4、示例

（1）**函数作为返回值**

```jsx
fucntion a(){
	var name = 'apple';
	return function(){
		return name;
	}
}
var b = a();
console.log(b()) // apple
在这段代码中，a()中的返回值是一个匿名函数，这个函数在a()作用域内部，
所以它可以获取a()作用域下变量name的值，将这个值作为返回值赋给全局作用域下的变量b,
实现了在全局变量下获取到局部变量中的变量的值
```

(2)**经典案例**

```jsx
//打印5个5
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i, 'i');
    }, 0)
  }
按照预期它应该依次输出1 2 3 4 5，而结果它输出了五次5，这是为什么呢？
原来由于js是单线程的，所以在执行for循环的时候定时器setTimeout被安排到任务队列中排队等待执行，
而在等待过程中for循环就已经在执行，等到setTimeout可以执行的时候，for循环已经结束，
i的值也已经编程5，所以打印出来五个5

//打印 0 1 2 3 4
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i, 'i');
    }, 0)
  }
换成let,将i包含在块级作用域中，或者将setTimeout放入立即执行函数中也可以
//打印 0 1 2 3 4
for (let i = 0; i < 5; i++) {
	(function(i){
		setTimeout(() => {
      console.log(i, 'i');
    }, 0)
	})(i)
  }
如果我们想实现每隔100毫秒分别依次输出数字，又该怎么改呢？如下：
//每秒打印一次 0 1 2 3 4
  for (var i = 0; i < 5; i++) {
    (function (j) {
      setTimeout(function () {
        console.log(new Date, j);
      }, 1000 * j);
    })(i);
  }
在这段代码中，相当于同时启动3个定时器，j*1000是为4个定时器分别设置了不同的时间，同时启动，
但是执行时间不同，每个定时器间隔都是100毫秒，实现了每隔100毫秒就执行一次打印的效果。
```

# 二、事件冒泡与事件委托

参考文章：

[浅谈JS事件冒泡](https://www.cnblogs.com/moqing/p/5590216.html)

## 1、事件冒泡

1. 当一个元素接收到事件的时候 会把他接收到的事件传给自己的父级，一直到window 。（注意这里传递的仅仅是事件 并不传递所绑定的事件函数。所以如果父级没有绑定事件函数，就算传递了事件 也不会有什么表现 但事件确实传递了。）
2. 点击事件给页面显示出来的位置是没关系的，而是跟html代码中的位置有关系

### 取消冒泡

取消事件冒泡有两种方式：

标准的W3C 方式：**e.stopPropagation()**;这里的stopPropagation是标准的事件对象的一个方法，调用即可

非标准的IE方式:**ev.cancelBubble=true;**  这里的cancelBubble是 IE事件对象的属性，设为true就可以了

```jsx
var div2 = document.getElementById("div2");
var div1 = document.getElementById("div1");

 div2.onclick = function(ev){  // 红色面板加事件
     div1.style.display = "block"; 
			stopBubble(ev)；//这样就不会再冒泡给父级了 
 }; document.onclick = function(){      div1.style.display = "none"; } 
function stopBubble(e) {
    //如果提供了事件对象，则这是一个非IE浏览器
   if ( e && e.stopPropagation )
      //因此它支持W3C的stopPropagation()方法
      e.stopPropagation();
  else
  //否则，我们需要使用IE的方式来取消事件冒泡
    window.event.cancelBubble = true;
}
```

## 2、事件委托

事件委托：也称事件代理 就是利用冒泡的原理 把加事件加到父级上，触发执行效果

### 示例：

给每一个li元素绑定事件，当移入时改变颜色，就可以利用事件委托将事件绑定到ul上，再利用ev.target事件源 (不管事件绑定在那个元素中 都指的是实际触发事件的那个的目标)，就是能获取到你当前鼠标所在的LI，而不至于改变整个ul

```jsx
window.onload = function(){ 
    var oUl = document.getElementById('ull');
     var aLi = document.getElementsByTagName('li');

  oUl.onmouseover = function(ev){ 
     var event = ev||window.event;  // 获取event对象
     var target = ev.target || ev.srcElement; // 获取触发事件的目标对象
    
     if(target.nodeName.toLowerCase() == 'li'){  //判断目标对象是不是li
         target.style.background = 'red';
     }

  }
代码中加了一个标签名的判断，主要原因是如果不加判断，当你鼠标移入到父级oUL上面的时候，整个列表就会变红，这不是我们想要的结果，所以要判断一下。
target.nodeName 弹出的名字是大写的，所以需要转换大小写再比较。
```

**其实事件委托还有第二个优点：就是新添加的元素还会有之前的事件**

假定我们又有一个需求，点击某个按钮，可以在列表中再创建一个li,这个时候一般方法，因为新创建的li没有加事件，所以是不具备移入变红的功能的，但是用事件委托的方法，新的li,同样有这个事件。原理也很容易相同，因为事件是加在父亲上面的，父亲在，事件在。

# 三、call、apply、bind

### 介绍

- 作用：都是改变函数运行时this的指向.
- this的指向定义的时候是不确定的，最终是指向它的调用者.

### call

call 方法第一个参数是要**绑定给this的值**，后面传入的是一个**参数列表**。当第一个参数为null、undefined的时候，默认指向window。

```jsx
1、
var arr = [1, 2, 3, 89, 46];
var max = Math.max.call(null, arr[0], arr[1], arr[2], arr[3], arr[4]);

2、改变this指向obj
var obj = {
    message: 'My name is: '
  }
function getName(firstName, lastName) {
    console.log(this.message + this.firstName + ' ' + lastName)
    //My name is: undefined Dolby
  }
  getName.call(obj, 'Dot', 'Dolby')
```

### apply

apply接受两个参数，第一个参数是要**绑定给this的值**，第二个参数是一个**参数数组**。当第一个参数为null、undefined的时候，默认指向window。

```jsx
var arr = [1,2,3,89,46]
var max = Math.max.apply(null,arr)//89
```

```jsx
var obj = {
    message: 'My name is: '
  }
  function getName(firstName, lastName) {
      console.log(this.message + firstName + ' ' + this.lastName)     
//My name is: Dot undefined
  }
  getName.apply(obj, ['Dot', 'Dolby'])
```

### bind

第一个参数是**this的指向**，从第二个参数开始是**接收的参数列表**。区别在于bind方法返回值是函数以及bind接收的参数列表的使用。

```jsx
var obj = {
    name: 'along'
  }  
  function Fn () {
    const name = 'aa'
    console.log(this.name)  //along
  }
  var a1 = Fn.bind(obj);
  console.log(a1)        
 //ƒ Fn () { const name = 'aa' console.log(this.name)}
  a1();
```

### call继承

```jsx
var Person1  = function () {
    this.name = 'Dot';
}
var Person2 = function () {
    this.getname = function () {
        console.log(this.name);
    }
    Person1.call(this);  //Person1.apply(this)
}
var person = new Person2();
person.getname();       // Dot
从上面我们看到，Person2 实例化出来的对象 person 通过 getname 方法拿到了 Person1 中的 name。
因为在 Person2 中，Person1.call(this) 的作用就是使用 Person1 对象代替 this 对象，
那么 Person2 就有了 Person1 中的所有属性和方法了，相当于 Person2 继承了 Person1 的属性和方法。
```

# 四、for in和for of的区别和用法

 1、for (var index in Obj1) {

}是es5的标准，遍历键值，通常用于遍历对象比较好

for (var value of Arr1) {

}是es6的标准，遍历属性值，通常用于遍历数组比较好

2、for in，以及forEach常用于同步的一些遍历，for of常用于异步，他的语句是异步执行的

```jsx
// 定义一个平方函数，返回一个promise，一秒后返回他的结果
function muti(num){
	return new Promise(resolve => {
		setTimeout(() => {
			resolve (num * num)
    },1000)
	})
}
const nums = [1,2,3]
// 如果是forEach,他是执行完，将结果打印，一秒钟后，一起打印出1，4，9
nums.forEach(async (i) => {
	const res = await muti(i)
  console.log(res)
})

// 如果是for of，他是一个个去执行的，控制台会依次一秒显示一个，1，4，9
!(
	async function() {
		for(let i of nums) {
			const res = await muti(i)
      console.log(res)
		}
	}
)()
```

# 五、变量声明提升、函数声明提升

参考文章：

[浅谈JS变量提升](https://zhuanlan.zhihu.com/p/100563316)

[浅谈JS变量提升_技术之路-CSDN博客_js变量提升](https://blog.csdn.net/qq_39712029/article/details/80951958)

### 1、编译原理

1. JavaScript的源代码在运行的时候，会经过两个阶段：编译和执行。
2. 编译过程会经过词法解析（如var a = 1,会先解析出 var 、a、=、1、;）、语法解析（生成AST树）、代码生成、变量提升、函数提升
3. 我们在代码中的var a = 3，会将var a，声明提升到它所在作用域的顶端去执行，到我们代码所在的位置来赋值；同样函数的声明也会被提升。了解声明提升，有助于我们了解代码真正的执行顺序。

### 2、变量提升

var 会将变量声明提升到它所在作用域的顶端去执行，到我们代码所在的位置来赋值

```jsx
function test () {
    console.log(a);  //undefined
    var a = 123; 
};
test()
// 上述代码的执行结果是：undefined，它的实际执行顺序如下：
function test () {
    var a;
    console.log(a);
    a = 123;
}
test();
// 而如下执行结果是1
a = 1;
var a;
console.log(a); //1
```

### 3、函数提升

javascript中不仅仅是变量声明有提升的现象，函数的声明也是一样，函数提升分为两种：

1. 函数声明式 2. 函数字面量式

```jsx
//函数声明式
function bar () {}
//函数字面量式 
var foo = function () {}
```

函数字面量式的声明合变量提升的结果是一样的，函数只是一个具体的值；即只是提升了 var foo；

但是函数声明式的提升现象和变量提升略有不同：是整个代码块提升到它所在的作用域的最开始执行

```jsx
f();
fn();//fn is not a function 

//函数表达式
var fn = function(){
    console.log(1)
}

//函数声明
function f(){
    console.log(0)
}
```

这里我把代码还原，我们来看一下：

```jsx
*//函数声明*
**function** f(){
    console.log(0)
}

**var** fn;

f();

fn();

fn **=** **function**(){
    console.log(1)
}
```

# 六、JS的数据类型

### **JS有几种数据类型,其中基本数据类型有哪些?**

**七种数据类型**

- Boolean
- Null
- Undefined
- Number
- String
- Symbol (ECMAScript 6 新定义)
- Object

(ES6之前)其中5种为基本类型:`string`,`number`,`boolean`,`null`,`undefined`,

ES6出来的`Symbol`也是原始数据类型 ，表示独一无二的值

`Object`为引用类型(范围挺大),也包括数组、函数,