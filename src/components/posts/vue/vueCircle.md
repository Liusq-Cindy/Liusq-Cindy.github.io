详细介绍与理解：

[超详细vue生命周期解析(详解)](https://blog.csdn.net/weixin_42707287/article/details/111641286)

# 一、作用及含义

Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载 Dom -> 渲染、更新 -> 渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。

### 描述vue的整个生命周期过程

Vue 实例，以及我们通常的单页面组件，Vue Component 实例，从开始创建到销毁这个过程，有一个完整的生命周期，包含了很多关键的节点，方便我们在特殊节点进行一些操作。按顺序来说是：（按图说明：

1. 先new一个Vue实例，init时间和生命周期，然后到了beforeCreate钩子，
2. 然后Vue初始化所有的data、methods数据，到了created节点，这时候可以进行一些ajax请求，修改data值等等，
3. 然后vue开始编译组件，生成html结构但还没有挂载到具体的DOM上，到beforeMount节点。
4. 然后Vue将编译生成的这个html结构挂载到DOM节点上，也就是我们在页面上能看到内容了，这时候有真实的DOM，可以操作DOM了，这时候到了mounted节点。
5. 然后实时监控数据变化，当数据变化时，先到达我们的beforeUpdate节点，这时候dom还没有更新
6. vue通过数据双向绑定，触发dom更新，更新完成后，到达updated节点，不断循环
7. 当我们切换路由、关闭组件等操作要销毁组件时，在销毁前，触发beforeDestroy节点
8. 然后vue销毁所有的watcher订阅者、子组件、事件监听，完成后，触发destroyed节点，这时候实例被销毁了
9. 另外有两个特殊的钩子，activited和deactivated，是keep-alive 专属，在组件被激活和销毁时调用

# 二、具体的应用

## 1、每个周期适合哪些场景？

### beforeCreate：

在new一个vue实例后，只有一些默认的生命周期钩子和默认事件，其他的东西都还没创建。在beforeCreate生命周期执行的时候，data和methods中的数据都还没有初始化。不能在这个阶段使用data中的数据和methods中的方法

### created：

data 和 methods都已经被初始化好了，如果要调用 methods 中的方法，或者操作 data 中的数据，最早可以在这个阶段中操作

### beforeMount：

执行到这个钩子的时候，在内存中已经编译好了模板了，但是还没有挂载到页面中，此时，页面还是旧的

### mounted：

执行到这个钩子的时候，就表示Vue实例已经初始化完成了。此时组件脱离了创建阶段，进入到了运行阶段。 如果我们想要通过插件操作页面上的DOM节点，最早可以在和这个阶段中进行

### beforeUpdate：

 当执行这个钩子时，页面中的显示的数据还是旧的，data中的数据是更新后的， 页面还没有和最新的数据保持同步

### updated：

页面显示的数据和data中的数据已经保持同步了，都是最新的

### beforeDestory：

Vue实例从运行阶段进入到了销毁阶段，这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于可用状态。还没有真正被销毁

### destroyed：

这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于不可用状态。组件已经被销毁了。

## 2、created和mounted差别

created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。

# 三、常见的一些问题

## 1、**父组件生命周期钩子函数执行顺序？**

Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：

- 加载渲染过程

    父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted

- 子组件更新过程

    父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated

- 父组件更新过程

    父 beforeUpdate -> 父 updated

- 销毁过程

    父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed

理解

> 组件的调用顺序都是先父后子，渲染完成的顺序是先子后父，组件的销毁操作是先父后子，销毁完成的顺序是先子后父

## 2、**在哪个生命周期内调用异步请求？**

可以在钩子函数 `created、beforeMount、mounted` 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。但是本人推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：

- 能更快获取到服务端数据，减少页面 loading 时间；
- ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；

## 3、**在什么阶段才能访问操作DOM？**

在钩子函数 mounted 被调用前，Vue 已经将编译好的模板挂载到页面上，所以在 `mounted` 中可以访问操作 DOM。vue 具体的生命周期示意图可以参见如下，理解了整个生命周期各个阶段的操作，关于生命周期相关的面试题就难不倒你了。

## 4、**父组件可以监听到子组件的生命周期吗？**

比如有父组件 Parent 和子组件 Child，如果父组件监听到子组件挂载 mounted 就做一些逻辑处理，可以通过以下写法实现：

```jsx
// Parent.vue
<Child @mounted="doSomething"/>
// Child.vue
mounted() {
  this.$emit("mounted");
}
```

以上需要手动通过 $emit 触发父组件的事件，更简单的方式可以在父组件引用子组件时通过 @hook 来监听即可，如下所示：

```jsx
//  Parent.vue
<Child **@hook:mounted**="doSomething" ></Child>
doSomething() {
   console.log('父组件监听到 mounted 钩子函数 ...');
},
//  Child.vue
mounted(){
   console.log('子组件触发 mounted 钩子函数 ...');
},
// 以上输出顺序为：
// 子组件触发 mounted 钩子函数 ...
// 父组件监听到 mounted 钩子函数 ...
```