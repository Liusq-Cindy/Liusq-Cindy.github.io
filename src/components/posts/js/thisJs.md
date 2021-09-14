参考资料：

[你不懂JS：this与对象原型 第一章：this是什么？](https://www.jianshu.com/p/11d84af237c0)

[你不懂JS：this与对象原型 第二章：this豁然开朗！](https://www.jianshu.com/p/fcbc21a2c507)

## 一、this是什么？

```jsx
//第一种调用,其实this不会指向foo函数对象
function foo(num) {
    console.log( "foo: " + num );

    // 追踪`foo`被调用了多少次
    this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
    if (i > 5) {
        foo( i );
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// `foo`被调用了多少次？
console.log( foo.count ); // 0 -- 这他妈怎么回事……？

// 换一种方式 foo.call( foo, i );
function foo(num) {
    console.log( "foo: " + num );

    // 追踪`foo`被调用了多少次
    // 注意：由于`foo`的被调用方式（见下方），`this`现在确实是`foo`
    this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
    if (i > 5) {
        // 使用 `call(..)`，我们可以保证`this`指向函数对象(`foo`)
        foo.call( foo, i );
    }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// `foo`被调用了多少次？
console.log( foo.count ); // 4
```

1、**this不会以任何方式指向函数的 词法作用域**

```jsx
function foo() {
    var a = 2;
    this.bar();
}

function bar() {
    console.log( this.a );
}

foo(); //undefined 这样的调用其实是在瞎搞
```

2、`this`不是编写时绑定，而是**运行时绑定**。它依赖于函数调用的上下文条件。`this`绑定和函数声明的位置无关，反而和函数被调用的方式有关。

当一个函数被调用时，会建立一个活动记录，也称为执行环境。这个记录包含函数是从何处（call-stack）被调用的，函数是 *如何* 被调用的，被传递了什么参数等信息。这个记录的属性之一，就是在函数执行期间将被使用的`this`引用。

3、this既不是函数自身的引用，也不是函数词法作用域的引用。this实际上是在函数被调用时建立的一个绑定，**它指向 什么 是完全由函数被调用的调用点**来决定的。

## 二、调用点

this是一个完全根据调用点（函数是如何被调用的）而为每次函数调用建立的绑定

为执行中的函数判定`this`绑定需要找到这个函数的**直接调用点**。找到之后，4种规则将会以 *这个* 优先顺序施用于调用点：

1. 被`new`调用？使用新构建的对象。
2. 被`call`或`apply`（或 `bind`）调用？使用指定的对象。
3. 被持有调用的环境对象调用？使用那个环境对象。
4. 默认：`strict mode`下是`undefined`，否则就是全局对象。

小心偶然或不经意的 *默认绑定* 规则调用。如果你想“安全”地忽略`this`绑定，一个像`ø = Object.create(null)`这样的“DMZ”对象是一个很好的占位值，来保护`global`对象不受意外的副作用影响。

与这4种绑定规则不同，ES6的箭头方法使用词法作用域来决定`this`绑定，这意味着它们采用封闭他们的函数调用作为`this`绑定（无论它是什么）。它们实质上是ES6之前的`self = this`代码的语法替代品。

## 三、练习巩固