[JS常见手写代码题（一）](https://www.jianshu.com/p/68aad73963e8)

[JS常见手写代码题（二）](https://www.jianshu.com/p/69c8fbd8e064)

[32个手写JS_单眼皮的小熊-CSDN博客](https://blog.csdn.net/z858466/article/details/109286068)

1. **[promise](https://www.notion.so/JS-2-a41d5177ff864e2db5a6ea87e8b7f464)、promise.all、promise.race**
2. **[instanceof](https://www.notion.so/JS-2-a41d5177ff864e2db5a6ea87e8b7f464)**
3. [手写一个**ajax**](https://www.notion.so/JS-2-a41d5177ff864e2db5a6ea87e8b7f464)
4. **[闭包cache](https://www.notion.so/JS-2-a41d5177ff864e2db5a6ea87e8b7f464)**
5. **[浅拷贝、深拷贝](https://www.notion.so/JS-2-a41d5177ff864e2db5a6ea87e8b7f464)**
6. **[字符串转驼峰](https://www.notion.so/JS-2-a41d5177ff864e2db5a6ea87e8b7f464)**
7. **[图片懒加载](https://www.notion.so/JS-2-a41d5177ff864e2db5a6ea87e8b7f464)**
8. [滚动加载](https://www.notion.so/JS-2-a41d5177ff864e2db5a6ea87e8b7f464)

# 一、手写一个Promise

## **Promise.all**

`Promise.all`是支持链式调用的，本质上就是返回了一个Promise实例，通过`resolve`和`reject`来改变实例状态。

```jsx
Promise.myAll = function(promiseArr) {
  return new Promise((resolve, reject) => {
    const ans = [];
    let index = 0;
    for (let i = 0; i < promiseArr.length; i++) {
      promiseArr[i]
      .then(res => {
        ans[i] = res;
        index++;
        if (index === promiseArr.length) {
          resolve(ans);
        }
      })
      .catch(err => reject(err));
    }
  })
}
```

## Promise.race

```jsx
Promise.race = function(promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach(p => {
      // 如果不是Promise实例需要转化为Promise实例
      Promise.resolve(p).then(
        val => resolve(val),
        err => reject(err),
      )
    })
  })
}
```

## 手写一个Promise

简单结构，伪代码

```jsx
// 1、首先声明一个构造函数Promise,里面有最基础的resolve\reject方法，和一些状态值、返回值
function Promise(executor) {
 const self = this;
 this.status = 'pending'
 this.value = ''
 this.reason = ''
 this.onResolvedCb = []
 this.onRejectedCb = []
 function resolve(value) {
  self.value = value
  self.status = 'resolved'
  self.onResolvedCb.forEach(fn => fn())
 }
 function reject(err) {
  self.reason = err
  self.status = 'rejected'
  self.onRejectedCb.forEach(fn => fn())
 }
 try {
  executor(resolve,reject)
 }catch(error){
  reject(error)
 }
}
// 2、给promise原型绑定.then方法，包含了三个状态，在pending中会绑定回调
Promise.prototype.then = function(infulfilled,inrejected) {
 let self = this
 let promise2
 // .then返回的也是一个promise
 if (this.status == 'resolved') {
  // 状态更改后，处理成功方法，并将结果解析至resolvePromise
   promise2 = new Promise(function (resolve, reject) {
    //x可能是一个promise，也可能是个普通值
    setTimeout(function () {
      try {
        let x = infulfilled(self.value)
        resolvePromise(promise2, x, resolve, reject)
      } catch (err) {
        reject(err)
      }
    });

  })
 } else if (this.status == 'rejected'){
  // 状态为失败，处理失败方法，然后将结果解析
  promise2 = new Promise(function (resolve, reject) {
   setTimeout(function () {
    try {
      let x = inrejected(self.value)
      resolvePromise(promise2, x, resolve, reject)
    } catch (err) {
      reject(err)
    }
  })
 });
 } else if (this.status == 'pending') {
  // 状态为pending,将回调绑定进self的列表
  promise2 = new Promise(function (resolve, reject) {
     self.onResolvedCallbacks.push(function () {
      //x可能是一个promise，也可能是个普通值
      setTimeout(function () {
        try {
          let x = infulfilled(self.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (err) {
          reject(err)
        }
      });
    })
    self.onRejectedCallbacks.push(function () {
      //x可能是一个promise，也可能是个普通值
      setTimeout(function () {
        try {
          let x = inrejected(self.reason)
          resolvePromise(promise2, x, resolve, reject)
        } catch (err) {
          reject(err)
        }
      });
    })
  })
 }
 return promise2
}
 // 解析promise
function resolvePromise(promise2, x, resolve, reject) {
 try{
  // TODO: x也可能是个promise，对象中可能还有then，要进一步判断promise2
  resolve(x)
 } catch(err){
  reject(err)

 }
}

```

完整解析：

[https://zhuanlan.zhihu.com/p/103651968](https://zhuanlan.zhihu.com/p/103651968)

```jsx
function Promise(executor) {
let self = this
this.status = 'pending' //当前状态
this.value = undefined  //存储成功的值
this.reason = undefined //存储失败的原因
this.onResolvedCallbacks = []//存储成功的回调
this.onRejectedCallbacks = []//存储失败的回调
function resolve(value) {
  if (self.status == 'pending') {
    self.status = 'resolved'
    self.value = value
    self.onResolvedCallbacks.forEach(fn => fn());
  }
}
function reject(error) {
  if (self.status == 'pending') {
    self.status = 'rejected'
    self.reason = error
    self.onRejectedCallbacks.forEach(fn => fn())
  }
}
try {
  executor(resolve, reject)
} catch (error) {
  reject(error)
}
}
Promise.prototype.then = function (infulfilled, inrejected) {
let self = this
let promise2
infulfilled = typeof infulfilled === 'function' ? infulfilled : function (val) {
  return val
}
inrejected = typeof inrejected === 'function' ? inrejected : function (err) {
  throw err
}
if (this.status == 'resolved') {
  promise2 = new Promise(function (resolve, reject) {
    //x可能是一个promise，也可能是个普通值
    setTimeout(function () {
      try {
        let x = infulfilled(self.value)
        resolvePromise(promise2, x, resolve, reject)
      } catch (err) {
        reject(err)
      }
    });

  })
}
if (this.status == 'rejected') {

  promise2 = new Promise(function (resolve, reject) {
    //x可能是一个promise，也可能是个普通值
    setTimeout(function () {
      try {
        let x = inrejected(self.reason)
        resolvePromise(promise2, x, resolve, reject)
      } catch (err) {
        reject(err)
      }
    });
  })
}
if (this.status == 'pending') {
  promise2 = new Promise(function (resolve, reject) {
    self.onResolvedCallbacks.push(function () {
      //x可能是一个promise，也可能是个普通值
      setTimeout(function () {
        try {
          let x = infulfilled(self.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (err) {
          reject(err)
        }
      });
    })
    self.onRejectedCallbacks.push(function () {
      //x可能是一个promise，也可能是个普通值
      setTimeout(function () {
        try {
          let x = inrejected(self.reason)
          resolvePromise(promise2, x, resolve, reject)
        } catch (err) {
          reject(err)
        }
      });
    })
  })
}
return promise2
}
function resolvePromise(p2, x, resolve, reject) {
if (p2 === x && x != undefined) {
  reject(new TypeError('类型错误'))
}
//可能是promise,看下对象中是否有then方法，如果有~那就是个promise
if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
  try {//为了防止出现 {then:11}这种情况,需要判断then是不是一个函数
    let then = x.then
    if (typeof then === 'function') {
      then.call(x, function (y) {
        //y 可能还是一个promise,那就再去解析，知道返回一个普通值为止
        resolvePromise(p2, y, resolve, reject)
      }, function (err) {
        reject(err)
      })
    } else {//如果then不是function 那可能是对象或常量
      resolve(x)
    }
  } catch (e) {
    reject(e)
  }
} else {//说明是一个普通值
  resolve(x)
}
}
```

# 二、实现检测数据类型的instanceof

```jsx
left表示要检测的数据，right表示类型。其原理是用原型链实现的，
A(实例对象) instanceof B(构造函数)。
function instanceof(left, right){
    let proto = left._proto_
    let prototype = right.prototype
    while(true){
        if(proto === null) return false
        if(proto === prototype) return true
        proto = proto._proto_
    }
}
```

# 三、ajax

### readyState的值

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8d4a5e9f-1ee4-4329-9547-474b45cf545a/Untitled.png)

### （1）get请求的ajax

```jsx
let xhr = new XMLHttpRequest() //1、创建连接
xhr.open('GET', url, true) //2、连接服务器 true表示异步，false是同步
xhr.onreadystatechange = function () { //4、接收请求，当状态改变时触发这个函数
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {//xhr.responseText是字符串需转换为JSON
            success(JSON.parse(xhr.responseText))
        } else {
            fail(xhr.status)
        }
    }
}
xhr.send(null) //3、发送请求
```

### （2）post请求的ajax

```jsx
let xhr = new XMLHttpRequest() //1、创建连接
const postData = {
    userName: 'zhangshan',
    passWord: 'xxx'
}
xhr.open('POST', url, true) //2、连接服务器
xhr.onreadystatechange = function () { //4、接收请求，当状态改变时触发这个函数
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {//xhr.responseText是字符串需转换为JSON
            success(JSON.parse(xhr.responseText))
        } else {
            fail(xhr.status)
        }
    }
}
xhr.send(JSON.stringify(postData)) //3、发送请求(需发送字符串，将json转化成字符串)
```

### （3）用Promise优化

```jsx
function ajax(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest() //1、创建连接
        xhr.open('GET', url, true) //2、连接服务器
        xhr.onreadystatechange = function () { //4、接收请求，当状态改变时触发这个函数
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {//xhr.responseText是字符串需转换为JSON
                    resolve(JSON.parse(xhr.responseText))
                }else if(xhr.status === 404){
                    reject(new Error('404'))
                }
            }
        }
        xhr.send(null) //3、发送请求
    })
} 
const url = ''
ajax(url)
.then(res => console.log(JSON.parse(xhr.responseText)))
.catch(err => console.log(err))
```

# 四、闭包写一个cache缓存工具

```jsx
function creatCache() {
    let data = {} //隐藏数据，外部访问不到
    return {
        get(key) {
            return data[key]
        },
        set(key, val) {
            data[key] = val
        }
    }
}
var c = creatCache()
c.set('name', 'jin')
console.log(c.get('name'))
```

# 五、浅拷贝、深拷贝

浅拷贝只复制对象的第一层属性、深拷贝是对对象的属性进行递归复制。

```jsx
//浅拷贝   （obj1为所要拷贝的对象）
//方式一：原始版本（obj1为所要拷贝的对象，obj2已经默认为一个对象）
function shallowCopy(obj1, obj2){
    for(let key in obj1){
        obj2[key] = obj1[key]
    }
}
//方式一：优化版本（obj为所要拷贝的对象）
function shallowClone(obj){
    if(typeof obj !== 'object' || obj == null){
        //obj是null，或者不是对象和数组，直接返回
        return obj
    }
    let result
    if(obj instanceof Array){
        result = []
    }else{
        result = {}
    }
    for(let key in obj){// for in 遍历对象可枚举属性，包括其原型的属性和方法， 
        if(obj.hasOwnProperty(key)){ //保证key不是原型的属性
            //递归调用
            result[key] = obj[key]
        }
    }
    //返回结果
    return result
}
//方式二
function shallowCopy(obj1, obj2){
    obj2 = Object.assign({}, obj1)
}
```

```jsx
//深拷贝   （obj1为所要拷贝的对象）
//方式一：原始版本（obj1为所要拷贝的对象）   
function deepCopy(obj1, obj2){
    for(let key in obj1){// for in 遍历对象可枚举属性，包括其原型的属性和方法， 可用obj1.hasOwnPerporty(key)判断这个实例是否有这个属性
        let item = obj1[key] 
        if(item instanceof Array){ // 不能用typeof  item，因为不能区分对象和数组
            obj2[key] = []
            deepCopy(item, obj2[key])
        }else if(item instanceof Object){
            obj2[key] = {}
            deepCopy(item, obj2[key])
        }else{
            obj2[key] = item
        }
    }
}
//方式一：优化版本（obj为所要拷贝的对象，obj2已经默认为一个对象）
思路：1、判断是否是值类型还是引用类型。2、判断是数组还是对象。3、递归
function deepClone(obj){
    if(typeof obj !== 'object' || obj == null){
        //obj是null，或者不是对象和数组，直接返回
        return obj
    }
    let result
    if(obj instanceof Array){
        result = []
    }else{
        result = {}
    }
    for(let key in obj){// for in 遍历对象可枚举属性，包括其原型的属性和方法， 
        if(obj.hasOwnProperty(key)){ //保证key不是原型的属性
            //递归调用
            result[key] = deepClone(obj[key])
        }
    }
    //返回结果
    return result
}
缺陷：当遇到两个互相引用的对象，会出现死循环的情况。
//方式二  
function deepCopy(obj1, obj2){
    obj2 = JSON.parse(JSON.stringify(obj1))
}
缺陷：这种方法不能拷贝函数属性
```

# 六、字符串转驼峰

```jsx
方法一：分割成数组，利用toUpperCase()转大写，substring（1）为第一个元素后面的元素
var str="border-bottom-color";
function tf(){
  var arr=str.split("-");
  for(var i=1;i<arr.length;i++){
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
  }
  return arr.join("");
};
tf(str);

方法二：正则
var str="border-bottom-color";
function tf(){
  var re=/-(\w)/g;
  str=str.replace(re,function($0,$1){
    return $1.toUpperCase();
  });
  return str
};
tf(str);
```

# 七、图片懒加载

可以给img标签统一自定义属性data-src='default.png'，当检测到图片出现在窗口之后再补充src属性，此时才会进行图片资源加载。

```jsx
function lazyload() {
  const imgs = document.getElementsByTagName('img');
  const len = imgs.length;
  // 视口的高度
  const viewHeight = document.documentElement.clientHeight;
  // 滚动条高度
  const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
  for (let i = 0; i < len; i++) {
    const offsetHeight = imgs[i].offsetTop;
    if (offsetHeight < viewHeight + scrollHeight) {
      const src = imgs[i].dataset.src;
      imgs[i].src = src;
    }
  }
}

// 可以使用节流优化一下
window.addEventListener('scroll', lazyload);
```

# 八、滚动加载

原理就是监听页面滚动事件，分析clientHeight、scrollTop、scrollHeight三者的属性关系。

```jsx
window.addEventListener('scroll', function() {
  const clientHeight = document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  if (clientHeight + scrollTop >= scrollHeight) {
    // 检测到滚动至页面底部，进行后续操作
    // ...
  }
}, false);
```