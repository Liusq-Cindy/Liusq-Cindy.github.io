# Test—html

> html常见基础问题

html相关知识点问答测试，更具体的内容可以在文件夹中查找相关知识点

1. 怎么理解html的语义化？
2. 常见的行内元素、块元素有哪些？他们的区别和特点是什么？
3. html文件的结构？
4. Html5有哪些新的改变？
5. Bom介绍？

# 1、怎么理解Html的语义化？

html的语义化我的理解就是在html编写的时候，不要图方便一把div梭哈，而是尽可能的使用语义化的标签。比如html提供的header\footer标签表示页头页尾、section标签去分段、h1、h2标签表示一二级标题、ul li表示表格、以及一些行内元素的使用等等。虽然div能做到完全一样的页面效果，但是

选择语义化编写方式主要有两个好处：

一是代码更优雅、可读性更强，后期维护和定位问题也更方便

二是更利于SEO，搜索引擎优化、爬虫也更容易爬到页面的主要内容，机器能迅速识别到重点

# 2、常见的行内元素、块元素有哪些？他们的区别和特点是什么？

常见的行内元素有：span、input、img、textarea、a标签等等

常见的块元素有：div、p、h1、table、ul 、li等等

行内元素是依次一行展示的，设置左右margin-padding属性可以生效，但是上下不行，因为他的高度是由内容撑开的

块元素是独占一行的，宽高由css属性的设置决定

通过设置属性display也可以进行行内元素和块元素的转换，对块元素设置一些css属性值可以触发BFC来达到我们一些清除浮动、特殊布局的目的。

# 3、html文件的结构？

html文件整体是由一个doctotype html大标签包裹的，这是声明文件类型。然后里面主要包含html标签对、head标签、body标签。

html标签对用来标识文档的开始和结束

在body中我们通常存放的是页面的html主体，

在head中我们可以在meta标签里声明一些属性、title等等，也可以引入style样式表和script js脚本，可以选择写在标签内，也可以引入外部文件。如 title, base, link, meta, style, script 等

# 4、html5有哪些新的改变？

html5增加了很多新的标签，比如canvas、video媒体标签，一些语义化标签如header、footer、nav、section用来给代码分段，一些原有的标签也增加了很多新的属性，如input的type新增了color颜色选择控件、week时间周选择，draggble元素可拖动，还新增了websocket双工通信等等。

# 5、Bom介绍？

### bom是什么？

bom指的是浏览器对象，它使得我们的JavaScript有能力和浏览器进行”对话“。

所有浏览器都提供了一个window对象，他表示浏览器窗口，是个全局对象，在js中也可以不写window.XXX，直接访问他的属性，在控制台打印一个window就可以看到他支持的所有属性和方法，我们最常用的，比如

1、document—文档对象，他让我们可以从脚本中对 html元素进行访问，比如获取元素宽高、操作dom之类的，就是我们平时说的DOM，文档对象模型

2、location—与地址栏内容相关，比如控制页面跳转，获取url内容

3、navigator—包含很多浏览器信息

4、history—包含地址栏历史信息

5、screen— 屏幕信息，比如获取屏幕宽高之类的

等等。

### 获取窗口宽高的方法有哪些，他们的区别是什么？

涉及到宽高的方法有很多，他们直接也有很多的不同，我一般先区分这几个属性的含义：

> width/height一般表示可见的宽高，clientWidth/clientHeight表示宽高+padding，然后offsetWidth/offsetHeight表示宽高+padding+border

从浏览器屏幕开始，依次是：

屏幕分辨率的宽/高：window.screen.width/height 

网页可见区域宽/高：document.body.clientWidth/clientHeight

网页可见区域宽/高 (包括边线的宽/高)：document.body.offsetWidth/offsetHeight

网页正文全文宽(包括滚动)：document.body.scrollWidth/scrollHeight

网页被卷去的左/高：document.body.scrollLeft/scrollTop

一般要判断不同浏览器窗口，就会用window.screen.width/height，要判断网页可见区域，就会用document.body.offsetWidth/offsetHeight

### 什么是DOM？原生JS操作DOM有些什么方法？

DOM是文档对象模型，浏览器对Html进行解析，生成一个结构化的DOM树，是一个让我们可用通过js脚本来操作html元素的规范，如查找元素、修改元素属性、新增删除、触发事件等等。

DOM中一切都是节点：元素节点、属性节点、文本节点

操作dom的方法很多，经常用的像document.getElementById，getElementsByTagName，getElementsByClassName等等。

参考：[https://www.cnblogs.com/dalaoban/p/9498218.html](https://www.cnblogs.com/dalaoban/p/9498218.html)

### navigator通常用什么属性？

platform:　　返回运行浏览器的操作系统平台，判断mac、windows

userAgent:　　返回由客户机发送服务器的 user-agent 头部的值，通常用这个判断浏览器种类、操作系统也可以

如：navigator.userAgent ： "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36"

```jsx
navigator.userAgent.indexOf("Safari")>0  Safari
(navigator.userAgent.toLowerCase().indexOf("trident") > -1)  IE浏览器
```

### history通常用什么属性？

history存储地址栏历史信息，为了安全，他不会保存具体的url，但是可以操作页面前进后退。

1. history.go(n) 在用户的历史记录中任意跳转，n正数前进，负数后退
2. history.back() 后退一页，history.forward 前进一页
3. history.pushState()方法向浏览器历史添加了一个状态，不会触发页面刷新，只是显示地址发生变化。pushState()方法带有三个参数：一个状态对象、一个标题(现在被忽略了)以及一个可选的URL地址

    `history.pushState(state, title, url);`

    这个state对象也可以直接通过history对象读取

    `var currentState = history.state`

    因为history对象变化时，就会触发popstate事件，因此也可以为popstate事件指定回调函数

    `window.onpopstate = **function**` `(event) {`

    `console.log('location: '` `+ document.location);`

    `console.log('state: '` `+ JSON.stringify(event.state));`

    `};`