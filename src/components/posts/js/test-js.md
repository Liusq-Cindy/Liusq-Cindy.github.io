1. [闭包（使用、内存泄漏）](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)
2. [事件（事件处理函数、冒泡捕获、阻止默认）](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)
3. [构造函数和原型链](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)
4. **[函数与this的理解](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)**
5. **[class与继承（各种继承方式）](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)**
6. [js数据类型（强制类型转换、函数-箭头函数）](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)
7. [数组、字符串操作](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)
8. [正则](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)
9. [理解事件循环](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)
10. [js设计模式](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)
11. **[异步编程（promise、async-await）](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)**
12. [Typescript](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)
13. [ES6基础（const\let变量、变量声明提升）](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)
14. [防抖节流](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)
15. [set和map数据结构](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)
16. [常用编码转换](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)
17. [js执行上下文](https://www.notion.so/Test-JS-a6ea7a00143e49e2824198f3bcc9bc84)

# 1、闭包（使用、内存泄漏）

### 闭包是什么？

闭包是访问了别的函数作用域中变量的函数。它通常表现为函数作为参数传递，或者在函数内部返回一个函数。举个例子，在一个函数中，定义一个变量，然后返回另一个函数，因为这个函数是嵌套在外部函数中的，它可以访问到这个变量，通过这个办法，可以将函数作用域内的变量，抛出到外部，供其他函数调用。

### 闭包的常见表现和形成条件

常见形式：函数作为参数传递、函数内部返回一个函数。

形成条件：存在上级作用域中的引用

自由变量：所有的（不仅仅是闭包）自由变量（函数中引用的一个变量）的查找，是在函数**定义的地方**向上级作用域查找，不是函数执行的地方。

### 他的使用场景？

主要是用来隐藏数据、做数据缓存等等。

1. 例如节流防抖，函数嵌套函数，在函数内访问外部变量，并返回这个函数。它保护函数内的变量安全 ，实现封装，防止变量流入其他环境发生命名冲突
2. 在内存中维持一个变量，用来做缓存，如cache闭包的使用，即在function中设置date保存数据，然后定义get、set方法。（具体见手写系列2）

### 注意的事项？

1. 如果抛出的参数和变量被外部引用，因为不会被垃圾回收机制回收，所以可能造成内存泄露
2. 由于闭包涉及跨域访问，所以会导致性能损失，我们可以通过把跨作用域变量存储在局部变量中，然后直接访问局部变量，来减轻对执行速度的影响

### 内存泄露指的什么？

内存泄漏指由于疏忽或错误造成程序**未能释放已经不再使用的内存，造成的内存占用浪费**。如果内存不需要时，没有经过生命周期的释放期，那么就存在内存泄漏。

### 垃圾回收机制是什么原理？什么时候会回收？

浏览器在执行JS过程中，需要用到很多的内存来存储一些对象等等，但我们不能让这个内存无限大，需要在不需要使用一些内存对象的时候，释放掉它。浏览器就有两种方式来做这个垃圾回收：标记清除（用的最多）和引用计数。

垃圾回收机制会定期（周期性）找出那些不再用到的内存（变量），然后释放其内存

### **垃圾内存的两种方式：**

**1、引用计数法**

对象被一个变量引用一次，次数+1，被引用的变量又被另一个引用，次数+1，如果变量设为null,那对应的对象次数-1，当次数为0，表示没有引用指向该对象，则会被垃圾回收机制回收

**2、 标记清除法**

进入环境打上标记进入执行环境，不会被回收，离开环境时，就会打上离开环境的标记，然后会被回收

### JavaScript 内存泄漏的一些场景：

1. **意外的全局变量**
2. 被遗忘的计时器
3. 被遗忘的事件监听器
4. 被遗忘的 ES6 Set 成员
5. 脱离 DOM 的引用

# 2、事件（事件处理函数、冒泡捕获、阻止默认）

### 事件是什么？讲一下有哪些常用的事件？

HTML 事件包括了浏览器行为和用户行为，常见的有

- HTML 页面完成加载
- HTML input 字段改变时
- HTML 按钮被点击

通常，当事件发生时，我们可以做一些事情，执行js代码，修改样式，甚至添加html结构。

常用的事件有：

```jsx
onchange	HTML 元素改变
onclick	用户点击 HTML 元素
onmouseover	用户在一个HTML元素上移动鼠标
onmouseout	用户从一个HTML元素上移开鼠标
onkeydown	用户按下键盘按键
onload	浏览器已完成页面的加载
```

### $event介绍？

当用户单击某个元素的时候，我们给这个元素注册的事件就会触发，该事件的本质就是一个函数，而该函数的形参接收一个event对象。

通过该对象我们需要的一些参数，比如通过event的属性`event.target`来获取到事件触发的目标，或通过方法`preventDefault()`阻止浏览器默认行为。

```jsx
target	返回触发此事件的元素（事件的目标节点）。
type	返回当前 Event 对象表示的事件的名称。
preventDefault()	通知浏览器不要执行与事件关联的默认动作。
stopPropagation()	不再派发事件。
clientX	返回当事件被触发时，鼠标指针的水平坐标。
clientY	返回当事件被触发时，鼠标指针的垂直坐标。
```

### 事件触发，捕获冒泡

事件触发有两个阶段，捕获和冒泡，捕获阶段是从最顶层元素定位到目标元素的过程，冒泡是从目标元素再查找到顶层元素的过程。

### 怎么阻止冒泡（原生和vue）？

原生js阻止冒泡需要区分标准stopPropagation和IE模式event.cancelBubble

```jsx
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

Vue中的话，click事件可以增加修饰符.stop阻止冒泡

### 怎么利用冒泡—事件委托？

事件委托：也称事件代理 就是利用冒泡的原理 把加事件加到父级上，触发执行效果，他可以**减少我们的事件绑定（通过**ev.target去定位触发事件的目标对象**），而且新添加的元素还会有之前的事件**

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

### 写一个通用的事件绑定函数

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/542023b4-1612-4c3f-ac87-ded4deef3429/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76abab35-1ef6-47c5-99f8-1e7eb40fb937/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0147d674-5ab7-4402-9f5f-5eed2f8c50e0/Untitled.png)

# 3、构造函数和原型链

```jsx
function F(){}
var f = new F();

// 构造器
F.prototype.constructor === F; // true
F.__proto__ === Function.prototype; // true
Function.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__ === null; // true

// 实例
f.__proto__ === F.prototype; // true
F.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__ === null; // true
```

### 构造函数、原型和实例对象的关系？

构造函数是用来新建和初始化一个新对象的函数，编写上通常用首字母大写以便区分。他有个默认的prototype属性，指向他的原型，原型的constructor指向这个构造函数。

通过new一个构造函数，可以生成一个新的实例对象，这个实例对象的proto指向他的原型。

我们通常用构造函数来构建新对象，然后在它的原型上，绑定一些通用方法，可以供他的实例共享使用。

### 原型是什么？

每个对象被创建时，js都会自动添加一个 prototype 属性，指向对象的原型。

原型相当于一个对象模板，是一个可以被复制的类，他定义了一些公用的属性和方法，利用原型创建出来的新对象实例会共享原型的属性和方法。

### **原型链是什么？**

在JavaScript中每个对象都有一个**指向他的原型内部对象的内部链接（__proto__）**，每个原型对象又有自己的原型，直到某个对象的原型为null为止(Object.proptotype.__proto__指向的是null)，组成这条链的最后一环。这种关系被称为原型链(prototype chain)，通过原型链一个对象可以拥有定义在其他对象中的属性和方法。

原型对象主要作用主要是用于**继承**。

### 怎么判断构造函数和原型链的关系？

a instanceof  b 判断a的原型链向上查找是不是有b

a.prototype === b 判断b是不是a的原型

b.constructor === a 判断a是不是b的构造函数

# 4、函数与this的理解

## 函数的基本理解

函数实际上也是对象，每个函数都是Function类型的实例，而Function也有属性和方法，如name、arguments等等。函数名是指向函数对象的指针。在实际中，我们把函数想象成对象，把函数名想象成指针是很重要的。

**函数内部存在几个特殊的对象：arguments、this、还有es6新增的new.target属性**

**arguments**

1. 使用function关键词定义函数，可以访问到这个类数组对象，其中包含了传入函数的参数值.arguments[0]、arguments[1]
2. 修改arguments[1]会影响形参，他会同步改掉；反之不会。若严格模式，则均不会影响。

**new.target**

函数可以作为构造函数实例化一个新对象，也可以作为普通函数被调用。通过new.target可以判断调用的方式，如果new.target为true，就是针对new Abc这种调用方式的逻辑，否则就是普通调用。

function King() {

if (new.target) {

}  else {   }

}

**函数还有一个常见属性：prototype原型，和两个方法：apply()和call()**

## 函数的表达方式

1. 函数声明式  `function sum( a, b ){ return a + b }`
2. 函数表达式  `let sum = function(a, b) {return a + b }`
3. 箭头函数  `let sum = (a, b) ⇒ { return a + b; }`
4. 使用Function构造函数  `let sum = new Function("a", "b", "return a+ b "); // 不推荐`

## 不同函数声明方式的差异

1、**箭头函数不适用的场景：**

箭头函数不能使用arguments、super和new.target

箭头函数不能用作构造函数

箭头函数也没有prototype属性

2、函数声明function sum 会提升，函数表达式sum = function不会，如果提前调用，会报错。

### 形参实参

## this的几种使用场景

**this取什么值，是在函数执行时确定的，不是在函数定义的时候确定的。以下所有场景都试用，但注意箭头函数中this的取值，是取他上级作用域的值。**

1. 作为普通函数被调用—-执行上下文，window
2. 在call、apply、bind中 ——传入什么，绑定什么
3. 作为对象方法被调用——对象本身
4. 在class方法中被调用——实例本身
5. 箭头函数中——上级作用域的值

## 标准函数和箭头函数中this的差别

this是函数中的一个特殊对象，在标准函数中，this引用的是调用函数的上下文对象，如果是全局上下文，this指向windows，在箭头函数中，this引用的是定义箭头函数的上下文（**取他上级作用域的值**），如果是在全局上下文中定义的，this指向windows。

**找题目多练习**

# 5、继承（各种继承方式）

### 继承的概念

继承就是在新的一个构造函数中，沿用另一个构造函数中的属性和方法。我们通过一些特殊的编写方式，可以直接沿用这些功能，不用重复写代码。

如果两个对象本来就处于一个原型链中，其实下级的实例是拥有他原型链上的属性和方法的，js引擎在本对象中找不到，会自动原型链查找。如果是毫无关系的两个对象，也可以通过把他们原型链串起来，而实现继承。但是具体的继承结果，和我们所选择的串接方式有关系。

### 原型链继承

就是把父类的实例作为子类的原型，可以在new父类构造函数后新增原型属性和方法，也可以增加实例属性，但是不能向父类的构造函数传参

```jsx
function Woman(){ 
}
Woman.prototype= new People(); // woman的原型指向new people创建的实例
Woman.prototype.name = 'haixia'; // 在原型上设置name属性，然后new一个woman的时候，就可以访问到这个name属性
let womanObj = new Woman();
```

### 寄生组合式继承

这种继承方式主要是在子类构造函数中，通过call方法，改变this指向来继承父类属性；然后利用立即执行函数，借助一个空类作为介质，原型指向父类原型，然后将子类的原型绑定在空类的实例上，最后修改子类原型的构造函数为本身。

为什么要通过介质？不能改变原父类的constructor指向，修复构造函数指向问题。

```jsx
//父类
function People(name,age){
  this.name = name || 'wangxiao'
  this.age = age || 27
}

//父类方法
People.prototype.eat = function(){
  return this.name + this.age + 'eat sleep'
}

//子类
function Woman(name,age){
  //继承父类属性
  People.call(this,name,age)
}

//继承父类方法
(function(){
  // 创建空类
  let Super = function(){};
  Super.prototype = People.prototype;
  //父类的实例作为子类的原型
  Woman.prototype = new Super();
})();

//修复构造函数指向问题
Woman.prototype.constructor = Woman;
let womanObj = new Woman();
```

### class extends继承

class相当于一个模板，我们可以通过class，将原本es5中构造函数和原型分开编写的方式结合到一起，constructor里面写构造函数声明的一些属性，方法里写原型方法。继承也会比较简单，通过`class A extends B`的形式结合`super`符号继承，在constructor中使用super(a,b,c)继承父类属性，在方法中，使用super.fn1()继承父类方法

```jsx
class People{
  constructor(name='wang',age='27'){
    this.name = name;
    this.age = age;
  }
  eat(){
    console.log(`${this.name} ${this.age} eat food`)
  }
}
//继承父类
class Woman extends People{ 
   constructor(name = 'ren',age = '27'){ 
     //继承父类属性
     super(name, age); 
   } 
    eat(){ 
     //继承父类方法
      super.eat() 
    } 
} 
let wonmanObj=new Woman('xiaoxiami'); 
wonmanObj.eat();
```

# 6、js数据类型（强制类型转换、函数）

### js中的数据类型有哪些？

七种基本数据类型(Number，String，Boolean，Undefined，Null，Symbol，BigInt`数据类型提供了一种方法来表示大于2^53-1的整数`)，和一种复杂数据类型Object（包括基本对象{}，数组对象[]，正则对象，日期，还有函数：function（较为特殊，函数是一个附带可被调用功能的常规的对象））

### 数据类型的判断（typeof  instanceof）

`typeof：判断所有变量的类型，因为对于丰富的对象实例，都是返回object，所以多用于基本类型；`

`instanceof：判断一个obj是否是obj2的实例，因此可以用来判断具体的复杂数据类型Object和判断原型链关系；`obj1 instanceof obj2（obj1是否是obj2的实例）返回值是true false

**typeof**

typeof 运算符可返回这些原始类型：string、number、boolean、undefined、symbol，还有object复杂类型，但对于具体的复杂类型，如array，是不会判断的，都返回object。函数会返回function。

有几个特别的：

```jsx
//需要记住的特殊值
typeof NaN
//"number"
typeof function(){}
//"function"
typeof null
//"object"
typeof []//不要搞混,typeof 细分对象是不可以的
//"object"
```

具体的细节可见：[https://segmentfault.com/a/1190000027084082](https://segmentfault.com/a/1190000027084082)

**instanceof**

instanceof用来判断对象，代码形式为obj1 instanceof obj2（obj1是否是obj2的实例），obj2必须为对象，否则会报错！其返回值为布尔值。

instanceof可以对不同的对象实例进行判断，判断方法是根据对象的原型链依次向下查询，如果obj2的原型属性存在obj1的原型链上，（obj1 instanceof obj2）值为true。

具体细节可见：[https://www.cnblogs.com/mikeCao/p/9271346.html](https://www.cnblogs.com/mikeCao/p/9271346.html)

### 为什么typeof null 是object?

这其实只是语言本身的一个 bug，即对 null 执行typeof null 时会返回字符串 "object"。实际上，null 本身是基本类型。

原理是这样的，不同的对象在底层都表示为二进制，在 JavaScript 中二进制前三位都为 0 的话会被判断为 object 类型，null 的二进制表示是全 0，自然前三位也是 0，所以执行 typeof 时会返回“object”。

### 强制类型转换与隐式类型转换

js中数据类型转换主要有隐式类型转换和强制类型转换，隐式类型转换会自动根据运算符进行类型转换（+-*%/,++,><,==,!），强制类型转换主要是通过调用全局函数 Number()、String()、Boolean()函数parseInt() 和 parseFloat() 来实现。

### 内置数据类型有哪些？

在 JavaScript 中，对象是数据（变量），拥有属性和方法；可以说，是包含相关属性和方法的集合体。Javascript中的所有事物都是对象：字符串、数值、数组、函数…

常见的有：

```jsx
String对象：字符串对象，提供了对字符串进行操作的属性和方法。

Array对象：数组对象，提供了数组操作方面的属性和方法。

Date对象：日期时间对象，可以获取系统的日期时间信息。

Boolean对象：布尔对象，一个布尔变量就是一个布尔对象。(没有可用的属性和方法)

Number对象：数值对象。一个数值变量就是一个数值对象。

Math对象：数学对象，提供了数学运算方面的属性和方法。

Object对象、RegExp对象、 Global对象、Function对象。
```

注：对一个声明的基本数据类型，如const a = 'sss'，可以对他调用string对象的一些方法，如a.length，a.split(',')等等，都是因为js在执行时，将其隐式转换成了String对象，因此拥有了这个字符串操作的方法

### ==的应用

```jsx
a == null // 相当于判断a === null || a === undefined
```

# 7、数组、字符串操作

### 数组常用API

数组常用有pop，push在末尾删除增加，shift、unshift在头部删除增加，splice分割插入元素；另外有join()转字符串，迭代方法.forEach、.map(有返回值)、filter、find等等

### 数组拉平

拉平数组的方法有很多：（具体实现看具体知识点）

1、arr.flat("Infinity")

2、迭代数组

3、利用正则匹配[]

### 数组去重

数组去重的方法有：

1、利用map结构，[...new Map(arr)]

2、基于对象，返回键值

### 数组的深浅拷贝

浅拷贝指的就是仅指针的拷贝，内容地址不变；深拷贝是数据内容的复制。

浅拷贝只是一层，如=操作，Object.assign等方法都是

深拷贝的话，如果已知层数，循环遍历赋值一下，不知层数，可以用递归去拷贝每一层属性。

### 字符串常用API

1. splite()  字符串分割成数组   ’abcd‘.splite（’‘） = ['a','b','c','d']
2. toLowerCase() 转小写
3. toUpperCase() 转大写
4. str.substr(n1,n2) 截取下标n1开始向后n2长度的数据
5. str.substring(n1,n2) 截取下标n1开始到下标n2位置所有的数据 (与slice的区别在于n2不能接收负数)
6. str.slice(n1,n2) 截取由下标n1开始到下标n2为止之间所有的数据

# 8、正则

reg.test(str);  ---> true  返回值：true或者false

### 用过正则吗？对正则有什么了解？

用过，正则表达式是一种文本模式，一般用来做文本的**测试、匹配和替换**。在js当中，也有专门的RegExp 对象来表示正则表达式，或者也可以直接书写。我们通常用正则来做一些身份证、手机号码等表单校验，或者一些数字、小数点输入限制之类的，或者做文本匹配和替换。

### 正则基本语法？

正则表达式用/ /包裹，后面可跟修饰符如img(大小写、包括换行符内的多行文本，全局)

表达式中的语法也是通过一些特殊字符表示，^$可以表示开头结尾，（）分组，\d数字，\w字母数字下划线，（）分组，还有一些？*+{}等量词，他们共同用来表达一个文本匹配逻辑。然后用来做文本的测试、匹配或者替换等功能

### 正则的常用用法？

**正则最基础的用法是三种：测试、匹配和替换。**

`reg.test(str);`  ---> true  返回值：true或者false

`str.match(reg);`  ---> [1,2,3] 返回值，匹配到的内容组成的数组

`str.replace(reg, function($1){ return $1+'111'})` 返回值，新str

另外还有一些复杂用法，可以帮助我们实现一些特殊功能，比如限制位数输入，贪婪匹配等等，如：

**（）分组与$num的配合**   $1$2指代第一个第二个分组匹配的内容

**贪婪与非贪婪**  (量词{m.n},?,*,+后面是否加？)跟就是贪婪，不跟就是非贪婪

**捕获非捕获**  （）分组内包不包含？如（）捕获，（?:）非捕获，（?=）非捕获正向前瞻  (?!)负向前瞻

### 举个例子，限制小数输入？只能输入两位小数（限制在输入层）

```jsx
<script language="JavaScript" type="text/javascript"> 
function clearNoNum(obj){ 
    obj.value = obj.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符  
    obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个小数点. 清除多余的. 如2..3..4这种只留下2.3.4
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$","."); 
// 第一个replace只会替换第一个.然后将其他的.去掉，再将第一个转回来，为了将2.3.4这种，2.34454
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数，可以为负数
// -可以有或没有，然后纯数字d，然后小数点后两位数字，然后再是小数点可有可无，对这种形式，只取前面$123,
// 也就是对应三个括号-33.3类似这种。
    if(obj.value.indexOf(".")< 0 && obj.value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额 
        obj.value= parseFloat(obj.value); 
    } 
} 
</script>

<!DOCTYPE html>
<html>
    <head>
        <title>demo</title>
    </head>
    <body>
        <input type="text" onkeyup="clearNoNum(this)">
    </body>
</html>
```

# 9、理解事件循环

### eventloop

它是js异步回调的实现原理。

### js的事件循环？

从进程线程、执行栈、同步异步角度来说。

js是一段代码，其中包含了很多函数、同步异步各种复杂逻辑关系。js的事件循环，其实就是规定了js代码的执行逻辑，以保证js脚本运行的一致性。

以运行在浏览器中的js代码为例，浏览器tab页面是多线程的，由一个js引擎线程来执行我们的js代码，也就是js执行是单线程的，这个我们也称之为js执行栈。比如一段js代码，它执行完一些同步任务后，进到一个像promise，或者ajax请求、setTimeout定时器这样的逻辑里，那么浏览器就会分配一个http请求线程去处理请求，以及定时触发线程去处理定时任务。这些任务完成了，会执行我们定义的回调方法，但此时js的执行栈不一定是空闲的。那么他们就会依次排列在一个任务队列中，也就是浏览器的事件触发线程。当js引擎线程空置，就是执行栈完成其中的任务，就会从任务队列取出任务来执行。任务队列也分宏任务微任务，像promise回调都是微任务，像定时器一类的都是宏任务，js会执行完微任务队列后，再去宏任务队列取出一个宏任务，放在执行栈中执行，以此循环，直到完成所有的代码执行。

此外，因为js可能会有操作dom的情况，浏览器的规则是，每一个事件轮询结束，也就是我们执行栈中的代码执行完毕，都会尝试去渲染dom，如果有dom操作的代码，就会在一个循环后，去进行dom的渲染。微任务的执行时机是在dom渲染之前，而宏任务是在dom渲染之后。这也是微任务执行时机比宏任务早的原因。

### DOM事件和eventloop

js是单线程的，ajax请求、定时事件、Dom事件都是基于回调，因此也都是基于eventLoop来实现的。对于dom事件，如下

```jsx
console.log('1');
$('#btn').click(() => {
	console.log('被点击之后的回调函数') 
});
console.log('2')
```

执行中，会执行同步的，如1，然后这个$('#btn').click代码也是会被解析执行的，注册这个事件，绑定到dom上面，只是这个点击之后的回调函数：() => {console.log('被点击之后的回调函数') }，会先存储起来，当触发点击事件时，把这个回调放到任务队列中，然后拿出来执行。

它与ajax，定时任务只是触发时机不一样，这个触发都是浏览器来实现监听的。但是dom事件不是异步。

### 宏任务和微任务的根本区别

宏任务如定时任务是浏览器规定的，它会经过浏览器api（比如定时触发线程处理），然后在合适的时机，放入宏任务队列中。而微任务如promise这些是es6规定的，它不会经过浏览器的API，而是等待时间放入微任务队列中。事件循环如果按1、执行栈执行清空 2、dom渲染 3、触发事件循环机制（从任务队列取任务放入执行栈继续执行）来分的话，实际上微任务执行时机是在dom渲染前，宏任务在dom渲染之后。且会清空微任务队列中所有微任务、然后尝试dom渲染，然后取出一个宏任务队列中的宏任务进行执行。（宏任务中也可能包含新的微任务的）。

# 10、js设计模式

### 有看过什么设计模式吗？有什么用？

有的，js的设计模式其实是一种编程思维，它总结了一些通用场景的解决方案，为了方便沟通，定义的一些专业术语，比如什么观察者模式之类的。对js来说，可以从创建型、结构型和行为型来分。

### 最常用的js设计模式

创建型：工厂模式、单例模式

结构型：代理模式、装饰器模式

行为型：观察者模式、发布订阅模式

### 描述一下观察者模式和发布订阅模式

**观察者模式：**

观察者模式主要有两个角色，一个观察者，一个发布者。我们可以通过构建两个Class类来实现，当new一个观察者时，会调用发布者的方法，在发布者维护的一个数组中，添加这个观察者，当他对应的字段被改动时，发布者会遍历这个数组中的所有观察者，调取他们的方法，通知他们这个字段被改动了。

**发布订阅模式：**

他是从观察者模式发展而来的，只是发布订阅模式在观察者和发布者中间维护了一个消息中心，观察者和彼此不知道，由消息中心维护这个对照关系，可以用一个对象来实现。也是有一个数组存储一份key和观察者list的对照关系，当增加一个observer，把他要观察的值和他的回调方法都添加到数组中，当有人调用消息中心的set方法改变这个key值时，会遍历这个数组中key对应的观察者们，也就是回调方法，遍历执行，通知到每一个之前加入的观察者。

具体实现可见：[Js设计模式](https://www.notion.so/Js-36c35f59913c462c9defa505e7e1d250) 

# 11、异步编程（promise、async-await）

参考：[Promise基础](https://www.notion.so/Promise-f09748eabbbd4d568aec08a90f4bc092) 

### 讲讲有什么异步编程的解决方法？怎么回调怎么处理的？

es6中用promise或async/await来做异步编程，其实async-await也是promise的语法糖，主要核心还是promise。

### 讲一下对promise的理解？

promise是es6提供的一个构造函数，常用于生成Promise实例，是一种异步编程的解决方案。promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败），当异步操作产生结果，比如ajax请求返回时，状态才会变更。然后promise对象提供了统一的接口，如.then处理resolve，.catch处理reject，.all，.race处理多个promise使得控制异步操作更加容易

### promise的实现原理？

promise本身是一个构造函数，看手写promise的实现，就可以知道他的实现原理：

1. 首先声明这个class构造函数，里面包含了resolve、reject等方法，包含值、状态和回调执行。还有存储成功、失败的回调。
2. 对这个构造函数，还需要在它的原型Promise.prototype.then上绑定then、catch等方法，由此他生成的实例可以调用。
3. then方法会判断当status状态会reslove时调用，catch会在状态为reject时调用
4. 这个class构造函数，可以接收一个function作为参数，里面可以编写一些异步操作如ajax请求，执行时，会把我们在构造函数上声明的resolve，reject方法作为函数的参数传入。
5. 因此，我们通过这个构造函数生成的一个实例，在异步操作过程中，pending状态会将then里面我们写的回调操作绑定进promise的成功回调列表，然后在异步操作完成的时候，去调用传入的resolve方法（或reject方法），就会发生状态变更然后执行列表中的回调方法。
6. 这里返回的也是一个promise，这里也是再封装了一层，以供可以循环调用。

具体实现可参考手写一个promise：[JS手写系列2](https://www.notion.so/JS-2-a41d5177ff864e2db5a6ea87e8b7f464) 

### promise的使用？

```jsx
Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject

const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */){
    resolve(value);
// resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），
// 在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
  } else {
    reject(error);
// reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），
// 在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
  }
});

Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。

promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```

### async-await的作用，比promise的优势？

promise和async/await都是处理异步请求，写法和用法不甚相同，先有的promise，而后有的async/await，后者是为了让我们的代码写的时候看上去更加【同步】，async/await是寄生于Promise，Generater的语法糖

**具体差别：**

1、 promise是ES6，async/await是ES7
2、 async/await相对于promise来讲，写法更加优雅
3 、reject状态：
1）promise错误可以通过catch来捕捉，建议尾部捕获错误，
2）async/await既可以用.then又可以用try-catch捕捉

# 12、typescript

### 对TS有了解吗？

Typescript是Javascript的超集，它最大的特点是支持编译时类型检查。支持ES6语法，强类型，支持面向对象编程的概念，如类、接口、继承、泛型等。它不直接在浏览器上运行，需要编译器编译成纯Javascript来运行。`tsc filename.ts // 编译成js`

### 讲讲他的泛型、接口等一些用法？

**1、泛型**

泛型代表的是当不确认输入输出变量类型的时候，作为一个占位符的方式，用于泛指某一类型，更像是一个类型变量。如输入Number,希望输出Number,用T 代替。由尖括号包裹<T>。主要作用是创建逻辑可复用的组件。泛型可以作用在函数、类、接口上。

**2、接口**

接口用来定义**要遵循的类的语法，** 对类中的成员进行类型定义。它。 `**TypeScript编译器使用接口进行类型检查，并检查对象是否具有特定的结构**`。

`interface interface_name {
    // variables' declaration
    // methods' declaration
}`

**3、断言**

断言是手动指定一个变量类型，跳过类型检查校验，让编译通过，但可能会在运行时报错的。

`1：<类型>变量
2：变量 as 类型 （在tsx中只能使用这种方式）`

### 它是怎么实现编译时类型检查的？

类型是由声明文件 `.d.ts` 来定义的，这也就是为什么我们需要安装： `@types/node`，因为它包括了所有Node.js的类型定义，相对应的就包含了浏览器端的一些定义，诸如：`console`、`setTimeout` 等。

有了这些声明文件以后，typescript会在编译时对其进行校验，而有关于类型推断就差不多就是这样。

### 具体在什么项目中使用过？

在项目中使用的比较少，项目还是以js为主，在最近参与做一个基于slate的富文本编辑器时，用的是React+tsx的框架，所以有一点点接触。但也仅限于用到一些基本功能，像是声明类型、定义接口之类的。

# 13、ES6基础（const\let变量、变量声明提升）

### es6有什么新特性么？

es6有很多新特性，从最基础的来说，添加了新的const表示常量，let变量，{}块级作用域，promise和async/await处理异步编程，proxy代理，set/map数据结构，class类等等。

### 什么是变量声明提升？

js代码在运行时会经过编译和运行两个阶段，在编译阶段，会进行词法解析，我们的变量声明如var a = 3，会将var a，声明提升到它所在作用域的顶端去执行，同样如果是函数表达式，也是会提升到顶端，然后再代码所在位置再赋值。因此我们在前面加入console一下这个a,是undefined，未定义，而不是报错。

# 14、防抖节流

### 防抖和节流的差异

他们都是为了防止持续触发调用事件的，防抖是在连续触发后，触发事件超过设定时间的间隙才调用一次；节流是指连续触发，在一个时间段只调用一次

### 他们具体的应用范围

防抖经常是，如地址栏输入搜索，当你停顿输入时，触发搜索

节流经常是，如监听鼠标事件，一个时间段只触发一次；亦或用户点击搜索刷新按钮之类。

### 手写防抖节流，还可以怎么优化

见具体代码：[函数节流throttle与防抖debounce](https://www.notion.so/throttle-debounce-e2f728178bb74407bf0f04464b6c4612) 

# 15、set和map数据结构

### 了解set和map数据结构吗？

**es6新增的两种数据结构，本身是构造函数。**

1. set集合，类似于数组，但是不含重复元素。可以理解为数组衍生出来的新的数据结构。
2. map映射，类似于对象，但是对象的健只能是字符串。可以理解为从对象衍生出来的。而Map“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。

### 具体的应用场景？

日常使用到的场景不是很多，用set的话，一般用作数组去重；map的话，通常做一些字典映射关系。

### weakSet和weakMap呢？

weak是虚弱的意思，他们中的对象都是弱引用，不计入垃圾回收机制，不能遍历、没有size属性

**WeakSet:** 结构和set类似，它的成员只能是对象，而不能是其他类型的值。

**WeakMap：**只接受`对象作为键名`（null除外），不接受其他类型的值作为键名；

**使用场景：**

WeakSet `适合临时存放一组对象，以及存放跟对象绑定的信息`。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。

WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏

WeakMap的键名所指向的对象，不计入垃圾回收机制。没有遍历操作（即没有keys()、values()和entries()方法），也没有size属性。WeakMap 应用的典型场合就是 DOM 节点作为键名。

### weakMap弱引用和垃圾回收的关系？

weakMap对对象的引用是弱引用，也就是当他引用对象时，不会计入垃圾回收机制的引用计数，当这个对象被置成null，不会管这个weakMap是不是引用了，这个对象都会被清掉。

```jsx
const map = new Map();
let s = { a: 1 };
map.set(s, 'a');
s = null; // 将s置为null并不会使 { a: 1 } 被垃圾回收，因为还有map引用了 { a: 1 }
```

```jsx
const weakmap = new WeakMap();
let s = { b: 2 };
weakmap.set(s, '2');
s = null; // 将s置为 null 后，尽管 weakmap 依然引用了{ b: 2 }，但是由于是弱引用，{ b: 2 } 会在某一时刻被垃圾回收。
```

# 16、常用编码转换

### 常用有什么编码转换？

**1、进制转换**

基于a=parseInt(num, type)将type进制的num转成10进制的a

基于b=a.toString(type)将十进制的a，转成type进制的b

用十进制做桥梁，就可以完成任意进制的转换了

**2、json序列化，接口请求**

JSON.stringfy()对象转json，JSON.parse()json转对象

**3、url转码，地址栏传参三方跳转地址**

decodeURIComponent/encodeURIComponent

# 17、js执行上下文

js执行上下文，主要讲的就是js代码怎么执行，除了上文讲的同步异步、事件循环，即便是同步代码，js引擎在执行时也不一定都是我们所见代码顺序一行行执行的。

执行上下文主要包括全局执行上下文和函数执行上下文，里面又涉及到执行栈、词法解析、变量声明提升、作用域等概念，这些规则共同作用，确保js代码按照可控的规律来稳定执行。

参考地址：

[https://www.cnblogs.com/echolun/p/11438363.html](https://www.cnblogs.com/echolun/p/11438363.html)