参考：看下面链接里的文档和题就可以了，此处只记录一些最基本的和难点

[泛型](https://www.tslang.cn/docs/handbook/generics.html)

[Typescript面试题](https://www.jianshu.com/p/c8aaba6e8ce0)

[2020你必须准备的50道Typescript面试题[转]](https://www.jianshu.com/p/076ee2751cfc)

[Typescript学习前奏---强类型与弱类型，静态类型和动态类型_又一寒冬夜的博客-CSDN博客](https://blog.csdn.net/weixin_41527452/article/details/108066312)

# 基本概念

### typescript

Typescript是强类型的Javascript超集，支持ES6语法，支持面向对象编程的概念，如类、接口、继承、泛型等。Typescript并不直接在浏览器上运行，需要编译器编译成纯Javascript来运行。

```jsx
tsc filename.ts // 编译成js
```

### 强类型、弱类型（隐式类型转换）

强类型语言当中，不允许有任意的隐式类型转换，而在弱类型语言当中，和允许任意的隐式类型数据转换。

### 静态类型和动态类型（变量类型改变）

对于静态语言最主要表现就是一个变量，声明时它的类型就明确的，而且呢，在变量声明过后它的类型就不允许被修改了，那相反，动态类型语言的特点呢，就是在运行阶段才能够明确一个类型，而且变量的类型也可以随时发生变化

```jsx
var foo = 10;//声明是默认是number类型
foo = 'cc';//转换成了字符串类型
```

# ts和js的区别

[Untitled](https://www.notion.so/33e3e3f31c24453daf3a2355c5dc26fc)

# **Typescript支持哪些面向对象术语？**

1：类 class

2：继承 extends

3：多态

4：抽象

5：泛化

6：接口封装

7：实例化

# **如何理解Typescript中的类？并说说它有什么特性**

Typescript是一种面向对象的Javascript语言，和其他任何面向对象编程的强语言一样，类是描述某一组对象共有属性状态或行为的实体。它就是构建具体对象实例的模板和蓝图。
**特性：**
1：继承
2：多态
3：抽象
4：封装
5：实例

# Typescript中的模块、装饰器

模块在自身的作用域里执行，并不是全局作用域。这就意味着模块类的类、函数、对象等对外都是不可见的。除非你通过export导出，import导入。

装饰器是一种特殊类型的声明，它能被附加在类、方法、属性、访问符、参数上。

装饰器使用@expression这种方式，expression求值后必须为一个函数，它在运行时调用，被装饰器声明的信息作为参数传入。

# 泛型？作用是什么？

泛型代表的是当不确认输入输出变量类型的时候，作为一个占位符的方式，用于泛指某一类型，更像是一个类型变量。如输入Number,希望输出Number,用T 代替。由尖括号包裹<T>。主要作用是创建逻辑可复用的组件。泛型可以作用在函数、类、接口上。

[关于TypeScript泛型的解释_前端技术小哥-CSDN博客_typescript 泛型](https://blog.csdn.net/songfens/article/details/98114588)

# **什么是类型断言？**

类型断言（Type Assertion）可以用来手动指定一个值的类型

类型断言会在编译器使用，为了手动指定一个类型，跳过某一些检查，但其实可能会在运行时报错。
表示断言的两种方式：
1：<类型>变量
2：变量 as 类型 （在tsx中只能使用这种方式）

在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 值 as 类型。

参考：

[类型断言 · TypeScript 入门教程](http://ts.xcatliu.com/basics/type-assertion.html)

# TypeScript的特性

- TypeScript快速，简单，易学并且可以在任何浏览器或JavaScript引擎上运行。
- 静态类型检查：TypeScript使用静态类型，**`并在编译时帮助进行类型检查`**。
- 面向对象的语言：TypeScript提供了诸如类，接口和模块之类的功能。 因此，它可以为客户端和服务器端开发编写面向对象的代码。

## TypeScript中的类型。

类型系统表示语言支持的不同类型的值。它在程序存储或操作所提供的值之前检查其有效性。

它可以分为两种类型，

- 内置：包括数字(number)，字符串(string)，布尔值(boolean)，无效(void)，空值(null)和未定义(undefined)。
- 用户定义的：它包括枚举(enums)，类(classes)，接口(interfaces)，数组(arrays)和元组(tuple)。

## 列出TypeScript中的内置数据类型。

在TypeScript中，内置数据类型也称为原始数据类型，包括：

- Number：代表数字类型的值。 这些数字在TypeScript中存储为浮点值。
- String：字符串表示存储为Unicode UTF-16代码的一系列字符。
- Boolean：代表逻辑值。 当我们使用布尔类型时，我们只能获得true或false的输出。
- Null：Null表示变量，其值未定义。 无法直接引用空类型值本身。
- Undefined：未定义类型表示所有未初始化的变量。
- `**Void：无效是不返回任何类型值的函数的返回类型。**`

## TypeScript中的接口。

接口是定义应用程序中合同的结构。 它定义了**要遵循的类的语法**。 它仅包含成员的声明，派生类负责定义成员。 `**TypeScript编译器使用接口进行类型检查，并检查对象是否具有特定的结构**`。

`interface interface_name {
    // variables' declaration
    // methods' declaration
}`

# 文档学习：（酌情考虑）

[TypeScript 入门教程](http://ts.xcatliu.com/)