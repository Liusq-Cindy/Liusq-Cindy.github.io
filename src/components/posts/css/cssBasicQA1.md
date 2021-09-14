问题列表：

1. 重排和重绘
2. css实现绘制三角形
3. 行内元素、块元素
4. 盒子模型
5. css选择器
6. 块级格式化上下文BFC
7. flex布局
8. 伪类、伪元素
9. bem方法命名规范
10. @media 媒体查询
12. css的单位

## Q1：重排和重绘？

原文链接：[https://blog.csdn.net/qq_27674439/article/details/98957581](https://blog.csdn.net/qq_27674439/article/details/98957581)

### **浏览器的运行机制：布局**

1、构建DOM树（parse）

渲染引擎解析HTML文档，首先将标签转换成DOM树中的DOM node（包括js生成的标签）生成内容树（Content Tree/DOM Tree）；

2、构建渲染树（construct）

解析对应的CSS样式文件信息（包括js生成的样式和外部css文件），而这些文件信息以及HTML中可见的指令（如），构建渲染树（Rendering Tree/Frame Tree）；

3、布局渲染树（reflow/layout）

从根节点递归调用，计算每一个元素的大小、位置等，给出每个节点所应该在屏幕上出现的精确坐标；

4、绘制渲染树（paint/repaint）

遍历渲染树，使用UI后端层来绘制每个节点。

### **重排重绘**

重排（重构/回流/reflow）：布局大小改变

当渲染树中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建, 这就称为回流(reflow)。每个页面至少需要一次回流，就是在页面第一次加载的时候。

重绘（repaint或redraw）：外观属性改变

当盒子的位置、大小以及其他属性，例如颜色、字体大小等都确定下来之后，浏览器便把这些原色都按照各自的特性绘制一遍，将内容呈现在页面上。

**关系：**

在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程称为重绘。

所以，**重排必定会引发重绘，但重绘不一定会引发重排。**

### **优化方案：**

1. 浏览器的优化：

    浏览器会维护队列批处理，让多次的回流、重绘变成一次回流重绘。

2、我们的优化：

总结一句话就是：减少对渲染树的操作，合并多次DOM和样式的修改，并减少对style样式的请求。

（1）直接改变元素的className

（2）display：none；先设置元素为display：none；然后进行页面布局等操作；设置完成后将元素设置为display：block；这样的话就只引发两次重绘和重排；

（3）不要经常访问浏览器的flush队列属性；如果一定要访问，可以利用缓存。将访问的值存储起来，接下来使用就不会再引发回流；

（4）使用cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘；

（5）将需要多次重排的元素，position属性设为absolute或fixed，元素脱离了文档流，它的变化不会影响到其他元素；

（6）如果需要创建多个DOM节点，可以使用DocumentFragment创建完后一次性的加入document；

（7）尽量不要使用table布局。

## Q2：CSS怎么实现绘制三角形？

将盒子宽高设为0，利用盒子的边框及`transparent透明属性`，如：

```jsx
div {
	width: 0px;
	height: 0px;
  border-bottom: 100px solid red;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
}
```

## Q3:  行内元素、块元素

**常见行内元素：**

<span>、<a>、<label>、<input>、<textarea>、<select>、 <img>、 <strong>、<em>

**常见块元素：**

<div>、 <p>、<h1>、<form>、<ul> 、<li>

**默认的天生inline-block元素（拥有内在尺寸，可设置高宽，但不会自动换行），有哪些？**

答案：<input> 、<img> 、<button> 、<textarea>。

**特点：**

1. 行内元素和其他元素一行展示，不可设置宽高，内容撑开宽度。设置上下padding、margin无效，左右有效
2. 块元素独占一行，可设宽高和边距，没有设置宽度是，是父容器的100%。

**display可以修改元素属性，常用的`display`属性值有：**

1. `inline` 行内
2. `block` 块
3. `inline-block`  行内块
4. `none` 不展示，不占位

## Q4：盒子模型

盒模型的组成，由里向外 content,padding,border,margin.

1. 在标准的盒子模型中，width指content部分的宽度
2. 在IE盒子模型中，width表示**content+padding+border**这三个部分的宽度

**box-sizing的使用：**

box-sizing: content-box 是W3C盒子模型

box-sizing: border-box 是IE盒子模型

box-sizing的默认属性是content-box

## Q5：css选择器

1）标签选择器 p

2）ID 选择器 #id

3）类选择器 .class

4）通配符 *

5）派生选择器 以空格连接多个选择器，表示 ... 的后代，可以隔代

6）子元素选择器 以 > 连接多个选择器，表示 ... 的子元素，不能隔代

7）相邻选择器 以 + 连接多个选择器，表示紧跟在 ... 的兄弟元素

8）分组选择器 以逗号连接多个选择器，同时选中这些没有关联的选择器

9）属性选择器 以 [] 来根据元素的属性名和属性值来选中具有对应信息的元素，可以写多个 [] 来多属性匹配，也可以根据具体的属性值来匹配，还可以通过正则来进行更复杂的匹配；

[属性选择器详解](https://link.zhihu.com/?target=https%3A//www.w3school.com.cn/css/css_selector_attribute.asp)

10）伪类 以单冒号开头，可以找到不能用常规选择器获取到不存在 DOM 树中的信息，可以同时使用多个伪类

11）伪元素 以双冒号开头，可以像真正的元素那样去展现行为，但并不是真正的元素，只能同时使用一个伪元素。

[常用的伪类和伪元素](https://zhuanlan.zhihu.com/p/118174713)

### 1、简单选择器的使用

- 标签选择器（又名：元素选择器）  div{}
- 类选择器（Class selectors）.box1{}
- ID 选择器  #selectid {}
- 通用选择器（Universal selector）  * {}
- 组合器（Combinators）

    a,b  A（和/或）B的任意元素.

    a b  B是A的后代结点

    a>b b是a的直接子节点

    a+b ab是兄弟节点

### 2、权重

!important > 行内 1000 >内部>外部样式,  ID 100>class 10>元素 1

从左往右逐个等级比较，前一等级相等才往后比

1）内联样式

2）ID 选择器

3）类选择器、伪类、属性选择器

4）标签选择器、伪元素选择器

5）通配符、子元素选择器、相邻选择器、派生选择器、分组选择器

## Q6: 块级格式化上下文（BFC）

更多可见：

[什么是BFC？看这一篇就够了_Leon的博客-CSDN博客_bfc](https://blog.csdn.net/sinat_36422236/article/details/88763187)

[BFC是什么？BFC有什么用？看完全明白](https://www.cnblogs.com/qs-cnblogs/p/12349887.html)

### 什么是BFC？

> BFC全称是block formatting context，块级格式化上下文。其中FC 指的就是一个渲染区域，有一套既定的规则，比如定义子元素怎么定位，和其他元素的关系及相互作用。BFC它表示的是一个独立的块级布局环境，有一定的功能和特性，我们可以利用这些特性来完成一些布局或者解决一些样式问题。另外还会有IFC，行内格式化上下文，提到的相对少一些。

### **元素产生BFC的条件：根、浮动、overflow、display、position**

1、根元素（<html>）就是一个BFC区域

2、float属性不为none（脱离文档流）

3、overflow值非visible

4、display值为inline-block、table-cell、table-caption、flex、inline-flex

5、position值为absolute、fixed

### **BFC元素所具有的特性**

1、属于同一个BFC的两个相邻容器的上下margin会重叠（重点）

比如根元素下两个box外边距塌陷，那么可以给另一个容器再套一层，形成一个新的BFC

2、计算BFC高度时浮动元素也参于计算（重点）

用于清除浮动，给浮动元素的父元素添加overflow:hidden；这样父元素如果没有设置高度也不会让浮动元素超出父元素外了

3、BFC的区域不会与浮动容器发生重叠（重点）

应用于自适应两栏布局，给浮动元素的兄弟元素设置BFC，则这个元素就不会被遮挡。

4、BFC内的容器在垂直方向依次排列

5、元素的margin-left与其包含块的border-left相接触

6、BFC是独立容器，容器内部元素不会影响容器外部元素

**应用场景**

1、可以利用BFC解决两个相邻元素的上下margin重叠问题；

2、可以利用BFC解决高度塌陷问题、清除内部浮动；

3、可以利用BFC实现多栏布局（两栏、三栏、圣杯、双飞翼等）。

### IFC

> 在行内格式化上下文中，框(boxes)一个接一个地水平排列，起点是包含块的顶部。水平方向上的 margin，border 和 padding在框之间得到保留。框在垂直方向上可以以不同的方式对齐：它们的顶部或底部对齐，或根据其中文字的基线对齐。包含那些框的长方形区域，会形成一行，叫做行框。

## Q7： flex弹性布局

**基本概念**

一种新的响应式布局方案，用来为盒状模型提供最大的灵活性

任何一个容器都可以指定为Flex布局。

**容器属性**

1. **flex-direction  row | row-reverse | column | column-reverse;**

    决定主轴的方向（即项目的排列方向）

2. **flex-wrap nowrap | wrap | wrap-reverse（换行，第一行在下方）;**

    如果一条轴线排不下，如何换行。

3. **flex-flow**

    是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap

4. **justify-content   flex-start | flex-end | center | space-between | space-around;**

    定义了项目在主轴上的对齐方式。

5. **align-items flex-start | flex-end | center | baseline | stretch;**

    定义项目在交叉轴上如何对齐。顶部对齐|底部|中间|文字基线|拉长上下对齐

6. **align-content flex-start | flex-end | center | space-between | space-around | stretch;**

    定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

**项目属性**

1. `order` 定义项目的排列顺序。数值越小，排列越靠前，默认为0
2. `flex-grow`项目的放大比例，默认为0，即如果存在剩余空间，也不放大
3. `flex-shrink` 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
4. flex-basis 定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
5. flex flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选
6. align-self允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch

## Q8： 伪类，伪元素

用法：[https://www.cnblogs.com/lomon6/p/10585885.html](https://www.cnblogs.com/lomon6/p/10585885.html)

### 伪类

> 伪类存在的意义是为了通过选择器找到那些不存在与DOM树中的信息以及不能被常规CSS选择器获取到的信息。

> 伪类由一个冒号:开头，冒号后面是伪类的名称和包含在圆括号中的可选参数。

CSS 伪类用于向某些选择器添加特殊的效果。匹配处于确定状态的一个或多个元素，比如被鼠标指针悬停的元素，或当前被选中或未选中的复选框，或元素是 DOM 树中一父节点的第一个子节点。

**常见的伪类：**

:link 将样式添加到未被访问过的链接

:visited  将样式添加到访问过的链接

:hover 鼠标悬停

:focus 被选中

:active 被激活，用鼠标点击时，元素增加特效

`:first-child第一个子元素`

`:nth-child()  子类`

```jsx
tr:nth-child(2n+1):nth-child(5n) {
// p匹配能够被5整除的奇数行
}
```

### 伪元素

> 伪元素在DOM树中创建了一些抽象元素，这些抽象元素是不存在于文档语言里的（可以理解为html源码）。比如：documen接口不提供访问元素内容的第一个字或者第一行的机制，而伪元素可以使开发者可以提取到这些信息。并且，一些伪元素可以使开发者获取到不存在于源文档中的内容（比如常见的::before,::after）。

> 伪元素的由两个冒号::开头，然后是伪元素的名称。

匹配处于相关的确定位置的一个或多个元素，例如每个段落的第一个字，或者某个元素之前生成的内容。

**常见的伪元素：**

::first-letter 向文本的第一个字母添加特殊样式

::first-line 向文本的第一行添加特殊样式

::before 在元素之前添加内容

::after 在元素之后添加内容

### 特性及其区别

1. 伪类本质上是为了弥补常规CSS选择器的不足，以便获取到更多信息；
2. 伪元素本质上是创建了一个有内容的虚拟容器；
3. CSS3中伪类和伪元素的语法不同；
4. 可以同时使用多个伪类，而只能同时使用一个伪元素；

## Q9： bem方法命名规范

BEM（Block: 块, Element: 元素, Modifier: 修饰符）是一种基于组件的Web开发方法，基本思想是将用户界面划分为独立的块。这样即使拿到的UI设计稿在复杂，也可以轻松快速地进行拆分，只需要按照特定格式的命名约定，使得前端代码更易于阅读理解，并且是可扩展的，便于团队协作后期维护。

1、所有单词一律小写

2、单词之间用 - 分隔，命名尽量不要超过三个单词，避免命名过长

3、元素名称（Element）通过 __ 与块名称（Block）分隔

4、修饰符名称（Modifier）通过 -- 与块（Block）或元素（Element）名称分隔

## Q10： @media**媒体查询**

Media Queries能在不同的条件下使用不同的样式，使页面在不同在终端设备下达到不同的渲染效果，@media 媒体类型and （媒体特性）{你的样式}

如：当屏幕小于或等于480px时,页面中的广告区块（.ads）都将被隐藏。

**@media screen and (max-width:480px)**

```jsx
@media screen and (max-width:480px){

.ads {

display:none;

}}
```

参考：[https://www.runoob.com/cssref/css3-pr-mediaquery.html](https://www.runoob.com/cssref/css3-pr-mediaquery.html)

## Q12：CSS单位

总共列了 17 个单位：

% 百分比、cm 里面、mm 毫米、px 像素（计算机屏幕上的一个点）、in 英寸、pt 磅rgb(x,x,x) 

1. rgb(x%,x%,x%) #rrggbb（十六进制）
2. em：1em 等于当前字体尺寸（继承父元素的字体尺寸）
3. rem：r 为 root，1rem 等于根元素字体尺寸（继承 html 的字体尺寸）
4. vh：1vh 等于可视窗口高度的 1/100
5. vw: 1vw 等于可视窗口宽度的 1/100
6. vmin：可视窗口宽高更小的值的 1/100
7. vmax：可视窗口宽高更大的值的 1/100
8. ex：当前字体的一个 x-height，一般为当前字体的一个 em 的一半，因为一个 'x' 字母一般为字体大小的一半
9. ch：设置 width:40ch 表示这个宽度可以容纳 40 个特定字体的字符

## Q13：rem 布局的优缺点

相对于 em 的好处是：

不会发生逐渐增大或者减小字体尺寸的情况，因为`始终继承根元素的字体尺寸；`

rem 单位不仅可应用于字体大小，还可以用于设定宽高等其他大小，使页面可以适配不同屏幕尺寸。

rem 一般只用于移动端。