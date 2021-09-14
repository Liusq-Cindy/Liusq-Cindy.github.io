参考网址：[https://www.cnblogs.com/chenwenhao/p/11258895.html#_label16](https://www.cnblogs.com/chenwenhao/p/11258895.html#_label16)

列表：

1. **[Vue 的 nextTick 的原理是什么？](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)**
2. **[route 和 router 的区别是什么？](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)**
3. **[组件中写 name 选项有什么作用？](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)**
4. [Vue中怎么重置data?](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)
5. [watch、method和computed的区别？](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)
6. **[Vue 中 key 值的作用？](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)**
7. [Vue 的生命周期](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)
8. **[Vue 组件间通信有哪些方式?](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)**
9. **[既然 Vue 通过数据劫持可以精准探测数据变化,为什么还需要虚拟 DOM 进行 diff 检测差异?](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)**
10. **[vue-cli 替我们做了哪些工作？](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)**
11. **[怎样理解 Vue 的单向数据流？](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)**
12. **[直接给一个数组项赋值，Vue 能检测到变化吗？](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)**
    1. Vue怎么实现对数组和对象的监听？
13. [谈谈对keep-alive的理解](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)
14. [组件中的data为什么是一个函数？](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)
15. [虚拟dom实现原理？](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)
16. **[像vue-router，vuex他们都是作为vue插件，请说一下他们分别都是如何在vue中生效的](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)**
17. **[请你说一下vue的设计架构](https://www.notion.so/Vue-QA-72734d5e69234a248f6c56644b760576)**

# 一、**Vue 的 nextTick 的原理是什么？**

**1. 为什么需要 nextTick**      

Vue 是异步修改 DOM 的并且不鼓励开发者直接接触 DOM，但有时候业务需要必须对数据更改--刷新后的 DOM 做相应的处理，这时候就可以使用 Vue.nextTick(callback)这个 api 了。

**2. 理解原理前的准备**      

首先需要知道事件循环中宏任务和微任务这两个概念(这其实也是面试常考点)。请阅大佬文章--[彻底搞懂浏览器 Event-loop](https://juejin.im/post/5c947bca5188257de704121d)常见的宏任务有 script, setTimeout, setInterval, setImmediate, I/O, UI rendering常见的微任务有 process.nextTick(Nodejs),Promise.then(), MutationObserver;

**3. 理解 nextTick**  

而 nextTick 的原理正是 vue 通过异步队列控制 DOM 更新和 nextTick 回调函数先后执行的方式。如果大家看过这部分的源码，会发现其中做了很多 isNative()的判断，因为这里还存在兼容性优雅降级的问题。可见 Vue 开发团队的深思熟虑，对性能的良苦用心。如果你比较了解了前面的事件循环原理，推荐你看看这篇文章 请阅大佬文章--[全面解析 Vue.nextTick 实现原理](https://mp.weixin.qq.com/s/mCcW4OYj3p3471ghMBylBw)

# 二、**route 和 router 的区别是什么？**

`route`是“路由信息对象”，包括`path`,`params`,`hash`,`query`,`fullPath`,`matched`,`name`等路由信息参数。`router`是“路由实例对象”，包括了路由的跳转方法(`push`、`replace`)，钩子函数等。

# 三、**组件中写 name 选项有什么作用？**

### **组件中写 name 选项有什么作用？**

1. 项目使用 keep-alive 时，可搭配组件 name 进行缓存过滤
2. DOM 做递归组件时需要调用自身 name
3. vue-devtools 调试工具里显示的组件名称是由vue中组件name决定的

# 四、**vue 中怎么重置 data?**

使用Object.assign()，vm.$data可以获取当前状态下的data，vm.$options.data(this)可以获取到组件初始化状态下的data。

```jsx
Object.assign(this.$data, this.$options.data(this))  
// 注意加this，不然取不到data() { a: this.methodA } 中的this.methodA。

```

> 原因参考：[Vue中的this.$options.data()和this.$data](https://blog.csdn.net/mocoe/article/details/89682022)

# 五、**watch、methods 和 computed 的区别?**

- watch 为了监听某个响应数据的变化。computed 是自动**监听依赖值**的变化，从而动态返回内容，主要目的是简化模板内的复杂运算。所以区别来源于用法，只是需要动态值，那就用 computed ；需要知道值的改变后执行业务逻辑，才用 watch。
- methods是一个方法，它可以接受参数，而computed 不能，computed 是可以缓存的，methods 不会。computed 可以依赖其他 computed，甚至是其他组件的 data。
- computed： 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；

### 运用场景：

- 当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；
- 当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的

# 六、**Vue 中 key 值的作用？**

当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“**就地复用**”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。**key 的作用主要是为了高效的更新虚拟DOM**。

# 七、**Vue 的生命周期**

[vue生命周期详解](https://juejin.im/post/5c6d48e36fb9a049eb3c84ff)

**1）生命周期是什么？**

Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载 Dom -> 渲染、更新 -> 渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。

**（2）各个生命周期的作用**

[Untitled](https://www.notion.so/016c9b9df5024354b461047b344148a9)

# 八、**Vue 组件间通信有哪些方式?**

[Vue 组件间通信六种方式](https://juejin.im/post/5cde0b43f265da03867e78d3)

1. props/$emit
2. $emit/$on
3. vuex
4. $attrs/$listeners
5. provide/inject
6. $parent/$children 与 ref

# 九、**既然 Vue 通过数据劫持可以精准探测数据变化,为什么还需要虚拟 DOM 进行 diff 检测差异?**

考点: Vue 的变化侦测原理前置知识: 依赖收集、虚拟 DOM、响应式系统现代前端框架有两种方式侦测变化，一种是pull，一种是push

pull: 其代表为React，我们可以回忆一下React是如何侦测到变化的,我们通常会用setStateAPI显式更新，然后React会进行一层层的Virtual Dom Diff操作找出差异，然后Patch到DOM上，React从一开始就不知道到底是哪发生了变化，只是知道「有变化了」，然后再进行比较暴力的Diff操作查找「哪发生变化了」，另外一个代表就是Angular的脏检查操作。

push: Vue的响应式系统则是push的代表，当Vue程序初始化的时候就会对数据data进行依赖的收集，一但数据发生变化,响应式系统就会立刻得知。因此Vue是一开始就知道是「在哪发生变化了」，但是这又会产生一个问题，如果你熟悉Vue的响应式系统就知道，通常一个绑定一个数据就需要一个Watcher，一但我们的绑定细粒度过高就会产生大量的Watcher，这会带来内存以及依赖追踪的开销，而细粒度过低会无法精准侦测变化,因此Vue的设计是选择中等细粒度的方案,在组件级别进行push侦测的方式,也就是那套响应式系统,通常我们会第一时间侦测到发生变化的组件,然后在组件内部进行Virtual Dom Diff获取更加具体的差异，而Virtual Dom Diff则是pull操作，Vue是push+pull结合的方式进行变化侦测的。

[Vue和React的视图更新机制对比](https://blog.csdn.net/csdn_haow/article/details/89915908)

# 十、**vue-cli 替我们做了哪些工作？**

首先需要知道 vue-cli 是什么？它是基于 Vue.js 进行快速开发的完整系统，也可以理解成是很多 npm 包的集合。其次，vue-cli 完成的功能有哪些？

> .vue 文件 --> .js 文件ES6 语法 --> ES5 语法Sass,Less,Stylus --> CSS对 jpg,png,font 等静态资源的处理热更新定义环境变量，区分 dev 和 production 模式...

# 十一、**怎样理解 Vue 的单向数据流？**

       父子 prop 之间形成了一个单向下行绑定,防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。

        每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

        子组件想修改时，只能通过 $emit 派发一个自定义事件，父组件接收到后，由父组件修改。

**有两种常见的试图改变一个 prop 的情形 :**

- 这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。 在这种情况下，最好**定义一个本地的 data 属性并将这个 prop 用作其初始值**：

```jsx
props: ['initialCounter'],
data: function () {
  return {
    counter: this.initialCounter
  }
}
```

- 这个 prop 以一种原始的值传入且需要进行转换。 在这种情况下，最好使用这个 prop 的值来定义一个计算属性

```jsx
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
```

# 十二、**直接给一个数组项赋值，Vue 能检测到变化吗？**

由于 JavaScript 的限制，Vue 不能检测到以下数组的变动：

- 当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
- 当你修改数组的长度时，例如：vm.items.length = newLength

为了解决第一个问题，Vue 提供了以下操作方法：

```jsx
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
// vm.$set，Vue.set的一个别名
vm.$set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
```

为了解决第二个问题，Vue 提供了以下操作方法：

```jsx
// Array.prototype.splice
```

## **Vue 框架怎么实现对象和数组的监听？**

如果被问到 Vue 怎么实现数据双向绑定，大家肯定都会回答 通过 Object.defineProperty() 对数据进行劫持，但是 Object.defineProperty() 只能对属性进行数据劫持，不能对整个对象进行劫持，同理无法对数组进行劫持，但是我们在使用 Vue 框架中都知道，Vue 能检测到对象和数组（部分方法的操作）的变化，那它是怎么实现的呢？我们查看相关代码如下：

```jsx
/**
   * Observe a list of Array items.
   */
  observeArray (items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i])// observe 功能为监测数据的变化
    }
  }

/**
   * 对属性进行递归遍历
   */
  let childOb = !shallow && observe(val)// observe 功能为监测数据的变化
```

通过以上 Vue 源码部分查看，我们就能知道 Vue 框架是通过遍历数组 和递归遍历对象，从而达到利用 Object.defineProperty() 也能对对象和数组（部分方法的操作）进行监听。

# 十三、**谈谈你对 keep-alive 的了解？**

keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：

- 一般结合路由和动态组件一起使用，用于缓存组件；
- 提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；
- 对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。

# 十四、**组件中 data 为什么是一个函数？**

> 为什么组件中的 data 必须是一个函数，然后 return 一个对象，而 new Vue 实例里，data 可以直接是一个对象？

```jsx
// data
data() {
  return {
  message: "子组件",
  childName:this.name
  }
}
// new Vue
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
```

因为组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。

# 十五、**虚拟 DOM 实现原理？**

虚拟 DOM 的实现原理主要包括以下 3 部分：

- 用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象；
- diff 算法 — 比较两棵虚拟 DOM 树的差异；
- pach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。

如果对以上 3 个部分还不是很了解的同学，可以查看本文作者写的另一篇详解虚拟 DOM 的文章《深入剖析：Vue核心之虚拟DOM》

# 十五、**像vue-router，vuex他们都是作为vue插件，请说一下他们分别都是如何在vue中生效的？**

vue的插件系统，用vue.mixin混入到全局，在每个组件的生命周期的某个阶段注入组件实例。

# 十六、**请你说一下vue的设计架构。**

vue2采用的是典型的混入式架构，类似于express和jquery，各部分分模块开发，再通过一个mixin去混入到最终暴露到全局的类上。简述一个框架的同时，说出他的设计来源、类似的框架。