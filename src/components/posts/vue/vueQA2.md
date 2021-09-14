参考文章：

[详解30道Vue面试题](https://blog.csdn.net/snsHL9db69ccu1aIKl9r/article/details/114253407)

[2021-web前端面试之旅-01-vue面试题](https://blog.csdn.net/itwangyang520/article/details/113100448)

[web前端面试题[vue全家桶]](https://www.cnblogs.com/caijj/p/14979147.html)

问题大纲：

1. **[v-show 与 v-if 有什么区别？](https://www.notion.so/Vue-QA-55fb010251f942acac127f1b73e67649)**
2. **[Class 与 Style 如何动态绑定？](https://www.notion.so/Vue-QA-55fb010251f942acac127f1b73e67649)**
3. [如何获取DOM？](https://www.notion.so/Vue-QA-55fb010251f942acac127f1b73e67649)
4. **[vue-loader是什么？使用它的用途有哪些？](https://www.notion.so/Vue-QA-55fb010251f942acac127f1b73e67649)**
5. [v-on可以监听多个方法吗？](https://www.notion.so/Vue-QA-55fb010251f942acac127f1b73e67649)
6. [$nextTick的使用](https://www.notion.so/Vue-QA-55fb010251f942acac127f1b73e67649)
7. [v-if和v-for的优先级？](https://www.notion.so/Vue-QA-55fb010251f942acac127f1b73e67649)
8. [assets和static的区别？](https://www.notion.so/Vue-QA-55fb010251f942acac127f1b73e67649)
9. [vue常用的修饰符](https://www.notion.so/Vue-QA-55fb010251f942acac127f1b73e67649)
10. [Vue-router跳转和location.href有什么区别](https://www.notion.so/Vue-QA-55fb010251f942acac127f1b73e67649)
11. [第一次页面加载会触发哪些生命周期钩子？](https://www.notion.so/Vue-QA-55fb010251f942acac127f1b73e67649)
12. [key主要是解决哪一类的问题，为什么不建议用索引index（重绘）](https://www.notion.so/Vue-QA-55fb010251f942acac127f1b73e67649)
13. [vue弹窗后如何禁止滚动条滚动？](https://www.notion.so/Vue-QA-55fb010251f942acac127f1b73e67649)
14. [怎么注册Vue的插件？供全局使用组件？](https://www.notion.so/Vue-QA-55fb010251f942acac127f1b73e67649)
15. [Vue执行num run dev发生了什么？](https://www.notion.so/Vue-QA-55fb010251f942acac127f1b73e67649)
16. [vue-router的meta有什么作用？](https://www.notion.so/Vue-QA-55fb010251f942acac127f1b73e67649)

# 一**、v-show 与 v-if 有什么区别？**

v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。

所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。

# 二、**Class 与 Style 如何动态绑定？**

### Class 可以通过对象语法和数组语法进行动态绑定：

- 对象语法：

```jsx
<div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
data: {
  isActive: true,
  hasError: false
}
```

- 数组语法：

```jsx
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

### Style 也可以通过对象语法和数组语法进行动态绑定：

- 对象语法：

```jsx
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
data: {
  activeColor: 'red',
  fontSize: 30
}
```

- 数组语法：

```jsx
<div v-bind:style="[styleColor, styleSize]"></div>
data: {
  styleColor: {
     color: 'red'
   },
  styleSize:{
     fontSize:'23px'
  }
```

# 三、**如何获取dom?**

```
答：ref="domName" 用法：this.$refs.domName
```

# 四、**vue-loader是什么？使用它的用途有哪些？**

```jsx
答：vue文件的一个加载器，将template/js/style转换成js模块。
用途：js可以写es6、style样式可以scss或less、template可以加jade等
```

# 五、v-on可以监听多个方法吗？

答：可以，：<input type="text" v-on="{ input:onInput,focus:onFocus,blur:onBlur, }">。

# 六、$nextTick的使用

答：当你修改了data的值然后马上获取这个dom元素的值，是不能获取到更新后的值，
你需要使用$nextTick这个回调，让修改后的data值渲染更新到dom元素之后再获取，才能成功。

# 七、v-if和v-for的优先级

答：当 v-if 与 v-for 一起使用时，`v-for 具有比 v-if 更高的优先级`，
这意味着 v-if 将分别重复运行于每个 v-for 循环中。所以，不推荐v-if和v-for同时使用。
如果v-if和v-for一起用的话，vue中的的会自动提示v-if应该放到外层去。

# 八、assets和static的区别

- 相同点：
assets和static两个都是存放静态资源文件。项目中所需要的资源文件图片，字体图标，
样式文件等都可以放在这两个文件下，这是相同点
- 不相同点：
assets中存放的静态资源文件在项目打包时，也就是运行npm run build时会将assets中放置的静态资源文件进行打包上传，所谓打包简单点可以理解为压缩体积，代码格式化。
而压缩后的静态资源文件最终也都会放置在static文件中跟着index.html一同上传至服务器。
static中放置的静态资源文件就不会要走打包压缩格式化等流程，而是直接进入打包好的目录，直接上传至服务器。
因为避免了压缩直接进行上传，在打包时会提高一定的效率，但是**static中的资源文件由于没有进行压缩等操作**，
所以文件的体积也就相对于assets中打包后的文件提交较大点。在服务器中就会占据更大的空间。
- 建议：
将项目中template需要的样式文件js文件等都可以放置在assets中，走打包这一流程。减少体积。
而项目中引入的第三方的资源文件如iconfoont.css等文件可以放置在static中，
因为这些引入的第三方文件已经经过处理，我们不再需要处理，直接上传。

# 九、vue常用的修饰符

`.stop`：等同于JavaScript中的event.stopPropagation()，防止事件冒泡；
`.prevent：`等同于JavaScript中的event.preventDefault()，防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）；
`.capture`：与事件冒泡的方向相反，事件捕获由外到内；
`.self`：只会触发自己范围内的事件，不包含子元素；
`.once`：只会触发一次。

# 十、Vue-router跳转和location.href有什么区别

答：使用location.href='/url'来跳转，简单方便，但是`刷新了页面`；
使用history.pushState('/url')，无刷新页面，静态跳转；
引进router，然后使用router.push('/url')来跳转，使用了diff算法，实现了按需加载，减少了dom的消耗。
其实使用router跳转和使用`history.pushState()`没什么差别的，
因为vue-router就是用了history.pushState()，尤其是在history模式下。

# 十一、**第一次页面加载会触发哪几个钩子？**

```
答：beforeCreate， created， beforeMount， mounted
```

# 十二、key主要是解决哪一类的问题，为什么不建议用索引index（重绘）

（1）key的作用主要是为了高效的更新虚拟DOM
（2）当以index为key值时，如果数组长度发生变化，会导致key的变化，比如删除其中某一项，那么index会相应变化。
所以用index作为key和不加index没有什么区别，都不能提升性能。一般用每项数据的唯一值来作为key，就算数组长度变化，也不会影响到这个key

# 十三、vue弹窗后如何禁止滚动条滚动？

```jsx
methods : {
   //禁止滚动
   stop(){
        var mo=function(e){e.preventDefault();};
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
    },
    /***取消滑动限制***/
    move(){
        var mo=function(e){e.preventDefault();};
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);
    }
```

# 十四、**怎么注册插件,全局使用**

```jsx
复制使用全局方法Vue.use()
Vue.use( MyPlugin )

com.js中
import com from './xx.vue'
let test = {}
test.install = function(Vue,options){
    Vue.component(panel.name, panel)  // 注册全局组件
}
export default com

main.js中
import com from './com.js'
Vue.use(com)

所有vue文件中都可以调用组件<com></com>
```

# 十五、**vue开发命令 npm run dev 输入后的执行过程**

```jsx
（1）npm run dev是执行配置在package.json中的脚本
（2）调用了webpack配置文件
（3）配置文件中调用了main.js
（4）main.js用到了一个html元素#app，引用路由等开始vue的模板编译
```

# 十六、**router的meta有什么用**

```jsx
在meta对象中可以设置一些状态，通常设置标题或是否需要缓存。
$route.meta.keepAlive/$route.meta.title
{
    path:"/test",
    name:"test",
    component:()=>import("@/components/test"),
    meta:{
        title:"测试页面", //配置title
        keepAlive: true //是否缓存
    }
}
```

# 十七、**Vue中如何监控某个属性值的变化？Watch**

比如现在需要监控data中，**obj.a** 的变化。Vue中监控对象属性的变化你可以这样：

```jsx
watch**:** {
      obj**:** {
      handler (newValue, oldValue) {
        console.log('obj changed')
      },
      deep**:** **true**}
  }
```

deep属性表示深层遍历，但是这么写会监控obj的所有属性变化，并不是我们想要的效果，所以做点修改：

```jsx
watch**:** {
   'obj.a'**:** {
      handler (newName, oldName) {
        console.log('obj.a changed')
      }
   }
  }
```

还有一种方法，可以通过computed 来实现，只需要：

```jsx
computed**:** {
    a1 () {
      **return** **this**.obj.a
    }
}
```

利用计算属性的特性来实现，当依赖改变时，便会重新计算一个新值。

# 十八、 **delete和Vue.delete删除数组的区别**

**delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。Vue.delete直接删除了数组 改变了数组的键值。**

```jsx
**var** a**=**[1,2,3,4]
    **var** b**=**[1,2,3,4]
    **delete** a[1]
    console.log(a)
    **this**.$delete(b,1)
    console.log(b)
```