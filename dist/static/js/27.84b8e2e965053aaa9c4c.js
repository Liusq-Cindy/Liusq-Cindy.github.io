webpackJsonp([27],{OIiY:function(v,_,e){"use strict";Object.defineProperty(_,"__esModule",{value:!0});var l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("section",[e("blockquote",[e("p",[v._v("总结答案要点，让回答更统一完整，每一个问题是一个大类体系，里面会包含多个深入的子问题")])]),v._v(" "),e("ol",[e("li",[v._v("讲一下BFC？")]),v._v(" "),e("li",[v._v("元素水平居中对齐的方式？")]),v._v(" "),e("li",[v._v("flex的定义和用法？")]),v._v(" "),e("li",[v._v("移动端自适应布局的方式有哪些？")]),v._v(" "),e("li",[v._v("css3的新特性？")]),v._v(" "),e("li",[v._v("重排重绘")]),v._v(" "),e("li",[v._v("css的编写经验、性能优化？")])]),v._v(" "),e("h1",[v._v("1、讲一下BFC？")]),v._v(" "),e("h3",[v._v("bfc是什么，怎么用的？")]),v._v(" "),e("p",[v._v("bfc的意思是块级格式化上下文。这个FC的作用，其实就是创建了一块独立的渲染区域，区域内的样式布局不会影响到外面的样式。他有一些触发条件和功能特性，可以用来完成一些布局或者解决一些样式问题。另外还会有IFC，行内格式化上下文，提到的相对少一些")]),v._v(" "),e("h3",[v._v("触发条件")]),v._v(" "),e("p",[v._v("他的触发条件比如float浮动、overflow:hidden、display:inline-block\\flex、position:absolute\\fixed都会触发。")]),v._v(" "),e("p",[v._v("1、body元素就是一个BFC区域")]),v._v(" "),e("p",[v._v("2、float属性不为none（脱离文档流）")]),v._v(" "),e("p",[v._v("3、overflow值非visible")]),v._v(" "),e("p",[v._v("4、display值为inline-block、table-cell、table-caption、flex、inline-flex")]),v._v(" "),e("p",[v._v("5、position值为absolute、fixed")]),v._v(" "),e("h3",[v._v("特点和特性")]),v._v(" "),e("p",[v._v("他的特点最重要的是：")]),v._v(" "),e("p",[v._v("1、一个BFC容器中的两元素上下margin重叠")]),v._v(" "),e("p",[v._v("比如根元素下两个box外边距塌陷，那么可以给另一个容器再套一层，形成一个新的BFC")]),v._v(" "),e("p",[v._v("2、BFC容器计算高度时，浮动元素也参与计算。")]),v._v(" "),e("p",[v._v("这个通常可以用来清除浮动，不让元素超出父元素外面")]),v._v(" "),e("p",[v._v("3、BFC的区域，不会和外面的浮动容器发生重叠。")]),v._v(" "),e("p",[v._v("基于这个特性，可以做自适应的两栏布局，给浮动元素的兄弟元素设置BFC他就不会被遮挡了。")]),v._v(" "),e("h3",[v._v("怎么实现一个圣杯布局/双飞翼布局？")]),v._v(" "),e("p",[e("strong",[v._v("圣杯布局步骤主要是：")])]),v._v(" "),e("p",[v._v("1、center,left,right三列，三个元素浮动")]),v._v(" "),e("p",[v._v("2、给父元素设置BFC清除浮动和padding负值，留出两侧的宽度。")]),v._v(" "),e("p",[v._v("2、两侧盒子定宽，左盒子设置margin:-100%让其回到第一行，再利用relative相对自身偏移left:-200px,让盒子显示在容器预留的地方")]),v._v(" "),e("p",[v._v("3、右侧的盒子设置margin-left：-自身宽度，就会把自己展示在第一行。")]),v._v(" "),e("p",[e("strong",[v._v("双飞翼布局更简单：")])]),v._v(" "),e("p",[v._v("区别是不让center浮动，设置其margin，然后让左右盒子通过margin负值-100%和-自身宽度，展示在两侧。")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://www.jianshu.com/p/81ef7e7094e8"}},[v._v("参考网址")])]),v._v(" "),e("h3",[v._v("清除浮动有什么方法？")]),v._v(" "),e("p",[v._v("1、一个是利用BFC，像给父元素设置overflow：hidden")]),v._v(" "),e("p",[v._v('2、一个是可以利用伪元素清除，::after，设置content:"",和clear:both，')]),v._v(" "),e("p",[v._v("3、要么就是给父元素设置高度、在浮动元素后面再加个元素这种方式，但是不常用。")]),v._v(" "),e("h1",[v._v("2、元素水平垂直居中对齐的方式？")]),v._v(" "),e("p",[v._v("元素的水平垂直居中要分情况来讨论：")]),v._v(" "),e("ol",[e("li",[v._v("如果是行内元素，设置"),e("code",[v._v("text-align：center，vertical-align: middle;")])]),v._v(" "),e("li",[v._v("要盒子中的文本垂直居中，可以设置"),e("code",[v._v("line-height = 容器高度")])]),v._v(" "),e("li",[v._v("块元素，宽高已知，"),e("code",[v._v("父元素相对定位，子元素绝对定位，并设置： left:50%,top: 50%, margin: -50px 0 0 -50px;")])]),v._v(" "),e("li",[v._v("块元素，宽高未知：")])]),v._v(" "),e("p",[v._v("a. 基于flex，设置父元素"),e("code",[v._v("display:flex；justify-content:center；align-item: middle")])]),v._v(" "),e("p",[v._v("b. 绝对定位，"),e("code",[v._v("设置top，left，right，bottom都是0，然后margin: auto")])]),v._v(" "),e("p",[v._v("c. 绝对定位，left\\top50%，然后设置"),e("code",[v._v("transform: translate(-50%,-50%);")])]),v._v(" "),e("p",[v._v("还有可以利用table布局，但是一般很少用到，对性能不是很好")]),v._v(" "),e("h1",[v._v("3、flex的定义和用法？")]),v._v(" "),e("h3",[v._v("flex用得多吗？")]),v._v(" "),e("p",[v._v("flex在工作中经常用来做弹性布局，不管是页面自适应还是一个容器中多个卡片的分布等情况。他有主轴交叉轴的概念，然后子元素都可以设置排序、排列方式和缩放，对布局非常灵活。")]),v._v(" "),e("h3",[v._v("常用的属性有哪些？")]),v._v(" "),e("p",[e("strong",[v._v("容器最常用的属性：")])]),v._v(" "),e("p",[v._v("主轴方向：flex-direction:")]),v._v(" "),e("p",[v._v("元素排列方式：justify-content：")]),v._v(" "),e("p",[v._v("交叉轴排列方式：align-items:")]),v._v(" "),e("p",[v._v("换行：flex-wrap：")]),v._v(" "),e("p",[e("strong",[v._v("子元素最常用的属性：")])]),v._v(" "),e("p",[v._v("子元素可自定义交叉轴排列方式：align-self")]),v._v(" "),e("p",[v._v("缩放，可简写： flex flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选，不放大、会缩小")]),v._v(" "),e("p",[v._v("排序：order，数值越小越靠前")]),v._v(" "),e("h1",[v._v("4、移动端自适应布局的方式有哪些？")]),v._v(" "),e("h3",[v._v("怎么实现一个rem布局?")]),v._v(" "),e("p",[v._v("rem布局主要是利用1 rem = html根元素的font-size的大小。对一些需要移动端适配的项目，可以通过media媒体查询，对不同的屏幕宽度值，设置不同的html的font-size的大小，然后全局样式由rem单位来编写，替换px的方式，这样就可以实现移动端适配。")]),v._v(" "),e("h3",[v._v("有什么优缺点？")]),v._v(" "),e("p",[v._v("优点是可以实现不同设备的适配")]),v._v(" "),e("p",[v._v("缺点是这种方式有阶梯型，不是一个渐变的过程，对于不同屏幕大小的要求，可能要写很多的媒体查询判断去设置样式。")]),v._v(" "),e("h3",[v._v("还有什么方案？")]),v._v(" "),e("p",[v._v("1、vw/vh单位来编写样式，他们是基于视窗宽高的，1vw = 1/100的屏幕宽度，可以搭配vmin、vmax使用，因为手机横屏会变换vw和vh")]),v._v(" "),e("p",[v._v("2、也可以纯用100%，因为body默认是屏幕宽度，结合预编译器，设置长度变量，这样也方便我们的编写")]),v._v(" "),e("h3",[v._v("你们项目中是怎么做的？")]),v._v(" "),e("p",[v._v("js+less变量")]),v._v(" "),e("p",[v._v("1、在根组件index.html中编写js代码获取屏幕宽度，然后设置html的font-size属性为这个值")]),v._v(" "),e("p",[v._v("（具体的细节还有支持scale缩放值等等），假设为375px")]),v._v(" "),e("p",[v._v("2、全局样式文件中定义："),e("code",[v._v("@ratio: 1rem / 750;")]),v._v("，这样一个@ratio是1/2px")]),v._v(" "),e("p",[v._v("2、组件引入全局文件，并定义档位变量")]),v._v(" "),e("p",[e("code",[v._v('@import "~@/styles/variables.less";')])]),v._v(" "),e("p",[e("code",[v._v("@r: 2 * @ratio;")]),v._v("这样一个变量是1px")]),v._v(" "),e("p",[v._v("3、如有必要，再加上media媒体查询修改全局font-size大小")]),v._v(" "),e("h1",[v._v("5、css3的新特性？")]),v._v(" "),e("h3",[v._v("C3新特性知道哪些？")]),v._v(" "),e("p",[v._v("border-radius圆角属性、transition过渡、transform转换、动画、文本超出省略等等。")]),v._v(" "),e("p",[v._v("超出省略需要三行代码配合 "),e("code",[v._v("overflow:hidden; white-space:nowrap; text-overflow:ellipsis;")])]),v._v(" "),e("h3",[v._v("动画有用过吗？")]),v._v(" "),e("p",[v._v("平时用的很少，不涉及太复杂的动画，之前做一个可视化页面编辑器的时候，抽奖模块做过一个翻牌动画。")]),v._v(" "),e("h1",[v._v("6、重排重绘")]),v._v(" "),e("h3",[v._v("介绍一下重排和重绘？两者联系和差异？")]),v._v(" "),e("p",[v._v("页面渲染过程中，浏览器会构建DOM树，构建CSS树，合成渲染树，然后绘制到页面上，当渲染树的一部分因为元素尺寸、布局改变要重新构建的时候，就叫做重排（回流），当一些外观属性，如颜色、背景色之类的需要绘制的时候，就叫做css的重绘。每个页面加载都会至少经历一次重排重绘。")]),v._v(" "),e("p",[v._v("因此重排势必会触发重绘，但仅仅重绘是不一定都先重排的。")]),v._v(" "),e("h3",[v._v("什么操作会引起重排重绘？")]),v._v(" "),e("p",[e("strong",[v._v("重排：")])]),v._v(" "),e("ol",[e("li",[v._v("添加或者删除可见的DOM元素")]),v._v(" "),e("li",[v._v("元素位置改变")]),v._v(" "),e("li",[v._v("元素尺寸改变")]),v._v(" "),e("li",[v._v("元素内容改变（例如：一个文本被另一个不同尺寸的图片替代）")]),v._v(" "),e("li",[v._v("页面渲染初始化（这个无法避免）")]),v._v(" "),e("li",[v._v("浏览器窗口尺寸改变")])]),v._v(" "),e("p",[e("strong",[v._v("重绘：")])]),v._v(" "),e("p",[v._v("以上所有的重排，以及一些不影响布局的操作、样式的改变等")]),v._v(" "),e("h3",[v._v("怎么减少重排重绘？")]),v._v(" "),e("ol",[e("li",[v._v("不要在布局信息改变时查询一些即时信息，如获取某个元素尺寸之类（因为修改dom元素属性，浏览器其实会用一个队列来批量处理，但是如果中间要获取某个dom信息，为了保证准确，会导致渲染队列强制刷新，因此会触发多次重排）")]),v._v(" "),e("li",[v._v("同一个DOM的多个属性改变可以写在一起（减少DOM访问，同时把强制渲染队列刷新的风险降为0）")]),v._v(" "),e("li",[v._v("如果要批量添加DOM，可以先让元素脱离文档流，操作完后再带入文档流，这样只会触发一次重排（fragment元素的应用）")]),v._v(" "),e("li",[v._v("将需要多次重排的元素，position属性设为absolute或fixed，这样此元素就脱离了文档流，它的变化不会影响到其他元素。例如有动画效果的元素就最好设置为绝对定位。")])]),v._v(" "),e("h1",[v._v("7、css的编写经验、性能优化？")]),v._v(" "),e("h3",[v._v("你觉得在编写css的时候要注意什么？")]),v._v(" "),e("ol",[e("li",[v._v("注意标签语义化")]),v._v(" "),e("li",[v._v("css命名最好有一定的规范如bem规范（block-element-modify）、命名也要用易懂的英文简写")]),v._v(" "),e("li",[v._v("vue当中每个组件的style样式通过scoped属性做样式隔离，用页面标签包裹")]),v._v(" "),e("li",[v._v("抽取全局样式文件、样式初始化")]),v._v(" "),e("li",[v._v("层级嵌套不要太深")]),v._v(" "),e("li",[v._v("修改属性尽可能避免重排重绘")]),v._v(" "),e("li",[v._v("编写最好也按照定位、宽高、文本属性这样的顺序去规范，方便定位。可以引入stylelint规范我们的css代码")])]),v._v(" "),e("h3",[v._v("有些什么css方面代码、性能优化的手段？")]),v._v(" "),e("ol",[e("li",[v._v("方便css编写方面，引入less之类的css预处理器就可以简化我们的编写方式了，比如一些嵌套、变量的写法就很好用")]),v._v(" "),e("li",[v._v("对规范css属性编写方式和顺序，可以借助stylelint的工具，配合stylelint-order还有stylint-config-standard，配置.stylelintrc文件中我们期望的属性顺序，还加上vscode的配置项，让我们可以在保存代码的时候，自动排列css属性的顺序，增加可读性。")])]),v._v(" "),e("p",[v._v("具体可见"),e("a",{attrs:{href:"https://www.notion.so/CSS-ac9d6cd19ce04660ba63cf3f15873137"}},[v._v("CSS规范化及解决方案")])])])}]},i=e("VU/8")(null,l,!1,null,null,null);_.default=i.exports},ghuC:function(v,_,e){v.exports=e("OIiY")}});
//# sourceMappingURL=27.84b8e2e965053aaa9c4c.js.map