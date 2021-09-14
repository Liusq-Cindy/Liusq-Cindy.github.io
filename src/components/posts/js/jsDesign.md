参考文章：

[设计模式 · 语雀](https://www.yuque.com/along-n3gko/ezt5z9/vuie5p)

[史上最全的JS设计模式（一）](https://juejin.cn/post/6846687601785585677)

[](https://blog.csdn.net/userkang/article/details/104288650)

可以查看这一篇图文：

[常用设计模式有哪些？](https://refactoringguru.cn/design-patterns)

设计模式并不局限于某一种语言，它是**`解决特定场景的一系列通用方案和思维`**。我们所说的如单例模式、观察者模式，是为了理解和沟通，创建的专业术语。

设计模式是被反复验证的解决方案（最佳实践），可以减少代码强耦合、硬编码，有效的提高代码的可扩展性和可维护性，可以分为**创建型、结构型和行为型**三类便于区分和理解

# 一、创建型

处理对象创建机制，灵活判断针对某个实例创建所需对象。

---

## 1、模块模式

- 模块模式是在传统软件工程中为类提供私有和公有封装的方法。通过这种方式，让一个对象拥有私有和公有的方法/变量（js中用闭包实现），有效控制对外暴露的api接口，屏蔽底层处理逻辑。

【**应用场景】：需要管理大量私有变量/方法，希望屏蔽内部处理逻辑，只对外暴露接口的独立模块**

### 原理与方案：

1、由于js曾经没有访问修饰符，从技术的角度来说，我们不能称js变量为私有和公有。所以我们需要使用 IIFE（即时调用函数表达式）、闭包和函数作用域的方式来实现js的模块模式。

2、IIFE使得obj会获得function中返回的对象，同时只有对象中的函数可以闭包访问到内部的count变量，达到私有的目的。

3、最终外部采用`**调用模块的公有属性/方法来访问和操作私有变量**`

### 实现方式：

```jsx
var obj=(function(){    
    var count=0;    
    return {        
        addCount:function(){ count++ },        
        getCount:function(){ return count }    
    }
})()
obj.addCount() // 1
obj.getCount() // 1
obj.count // undefined
采用封装的思想，只有本模块才能享有私有变量，不会暴露于外部模块
减少对全局作用域的影响，避免命名空间污染；
```

## 2、单例模式

- **`确保一个类只有一个实例，并提供对该实例的全局访问`**。

【**应用场景】：登录弹窗、全局提示等**

### 原理与方案：

单例模式限制某个类只能被创建一次，并且需要提供一个全局的访问点。如果一个类的实例不存在，单例模式就会创建一个新的类实例。如果实例存在，它只返回对该对象的引用。对构造函数的任何重复调用都会获取相同的对象。

### 实现方式一：使用构造函数实现

```jsx
let instance = null;
function User() {  
    if(instance) {    
        return instance;  
    }  
    instance = this;  
    this.name = 'Peter';  
    this.age = 25;  
    return instance;
}

const user1 = new User();
const user2 = new User();
console.log(user1 === user2); // 打印 true
```

### 实现方式二：使用模块模式实现

```jsx
const singleton = (function() {  
    let instance;  
    function init() {    
        return {      
            name: 'Peter',      
            age: 24,    };  
        }  
    return {    
        getInstance: function() {
            if(!instance) {
                instance = init();      
            }      
            return instance;    
        }  
    }
})();

const instanceA = singleton.getInstance();
const instanceB = singleton.getInstance();
console.log(instanceA === instanceB); // 打印 true
```

## 3、工厂模式

- 定义一个接口用于创建对象，但是让子类决定初始化哪个类。工厂方法把一个类的初始化下放到子类。

【应用场景】

### 原理与方案：

1、在简单工厂模式中，一个工厂类负责所有产品对象的创建；

2、将简单工厂模式进一步抽象化，实现**工厂模式**：让工厂子类去实现抽象工厂类的接口，由**每个具体的工厂类负责创建单独的产品**，如果有新的产品加进来，只需要增加一个具体的创建产品工厂类和具体的产品类就可以了，不会影响到已有的其他代码，代码量也不会变大，后期维护更加容易，增加了系统的可扩展性。

### 实现方式：简单工厂模式

```jsx
class Email {
    constructor(options) {
        this.message = options.message || '我是emial信息';
        this.type = options.type || 'email',
        this.sender = options.user;
        this.receiver = options.receiver;
        this.sendTime = options.sendTime || new Date()
    }
}
class Weixin {
    constructor(options) {
        this.msg = options.message || '我是微信信息';
        this.type = options.type || 'weixin',
        this.sender = options.user;
        this.receiver = options.receiver;
    }
}
class MessageFactory {
    create(options) {
        switch (option.type) {
        case 'email':
            return new Email(options);
        case 'weixin':
            return new Weixin(options);
        default:
            return null;
        }
    }
}
// 通过MessageFactory中传参， options 对象中接收到的 type 属性创建和返回一个新的对象。
const factory = new MessageFactory();
const emailMsg = factory.create({
    type: 'email',
    message: '你好，有兴趣了解下安利吗',
    user: 'xiaojia',
    receiver: 'xx1',
});
const weixinMsg = factory.create({
    type: 'weixin',
    message: 'i m 卖保险',
    user: 'xiaojia',
    receiver: 'xx2',
});
```

以上方式如果要扩展，需要每次修改MessageFactory，因此可以将create移动到子工厂中，如下优化调用

### 实现方式：工厂模式

```jsx
class Email {
    constructor(options) {
        this.message = options.message || '我是emial信息';
        this.type = options.type || 'email',
        this.sender = options.user;
        this.receiver = options.receiver;
        this.sendTime = options.sendTime || new Date()
    }
}
class MessageFactory {
    create(options) {
        throw new Error('需要create方法') // 不能直接调用messageFactory创建
    }
}
class EmailMsgFactory extends MessageFactory {
    create(options) {
        return new Email(options)
    }
}

// 分别创建
const factory = new EmailMsgFactory();
const emailMsg = factory.create({
    type: 'email',
    message: '你好，有兴趣了解下安利吗',
    user: 'xiaojia',
    receiver: 'xx1',
});
```

# 二、结构型

**处理对象的组合，**将对象结合在一起形成更大的结构

---

## 1、代理模式

- 通过替身对象实现对访问动作的控制和处理

### 原理与方案：

1. 代理模式的核心是为对象提供一个代理对象，来控制对目标对象的访问，客户其实访问的是这个代理对象。这样代理对象就可以对请求做出一些处理之后，再将请求转交给本体对象。
2. 代理模式中常见的有保护代理、虚拟代理、缓存代理。
3. 保护代理主要是限制了访问主体的行为，如过滤消息中的敏感信息；虚拟代理主要是在访问行为中加入一些额外操作，最常见的例子有函数防抖

### 实现方式：【例子：函数防抖】

```jsx
// 函数防抖，频繁操作中不处理，直到操作完成之后（再过 delay 的时间）才处理
function debounce(fn, delay) {
    delay = delay || 200;

    var timer = null;

    return function() {
        var arg = arguments;

        // 每次操作时，清除上次的定时器
        clearTimeout(timer);
        timer = null;

        // 定义新的定时器，一段时间后进行操作
        timer = setTimeout(function() {
            fn.apply(this, arg);
        },
        delay);
    }
};
```

## 2、装饰器模式

- 动态的给对象添加新的功能

### 原理与方案：

装饰器模式可以动态地给对象添加一些新功能。它是一种“即用即付”的方式，能够在不改变对象自身的基础上，在程序运行期间给对象动态地添加职责。

### 实现方式：修改对象属性

```jsx
// 1、最简单的就是修改对象的属性
var A = {    
    score: 10
};

A.score = '分数：' + A.score;

// 2、也可以通过构造函数和原型的方式来实现装饰器，并且经过多重包装可以形成一条装饰链
function Person() {}

Person.prototype.skill = function() {
    console.log('数学');
};

// 装饰器，还会音乐
function MusicDecorator(person) {
    this.person = person;
}

MusicDecorator.prototype.skill = function() {
    this.person.skill();
    console.log('音乐');
};

// 装饰器，还会跑步
function RunDecorator(person) {
    this.person = person;
}

RunDecorator.prototype.skill = function() {
    this.person.skill();
    console.log('跑步');
};

var person = new Person();

// 装饰一下
var person1 = new MusicDecorator(person);
// 再装饰一下
person1 = new RunDecorator(person1);

person.skill(); // 数学
person1.skill(); // 数学 音乐 跑步
```

# 三、行为型

改善或者简化系统中不同对象之间的通信

---

## 1、观察者模式

- 定义了对象一对多的依赖关系。当目标对象状态发生变化后，会通知到所有的依赖对象
- **应用场景：**
- 对一个对象状态的更新，需要其他对象同步更新，而且其他对象的数量动态可变。
- 对象仅需要将自己的更新通知给其他对象而不需要知道其他对象的细节。
- 比如采购中，寻源结果审批通过后，会要通知相关采购负责人、自动创建合同信息等后续操作。

### 原理与方案：

观察者模式就是观察者和被观察者之间的通讯，主要用于一个对象（目标）去维持多个依赖于它的对象（观察者），将相关变更的事件自动通知给他们的场景。

### 实现方式：

```jsx
// 主题，接收状态变化，触发每个观察者
class Subject {
  constructor() {
      this.state = 0
      this.observers = []
  }
  getState() {
      return this.state
  }
  setState(state) {
      this.state = state
      this.notifyAllObservers()// 2、subject执行setState状态变化时，会调用notifyAllObservers，
  }
  attach(observer) {
      this.observers.push(observer)
  }
  notifyAllObservers() {
      this.observers.forEach(observer => {
          observer.update() // 3、触发observers更新
      })
  }
  remove(observer) {//移除
    this.observers.filter(item => item === observer);
  }
}

// 观察者，等待被触发
class Observer {
  constructor(name, subject) {
      this.name = name
      this.subject = subject
      this.subject.attach(this) // 1、observer构造时，通知subject有哪些观察者
  }
  update() {
      console.log(`${this.name} update, state: ${this.subject.getState()}`)
			// 4、执行update中的操作
			
  }
}

// 测试代码
let s = new Subject()
new Observer('o1', s)
new Observer('o2', s)

s.setState(1) 
// 1、observer构造时，通知subject有哪些观察者
// 2、subject执行setState状态变化时，会调用notifyAllObservers，
// 3、触发observers更新
// 4、观察者则执行update中的操作

-----------------------执行结果-----------------------
  o1 update, state: 1
	o2 update, state: 1
```

## 2、发布订阅模式

- 定义了对象一对多的依赖关系。当目标对象状态发生变化后，会通知到所有的依赖对象

### 原理与方案：

1. 是观察者模式的一个别称
2. 现在的发布订阅模式中，称为发布者的消息发送者不会将消息直接发送给订阅者，发布者和订阅者不知道彼此的存在。在发布者和订阅者之间存在第三个组件，称为调度中心或事件通道，它维持着发布者和订阅者之间的联系，过滤所有发布者传入的消息并相应地分发它们给订阅者。
3. 就像微博动态，A就是发布者，你是订阅者，微博就是调度中心。
4. 我们每个人在编程的时候都用过发布订阅模式，比如DOM事件绑定addEventListener、vue数据双向绑定。

### **和观察者模式的区别：**

- 在**观察者**模式中**直接通信**。然而在**发布订阅**模式中只有**通过消息代理进行通信**。
- 发布/订阅模式相比于观察者模式多了一个中间媒介，因为这个中间媒介，发布者和订阅者的**关联更为松耦合**
- **观察者模式**大多数时候是**同步**的，比如当事件触发，Subject就会去调用观察者的方法。而**发布-订阅**模式大多数时候是**异步的**。

参考例子：

[JavaScript设计模式之----原生JS实现简单的发布订阅模式](https://www.cnblogs.com/liquanjiang/p/11724793.html)

### 实现方式一：在DOM节点上面绑定事件函数，就属于发布—订阅模式

```jsx
// 监控用户点击document.body的动作，但是没办法预知用户将在什么时候点击。
// 所以订阅document.body上的click事件，当body节点被点击时，body节点便会向订阅者发布这个消息。
document.body.addEventListener('click',function(){
  alert(2);
},false);
document.body.click(); // //模拟用户点击
```

### 实现方式二：一个基于对象的发布订阅的模型:

主要分为，订阅、触发、移除，简单来说就是将订阅的消息加进列表，当发布触发时，回调订阅列表中所有缓存的方法。

```jsx
let pubSub = {
  subs: [],
  subscribe(key, fn) {  //订阅
    if (!this.subs[key]) {
      this.subs[key] = [];
    }
    this.subs[key].push(fn); // 订阅的消息添加进缓存列表，一个key可能对应多个fn组成的数组
  },
  publish(...arg) { //发布
    let args = arg;
    let key = args.shift();
    let fns = this.subs[key];
 
    if (!fns || fns.length <= 0) return;
 
    for (let i = 0, len = fns.length; i < len; i++) {
      fns[i](args);
    }
  },
  remove(key, fn) { // 取消订阅
		var fns = this.subs[ key ];
		if ( !fns ){ // 如果key 没被人订阅，则直接返回
       return false;
    }
		if ( !fn ){ // 如果没有传入具体函数，表示需要取消所有订阅
       fns && ( fns.length = 0 );
       // 也可以 delete this.subs[key]
    }else { // 如果传入了具体函数，取消该函数的订阅
			for ( var i = 0; i < fns.length; i++ ){ 
          if ( fns[ i ] === fn ){
             fns.splice( i, 1 ); // 删除订阅者的回调函数
          }
      }
		}
  }
}

//测试
pubSub.subscribe('name', name => {
  console.log(`your name is ${name}`);
})
pubSub.subscribe('gender', gender => {
  console.log(`your name is ${gender}`);
})
pubSub.publish('name', 'leaf333');  // your name is leaf333
pubSub.publish('gender', '18');  // your gender is 18
```

### 实现方式三：一个基于class的发布订阅模式的模版，考虑到了边界条件和匿名函数，属于一个比较完整的实现

```jsx
class Pubsub {
  constructor () {
  }

  list = {};

  // 添加消息监听的方法
  subscribe (topic, func) {
    if (typeof topic !== 'string') {
      throw 'topic为字符串类型'
    }
    if (typeof func !== 'function') {
      throw 'func为函数类型'
    }
    const list = this.list;
    if (!list[topic]) {
      list[topic] = [];
    }
    list[topic].push(func);    // 为了防止匿名函数的影响，在添加时将取消监听的方法返回
    return () => this.unsubscribe(topic, func);
  }

  // 发布消息的方法
  publish (topic, data) {
    if (typeof topic !== 'string') {
      throw 'topic必须是字符串类型'
    }
    const list = this.list;
    if(!list[topic]) {
      throw '不存在该事件的监听'
    } else {
      list[topic].forEach((func)=>{
        func.call(this, data)
      })
    }
  }

  // 移除消息监听的方法
  unsubscribe (topic, func){
    if(typeof topic !== 'string') {
      throw 'topic为字符串类型'
    }

    if(func && (typeof func !== 'function')) {
      throw 'func为函数类型'
    }
    const list = this.list;
    if(!list[topic]) {
      throw '不存在该topic监听'
    }

    if(!func) { // 如果没有第二个参数，就移除所有的监听事件
      if(list[topic]) {
        delete list[topic]
      }
    } else {
      if(!list[topic].includes(func)) {
        throw '要移除的事件不存在'
      } else {
        const index = list[topic].findIndex(item => item === func);
        list[topic].splice(index, 1);
        if(list[topic].length === 0) {
          delete list[topic]
        }
      }
    }
  }
}
```

## 3、策略模式

- 定义多个策略类实现具体算法，定义一个环境类通过请求参数来决定使用哪些策略

### 原理与方案：

1. 策略模式的意义是定义一系列的算法，把它们一个个封装起来，并且使它们可相互替换。具体实现是由多个策略类实现具体算法，然后由一个环境类来通过请求参数决定使用哪些策略。
2. 策略模式利用组合、委托等方法，可以有效避免多个if条件语句。适合用于组合一系列算法，或者组合一系列相同目的的业务规则。

### 实现方式:【举例】

```jsx
// 优化前，用一个方法，根据等级不同，调用不同的计算规则
var calculateBouns = function(salary, level) {
    if (level === 'A') {
        return salary * 4;
    }
    if (level === 'B') {
        return salary * 3;
    }
    if (level === 'C') {
        return salary * 2;
    }
}; 

// 调用如下：
console.log(calculateBouns(4000,'A')); // 16000
console.log(calculateBouns(2500,'B')); // 7500

// 用策略模式优化后，
// 将具体策略封装起来，可以看到代码职责更新分明，代码变得更加清晰。
// 并且代码的可拓展性更强，增加/修改策略，只需要在策略集合obj中去维护.
var obj = {
    "A": function(salary) {
        return salary * 4;
    },
    "B": function(salary) {
        return salary * 3;
    },
    "C": function(salary) {
        return salary * 2;
    }
};
var calculateBouns = function(level, salary) {
    return obj[level](salary);
};
console.log(calculateBouns('A', 10000)); // 40000
```

### 应用场景

策略模式也常用于表单验证，定义不同的规则校验方法，调用验证的时候只需要传入规则名即可。

优点：

- 减少if-else，代码更整洁直观
- 提供开放-封闭原则，代码更容易理解和扩展