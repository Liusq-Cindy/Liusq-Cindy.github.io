参考文章列表：

[CSS 经典面试题+答案](https://zhuanlan.zhihu.com/p/122987171)

1. [css预编译less、sass、stylus](https://www.notion.so/CSS-2-d3b33a6e27d641b381915685b0550184)
2. [css的性能优化](https://www.notion.so/CSS-2-d3b33a6e27d641b381915685b0550184)
3. [层叠上下文](https://www.notion.so/CSS-2-d3b33a6e27d641b381915685b0550184) 💡
4. [css属性的继承性](https://www.notion.so/CSS-2-d3b33a6e27d641b381915685b0550184)
5. [为什么要初始化css样式](https://www.notion.so/CSS-2-d3b33a6e27d641b381915685b0550184)
6. [display:none和visibility:hidden、opacity: 0的区别](https://www.notion.so/CSS-2-d3b33a6e27d641b381915685b0550184)
7. [清除浮动](https://www.notion.so/CSS-2-d3b33a6e27d641b381915685b0550184)
8. [图片格式：jpg,png,gif,webp](https://www.notion.so/CSS-2-d3b33a6e27d641b381915685b0550184)

## Q1: css的预编译器：less、sass、stylus

CSS预处理器用一种专门的编程语言，进行Web页面样式设计，然后再编译成正常的CSS文件，以供项目使用。可以让你的CSS更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。

### 预处理器基本都包含这些功能：

 运算、变量、优化书写方式、嵌套、继承、混入、函数等等，大大优化了我们的编写。

[三种css预处理器的对比](https://www.notion.so/a66bcb84e6de46c092a4d202e0f7ddc8)

### 使用推荐：

三者差别不大，基本都可以满足日常的开发需求，相对而言，Less 适合帮助团队更快地上手预处理代码的开发，而 Sass 和 Stylus 的差异更在于口味。

## Q2: css的性能优化

[CSS性能优化【学习总结于记录】_十二的博客-CSDN博客](https://blog.csdn.net/weixin_43883485/article/details/103504171)

```jsx
1. 合并css文件，如果页面加载10个css文件,每个文件1k，那么也要比只加载一个100k的css文件慢。
2. 减少css嵌套，最好不要嵌套三层以上。
3. 不要在ID选择器前面进行嵌套，ID本来就是唯一的而且权限值大，嵌套完全是浪费性能。
4. 建立公共样式类，把相同样式提取出来作为公共类使用。
5. 减少通配符*或者类似[hidden="true"]这类选择器的使用，挨个查找所有...这性能能好吗？
6. 巧妙运用css的继承机制，如果父节点定义了，子节点就无需定义。
7. 拆分出公共css文件，对于比较大的项目可以将大部分页面的公共结构样式提取出来放到单独css文件里，这样一次下载 后就放到缓存里，当然这种做法会增加请求，具体做法应以实际情况而定。
8. 不用css表达式，表达式只是让你的代码显得更加酷炫，但是对性能的浪费可能是超乎你想象的。
9. 少用css rest，可能会觉得重置样式是规范，但是其实其中有很多操作是不必要不友好的，有需求有兴趣，可以选择normolize.css。
10. cssSprite，合成所有icon图片，用宽高加上background-position的背景图方式显现icon图，这样很实用，减少了http请求。
11. 善后工作，css压缩(在线压缩工具 YUI Compressor)
12. GZIP压缩，是一种流行的文件压缩算法。
```

## Q3：层叠上下文

层叠水平指的是同一个层叠上下文中元素在 z 轴上的显示顺序，任何元素都有层叠水平

### 层叠顺序（对层叠水平制定的明确规则）：记住下面这张图

`**背景边框 < 负数z-index < 块 < 浮动 < 行内、行内块 < z-index:auto < z-index:正数**`

![https://pic2.zhimg.com/80/v2-14ce51c1e5ba41298716f088a867d11d_1440w.jpg](https://pic2.zhimg.com/80/v2-14ce51c1e5ba41298716f088a867d11d_1440w.jpg)

### 注意两点：

1）这是同一个层叠上下文中元素的层叠顺序的比较，其中 inline/inline-block 属于网页内容部分，层叠顺序比网页布局更高；

2）同一个层叠上下文中，其他元素会显示在包含层叠上下文元素的 background/border 之上。

### z-index 在 CSS3 中生效范围：

1、定位元素，z-index 值不为 auto；

2、z-index 值为数字（不为 auto），父元素为 flex 项；

3、元素 opacity 不为 1；

4、元素 transform 不为 none;

5、filter 不为 none；滤镜

6、will-change 属性为上面任意一个。

意味着只要 z-index 在以上的使用范围中，就会为使用它的元素生成一个层叠上下文，这也是定位元素在 z 轴上显示的优先级高的原因，而不在使用范围内的话，设置 z-index 属性无效。

### 两个黄金准则：

谁大谁上：在同一个层叠上下文领域，层叠水平高的覆盖低的；

后来居上：当元素的层叠水平相同时，在 DOM 流中处于后面的元素会覆盖前面的元素。

理解以上内容，就可以理解下面的代码：

```jsx
<div style="position:relative; z-index:0;">
    <img src="mm1.jpg" style="position:absolute; z-index:2;">    
</div>
<div style="position:relative; z-index:0;">
    <img src="mm2.jpg" style="position:relative; z-index:1;">    
</div>
// 结果为 mm2.jpg 会覆盖 mm1.jpg。
如果将两者的 z-index 值设置为 auto 的话，结果为 mm1.jpg 会覆盖 mm2.jpg。
出现差别的原因是最外层的 div 是普通元素，所以遵循第一条黄金法则，
即在 img 元素中明确标示 z-index 更大的在上面；
而将 z-index 值设置为数字的话，最外层 div 就是一个层叠上下文元素，
且 z-index 值也都为 0，表示层叠水平相同，因此它们遵循后来居上的黄金法则。
```

**与块元素不同的是行内块元素的背景层级比文字高，会盖住前面的文字。**

## Q4： CSS属性的继承性

**继承性：**

可继承的样式：`font-size, font-family, color，ul，li，dl，dt，dd`；

不可继承的样式：`border, padding, margin, width, height`

## Q5：为什么要初始化 CSS 样式

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。

## Q6：**display:none 与 visibility:hidden，opacity: 0: 的区别是什么？**

**display : none** 隐藏对应的元素，在文档布局中不再分配空间（回流+重绘）

**visibility:hideen** 隐藏对应的元素，在文档布局中仍保留原来的空间（重绘），`不可以点击`

使用 CSS display:none 属性后，HTML 元素（对象）的宽度、高度等各种属性值都将“丢失”;而使用 visibility:hidden 属性后，HTML元素（对象）仅仅是在视觉上看不见（完全透明），而它所占据的空间位置仍然存在。

**opacity: 0:** 隐藏对应的元素，在文档布局中仍保留原来的空间（重绘），`可以点击`

## Q7：清除浮动

参考文章：[https://blog.csdn.net/weixin_33691817/article/details/91392503](https://blog.csdn.net/weixin_33691817/article/details/91392503)

**出现浮动的原因：**

浮动元素碰到包含它的边框或者浮动元素的边框停留。在CSS规范中，浮动定位不属于正常的页面流，而是独立定位的，所以文档流的块框表现得就像浮动框不存在一样。浮动元素会漂浮在文档流的块框上。

**关于css的定位机制**：普通流，浮动，绝对定位（position：fixed是position：absolute的一个子类）。浮动的框可以左右移动，直到它的外边缘遇到包含框或者另一个浮动框的边缘，所以才说浮动定位不属于正常的页面流。文档中的普通流就会表现得和浮动框不存在一样，**当浮动框高度超出包含框的时候，就会出现包含框不会自动伸缩高度类笔盒浮动元**素。所以，只含有浮动元素的父容器在显示时不需要考虑子元素的位置，就造成显示父容器像空容器一样。

**浮动带来的问题：**

1. 父元素的高度无法被撑开，影响与父元素同级的元素
2. 与浮动元素同级的非浮动元素（内联元素）会跟随其后
3. 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构。

**清除浮动的方式**：

1. 父级div定义height
2. 最后一个浮动元素后加空 div 标签 并添加样式 clear:both。（理论上能清除任何标签，增加无意义的标签）
3. 包含浮动元素的父标签添加样式 overflow 为 hidden 或 auto。
4. 父级 div 定义 zoom（空标签元素清除浮动而不得不增加无意义代码的弊端，使用zoom:1用于兼容IE）
5. 用after伪元素清除浮动（用于非IE浏览器）最推荐

```jsx
.clearfix:after {
    content: "\0020";display: block;height: 0;clear: both;
}
.clearfix {
    zoom: 1;
}
```

## Q8、图片格式**png、jpg、gif、webp**

1. png是便携式网络图片（Portable Network Graphics）是一种`无损数据压缩位图文件格式`.优点是：压缩比高，色彩好。 大多数地方都可以用。
2. jpg是一种针对相片使用的一种失真压缩方法，是一种`破坏性的压缩`，在色调及颜色平滑变化做的不错。在www上，被用来储存和传输照片的格式。
3. gif是一种位图文件格式，以8位色重现真色彩的图像。可以实现动画效果.
4. webp格式是谷歌在2010年推出的图片格式，压缩率只有jpg的2/3，大小比png小了45%。缺点是压缩的时间更久了，兼容性不好，目前谷歌和opera支持。

问题列表：

[https://blog.csdn.net/weixin_33691817/article/details/91392503](https://blog.csdn.net/weixin_33691817/article/details/91392503)