# HTML5的一些新标签

> HTML5的出现，解决了很多之前需要复杂解决方案的问题，其中很多新的标签的引入，也大大丰富了页面功能。如下几个标签，值得我们深入学习

# 一、canvas

> canvas 标签只是图形容器，必须使用js脚本来绘制图形。canvas提供了很多属性可供画图，不过一般使用canvas画图的场景是用于绘制图表，通常会选择使用第三方工具，如e-charts或antV来完成复杂的绘图。

## 1、canvas基本属性

[https://www.runoob.com/tags/ref-canvas.html](https://www.runoob.com/tags/ref-canvas.html)
主要涉及路径、颜色样式、线条、矩形、转换、文本、图像绘制、合成等等

## 2、antV 与 echarts使用

[http://note.youdao.com/noteshare?id=5af0c5bcba25d7bf7b0f881983f59b12](http://note.youdao.com/noteshare?id=5af0c5bcba25d7bf7b0f881983f59b12)

## 3、与[svg](https://www.runoob.com/svg/svg-inhtml.html)区别

> svg是一种`可伸缩矢量图形图`，与其他图像格式相比（比如 JPEG 和 GIF），使用 SVG 的优势在于：可伸缩压缩、放大不会被压缩质量、可通过文本编辑器来创建和修改。

H5中，可以直接嵌入SVG元素并编辑修改它

```jsx
<svg xmlns="<http://www.w3.org/2000/svg>" version="1.1" height="190">
  <polygon points="100,10 40,180 190,60 10,60 160,180"
  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;">
</svg>

```

### 区别对比

1、SVG 是一种使用 XML 描述 2D 图形的语言，支持事件处理器；。Canvas 通过 JavaScript 来绘制 2D 图形，不支持事件处理器。

2、SVG不依赖分辨率，最适合地图等大型渲染区域的应用程序；canvas依赖分辨率，最适合图像密集型的游戏应用，对象频繁重绘

# 二、多媒体元素：video 和 audio

## 1、video

提供了 播放、暂停和音量控件来控制视频;可设置多个source元素，浏览器将使用第一个可识别的格式

```jsx
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
您的浏览器不支持Video标签。
</video>

```

video和audio元素的方法、属性和事件可以使用JavaScript进行控制：[音频/视频dom参考手册](https://www.runoob.com/tags/ref-av-dom.html)

# 三、更多的语义元素

## 1、MathML

对应标签<math>...</math>，是一种基于XML的标准，用于书写数学符号和公式的置标语言，具体math标签内的各个符号的对应标签可见：[w3c官网](https://www.w3.org/TR/MathML2/)、[极客学院](https://wiki.jikexueyuan.com/project/html5/mathml.html)

## 2、一些语义和结构元素

常见的如header、footer、nav、section用来给代码分段、语义化，还有`ruby标注中文拼音`，如：

```jsx
<ruby>
  汉 <rp>(</rp><rt>Han</rt><rp>)</rp>
  字 <rp>(</rp><rt>zi</rt><rp>)</rp>
</ruby>
```

# 四、input新增了许多类型，如type = color,date,week,mail等

可用于`取色器、日期选择、周选择`等等

# 五、拖放元素（drag和drop）

在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放`draggable="true"`属性<br>
可将元素从一个地方拖放到另一个地方，结合js事件实现：[https://www.runoob.com/html/html5-draganddrop.html](https://www.runoob.com/html/html5-draganddrop.html)

# 六、websocket

`WebSocket` 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。

WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。

在 WebSocket API 中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。

[https://www.runoob.com/html/html5-websocket.html](https://www.runoob.com/html/html5-websocket.html)