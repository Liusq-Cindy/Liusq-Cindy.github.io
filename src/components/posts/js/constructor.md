[温故js系列（15）-原型&原型链&原型继承](https://segmentfault.com/a/1190000006876041)

[JS 继承](https://www.jianshu.com/p/6dd0e22ff63b)

[Javascript继承机制的设计思想](https://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)

# 一、**构造函数**

构造函数是用来新建和初始化一个新对象的函数，任何一个函数都可以是一个构造函数，不过我们在编写上通常用首字母大写以便区分。

### 构造函数、原型、实例的关系

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

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6e6e9504-25a1-4d34-96ee-8ddec21d0244/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6e6e9504-25a1-4d34-96ee-8ddec21d0244/Untitled.png)

# 二、**原型链**

## 原型

每个对象被创建时，js都会自动添加一个 prototype 属性，指向对象的原型。

原型相当于一个对象模板，是一个可以被复制的类，他定义了一些公用的属性和方法，利用原型创建出来的新对象实例会共享原型的属性和方法。

## **原型链**

在JavaScript中每个对象都有一个**指向他的原型内部对象的内部链接（__proto__）**，每个原型对象又有自己的原型，直到某个对象的原型为null为止(Object.proptotype.__proto__指向的是null)，组成这条链的最后一环。这种关系被称为原型链(prototype chain)，通过原型链一个对象可以拥有定义在其他对象中的属性和方法。

原型对象主要作用主要是用于**继承**。

```jsx
Object.prototype.__proto__ === null
Object是一个构造函数，他的prototype指向原型，他这个原型看做一个实例，那它的__proto__最终指向null
```

## prototype和__proto__

函数的原型prototype：函数才有prototype，prototype是一个对象，指向了当前构造函数的引用地址
函数的原型对象__proto__：所有对象都有__proto__属性， 当用构造函数实例化（new）一个对象时，会将新对象的__proto__属性指向 构造函数的prototype

也就是说，构造函数的prototype和构造函数生成的实例的__proto__指向的都是构造函数的原型。

1. **prototype 和 proto 区别是什么**？

    1）prototype是构造函数的属性

    2）`__proto__`是每个实例都有的属性，可以访问 [[prototype]] 属性

    3）实例的`__proto__`与其构造函数的prototype指向的是同一个对象

## 函数的变量和内部函数

### 1、**私有变量和内部函数**

私有成员，即定义函数内部的变量或函数，外部无法访问。如果要访问，需要对外提供接口。

```jsx
function Xzavier(){
    var name = "xzavier"; //私有变量
    var sports = function() {console.log('basketball')}; //私有函数
    return{
        name: name,
        sports: sports
    }
}
var x = new Xzavier();
x.name;  //"xzavier"
```

### 2、静态变量和内部函数

用点操作符定义的静态变量和内部函数就是实例不能访问到的变量和内部函数。只能通过自身去访问。

```jsx
function Xzavier(){
    Xzavier.name = "xzavier"; //静态变量
    Xzavier.sports = function() {console.log('basketball')}; //静态函数 
}
Xzavier.name; //"xzavier"
var x = new Xzavier();
x.name;  //undefined
```

### 3、**实例变量和内部函数**

通过this定义给实例使用的属性和方法。

```jsx
functionXzavier(){
    this.name = "xzavier";//实例变量
		this.sports =function() {console.log('basketball');};//实例函数
}
Xzavier.name;//undefined
var x =new Xzavier();
x.name;//"xzavier"
```

### **原型链继承**

有了原型链，就可以借助原型链实现继承。

```jsx
X.prototype = new Xzavier(); 
// 以上这样产生一个Xzavier的实例，同时赋值给X的原型，也即X.prototype相当于对象
// 但是在X中没有constructor属性，只能从原型链找到Xzavier.prototype
X.prototype.constructor = X;
// 这是X的原型就多了个属性constructor，指向X。这样就OK。
```

### __**proto__**，prototype

__proto__是对象的内置属性，是每个对象都有的属性，但是这个属性使用不标准，所以不建议直接使用。但是，我们的原型链就是基于 __proto__的。通过构造函数得到的实例的 **proto** 属性，指向其对应的原型对象 String.prototype

prototype是每个函数对象都具有的属性，指向原型对象，如果原型对象被添加属性和方法，那么由应的构造函数创建的实例会继承prototype上的属性和方法，这也是我们在代码中经常遇到的。构造函数产生实例时，实例通过其对应原型对象的 constructor 访问对应的构造函数对象。所以，我们继承出来的实例往往没有constructor，只是通过原型链查找

# 三、继承

通**过原型链一个对象可以拥有定义在其他对象中的属性和方法，这个叫做继承**，他有很多具体的实现方式。

## 实现继承的几种方式

[js继承的几种方式](https://zhuanlan.zhihu.com/p/37735247)

以下罗列最基础和常见的几种：

1. 原型链继承
2. 寄生组合式继承
3. es6中的extend class

### **1.原型链继承**

父类的实例作为子类的原型

```jsx
function People(){
  this.color = ['red','yellow','black'],
  this.name = 'aaa'
 }
function Woman(){
}
Woman.prototype= new People();
let womanObj = new Woman();

```

**优点：**

简单易于实现，父类的新增的实例与属性子类都能访问

**缺点：**

  1. **实例之间会共享引用类型的值**

1. 创建子类实例时，不能向父类构造函数中传参数

如下，通过一个实例，修改父类的引用类型值，其他实例会受到影响

```jsx
function People(){
  this.color = ['red','yellow','black'],
  this.name = 'aaa'
 }
function Woman(){
}
Woman.prototype= new People();
let Pea = new People()
let womanObj1 = new Woman();
let womanObj2 = new Woman();

womanObj1.color[1] = 'xiaxia';
womanObj1.name = 'ceshi';

console.log(Pea.color[1], Pea.name); // yellow aaa
console.log(womanObj1.color[1],womanObj1.name); // xiaxia ceshi
console.log(womanObj2.color[1],womanObj2.name); // xiaxia aaa

//不同实例会共享引用类型的值 instance1.__proto__.color
  console.log(instance1.__proto__.color===instance2.__proto__.color) //true
```

### 2、寄生组合式继承

原理：通过借用构造函数来继承属性（apply），通过原型链的混成形式来继承方法（Object.create）

通过寄生组合式继承方式，实例之间互不影响，还可以向父类传参、

```jsx
//父类
function People(name,age){
  this.color = ['red','yellow','black'],
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

// 测试实例问题
let womanObj1 = new Woman();
let womanObj2 = new Woman();
womanObj1.color[1] = 'xiaxia';
console.log(womanObj1.color[1], womanObj2.color[1])
```

或

```jsx
// 寄生组合继承
  function inheritPrototype(Sub,Super){ // 入参是子类和父类构造函数
    //subPrototype.__proto__=Super.prototype
		// 创建一个介质对象，他的原型指向父类原型
    var subPrototype=Object.create(Super.prototype)
    // 他的构造函数指向子类构造函数
    subPrototype.constructor=Sub
    //相当于subPrototype有__proto__和constructor两个属性，指向父类原型和子类构造函数
    //以上，即：subPrototype.__proto__ === Sub.prototype.__proto__===Super.prototype

    //Sub.prototype.constructor=Sub
    Sub.prototype=subPrototype
    
  }
  function Super(name){
    this.name=name
  }
  Super.prototype.sayHi=function(){
    console.log(this.name)//ccdida
  }
  function Sub(name){
    Super.call(this,name) //继承父类属性
  }
  inheritPrototype(Sub,Super) //继承父类方法

  Sub.prototype.sayHello=function(){
    console.log('sayHello')
  }

  var instance1=new Sub('ccdida')
  // instance1.sayHi() // ccdida
  console.log(instance1.__proto__)
  console.log(instance1.__proto__.__proto__)
```

### 3、es6的class继承

```jsx
//class 相当于es5中构造函数
//class中定义方法时，前后不能加function，全部定义在class的protopyte属性中
//class中定义的所有方法是不可枚举的
//class中只能定义方法，不能定义对象，变量等
//class和方法内默认都是严格模式
//es5中constructor为隐式属性
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

## **ES5继承和ES6继承的区别**

es5继承首先是在子类中创建自己的this指向，最后将方法添加到this中

```jsx
Child.prototype=new Parent() || Parent.apply(this) || Parent.call(this)
```

es6继承是使用关键字先创建父类的实例对象this，最后在子类class中修改this

## 继承方法的演变

[js寄生组合式继承](https://segmentfault.com/a/1190000037433122)