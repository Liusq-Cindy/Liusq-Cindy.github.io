参考资料：

[44.理解事件循环一(浅析) · Issue #47 · ccforward/cc](https://github.com/ccforward/cc/issues/47)

[45.理解事件循环二(macrotask和microtask) · Issue #48 · ccforward/cc](https://github.com/ccforward/cc/issues/48)

# 一、理解事件循环

1、栈stack与

当我们调用一个函数，它的地址、参数、局部变量都会压入到一个 stack 中

2、heap(堆)

当函数执行完毕后本地变量会从 stack 中弹出，这只有在使用 numbers string boolean 这种基本数据类型时才会发生。而对象、数组的值是存在于 heap(堆) 中的，stack 只存放了他们对应的指针。

真正的值依然存在 heap 中，然后由垃圾回收器自动的清理回收。

3、任务队列与事件循环

1、javascript 是单线程事件驱动的语言，那我们可以给时间添加监听器，当事件触发时，监听器就能执行回调函数。

2、当我们去调用 `setTimeout` `http.get` `fs.readFile`, Node.js 会把这些定时器、http、IO操作**发送给另一个线程**以保证V8继续执行我们的代码。

3、然而我们只有一个主线程和一个 call-stack ，这样当一个读取文件的操作还在执行时，有一个网络请求request过来，那这时他的回调就需要等stack变空才能执行。

4、回调函数正在等待轮到自己执行所排的队就被称为任务队列(或者事件队列、消息队列)。每当主线程完成前一个任务，回调函数就会在一个无限循环圈里被调用，因此这个圈被称为事件循环。

**4、dom渲染和事件循环**

执行栈中的同步代码执行完毕后，到进行下一轮事件循环之前，会尝试Dom渲染（如果没有dom操作，则不会渲染）

要测试这个过程，可以通过alert，alert会阻断dom渲染和js执行

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c0bbeff7-b4a8-4c65-a195-d4418d532878/Untitled.png)

5、为什么微任务的执行时机比宏任务早？

因为微任务是在dom渲染前触发，宏任务在dom渲染后

# 二、事件循环示例

**关键点：**

到 [http://news-at.zhihu.com/api/4/news/${aid}](http://news-at.zhihu.com/api/4/news/$%7Baid%7D) 的HTTP请求被发送到后台线程，然后函数**继续往下**执行，当后台线程返回之后，end事件的匿名回调函数被执行

```jsx
'use strict'

const express = require('express')
const superagent = require('superagent')
const app = express()

app.get('/', getArticle)

function getArticle(req, res) {
    fetchArticle(req, res)
    print()
}

const aids = [4564824, 4506868, 4767667, 4856099, 7456996];

function fetchArticle(req, res) {
    const aid = aids[Math.floor(Math.random() * aids.length)]
    superagent.get(`http://news-at.zhihu.com/api/4/news/${aid}`)
        .end((err, res) => {
            if(err) {
                console.log('error ......');
                return res.status(500).send('an error ......')
            }
            const article = res.body
            res.send(article)
            console.log('Got an article')
        })

    console.log('Now is fetching an article')
}

function print(){
    console.log('Print something')
}

app.listen('5000')
```

对应执行顺序：

1、express 给 request 事件注册了一个 handler，并且当请求到达路径 '/' 时来触发handler
2、调过各个函数并且在端口 5000 上启动监听
3、stack 为空，等待 request 事件触发
4、根据传入的请求，事件触发，express 调用之前提供的函数 getArticle
5、getArticle 压入(push) stack
6、fetchArticle 被调用 同时压入 stack
7、Math.floor 和 Math.random 被调用压入 stack 然后再 弹出(pop), 从 aids 里面取出的一个值被赋值给变量 aid
8、superagent.get 被执行，参数为 '[http://news-at.zhihu.com/api/4/news/${aid}](http://news-at.zhihu.com/api/4/news/$%7Baid%7D)' ,并且回调函数注册给了 end 事件
9、到 [http://news-at.zhihu.com/api/4/news/${aid}](http://news-at.zhihu.com/api/4/news/$%7Baid%7D) 的HTTP请求被发送到后台线程，然后函数继续往下执行
10、'Now is fetching an article' 打印在 console 中。 函数 fetchArticle 返回
11、print 函数被调用, 'Print something' 打印在 console 中
12、函数 getArticle 返回，并从 stack 中弹出， stack 为空
13、等待 [http://news-at.zhihu.com/api/4/news/${aid}](http://news-at.zhihu.com/api/4/news/$%7Baid%7D) 发送相应信息
14、响应信息到达，end 事件被触发
15、注册给 end 事件的匿名回调函数被执行，这个匿名函数和他闭包中的所有变量压入 stack，这意味着这个匿名函数可以访问并修改 express, superagent, app, aids, req, res, aid 的值以及之前所有已经定义的函数
16、函数 res.send() 伴随着 200 或 500 的状态码被执行，但同时又被放入到后台线程中，因此 响应流 不会阻塞我们函数的执行。匿名函数也被 pop 出 stack。

# 三、宏任务、微任务

任务队列不止一个，还有 microtasks 和 macrotasks

## 概念

一个事件循环(EventLoop)中会有一个正在执行的任务(Task)，而这个任务就是从 macrotask 队列中来的。在whatwg规范中有 queue 就是任务队列。当这个 macrotask 执行结束后所有可用的 microtask 将会在同一个事件循环中执行，当这些 microtask 执行结束后还能继续添加 microtask 一直到真个 microtask 队列执行结束。

## 具体实现

**microtasks:**

- process.nextTick
- promise
- Object.observe
- async await

**macrotasks:**

- setTimeout
- setInterval
- setImmediate
- I/O
- DOM事件
- Ajax

## **怎么用**

基本来说，当我们想以同步的方式来处理异步任务时候就用 microtask（比如我们需要直接在某段代码后就去执行某个任务，就像Promise一样）。

其他情况就直接用 macrotask。

## 执行顺序

再来回顾下事件循环如何执行一个任务的流程

当执行栈(call stack)为空的时候，开始依次执行：

1. 把最早的任务(task A)放入任务队列
2. 如果 task A 为null (那任务队列就是空)，直接跳到第6步
3. 将 currently running task 设置为 task A
4. 执行 task A (也就是执行回调函数)
5. 将 currently running task 设置为 null 并移出 task A
6. 执行 microtask 队列
    - a: 在 microtask 中选出最早的任务 task X
    - b: 如果 task X 为null (那 microtask 队列就是空)，直接跳到 g
    - c: 将 currently running task 设置为 task X
    - d: 执行 task X
    - e: 将 currently running task 设置为 null 并移出 task X
    - f: 在 microtask 中选出最早的任务 , 跳到 b
    - g: 结束 microtask 队列
7. 跳到第一步

上面就算是一个简单的 event-loop 执行模型

再简单点可以总结为：

1. 在 macrotask 队列中执行最早的那个 task ，然后移出
2. 执行 microtask 队列中所有可用的任务，然后移出
3. 下一个循环，执行下一个 macrotask 中的任务 (再跳到第2步)

## 其他

- 当一个task(在 macrotask 队列中)正处于执行状态，也可能会有新的事件被注册，那就会有新的 task 被创建。比如下面两个
    1. promiseA.then() 的回调就是一个 task
    - promiseA 是 resolved或rejected: 那这个 task 就会放入当前事件循环回合的 microtask queue
    - promiseA 是 pending: 这个 task 就会放入 事件循环的未来的某个(可能下一个)回合的 microtask queue 中
    1. setTimeout 的回调也是个 task ，它会被放入 macrotask queue 即使是 0ms 的情况
- microtask queue 中的 task 会在事件循环的当前回合中执行，因此 macrotask queue 中的 task 就只能等到事件循环的下一个回合中执行了
- click ajax setTimeout 的回调是都是 task, 同时，包裹在一个 script 标签中的js代码也是一个 task 确切说是 macrotask。