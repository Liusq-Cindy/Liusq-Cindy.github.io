### 前言
作为一个前端工程师，令我最头疼的两件事，一个是逻辑混乱且没有注释的js代码，还有一个就是污染严重、命名奇葩的css样式了。

在项目开发中，扎实的基础和高超的技术水平固然重要，但是良好的编码风格也是不可或缺的一部分。开发一个业务或许只需要几天或者几个月的的时间，但项目在线上运行和迭代可能有几年甚至十几年。高质量的代码不仅能提升自己的编码风格、方便错误检查，对后续迭代优化的作用是非常显著的。

如果不想让几个月后的自己看不懂自己的代码，或者不想让后续开发的小伙伴对着你的git提交记录捶胸顿足的话，请尽可能的提升自己的代码质量吧！

**以下为文章目录结构：**
- [css篇](#CSS篇)
    - [常用的样式命名英文缩写](#常用的样式命名英文缩写)
    - [定义一套合理的规范](#定义一套合理的规范)
    - [css编译器](#css编译器)
    - [你不知道的css编写小窍门](#你不知道的css编写小窍门)
- [JS篇](#JS篇)
    - [注释注释写注释](#注释注释写注释)
    - [不要写魔鬼数字](#不要写魔鬼数字)
    - [嵌套不要过深](#嵌套不要过深)
    - [合理抽取组件及函数](#合理抽取组件及函数)
    - [注意边界条件](#注意边界条件)
---
# CSS篇
> 关于CSS，基础很重要，不论是css标签权重还是布局原理，都需要有所了解。这里建议去官网学习CSS及CSS3的各种基础属性，并推荐一本讲述css原理的书籍----张鑫旭《CSS世界》。<br>
对于写出优雅的css，我有以下几点总结：
1. 擅用英文缩写
2. 合理的css编写规范：bem命名、属性顺序
3. 不要滥用id选择器和 !important
4. 按需使用less等预编译器
5. 合理合并与拆分

##### 详细的描述见下文：

## 常用的样式命名英文缩写
> 一个项目通常有很多个小伙伴开发过，虽然现在基本上没什么前端开发人员用`class="zuobian"` 这种中文命名了，但是当看到错误的英文Class，如`class="head-titel"`(title) 和超长的命名，如`class="page-Special-populationl--background"`,也是很让人抓马的

对于class命名，我们需要知道一些基础的规范和缩写。其他需要根据业务代码命名的情况，用即再查即可，对于非约定俗成的缩写，我们遵循的原则是：尽量不缩写，保证可读性。

以下罗列出最最常用的一些缩写


语义 | 缩写 | 全称 | | 语义 | 缩写 | 全称
---|---|---|---|---|---|---
头部 | hd | head| | 主体 | main | main
侧边栏 | sidebar | sidebar| | 底部 |ft | foot
导航 | nav | navigation| | 选项 | tab | tab
广告 | ad | advertise| | 激活 | active | active
显示 | show | show| | 隐藏 | hide | hidden
禁用 | disabled | disabled| | 扩展 | extend | extend

以下为常用的一些英文单词,通常会结合使用，如侧边栏的头部名称: `sidebar--title`

语义 | 编写 | | 语义 | 编写
---|---|---|---|---
标题 | title | |列表 | list
内容 | content | |标识 | logo
搜索 | search | |提示 | tips	tips
版权 | copyright | |输入 | input
结果 | result | |下载 | download

更多关于css命名相关的缩写可见：[CSS规范命名](https://www.jianshu.com/p/8740c35115c1)

## 定义一套合理的规范
> 通常一些中大型的公司，或者成熟的前端团队，会对css代码编写有一套自己团队的简单规范。规范不必过于苛刻，目的在于提升开发效率、降低维护成本。
<br>在业界之前比较流行的css编写规范是BEM规范【块（block）、元素（element）、修饰符（modifier）】，实际也可根据团队情况制定推动更符合业务场景需要的自己的规范。

>例文：这里推荐几篇篇详述CSS命名规范的优质文章：
>1. [CSS-BEM命名规范](https://juejin.im/post/6844903672162304013)
>2. [18种推荐的CSS书写规范](https://segmentfault.com/a/1190000019268306)
>3. [css样式简写](https://blog.csdn.net/yethyeth/article/details/1548329)

##### 以下以BEM规范为主，加上了一些自己对css规范的理解：
### 1、bem命名简述
示例：
```javascript
<div class="health-account">
    <div class="health-account__head">
    </div>
    <div class="health-account__body">
        <div class="tag"></div>
        <button class="health-account__button--primary"></button>
        <button class="health-account__button--success"></button>
    </div>
</div>

```
总的来说有以下三点核心：
1. -中划线 ：仅作为连字符，表示某个块或者某个子元素的多单词之间的连接记号，如health-account。
2. __ 双下划线：用来连接块和块的子元素
3. -- 双中划线：用来描述一个块或者块的子元素的一种状态
#### Tips:
- 并不是所有地方都应该使用BEM命名方式，如果只是公共的单独样式，就没有使用BEM的意义。BEM的初衷是为了明确模块的关联关系，提升语义化，同时也避免css嵌套过深。更多的细节这里不再赘述，可查阅相关文章。
- 避免过长的样式名称定义，如 .block__el1__el2——selected
- BEM命名方式势必会比普通定义的命名要长，势必会降低代码整体的可读性，尤其在less这样的预编译工具（后面会介绍）出现后。但这种命名规范在局部关联关系强的模块中还是很有必要的，对样式丰富的组件，这种命名方式也可以在CSS代码中避开过深的层级嵌套，提升性能，因此BEM规范可在项目中灵活使用。

### 2、合理的属性书写顺序
> 不管是直接书写css，还是使用预编译的工具，都不可避免的要书写css属性。对简单的样式来说，属性的简写和书写顺序未必显得重要，但在复杂页面上，合理的顺序对于快速定位样式问题是非常有帮助的。

建议按照布局定位、自身属性、文本属性、其他属性的顺序来书写，而不是想到什么写什么：
1. **布局定位属性**：position  display  float  left  top  right  bottom   overflow  clear   z-index
2. **自身属性**：width  height  padding  border  margin   background
3. **文字样式** font-family   font-size   font-style   font-weight   font-varient   color   
4. **文本属性**：text-align   vertical-align   text-wrap   text-transform   text-indent    text-decoration   letter-spacing    word-spacing    white-space   text-overflow
5. **其他属性（CSS3）**：content   box-shadow   border-radius  transform background:linear-gradient

对比下面两种书写，后者明显可阅读性更强
```javascript
.card {
    color: #1289fb;
    font-family: PingFangSC, PingFangSC-Medium;
    height: 20px;
    text-align: right;
    margin-left: 6px;
    display: flex;
    weight: 500px;
    border-radius: 2px;
    line-height: 20px;
    font-size: 16px;
    font-weight: 500;
}
```
按照顺序书写：
```javascript
.card {
    display: flex;
    margin-left: 6px;
    height: 20px;
    weight: 500px;
    border-radius: 2px;
    text-align: right;
    line-height: 20px;
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    color: #1289fb;
}
```

这样书写除了提升代码可阅读性、快速定位样式问题外，最大的作用是减少浏览器reflow（回流），提升浏览器渲染dom的性能。

举例来说，如果将布局定位放在最后面，当浏览器在对render树解析布局的时候，遍历到position的时发现该元素是绝对定位元素，需要脱离文档流，而之前却是按照普通元素进行解析的，则不得不重新渲染，解除该元素在文档中所占位置，然而由于该元素的占位发生变化，其他元素也可能会受到它回流的影响而重新排位。（延伸：[浏览器渲染主流程](https://mp.weixin.qq.com/s?__biz=MzA3NTIwOTYxMw==&mid=2447522046&idx=1&sn=754ba20d30a93bb754013d59d001ef44&chksm=8b62961cbc151f0abb932aa218e00ddc512e0f9179e3e83b6f4af87ccd8dd6e679fa75b9aba8&mpshare=1&scene=23&srcid=0120TWyG73R2Ur6y1e2McZWc#rd)）。


### 3、其他注意事项

#### 1、不要滥用id选择器和!important
id选择器一定要慎重使用，最好用class选择器，一般项目有很多的后续迭代，很难保证这个模块是唯一的，一般用到id选择器，都是留给js使用的

此外，在开发时，有时由于css样式权重不够被覆盖，或者UI框架默认样式影响，总会有开发小伙伴为了省事儿，直接一个`!important`解决,一时important一时爽，如果important泛滥，后续就很难维护；建议从权重、样式覆盖等多个方面去发现和解决问题，不要一把important梭哈！

#### 2、scoped
> scoped是一个很好的避免样式污染的方式，但使用了scoped后，对于一些全局样式、父子组件样式的穿透，也需要特别注意。

通常在vue项目中，一个.vue文件来表示一个组件，为了防止各个组件的css样式相互污染，通常做法是在style标签中加入一个scoped属性：`<style type="text/css" scoped>`，它的原理是给HTML的DOM节点加一个不重复属性，如【data-v-469af010】标志唯一性，且在组件内每个样式选择器后添加一个与【data-v-469af010】相同的字段，实现类似于“作用域”的作用,达到组件样式的模块化。

在添加了scoped属性的组件中，如果引用了第三方组件，需要局部修改子组件的样式，就需要样式穿透，不同编译器可能有所区别
stylus的样式穿透 使用 `>>>`，sass和less的样式穿透 使用 `/deep/`

**如果不用scoped方法，则建议在每个组件的最外层定义一个唯一的class标签，其他样式包含在这个标签内，避免样式污染**

## css预处理器
> CSS预处理是使用变量、函数及简单的逻辑实现更加简洁、更易于代码维护的兼容浏览器的页面样式文件,生成的目标文件都是css文件。在前端界，有三大 CSS 预处理器，分别是 SASS(SCSS), Less, Stylus。

### 1、基础使用 less sass stylus
使用css预处理器能够让我们的代码更简洁易写，此外还有一些变量、函数、计算等功能，引入预处理器很方便.
具体使用及文档可见[预处理器详细介绍及官网](https://blog.csdn.net/fxss5201/article/details/97788645)

### 2、对比与选择
三种预处理器的具体对比可见[对比一览表](https://blog.csdn.net/qq_32429257/article/details/88288605?utm_medium=distribute.pc_relevant.none-task-blog-title-5&spm=1001.2101.3001.4242)、[深度比较](https://www.jianshu.com/p/b2174b800e40)，这里只简单介绍一下，总的来说，都可以允许嵌套语法、支持变量、支持运算，满足基本的开发需求，可自行选择；目前用的更多的是less及stylus

预处理器 |  sass | less | stylus
---|---|---|---
变量 |$var-name: var-value; |@normal-with: 10px;|var-name = var-value;
引入外部文件 |@import |@import |@import
书写格式 |需要{}及； |需要{}及；|需要{}及；


### 3、常用高级用法(以less为例)
#### mixin混合
```javascript
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

.post a {
  color: red;
  .bordered();
}

```
编译后，会将对应的样式引入
```javascript
.post a {
  color: red;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

## css的合并与拆分
### 1、css样式优先级及权重
css样式属性，按优先级展示，提到优先级就离不开权重。这是css基础，这里不再赘述，详细可见[一篇详细分析css优先级的博客](https://www.cnblogs.com/cnblogs-jcy/p/8574177.html)

**简述**
1. 内联1000 > id 100 > class 10 > 标签 1
2. 先从高等级进行比较，高等级相同时，再比较低等级的，以此类推；
3. 完全相同的话，就采用后者优先原则（也就是样式覆盖）；
4. !important无条件绝对优先（比内联样式还要优先）

### 2、什么时候合并，什么时候拆分？
**关于css样式的合并与拆分，我通常的方案是**
1. 当有大量相同样式属性时，建议合并，减少代码量
2. 如果使用css预处理器，酌情使用mixin混合的方式，引入相同的样式
3. 尽量避免冗余的css样式书写，多关注属性的继承

----
# JS篇
> 说到优雅的JS的，这里有一篇来自蚂蚁金服的小伙伴写的文章分享给大家[我是如何将业务代码写优雅的](https://zhuanlan.zhihu.com/p/64354422)，以下为我个人总结的在JS编程中需要特别注意的几点

1. 注释注释写注释
2. 不要写魔鬼数字
3. 嵌套不要过深
4. 合理抽取组件及函数
5. 注意边界条件

**详细的描述如下**
## 注释注释写注释
重要性就不多说了，为了自己，为了他人，为了世界和平，写点注释吧！

## 不要写魔鬼数字
在项目中可能经常会有这样的代码：
```javascript
if (sourceId === 123) {
    ....
} else if (sourceId === 345) {
    ....
}
```
诸如此类没有注释、难以理解其代表意义的常量（0、1这种）都称之为魔鬼数字。

也许当时开发你知道这些数字的含义，但当过几个月之后，或者开发人员流动以后，这些东西就会很麻烦。

通常的解决办法是：**用一眼就能看懂的常量定义魔鬼数字**，如：
```javascript
const BEIJING = 123;
const SHANGHAI = 345
if (sourceId === BEIJING) {
    ....
} else if (sourceId === SHANGHAI) {
    ....
}
```
这样就很明确知道这两串数字代表的含义，注意这里的常量命名需要便于理解，否则还不如数字可阅读性高

## 嵌套不要过深
不仅css有样式层级的嵌套，js也有嵌套，这里的嵌套指的是js内的函数调用，不要盲目嵌套导致代码可阅读性差，对于可分步骤的逻辑，完全可以借助async及promise的力量。

如果见到一个函数调一个函数的方法，可能看到后面，都忘记了自己要看什么东西了。
```javascript
pro1(params){
    ...
    pro3(data);
}
pro2(liu) {
    ...
    pro4(lili)
}
pro3(data) {
    ...
    pro2(liu)
}
```
建议按步骤来酌情划分逻辑,如下代码可阅读性更强
```javascript
async group(data) {
    liu = await his(data);
    lili = await his2(liu);
}
```
## 合理抽取组件及函数
在实际使用中，抽取一些公共组件及通用业务组件，非常有助于我们的开发，这并没有什么特别要说的。但是也不要`矫枉过正`，如果随便一个小的模块都要抽取组件的话，代码维护起来也会非常困难，尤其是在后续优化及迭代需要做一些个性化设置时。

此外，对于页面内的模块的不同状态，是在模块内做判断拆分，还是直接分两个模块来写，[这篇文章](https://zhuanlan.zhihu.com/p/64354422)已经说得很清楚，总之一切宗旨都是为了好维护。

## 注意边界条件
基本上测试阶段会检测出来很多的bug,但有一些bug，是当时不会出现，但后续会出现的，我们在开发的时候，要注意多考虑考虑一些边界条件和可能的变化。

举个例子，**但凡出现if判断，要考虑下后续迭代**

这样一段代码
```javascript
if (type === "person") {
    .....
} else {
    .....
}
```
也许一开始，type只有两种状态：person,animal,这样写没什么问题，但或许几个月后，type增加了一种---plant,而这个type可能不止一个地方用到了，这段代码没有改动到，就会出现我们没有预料到的bug

---
综上，总结了一些基础的、常见的将css及js写的更优雅的方法和建议，但真正要将代码写的好，还需要更多经验的积累和技术的沉淀。最后说道，虽然技术深度影响了我们的代码质量，但一昧追求高级及冷门用法却不注重规范和可维护性，对代码质量也是有严重打击的哦！

**与君共勉！**