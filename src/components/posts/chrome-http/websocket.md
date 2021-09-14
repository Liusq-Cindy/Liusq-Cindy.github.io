[WebSocket 教程](https://www.ruanyifeng.com/blog/2017/05/websocket.html)

# 简介

WebSocket 是一种网络通信协议，相对于http来说，通信都是由客户端发起的，做不到服务器主动向客户端推送信息，通常都是选择轮询的方式，但是很耗费资源，而websocket就是解决这一问题的。

### 轮询

实现轮询通常有两种方式：长轮询、短轮询

**长轮询：**客户端向服务器发送Ajax请求，服务器接到请求后hold住连接，直到有新消息才返回响应信息并关闭连接，客户端处理完响应信息后再向服务器发送新的请求。

**短轮询：**客户端设置一个定时器，不间断地向服务器发送请求。

# 特点

（1）建立在 TCP 协议之上，服务器端的实现比较容易。

（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。

（3）数据格式比较轻量，性能开销小，通信高效。

（4）可以发送文本，也可以发送二进制数据。

（5）没有同源限制，客户端可以与任意服务器通信。

（6）协议标识符是`ws`（如果加密，则为`wss`），服务器网址就是 URL。

> ws://example.com:80/some/path

# 简单示例

```jsx
var ws = new WebSocket("wss://echo.websocket.org");

ws.onopen = function(evt) { 
  console.log("Connection open ..."); 
  ws.send("Hello WebSockets!");
};

// 实例对象的onmessage属性，用于指定收到服务器数据后的回调函数。
ws.onmessage = function(evt) {
  console.log( "Received Message: " + evt.data);
  ws.close();
};

ws.onclose = function(evt) {
  console.log("Connection closed.");
};

ws.send('your message'); // 实例对象的send()方法用于向服务器发送数据。
```