参考文章：

promise的原理和源码：

[这一次，彻底弄懂 Promise 原理](https://juejin.cn/post/6844904063570542599)

promise的基础使用：看文档即可，文档很详细，此处不赘述

[ES6 入门教程](https://es6.ruanyifeng.com/#docs/promise)

# 一、基础含义

### 基础要点

1. Promise是es6提供的一个原生对象，简单说就是一个容器，它可以获取异步操作的消息。有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。
2. ES6 规定，Promise对象是一个构造函数，用来生成Promise实例。
3. Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
4. Promise对象提供统一的接口，如.then处理resolve，.catch处理reject，.all，.race处理多个promise使得控制异步操作更加容易。

### 代码演示

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

**应用**

```jsx
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');

// Promise
// Hi!
// resolved
首先输出的是Promise。然后，then方法指定的回调函数，
将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。
```

# 二、api操作

### Promise.prototype.then()

`then`方法的第一个参数是`resolved`状态的回调函数，第二个参数是`rejected`状态的回调函数，它们都是可选的。

`then`方法返回的是一个新的`Promise`实例（注意，不是原来那个`Promise`实例）。因此可以采用链式写法，即`then`方法后面再调用另一个`then`方法。

### Promise.prototype.catch()

Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。

### Promise.prototype.finally()

finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作

### Promise.all()

`Promise.all()`方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

```jsx
const p = Promise.all([p1, p2, p3]);
// p的状态由p1、p2、p3决定，是与的关系，只要有一个reject，就会reject，全部resolve才会resolve
```

### Promise.race()

`Promise.race()`方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。

```jsx
const p = Promise.race([p1, p2, p3]);
// 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数
```

### Promise.allSettled()

`Promise.allSettled()`方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是`fulfilled`还是`rejected`，包装实例才会结束。

### Promise.any()

ES2021 引入了`[Promise.any()`方法](https://github.com/tc39/proposal-promise-any)。该方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态

### Promise.resolve()

有时需要将现有对象转为 Promise 对象，`Promise.resolve()`方法就起到这个作用。

```
const jsPromise = Promise.resolve($.ajax('/whatever.json'));

```

上面代码将 jQuery 生成的`deferred`对象，转为一个新的 Promise 对象。

`Promise.resolve()`等价于下面的写法。

```
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
```

### Promise.reject()

`Promise.reject(reason)`方法也会返回一个新的 Promise 实例，该实例的状态为`rejected`。

```jsx
const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
});
// 出错了
上面代码生成一个 Promise 对象的实例p，状态为rejected，回调函数会立即执行。
```

# 三、应用

## 加载图片

我们可以将图片的加载写成一个`Promise`，一旦加载完成，`Promise`的状态就发生变化。

```jsx
const preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload  = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
```

## **用promise对象实现Ajax操作**

```jsx
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
```

# 四、与Async await的区别

原文链接：[https://blog.csdn.net/qq_37617413/article/details/90637694](https://blog.csdn.net/qq_37617413/article/details/90637694)

### js中同步、异步

**js的同步和异步问题通常是指ajax的回调、定时任务等等，如果是同步调用，程序在发出ajax调用后就会暂停，直到远程服务器产生回应后才会继续运行。而如果是异步调用，程序发出ajax调用后不会暂停，而是立即执行后面的代码，服务器返回信息后会自动触发回调函数进行处理。**相比较而言，异步调用的性能最佳，程序不会出现卡顿的现象，而同步调用则通常用于需要立即获得结果并实时处理的情况。

> promise和async/await都是处理异步请求，写法和用法不甚相同，先有的promise，而后有的async/await，后者是为了让我们的代码写的时候看上去更加【同步】，async/await是寄生于Promise，Generater的语法糖

### Promise写法

```jsx
let p = new Promise((resolve,reject) => {
        //...
        resolve('success')
    });
// 或者说 类似 p = ajax('/users')一个异步请求
    p.then(result => {
        console.log(result);//success
    }).catch(err => {
				console.log(err);//error
		});
```

### async/await写法

async用于申明一个function是异步的，而await可以认为是async wait的简写，等待一个异步方法执行完成。
规则：
1 **async和await是配对使用的，await存在于async的内部。否则会报错**
2 await表示在这里等待一个promise返回，再接下来执行
3 await后面跟着的应该是一个promise对象，（也可以不是，如果不是接下来也没什么意义了…）

4 await后面的语句都相当于一个回调里的内容，promise.then()中的回调

```jsx
async function demo() {
	let result01 = await sleep(100);
	//上一个await执行之后才会执行下一句
	let result02 = await sleep(result01 + 100);
	let result03 = await sleep(result02 + 100);
	// console.log(result03);
	return result03;
	}
	中间也可以用try catch捕获错误
		try {
        let result = await p;
    }catch(e) {
        console.log(e);
    }
```

### 总结

1、 promise是ES6，async/await是ES7
2、 async/await相对于promise来讲，写法更加优雅
3 、reject状态：
1）promise错误可以通过catch来捕捉，建议尾部捕获错误，
2）async/await是promise的语法糖，await后面的内容相当于promise的.then，try-catch相当于promise的.catch