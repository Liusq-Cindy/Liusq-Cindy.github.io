webpackJsonp([4],{bCZv:function(s,t,n){s.exports=n("omdB")},omdB:function(s,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("section",[n("p",[n("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2017/05/websocket.html"}},[s._v("WebSocket 教程")])]),s._v(" "),n("h1",[s._v("简介")]),s._v(" "),n("p",[s._v("WebSocket 是一种网络通信协议，相对于http来说，通信都是由客户端发起的，做不到服务器主动向客户端推送信息，通常都是选择轮询的方式，但是很耗费资源，而websocket就是解决这一问题的。")]),s._v(" "),n("h3",[s._v("轮询")]),s._v(" "),n("p",[s._v("实现轮询通常有两种方式：长轮询、短轮询")]),s._v(" "),n("p",[s._v("**长轮询：**客户端向服务器发送Ajax请求，服务器接到请求后hold住连接，直到有新消息才返回响应信息并关闭连接，客户端处理完响应信息后再向服务器发送新的请求。")]),s._v(" "),n("p",[s._v("**短轮询：**客户端设置一个定时器，不间断地向服务器发送请求。")]),s._v(" "),n("h1",[s._v("特点")]),s._v(" "),n("p",[s._v("（1）建立在 TCP 协议之上，服务器端的实现比较容易。")]),s._v(" "),n("p",[s._v("（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。")]),s._v(" "),n("p",[s._v("（3）数据格式比较轻量，性能开销小，通信高效。")]),s._v(" "),n("p",[s._v("（4）可以发送文本，也可以发送二进制数据。")]),s._v(" "),n("p",[s._v("（5）没有同源限制，客户端可以与任意服务器通信。")]),s._v(" "),n("p",[s._v("（6）协议标识符是"),n("code",[s._v("ws")]),s._v("（如果加密，则为"),n("code",[s._v("wss")]),s._v("），服务器网址就是 URL。")]),s._v(" "),n("blockquote",[n("p",[s._v("ws://example.com:80/some/path")])]),s._v(" "),n("h1",[s._v("简单示例")]),s._v(" "),n("pre",[n("code",{staticClass:"language-jsx"},[n("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" ws = "),n("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" WebSocket("),n("span",{staticClass:"hljs-string"},[s._v('"wss://echo.websocket.org"')]),s._v(");\n\nws.onopen = "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("evt")]),s._v(") ")]),s._v("{ \n  "),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),n("span",{staticClass:"hljs-string"},[s._v('"Connection open ..."')]),s._v("); \n  ws.send("),n("span",{staticClass:"hljs-string"},[s._v('"Hello WebSockets!"')]),s._v(");\n};\n\n"),n("span",{staticClass:"hljs-comment"},[s._v("// 实例对象的onmessage属性，用于指定收到服务器数据后的回调函数。")]),s._v("\nws.onmessage = "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("evt")]),s._v(") ")]),s._v("{\n  "),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log( "),n("span",{staticClass:"hljs-string"},[s._v('"Received Message: "')]),s._v(" + evt.data);\n  ws.close();\n};\n\nws.onclose = "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("evt")]),s._v(") ")]),s._v("{\n  "),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),n("span",{staticClass:"hljs-string"},[s._v('"Connection closed."')]),s._v(");\n};\n\nws.send("),n("span",{staticClass:"hljs-string"},[s._v("'your message'")]),s._v("); "),n("span",{staticClass:"hljs-comment"},[s._v("// 实例对象的send()方法用于向服务器发送数据。")]),s._v("\n")])])])}]},e=n("VU/8")(null,a,!1,null,null,null);t.default=e.exports}});
//# sourceMappingURL=4.bf78b3b336f40444014a.js.map