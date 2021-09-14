webpackJsonp([58],{"0Grx":function(_,v,t){_.exports=t("ZtyB")},ZtyB:function(_,v,t){"use strict";Object.defineProperty(v,"__esModule",{value:!0});var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("section",[t("p",[t("strong",[_._v("参考文章：下面两篇文章讲的很好，从计算机结构到浏览器的渲染过程，是学习浏览器必读的第一篇文章")])]),_._v(" "),t("p",[t("a",{attrs:{href:"https://xie.infoq.cn/article/5d36d123bfd1c56688e125ad3"}},[_._v("Chrome浏览器架构")])]),_._v(" "),t("p",[t("a",{attrs:{href:"https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/"}},[_._v("How Browsers Work: Behind the scenes of modern web browsers - HTML5 Rocks")])]),_._v(" "),t("p",[_._v("以下为自己方便记忆的，对上文的一些知识点提炼，按照自下而上的顺序")]),_._v(" "),t("h1",[_._v("一、计算机基础知识")]),_._v(" "),t("h3",[_._v("CPU 与 GPU")]),_._v(" "),t("p",[_._v("两个最重要的计算单元，直接决定了计算机的性能")]),_._v(" "),t("p",[_._v("CPU：center processing unit 中央处理单元，顾名思义，计算机的核心计算单元")]),_._v(" "),t("p",[_._v("GPU：graphic procedding unit 图像处理单元，一开始是用于处理图像的，如渲染等等，后来不仅仅用作图像处理")]),_._v(" "),t("h3",[_._v("硬件、操作系统和应用")]),_._v(" "),t("p",[_._v("计算机自下而上分成三层：硬件、操作系统和应用。有了操作系统的存在，上层运行的应用可以使用操作系统提供的能力使用硬件资源而不会直接访问硬件资源。")]),_._v(" "),t("h3",[_._v("进程、线程")]),_._v(" "),t("p",[_._v("一个进程是应用正在运行的程序。而线程是进程中更小的一部分，帮助其工作。其实还有比线程更小的存在就是协程，是运行在线程中更小的单位。async/await 就是基于协程实现的。")]),_._v(" "),t("h1",[_._v("二、浏览器的进程、线程")]),_._v(" "),t("ol",[t("li",[_._v("借助进程和线程，浏览器可以被设计成单进程、多线程架构，或者利用 IPC 实现多进程、多线程架构。")]),_._v(" "),t("li",[_._v("Chrome 是多进程架构，在 Chrome 中存在着不同种类型的进程，它们各司其职。")])]),_._v(" "),t("p",[_._v("关于浏览器进程和线程间的工作和关系，可以查看文章：")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://www.notion.so/2b45bea7fca24ddeb495e72aa9ee02d6"}},[_._v("浏览器的渲染机制")])]),_._v(" "),t("h1",[_._v("三、从输入URL到页面加载的过程（知识体系串联）")]),_._v(" "),t("p",[_._v("结合两篇文章来看")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://xie.infoq.cn/article/5d36d123bfd1c56688e125ad3"}},[_._v("https://xie.infoq.cn/article/5d36d123bfd1c56688e125ad3")])]),_._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000013662126"}},[_._v("https://segmentfault.com/a/1190000013662126")])]),_._v(" "),t("h3",[_._v("主干流程：")]),_._v(" "),t("ol",[t("li",[_._v("从浏览器接收url到开启网络请求线程（这一部分可以展开浏览器的机制以及进程与线程之间的关系）")]),_._v(" "),t("li",[_._v("开启网络线程到发出一个完整的http请求（这一部分涉及到dns查询，tcp/ip请求，五层因特网协议栈等知识）")]),_._v(" "),t("li",[_._v("从服务器接收到请求到对应后台接收到请求（这一部分可能涉及到负载均衡，安全拦截以及后台内部的处理等等）")]),_._v(" "),t("li",[_._v("后台和前台的http交互（这一部分包括http头部、响应码、报文结构、cookie等知识，可以提下静态资源的cookie优化，以及编码解码，如gzip压缩等）")]),_._v(" "),t("li",[_._v("单独拎出来的缓存问题，http的缓存（这部分包括http缓存头部，etag，catch-control等）")]),_._v(" "),t("li",[_._v("浏览器接收到http数据包后的解析流程（解析html-词法分析然后解析成dom树、解析css生成css规则树、合并成render树，然后layout、painting渲染、复合图层的合成、GPU绘制、外链资源的处理、loaded和domcontentloaded等）")]),_._v(" "),t("li",[_._v("CSS的可视化格式模型（元素的渲染规则，如包含块，控制框，BFC，IFC等概念）")]),_._v(" "),t("li",[_._v("JS引擎解析过程（JS的解释阶段，预处理阶段，执行阶段生成执行上下文，VO，作用域链、回收机制等等）")]),_._v(" "),t("li",[_._v("其它（可以拓展不同的知识模块，如跨域，web安全，hybrid模式等等内容）")])]),_._v(" "),t("h3",[_._v("详细细节：")]),_._v(" "),t("p",[_._v("看文章，此处不再赘述，一定要看")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000013662126"}},[_._v("从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！")])]),_._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000012925872"}},[_._v("从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理")])]),_._v(" "),t("h3",[_._v("个人总结回答：<从输入URL到页面加载的过程?>")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("输入后，浏览器主进程接管，判断是地址还是关键词搜索")]),_._v(" "),t("ol",[t("li",[_._v("浏览器主进程接管，获取到URL后，会进行解析：\n"),t("ul",[t("li",[t("code",[_._v("protocol")]),_._v("，协议头，譬如有http，ftp等")]),_._v(" "),t("li",[t("code",[_._v("host")]),_._v("，主机域名或IP地址")]),_._v(" "),t("li",[t("code",[_._v("port")]),_._v("，端口号")]),_._v(" "),t("li",[t("code",[_._v("path")]),_._v("，目录路径")]),_._v(" "),t("li",[t("code",[_._v("query")]),_._v("，即查询参数")]),_._v(" "),t("li",[t("code",[_._v("fragment")]),_._v("，即"),t("code",[_._v("#")]),_._v("后的hash值，一般用来定位到某个位置")])])]),_._v(" "),t("li",[_._v("如果URL解析到http协议，浏览器内核开启一个网络请求线程，去处理请求资源下载。")])])]),_._v(" "),t("li",[t("p",[_._v("检查浏览器缓存")]),_._v(" "),t("p",[_._v("浏览器缓存 —> 本机缓存 —> 再没有的话就是用host")])]),_._v(" "),t("li",[t("p",[_._v("dns解析")]),_._v(" "),t("p",[_._v("向dns域名服务器查询（当然，中间可能还会经过路由，也有缓存等），查询到对应的IP")])]),_._v(" "),t("li",[t("p",[_._v("经历五层因特网协议栈，三次握手建立TCP连接，如果要断开时，要经历4次挥手")]),_._v(" "),t("blockquote",[t("p",[_._v("在http1.0中往往一个资源下载就需要对应一个tcp/ip请求，2.0则可以并发")])]),_._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-comment"},[_._v("// 三次握手建立tcp连接：")]),_._v("\n客户端：hello，你是server么？\n服务端：hello，我是server，你是client么\n客户端：yes，我是client\n"),t("span",{staticClass:"hljs-comment"},[_._v("// 待需要断开时，四次挥手断开连接")]),_._v("\n主动方：我已经关闭了向你那边的主动通道了，只能被动接收了\n被动方：收到通道关闭的信息\n被动方：那我也告诉你，我这边向你的主动通道也关闭了\n主动方：最后收到数据，之后双方无法通信\n")])]),_._v(" "),t("blockquote",[t("p",[_._v("五层因特网协议栈")])]),_._v(" "),t("p",[_._v("1.应用层(dns,http) DNS解析成IP并发送http请求")]),_._v(" "),t("p",[_._v("2.传输层(tcp,udp) 建立tcp连接（三次握手）")]),_._v(" "),t("p",[_._v("3.网络层(IP,ARP) IP寻址")]),_._v(" "),t("p",[_._v("4.数据链路层(PPP) 封装成帧")]),_._v(" "),t("p",[_._v("5.物理层(利用物理介质传输比特流) 物理传输（然后传输的时候通过双绞线，电磁波等各种介质）")]),_._v(" "),t("p",[_._v("当然，其实也有一个完整的OSI七层框架，与之相比，多了会话层、表示层。")]),_._v(" "),t("p",[_._v("OSI七层框架："),t("code",[_._v("物理层")]),_._v("、"),t("code",[_._v("数据链路层")]),_._v("、"),t("code",[_._v("网络层")]),_._v("、"),t("code",[_._v("传输层")]),_._v("、"),t("code",[_._v("会话层")]),_._v("（处理对话）、"),t("code",[_._v("表示层")]),_._v("（加密）、"),t("code",[_._v("应用层")])])]),_._v(" "),t("li",[t("p",[_._v("建立TCP连接后，向服务端发送http请求，区分不同的请求方法和报文")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://www.notion.so/HTTP-65cbca00bb7f47229a67d8640e8dd31d"}},[_._v("HTTP协议知识点汇总")])])]),_._v(" "),t("li",[t("p",[_._v("根据强制缓存和协商缓存处理数据的返回")]),_._v(" "),t("p",[_._v("强制缓存：（浏览器）存在缓存结果且http报文有对应的请求头")]),_._v(" "),t("p",[_._v("协商缓存：(服务端)强制缓存失效时，通过资源是否更新，请求头和响应头的字段来判断 304")]),_._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-comment"},[_._v("// 强制缓存")]),_._v("\n**Expires（**请求头，http1"),t("span",{staticClass:"hljs-number"},[_._v(".0")]),_._v("中的过期时间，已被替换）和**Cache-Control**（请求头），其中Cache-Control优先级比Expires高。\n"),t("span",{staticClass:"hljs-comment"},[_._v("// 协商缓存")]),_._v("\n**Last-Modified / If-Modified-Since**\n"),t("span",{staticClass:"hljs-number"},[_._v("1.")]),_._v(" Last-Modified是服务器响应请求时，返回该**资源文件在服务器最后被修改的时间，响应头内**\n"),t("span",{staticClass:"hljs-number"},[_._v("2.")]),_._v(" If-Modified-Since则是客户端再次发起该请求时，**携带上次请求返回的Last-Modified值**，请求头，通过此字段值告诉服务器该资源上次请求返回的最后被修改时间。服务器收到该请求，发现请求头含有If-Modified-Since字段，则会根据If-Modified-Since的字段值与该资源在服务器的最后被修改时间做对比。根据资源是否改变返回"),t("span",{staticClass:"hljs-number"},[_._v("304")]),_._v("或"),t("span",{staticClass:"hljs-number"},[_._v("200")]),_._v("。\n**Etag / If-None-Match**\n"),t("span",{staticClass:"hljs-number"},[_._v("1.")]),_._v(" Etag是服务器响应请求时，**返回**当前资源文件的一个唯一标识(由服务器生成)\n"),t("span",{staticClass:"hljs-number"},[_._v("2.")]),_._v(" If-None-Match是客户端**再次发起该请求**时，携带上次请求返回的唯一标识Etag值\n")])]),_._v(" "),t("p",[_._v("Expires和Cache-Control，其中Cache-Control优先级比Expires高。")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://www.notion.so/b47c9032af54408da25bdc593d8855bb"}},[_._v("浏览器的缓存机制")])])]),_._v(" "),t("li",[t("p",[_._v("服务端处理逻辑，http返回数据，如index.html文件。")])]),_._v(" "),t("li",[t("p",[_._v("浏览器内核获取html文件")])]),_._v(" "),t("li",[t("p",[_._v("浏览器该tab页面的进程中的渲染dom树：Bytes → characters → tokens → nodes → DOM")])]),_._v(" "),t("li",[t("p",[_._v("生成css规则：Bytes → characters → tokens → nodes → CSSOM")])]),_._v(" "),t("li",[t("p",[_._v("合并DOM树和CSS规则，生成render树")])]),_._v(" "),t("li",[t("p",[_._v("重排（回流）：布局render树（Layout/reflow），负责各元素尺寸、位置的计算")])]),_._v(" "),t("li",[t("p",[_._v("重绘：绘制render树（paint），绘制页面像素信息")])]),_._v(" "),t("li",[t("p",[_._v("浏览器会将各层的信息发送给浏览器的GPU，GPU会将各层合成（composite），显示在屏幕上")])]),_._v(" "),t("li",[t("p",[_._v("资源外链的下载：")]),_._v(" "),t("p",[_._v("在解析html时，会遇到一些资源连接，此时就需要进行单独处理了：如")]),_._v(" "),t("ul",[t("li",[_._v("CSS样式资源")]),_._v(" "),t("li",[_._v("JS脚本资源")]),_._v(" "),t("li",[_._v("img图片类资源")])]),_._v(" "),t("p",[_._v("遇到上述的外链时，会单独开启一个下载线程去下载资源（http1.1中是每一个资源的下载都要开启一个http请求，对应一个tcp/ip链接）")]),_._v(" "),t("ul",[t("li",[_._v("css资源不会阻碍dom渲染，但会阻碍render树构建")]),_._v(" "),t("li",[_._v("js脚本会阻塞浏览器的解析，但是可以加上defer或async属性，这样脚本就变成异步了，可以等到解析完毕后再执行。")]),_._v(" "),t("li",[_._v("遇到图片等资源时，直接就是异步下载，不会阻塞解析，下载完毕后直接用图片替换原有src的地方")])])]),_._v(" "),t("li",[t("p",[_._v("js引擎执行、执行上下文等等")]),_._v(" "),t("p",[_._v("遇到JS脚本时，会等到它的执行，实际上是需要引擎解析的，涉及到执行上下文、事件循环等等。")]),_._v(" "),t("p",[_._v("js脚本执行是由tab页面进程交由js引擎线程处理的，js引擎线程作为执行栈执行，另有一个事件触发线程作为队列、与定时器线程处理时间api、异步http请求线程处理接口请求来联合完成js代码执行。")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://www.notion.so/2b45bea7fca24ddeb495e72aa9ee02d6"}},[_._v("浏览器的渲染机制")])])]),_._v(" "),t("li",[t("p",[_._v("页面展示")]),_._v(" "),t("p",[_._v("GUI线程渲染页面，展示到屏幕中。之后当用户发生交互时，继续由js引擎等各个线程处理。")])])])])}]},s=t("VU/8")(null,e,!1,null,null,null);v.default=s.exports}});
//# sourceMappingURL=58.c852c1de1cdcf1330c2f.js.map