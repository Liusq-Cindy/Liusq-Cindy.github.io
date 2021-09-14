参考文章：

[函数式编程 · 语雀](https://www.yuque.com/along-n3gko/ezt5z9/xkzwk1)

[关于本书](https://www.bookstack.cn/read/mostly-adequate-guide-chinese/README.md)

[函数式编程入门教程](https://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)

# 一、一些概念

### 我们在设计方案解决问题时，应当做到如下设计原则

1. 可扩展性----我们是否需要不断的重构代码去支持额外功能，或者功能调整时不好修改
2. 易模块化----如果我们修改了一个文件，另一个文件是否也会受到影响
3. 可重用性----是否有很多的重复代码
4. 可测性 ----是否可添加单元测试
5. 易推理性----写的代码是否结构性非常差，难以阅读

### 范畴论

1. 函数式编程起源于范畴论，彼此之间存在某种关系的概念、事物、对象等等，都构成"范畴"，可以把"范畴"想象成是一个容器，里面包含值（value）、值的变形关系，也就是函数。范畴论使用函数，表达范畴之间的关系。
2. 本质上，函数式编程只是范畴论的运算方法，跟数理逻辑、微积分、行列式是同一类东西，都是数学方法，只是碰巧它能用来写程序。

### 纯函数

纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。

    如 slice 和 splice，这两个函数的作用并无二致——但是我们说 slice 符合纯函数的定义，因为对相同的输入它保证能返回相同的输出。而 splice 会改变原数组；这就会产生可观察到的副作用，即这个数组永久地改变了。

### 副作用

副作用是在计算结果的过程中，系统状态的一种变化，或者与外部世界进行的可观察的交互。如

- 更改文件系统
- 往数据库插入记录
- 发送一个 http 请求
- 可变数据
- 获取用户输入
- DOM 查询

等等

并不是说，要禁止使用一切副作用，而是说，要让它们在可控的范围内发生。

### 函数合成

如果一个值要经过多个函数，才能变成另外一个值，就可以把所有中间步骤合并成一个函数，这叫做"函数的合成"（compose）

### 函数柯里化

所谓"柯里化"，就是把一个多参数的函数，转化为单参数函数

# 二、函数curry柯里化

**个人理解：**

函数拆分成只执行第一个参数（部分参数）的函数，并且返回一个函数和剩余的参数，有点像分步执行，拆分成一个一个的子任务，这样做可以封装很多通用方法，参数复用，代码更清晰

参考文章：

[](http://jianshu.com/p/2975c25e4d71)

### 1、基本概念

curry 的概念很简单：**只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数**。

```jsx
// 普通的add函数
function add(x, y) {
    return x + y
}

// Currying后
function curryingAdd(x) {
    return function (y) {
        return x + y
    }
}

add(1, 2)           // 3
curryingAdd(1)(2)   // 3
```

### 2、应用

### 参数复用

如果我有很多地方都要校验是否有数字，其实就是需要将第一个参数reg进行复用，这样别的地方就能够直接调用hasNumber，hasLetter等函数，让参数能够复用，调用起来也更方便。

```jsx
// 正常正则验证字符串 reg.test(txt)

// 函数封装后
function check(reg, txt) {
    return reg.test(txt)
}

check(/\d+/g, 'test')       //false
check(/[a-z]+/g, 'test')    //true

// Currying后
function curryingCheck(reg) {
    return function(txt) {
        return reg.test(txt)
    }
}

var hasNumber = curryingCheck(/\d+/g)
var hasLetter = curryingCheck(/[a-z]+/g)

hasNumber('test1')      // true
hasNumber('testtest')   // false
hasLetter('21212')      // false
```

### 延迟执行

```jsx
Function.prototype.bind = function (context) {
    var _this = this
    var args = Array.prototype.slice.call(arguments, 1)
 
    return function() {
        return _this.apply(context, args)
    }
}
```

### 3、通用的封装方法

```jsx
// 初步封装
var currying = function(fn) {
    // args 获取第一个方法内的全部参数
    var args = Array.prototype.slice.call(arguments, 1)
    return function() {
        // 将后面方法里的全部参数和args进行合并
        var newArgs = args.concat(Array.prototype.slice.call(arguments))
        // 把合并后的参数通过apply作为fn的参数并执行
        return fn.apply(this, newArgs)
    }
}
```

```jsx
// 支持多参数传递
function progressCurrying(fn, args) {

    var _this = this
    var len = fn.length;
    var args = args || [];

    return function() {
        var _args = Array.prototype.slice.call(arguments);
        Array.prototype.push.apply(args, _args);

        // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
        if (_args.length < len) {
            return progressCurrying.call(_this, fn, _args);
        }

        // 参数收集完毕，则执行fn
        return fn.apply(this, _args);
    }
}
```

### 4、经典面试题

```jsx
// 实现一个add方法，使计算结果能够满足如下预期：
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;

// 第一个add(1)(2)(3)基础方法
function baseAdd(num){
  let sum = num
	var adder = function(num){
		sum +=num;
    return adder
	}
  adder.toString = function(){
	  return sum
  }
  return adder
}

// 通用方法
function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);

    // 再内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}

add(1)(2)(3)                // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
add(2, 6)(1)                // 9
```

关于toString隐式类型转换，可见：

[JavaScript中valueOf、toString的隐式调用](https://www.cnblogs.com/barrior/p/4598354.html)