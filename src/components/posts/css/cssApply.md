问题列表：

1. 元素[垂直居中](https://www.notion.so/CSS-f9fe631616264c7da8f80ebad2f42b2a)
2. [画0.5px的细线](https://www.notion.so/CSS-f9fe631616264c7da8f80ebad2f42b2a)
3. [实现指定间距和粗细的边框](https://www.notion.so/CSS-f9fe631616264c7da8f80ebad2f42b2a)
4. [相邻的两个inline-block中间出现间隔的解决办法](https://www.notion.so/CSS-f9fe631616264c7da8f80ebad2f42b2a)
5. [css 中可以让文字在垂直和水平方向上重叠的两个属性是什么？](https://www.notion.so/CSS-f9fe631616264c7da8f80ebad2f42b2a)
6. [标签上文字如何加下划线、上划线、删除线](https://www.notion.so/CSS-f9fe631616264c7da8f80ebad2f42b2a)？
7. [标签上 title 属性与 alt 属性的区别是什么](https://www.notion.so/CSS-f9fe631616264c7da8f80ebad2f42b2a)

## Q1：元素垂直居中

参考：

[（史上最全）div居中的几种方法](https://juejin.cn/post/6844903821529841671)

### 一、div水平垂直居中—已知宽度

1. **felx布局实现，在父容器中添加**

      `display: flex;                  
      justify-content: center;            
      align-items: center;`

**2.  positon 绝对定位+margin子元素一半**

父元素设置为：position: relative;

子元素设置为：position: absolute;

（ `子元素设置： left:50%,top: 50%, margin: -50px 0 0 -50px;`）

距上50%，据左50%，然后减去元素自身宽度的一半距离就可以实现

**3. position+margin auto实现**

`（left，right，top，bottom为0，maigin：auto ）`

如果子元素没有设置宽高，则会自动铺满整个元素

**4. table-cell 布局实现**

table 实现垂直居中，子集元素可以是块元素，也可以不是块元素

父元素设置：

`display: table-cell;            
vertical-align: middle;`

### 二、div水平垂直居中—未知宽度

1. **position 绝对定位+transform转变**

    如果元素未知宽度，只需将上面例子中的 `margin: -50px 0 0 -50px;`

    替换为：**`transform: translate(-50%,-50%);`**

### 三、使内容（文字，图片）水平垂直居中

行元素 text-align ：center；

块元素 ：margin ：0 auto；

```jsx
text-align : center  给元素的父级加，可以使文本或者行级元素(例如：图片)水平居中
line-height : 值为元素的高度，可以使元素的文本内容垂直居中
margin: 0 auto 使用条件：父级元素宽度可有可无，子级元素必须是块元素，而且要有宽度（否则继承父级）
```

1. 对于单行文本，可设置：`text-align：center 加 line-height = 父元素高度`
2. 父元素设置：

        `display: table-cell;            
        text-align: center;`

3. 对于行内元素的垂直居中：`text-align：center，vertical-align: middle;`

## Q2：**怎么画一条0.5px的细线**

**1、采用meta viewport的方式：缩放**

```jsx
<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"/>
```

这样子就能缩放到原来的0.5倍，如果是1px那么就会变成0.5px

要记得viewport只针对于移动端，只在移动端上才能看到效果

**2、采用transform: scale()的方式**

```jsx
transform: scale(0.5,0.5);
```

## Q3: **Border:dashed无法修改点边框间距，如何实现指定间距和粗细的点边框？**

自定义border-dashed实现原理：利用**linear-gradient**属性，自定义背景图片，定义其宽窄及重复，如：

重点1：background-repeat: repeat-x; 背景x轴重复

重点2：background-image: linear-gradient属性:(方向，颜色 0% ，渐变色 40%，透明色 40%)

```jsx
.dash {
		width: 100%;
		height: 1px;
		background-image: linear-gradient(
		to right,
		**blue 0%,
		blue 50%,
		transparent 50%**
		);
		**background-size: 8px 1px;
		background-repeat: repeat-x;**
}
```

## Q4:相邻的两个inline-block节点为什么会出现间隔，该如何解决

是`换行符`引起的间隔问题，间隙为 4px。

消除间隙的方法：

1）去掉换行符；

2）对父元素添加 `font-size:0`，将字体大小设置为 0，换行符也会为 0px，从而消除间隙，再为 inline-block 元素设置我们需要的字体大小；

3）将 inline-block 的 `margin-right/left 设置为 -4px`；

4）将父元素的 `letter-spacing 或 word-spacing 设置为 -4px`，这两个属性会增加或减少字符间隔。word-spacing 对中文无效

inline-block 还有两个问题：即不同高度的两个 inline-block **顶部不对齐**，以及 inline-block **底部多出几像素（多出空白）**。解决方法是为 inline-block 元素设置 `vertical-align:top`。[设置元素的垂直对齐方式](https://link.zhihu.com/?target=https%3A//www.w3school.com.cn/css/pr_pos_vertical-align.asp)

答案:可以用于消除inline-block元素间的换行符空格间隙问题。

## Q6：**文字如何加下划线，上划线，删除线**

text-decoration : `underline | overline | line-through`

## Q7：**标签上 title 属性与 alt 属性的区别是什么？**

title ：鼠标放入时提示的文字，

alt : 图片路径出错时，提示文字

## Q5: **css 中可以让文字在垂直和水平方向上重叠的两个属性是什么？**

**那么问题来了，关于letter-spacing的妙用知道有哪些么？**

水平方向：`letter-spacing` (letter-spacing 属性增加或减少字符间的空白)

垂直方向：line-height