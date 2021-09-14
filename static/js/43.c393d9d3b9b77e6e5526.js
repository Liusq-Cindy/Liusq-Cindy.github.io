webpackJsonp([43],{AJWR:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("HTML5的一些新标签")]),s._v(" "),s._m(0),s._v(" "),a("h1",[s._v("一、canvas")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("1、canvas基本属性")]),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("2、antV 与 echarts使用")]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),a("p",[s._v("H5中，可以直接嵌入SVG元素并编辑修改它")]),s._v(" "),s._m(6),s._v(" "),a("h3",[s._v("区别对比")]),s._v(" "),a("p",[s._v("1、SVG 是一种使用 XML 描述 2D 图形的语言，支持事件处理器；。Canvas 通过 JavaScript 来绘制 2D 图形，不支持事件处理器。")]),s._v(" "),a("p",[s._v("2、SVG不依赖分辨率，最适合地图等大型渲染区域的应用程序；canvas依赖分辨率，最适合图像密集型的游戏应用，对象频繁重绘")]),s._v(" "),a("h1",[s._v("二、多媒体元素：video 和 audio")]),s._v(" "),a("h2",[s._v("1、video")]),s._v(" "),a("p",[s._v("提供了 播放、暂停和音量控件来控制视频;可设置多个source元素，浏览器将使用第一个可识别的格式")]),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),a("h1",[s._v("三、更多的语义元素")]),s._v(" "),a("h2",[s._v("1、MathML")]),s._v(" "),a("p",[s._v("对应标签"),a("math",[s._v("...")]),s._v("，是一种基于XML的标准，用于书写数学符号和公式的置标语言，具体math标签内的各个符号的对应标签可见："),a("a",{attrs:{href:"https://www.w3.org/TR/MathML2/"}},[s._v("w3c官网")]),s._v("、"),a("a",{attrs:{href:"https://wiki.jikexueyuan.com/project/html5/mathml.html"}},[s._v("极客学院")])],1),s._v(" "),a("h2",[s._v("2、一些语义和结构元素")]),s._v(" "),s._m(9),s._v(" "),s._m(10),s._v(" "),a("h1",[s._v("四、input新增了许多类型，如type = color,date,week,mail等")]),s._v(" "),s._m(11),s._v(" "),a("h1",[s._v("五、拖放元素（drag和drop）")]),s._v(" "),s._m(12),s._v(" "),a("h1",[s._v("六、websocket")]),s._v(" "),s._m(13),s._v(" "),a("p",[s._v("WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。")]),s._v(" "),a("p",[s._v("在 WebSocket API 中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。")]),s._v(" "),s._m(14)])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("HTML5的出现，解决了很多之前需要复杂解决方案的问题，其中很多新的标签的引入，也大大丰富了页面功能。如下几个标签，值得我们深入学习")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("canvas 标签只是图形容器，必须使用js脚本来绘制图形。canvas提供了很多属性可供画图，不过一般使用canvas画图的场景是用于绘制图表，通常会选择使用第三方工具，如e-charts或antV来完成复杂的绘图。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("a",{attrs:{href:"https://www.runoob.com/tags/ref-canvas.html"}},[this._v("https://www.runoob.com/tags/ref-canvas.html")]),this._v("\n主要涉及路径、颜色样式、线条、矩形、转换、文本、图像绘制、合成等等")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("a",{attrs:{href:"http://note.youdao.com/noteshare?id=5af0c5bcba25d7bf7b0f881983f59b12"}},[this._v("http://note.youdao.com/noteshare?id=5af0c5bcba25d7bf7b0f881983f59b12")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",[this._v("3、与"),t("a",{attrs:{href:"https://www.runoob.com/svg/svg-inhtml.html"}},[this._v("svg")]),this._v("区别")])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("svg是一种"),t("code",[this._v("可伸缩矢量图形图")]),this._v("，与其他图像格式相比（比如 JPEG 和 GIF），使用 SVG 的优势在于：可伸缩压缩、放大不会被压缩质量、可通过文本编辑器来创建和修改。")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-jsx"},[s._v("<svg xmlns="),a("span",{staticClass:"hljs-string"},[s._v('"<http://www.w3.org/2000/svg>"')]),s._v(" version="),a("span",{staticClass:"hljs-string"},[s._v('"1.1"')]),s._v(" height="),a("span",{staticClass:"hljs-string"},[s._v('"190"')]),s._v(">\n  "),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("polygon")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("points")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"100,10 40,180 190,60 10,60 160,180"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("svg")]),s._v(">")])]),s._v("\n\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-jsx"},[s._v("<video width="),a("span",{staticClass:"hljs-string"},[s._v('"320"')]),s._v(" height="),a("span",{staticClass:"hljs-string"},[s._v('"240"')]),s._v(" controls>\n  "),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("source")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"movie.mp4"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"video/mp4"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("source")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"movie.ogg"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"video/ogg"')]),s._v(">")]),s._v("\n您的浏览器不支持Video标签。\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("video")]),s._v(">")]),s._v("\n\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("video和audio元素的方法、属性和事件可以使用JavaScript进行控制："),t("a",{attrs:{href:"https://www.runoob.com/tags/ref-av-dom.html"}},[this._v("音频/视频dom参考手册")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("常见的如header、footer、nav、section用来给代码分段、语义化，还有"),t("code",[this._v("ruby标注中文拼音")]),this._v("，如：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-jsx"},[s._v("<ruby>\n  汉 <rp>(<"),a("span",{staticClass:"hljs-regexp"},[s._v("/rp><rt>Han</")]),s._v("rt>"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("rp")]),s._v(">")]),s._v(")"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("rp")]),s._v(">")])]),s._v("\n  字 <rp>(<"),a("span",{staticClass:"hljs-regexp"},[s._v("/rp><rt>zi</")]),s._v("rt>"),a("span",{staticClass:"xml"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("rp")]),s._v(">")]),s._v(")"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("rp")]),s._v(">")])]),s._v("\n<"),a("span",{staticClass:"hljs-regexp"},[s._v("/ruby>\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("可用于"),t("code",[this._v("取色器、日期选择、周选择")]),this._v("等等")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放"),t("code",[this._v('draggable="true"')]),this._v("属性"),t("br"),this._v("\n可将元素从一个地方拖放到另一个地方，结合js事件实现："),t("a",{attrs:{href:"https://www.runoob.com/html/html5-draganddrop.html"}},[this._v("https://www.runoob.com/html/html5-draganddrop.html")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",[this._v("WebSocket")]),this._v(" 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("a",{attrs:{href:"https://www.runoob.com/html/html5-websocket.html"}},[this._v("https://www.runoob.com/html/html5-websocket.html")])])}]},v=a("VU/8")(null,e,!1,null,null,null);t.default=v.exports},dBcD:function(s,t,a){s.exports=a("AJWR")}});
//# sourceMappingURL=43.c393d9d3b9b77e6e5526.js.map