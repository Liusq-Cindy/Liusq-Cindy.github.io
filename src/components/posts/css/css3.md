参考文章：

[个人总结（css3新特性）](https://segmentfault.com/a/1190000010780991)

[CSS3 教程](https://www.runoob.com/css3/css3-tutorial.html)

主要知识点：

1. [transition过渡](https://www.notion.so/CSS3-f2ec46e70ded45c485db4ddc919f141b)
2. [transform转换](https://www.notion.so/CSS3-f2ec46e70ded45c485db4ddc919f141b)-
3. [animation动画](https://www.notion.so/CSS3-f2ec46e70ded45c485db4ddc919f141b)
4. [新选择器](https://www.notion.so/CSS3-f2ec46e70ded45c485db4ddc919f141b) 如：select
5. [box-shadow阴影](https://www.notion.so/CSS3-f2ec46e70ded45c485db4ddc919f141b)
6. [border图片、圆角](https://www.notion.so/CSS3-f2ec46e70ded45c485db4ddc919f141b)
7. [background特性](https://www.notion.so/CSS3-f2ec46e70ded45c485db4ddc919f141b)
8. [文字（换行、省略）](https://www.notion.so/CSS3-f2ec46e70ded45c485db4ddc919f141b)

# 一、transition过渡

`CSS3 过渡是元素从一种样式逐渐改变为另一种的效果。`

**transition： CSS属性(或者all)，花费时间，效果曲线(默认ease)，延迟时间(默认0)** 其中属性和花费时间是必写的。

```jsx
// 示例1、 添加鼠标移入效果
div {
	width:100px;
	transition:width 1s linear 2s
	-webkit-transition:width 1s linear 2s;/* Safari */
}
div:hover{
	width:200px;
}

// 示例2、点击元素时，元素旋转180度，如三角形缩放图标
i {
    display: block;
    width: 0;
    height: 0;
    border-width: 6px 0 6px 7px;
    border-style: solid;
    border-color: transparent transparent transparent white; // 绘制三角形
    transition: transform 0.3s ease-in-out; // transform也是css属性哦！
    transform: rotate(0deg);
  }
  i:active {
    transform: rotate(180deg);
  }
```

# 二、transform转换

### 2d转换：可以对元素进行移动、缩放、转动、拉长或拉伸

```jsx
// 常见2d转化方法
matrix(n,n,n,n,n,n)	定义 2D 转换，使用六个值的矩阵。
translate(x,y)	定义 2D 转换，沿着 X 和 Y 轴移动元素。
translateX(n)	定义 2D 转换，沿着 X 轴移动元素。
translateY(n)	定义 2D 转换，沿着 Y 轴移动元素。
scale(x,y)	定义 2D 缩放转换，改变元素的宽度和高度。
scaleX(n)	定义 2D 缩放转换，改变元素的宽度。
scaleY(n)	定义 2D 缩放转换，改变元素的高度。
rotate(angle)	定义 2D 旋转，在参数中规定角度。
skew(x-angle,y-angle)	定义 2D 倾斜转换，沿着 X 和 Y 轴。
skewX(angle)	定义 2D 倾斜转换，沿着 X 轴。
skewY(angle)	定义 2D 倾斜转换，沿着 Y 轴。
// 例子 顺时针旋转30度
div{
	transform: rotate(30deg);
}
```

### **3D 转换：对元素进行旋转、格式化**

**常见方法：**

```jsx
// 常见3d转化方法，将元素想象成一个立体盒子
matrix3d(n,n,n,n,n,n,
n,n,n,n,n,n,n,n,n,n)	定义 3D 转换，使用 16 个值的 4x4 矩阵。
translate3d(x,y,z)	定义 3D 转化。
translateX(x)	定义 3D 转化，仅使用用于 X 轴的值。
translateY(y)	定义 3D 转化，仅使用用于 Y 轴的值。
translateZ(z)	定义 3D 转化，仅使用用于 Z 轴的值。
scale3d(x,y,z)	定义 3D 缩放转换。
scaleX(x)	定义 3D 缩放转换，通过给定一个 X 轴的值。
scaleY(y)	定义 3D 缩放转换，通过给定一个 Y 轴的值。
scaleZ(z)	定义 3D 缩放转换，通过给定一个 Z 轴的值。
rotate3d(x,y,z,angle)	定义 3D 旋转。
rotateX(angle)	定义沿 X 轴的 3D 旋转。
rotateY(angle)	定义沿 Y 轴的 3D 旋转。
rotateZ(angle)	定义沿 Z 轴的 3D 旋转。
perspective(n)	定义 3D 转换元素的透视视图。
// 例子 对Y轴旋转
div
{
    transform: rotateY(130deg);
    -webkit-transform: rotateY(130deg); /* Safari 与 Chrome */
}
```

# 三、animation动画

更多属性见官网：[https://www.w3school.com.cn/cssref/pr_animation.asp](https://www.w3school.com.cn/cssref/pr_animation.asp)

**语法：**

    animation：动画名称，一个周期花费时间，运动曲线（默认ease），动画延迟（默认0），播放次数（默认1），是否反向播放动画（默认normal正常，alternate轮流反向播放），是否暂停动画（默认running， paused是暂停）

    名称定义：@keyframes 动画名称{}

**重要属性：animation-fill-mode:** none |forwards |backwards |both
    /*none：不改变默认行为。
    forwards ：当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
    backwards：在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
    both：向前和向后填充模式都被应用。  */

**示例：**

```jsx
// 音乐震动条部分代码
@keyframes waves { // @keyframes创建动画
      10% { // 也可以用from{} to {}
        height: 20%;
      }
      20% {
        height: 60%;
      }
      50% {
        height: 100%;
      }
      100% {
        height: 50%;
      }
    }
span {
    animation: waves 0.8s linear 0s infinite alternate; 
  }
```

# 四、新的选择器

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3462578e-149b-4139-9412-cbbc4d80f530/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3462578e-149b-4139-9412-cbbc4d80f530/Untitled.png)

# 五、box-shadow阴影

box-shadow: 水平阴影的位置 垂直阴影的位置 模糊距离 阴影的大小 阴影的颜色 阴影开始方向（默认是从里往外，设置inset就是从外往里）;

```jsx
{
    width:300px;
    height:100px;
    background:#09f;
    box-shadow: 10px 10px 5px #888888;
}
```

# 六、border边框图片、圆角

**border-image:**  图片url 图像边界向内偏移 图像边界的宽度(默认为边框的宽度) 用于指定在边框外部绘制偏移的量（默认0） 铺满方式--重复（repeat）、拉伸（stretch）或铺满（round）（默认：拉伸（stretch））;

```jsx
.demo {
    border: 15px solid transparent;
    padding: 15px;   
    border-image: url(border.png);
    border-image-slice: 30;
    border-image-repeat: round;
    border-image-outset: 0;
}
```

**border-radius圆角**

```jsx
border-radius: n1,n2,n3,n4;
border-radius: n1,n2,n3,n4/n1,n2,n3,n4;
/*n1-n4四个值的顺序是：左上角，右上角，右下角，左下角。*/
```

# 七、background特性

**background-position:0px 0px | center; 背景图起始位置**

**background-origin：border-box | padding-box | content-box; 决定position相对的位置**

**background-clip：border-box | padding-box | content-box; 背景绘制区域，默认从border开始**

**background-size： contain | cover | auto 100% 背景图大小，包含所有内容 | 覆盖背景 | 自动**

**background-repeat: repeat-x 背景图重复，x轴重复**

```jsx
div
{
    border:1px dashed black;
    padding:35px;
    background-size: contain;
    background:url('test.jpg') no-repeat left,url(logo.png) no-repeat right;
		// 两张背景图，一左一右
}
```

# 八、文字（换行、省略）

### **换行**

语法：`word-break: normal|break-all|keep-all;`

normal 浏览器默认的换行规则

keep-all 只能在半角空格或连字符-处换行

break-all 允许在单词内换行

语法：`word-wrap: normal|break-word;`

break-word允许在长单词或url内部换行

### 超出省略号

    需要三行代码配合 `overflow:hidden;  white-space:nowrap; text-overflow:ellipsis;`

```jsx
{
    width:200px; 
    border:1px solid #000000;
    overflow:hidden;
    white-space:nowrap; 
    text-overflow:ellipsis;
}
```

### **多行超出省略号**

js模拟，css3暂时只支持webkit浏览器！

```jsx
div
{
    width:400px;
    margin:0 auto;
    overflow : hidden;
    border:1px solid #ccc;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
```