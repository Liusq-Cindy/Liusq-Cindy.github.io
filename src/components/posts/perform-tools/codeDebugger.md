前端代码调试分为很多种，主要涉及web端的调试和移动端调试，通用的通常是基于浏览器控制台的一些操作来定位问题，其余可能会用到一些移动端抓包工具

1. [chrome控制台调试总结](https://www.notion.so/e5f4e5369aa64b618029c8458d7046eb)
    1. 基础用法补充
    2. 性能查看与分析
2. [移动端调试](https://www.notion.so/e5f4e5369aa64b618029c8458d7046eb)
3. [chrome快捷键目录](https://www.notion.so/e5f4e5369aa64b618029c8458d7046eb)

# 一、chrome控制台调试总结

完整笔记见自己的有道笔记：[https://note.youdao.com/s/XWDANnLK](https://note.youdao.com/s/XWDANnLK)

## **第一部分：一些基础用法补充**

**一、概述了面板内容**

快捷键打开控制台：使用[快捷键](https://www.html.cn/doc/chrome-devtools/shortcuts/) Ctrl+Shift+I (Windows) 或者 Cmd+Opt+I (Mac)

二**、Aplication**

1、clear storage > clear site data,会清除掉特定来源的所有数据

2、每个 cookie 提供了以下字段:

```jsx
Name	              	    Cookie 的名称。
Value	              	     Cookie 的值。
Domain	             	    Cookie 的域。
Path	               	    Cookie 的路径。
Expires / Maximum Age	   Cookie 的过期时间或最长周期。对于会话 cookie，这一领域始终是`Session`(会话)。
Size	              	     Cookie 的大小，以字节为单位。
HTTP	              	     如果存在，则指示应仅通过 HTTP 使用 cookie，并且不允许 JavaScript 修改.
Secure	            	       如果存在，则此 cookie 的通信必须在加密传输。
```

**七、模拟移动设备**

除常用的方法外，移动设备模式，还可以点击小手机旋转按钮模拟屏幕旋转。

**八、调试安卓设备**

[https://www.html.cn/doc/chrome-devtools/remote-debugging/](https://www.html.cn/doc/chrome-devtools/remote-debugging/)

**九、检查和调试Js**

1、{}美化代码拆成多行，代码行点击行号打断点

2、添加条件断点，当满足所设置的条件之后，才触发断点：

右键点击行号，选择add conditional breadpoint,设置判断条件，条件断点是黄色的。

3、运行代码片段：source左上角 > 符号，选择snippets

4、监视变量：右键添加到watch，在watch面板，可以对变量增删改

**十、console控制台**

1、console.time 加上console.timeEnd()组合，可以计算执行时间

2、$0匹配制定的第一个dom元素，$(selector)返回匹配指定CSS选择器的第一个DOM元素的引用。这个函数是document.querySelector()函数的别名。

## **第二部分 性能查看与分析**

**一、如何查看性能---时间轴**

1、有的版本是有timeline时间轴面板，有的是显示performance面板。

第一个圆圈点击开始记录，第二个是刷新页面然后自动记录，第三个停止

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b218e425-0095-476d-920d-d6afb43f67ab/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b218e425-0095-476d-920d-d6afb43f67ab/Untitled.png)

2、面板窗格介绍

**Controls**： 开始录制，停止录制，并配置在录制过程中捕获的信息。

**Overview**： 页面性能的高级摘要。 更多关于这一点见文章下面。

**Flame Chart**： CPU 栈跟踪的可视化。

**Details**： 选择事件时，此窗格显示有关该事件的更多信息。 当未选择任何事件时，此窗格显示有关所选时间范围的信息。

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/74721553-b2f1-4b9d-9ce0-437a6d8173af/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/74721553-b2f1-4b9d-9ce0-437a6d8173af/Untitled.png)

如上图所示：

其中

1、勾选后，下面面板中展示对应的记录。

scereemshots 屏幕截图

memory 内存记录

2、 overview窗格里，对应一些资源参数：

**FPS**： 每秒帧数。绿色条越高，FPS越高。FPS曲线图上方的红色块表示长帧，这可能是jank的候选。

**CPU**： CPU资源。此区域图表指示哪些类型的事件消耗CPU资源。

**NET**：每个彩色条代表一个资源。条越长，表示检索该资源所花费的时间越长。每个条的较亮部分表示等待时间（从请求资源到下载第一个字节之间的时间）。较暗的部分表示加载时间（下载第一个到最后一个字节之间的时间）

可以鼠标缩放展示范围，查看具体的变化。

3、加载展示面板，从上到下依次是

(1)、network网络：展开后可以查看该页面的网络请求触发和结束时间，耗时。

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ddac451e-7622-4f33-9129-d0fad784b8c1/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ddac451e-7622-4f33-9129-d0fad784b8c1/Untitled.png)

（2）、frames截图：每一帧的截图，可查看对应时间的页面展示内容

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e93ca8c0-8c78-4daf-bd3a-3d6b54cb3096/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e93ca8c0-8c78-4daf-bd3a-3d6b54cb3096/Untitled.png)

(3）、interactions交互：包括了动画animation

(4)、timings时间点：包括了几个关键的时间点和彩线

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7085a706-518e-439b-9d31-83be074fb90b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7085a706-518e-439b-9d31-83be074fb90b/Untitled.png)

绿线表示第一次绘制的时间。 （从白屏到有数据的时间：dom开始渲染，因为dom是边加载边渲染的，绿线开始就是开始有页面内容了）

蓝线代表DOMContentLoaded事件。 （dom渲染完成时间）

红线代表load事件。（资源加载完成的时间）

黑线代表首次有效加载时间。

（5）、mian主要内容：可以查看每个阶段具体的加载内容

4、memory面板，可以查看内存情况

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2b59a153-ba3f-42ac-8c1c-ef12b8d91b11/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2b59a153-ba3f-42ac-8c1c-ef12b8d91b11/Untitled.png)

鼠标移入之后，会显示当前时间点js\dom等数量。

5、饼图汇总

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8650a9ae-3792-44c8-905a-dd6af7355c61/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8650a9ae-3792-44c8-905a-dd6af7355c61/Untitled.png)

从左到右依次是

（1）summary总结：

4中彩色条代表的含义如下：

- HTML文件是 **blue (蓝色)** 的。
- 脚本是 **yellow (黄色)** 的。
- 样式表是 **purple (紫色)** 的。
- 媒体文件是 **green (绿色)** 的。
- 其他杂项资源是 **grey (灰色)** 的。

    蓝色(Loading)：网络通信和HTML解析

    黄色(Scripting)：JavaScript执行

    紫色(Rendering)：样式计算和布局，即重排

    绿色(Painting)：重绘

    灰色(other)：其它事件花费的时间

    白色(Idle)：空闲时间

（2）后面是几个耗时的不同排序：自底层而上各类别耗时、顺序耗时、根据事件勾选不同的选项

**二、分析运行时性能**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c0ed1949-6616-49ad-bbc5-13de67f04a69/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c0ed1949-6616-49ad-bbc5-13de67f04a69/Untitled.png)

[https://www.html.cn/doc/chrome-devtools/rendering-tools/](https://www.html.cn/doc/chrome-devtools/rendering-tools/)

可参考链接[https://blog.csdn.net/zhenzigis/article/details/50556440](https://blog.csdn.net/zhenzigis/article/details/50556440)，以及[https://www.cnblogs.com/ranyonsue/p/9342839.html](https://www.cnblogs.com/ranyonsue/p/9342839.html)专门对这一块儿的分析

**三、评估网络性能---network**

除基本平时的应用外：

1、查看各个资源请求的耗时、内容等等，timing

2、Network Conditioning(网络调节)设置不同的数据传输速率以供调研

**四、修复内存问题**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fef7652a-9504-412c-a6c7-ad914acd9da0/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fef7652a-9504-412c-a6c7-ad914acd9da0/Untitled.png)

1、在performance页面的记录中，勾选memory，重新记录，可以录制可视化内存泄漏

简单来看：内存占用 处在平稳，则说明没有内存泄漏；如果内存占用 一直处于上升趋势 则说明内存泄漏了

更具体的内存泄露分析，可见：[https://blog.csdn.net/c11073138/article/details/84700482](https://blog.csdn.net/c11073138/article/details/84700482)

2、更复杂的内存分配可进入memerry页面

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9b380a4f-e9f5-498d-a1fb-117039889b3f/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9b380a4f-e9f5-498d-a1fb-117039889b3f/Untitled.png)

## 【示例—问卷性能分析】

基于此，对问卷的几个重要页面做了简单的性能分析和统计，具体见：

[https://note.youdao.com/ynoteshare1/index.html?id=7e5ee24d3f684ccd1a0a4896a33e3404&type=note](https://note.youdao.com/ynoteshare1/index.html?id=7e5ee24d3f684ccd1a0a4896a33e3404&type=note)

# 二、移动端调试

### 相关网址：

1、浏览器自带：[https://www.yuque.com/docs/share/ed557e0f-3404-41d1-9c43-3bf1576bbea7#](https://www.yuque.com/docs/share/ed557e0f-3404-41d1-9c43-3bf1576bbea7#)

2、移动端调试-spy-debugger：[https://www.yuque.com/docs/share/6a41381b-019b-4abb-ab78-a33e5a69d5d3#](https://www.yuque.com/docs/share/6a41381b-019b-4abb-ab78-a33e5a69d5d3#)

我总结的使用charles进行抓包测试的配置：[http://note.youdao.com/noteshare?id=97c17878fe26afc7e9539b2748ae800f](http://note.youdao.com/noteshare?id=97c17878fe26afc7e9539b2748ae800f)

主要步骤：1、手机电脑连同一个局域网 2、手机配置代理 3、手机访问网页

### **说明**

调试方法很多，有必要根据具体的需求来理清一下，简单的事情简单处理，复杂的再使用工具，省时省力

### **需求--->方法**

[移动端调试](https://www.notion.so/065704e5a3b4471c98c63e6e7b365d6b)

### **具体方法说明（和上面表格一一对应）**

**1、手机访问本地**

如：[http://localhost:8077/survey/add/1/474532652507917140](http://localhost:8077/survey/add/1/474532652507917140)

替换localhost为电脑ip

可以使用草料生成二维码，手机扫码访问

如果vue项目失败了，可以设置package.json中的dev设置，后面加上 --host Ip地址，然后重启，再用手机访问

```jsx
*"scripts"*: {
 "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js --host 172.**.**.**",
}
```

**2、ios+mac+safari**

第一步：打开苹果手机 设置 > Safari浏览器 > 高级 > Web检查器

第二步： 打开 Mac 上的 Safari浏览器 > 偏好设置 > 高级 > 在菜单栏中显示“开发”菜单

第三步： 用数据线连接你的 Mac 电脑和苹果手机，并选择信任设备。然后在手机的 Safari浏览器 中打开你需要调试的页面，并在电脑上浏览器菜单栏 >开发>某某的iphone>safari-网页地址。

第四步：点击之后就会出现几乎和电脑一样的调试界面

如果想访问本地，结合1、手机访问本地，即可。

**3、Chrome浏览器 + Android 需要翻墙**

第一步：打开 Android 手机 设置 > 开发者选项 > USB调试。设置里面没有 开发者选项 的，自行[百度](https://link.juejin.im/?target=https%3A%2F%2Fwww.baidu.com%2F)。

第二步：通过数据线连接你的电脑和 Android 手机，会弹请求允许usb调试的弹窗，点击 确定。

第三步：给你的 Android 手机下载一个手机版的 Chrome浏览器 (各大应用商店自行搜索)，并在手机上的 Chrome浏览器 中打开你需要调试的页面。

第四步：打开你电脑上的 Chrome浏览器 ，按下图顺序，依次点开。我使用的是 小米5，你可以看到左侧有 MI 5 已连接的字样。划线的地方分别是手机上 Chrome浏览器 和自带浏览器 WebView 下打开的页面。

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6f4475ed-804f-432b-a532-235c1499c2a3/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6f4475ed-804f-432b-a532-235c1499c2a3/Untitled.png)

如果没有成功，而是出现了空白页或者“HTTP/1.1 404 Not Found”，（对于国内的程序猿来说，由于无法访问 [https://chrome-devtools-frontend.appspot.com](https://chrome-devtools-frontend.appspot.com/)，只能出现空白页面）

那就是翻墙没有成功。

**4、具体见链接**

[https://note.youdao.com/ynoteshare1/index.html?id=97c17878fe26afc7e9539b2748ae800f&type=note](https://note.youdao.com/ynoteshare1/index.html?id=97c17878fe26afc7e9539b2748ae800f&type=note)

这主要用来抓包，不如方法2灵活，也无法修改代码

**5、wrine**

介绍及使用：[https://segmentfault.com/a/1190000010017457](https://segmentfault.com/a/1190000010017457)

限制：不能对js进行调试

另：在手机端显示的调试面板（eruda:[https://segmentfault.com/a/1190000011759300](https://segmentfault.com/a/1190000011759300)）

**6、spy-debugger**

具体见分享笔记：[https://www.yuque.com/docs/share/6a41381b-019b-4abb-ab78-a33e5a69d5d3#](https://www.yuque.com/docs/share/6a41381b-019b-4abb-ab78-a33e5a69d5d3#)

功能丰富，但是需要很多的配置，如果只是样式调试，可以选择前面更简单的方法

**7、whistle**

很好用的一个工具，不用上网安装，npm直接装：推荐

使用分享笔记：张淦的：[https://note.youdao.com/ynoteshare1/index.html?id=70d4bae3562d199507cdad9af54c242f&type=note](https://note.youdao.com/ynoteshare1/index.html?id=70d4bae3562d199507cdad9af54c242f&type=note)

# 三、chrome **键盘快捷键和UI快捷键参考**

**键盘快捷方式：**

[Untitled](https://www.notion.so/b236d0f0c054447ca656809d7f1290ee)

**鼠标操作快捷方式及功能：**

1、elements面板中，右键点击元素，选择edit as html,可以对整个元素及内部元素进行编辑

2、element面板右上角 的：hov， 可以模拟元素的伪类状态， +> 可以添加新的样式选择器

**面板快捷方式：（只保留了一些常用的）**

[Untitled](https://www.notion.so/63c05516127644c58d27baaa39b2c760)