参考文章：

[VUE源码相关面试题汇总](https://www.cnblogs.com/vickylinj/p/13529926.html)

> Vue的源码有很多，暂时不能完全掌握，但其中每一个小的知识点和设计思维值得我们学习和研究，这里针对一些小的知识点谈谈Vue的源码中具体是如何实现的：

### 常见问题列表：

1. **[谈一下你对MVC和MVVM原理的理解](https://www.notion.so/Vue-c2fbed79fefb4efa855c3f2c7b2ceb4f)**
2. **[请说一下响应式数据的原理（Vue2和Vue3）](https://www.notion.so/Vue-c2fbed79fefb4efa855c3f2c7b2ceb4f)**
3. **[vue中时如何检测数组变化的：使用了函数劫持的方式，重写了数组方法](https://www.notion.so/Vue-c2fbed79fefb4efa855c3f2c7b2ceb4f)**
4. **[nextTick 的作用和实现原理？](https://www.notion.so/Vue-c2fbed79fefb4efa855c3f2c7b2ceb4f)**
5. **[Vue 怎么用 vm.$set() 解决对象新增属性不能响应的问题 ？](https://www.notion.so/Vue-c2fbed79fefb4efa855c3f2c7b2ceb4f)**
6. **[computed的作用和实现原理？](https://www.notion.so/Vue-c2fbed79fefb4efa855c3f2c7b2ceb4f)**
7. **[watch中的deep:true是如何实现的？](https://www.notion.so/Vue-c2fbed79fefb4efa855c3f2c7b2ceb4f)**
8. **[vue中模板编译原理](https://www.notion.so/Vue-c2fbed79fefb4efa855c3f2c7b2ceb4f)**
9. **[简述vue中diff算法原理](https://www.notion.so/Vue-c2fbed79fefb4efa855c3f2c7b2ceb4f)**
10. **[v-for中为什么要用key？](https://www.notion.so/Vue-c2fbed79fefb4efa855c3f2c7b2ceb4f)**
11. **[组件中的data为什么是个函数？](https://www.notion.so/Vue-c2fbed79fefb4efa855c3f2c7b2ceb4f)**
12. **[Vue中事件绑定的原理](https://www.notion.so/Vue-c2fbed79fefb4efa855c3f2c7b2ceb4f)**
13. **[v-model的实现原理及如何自定义v-model？](https://www.notion.so/Vue-c2fbed79fefb4efa855c3f2c7b2ceb4f)**

# 常见问题

# 1、谈一下对MVC和MVVM原理的理解

详细解释的文章：[https://blog.csdn.net/qq_42068550/article/details/89480350](https://blog.csdn.net/qq_42068550/article/details/89480350)

[http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

[https://blog.csdn.net/qq_29722281/article/details/99717680](https://blog.csdn.net/qq_29722281/article/details/99717680)

### 介绍

MVC、MVP和MVVM是三种软件设计典范，也基于此做了很多前端架构模式。他们当中的M和V含义是相同的，表示model数据层和View视图层，差别在于中间的纽带部分，即：C-controller，P-Presenter，VM-viewmodel。

MVP和MVVM是基于MVC模式逐步演变而来。

### MVC

全名是Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写

MVC：数据流是单向的，view——>Controller——>model—->view

- 用户对View的操作交给了Controller处理
- 在Controller中响应View的事件调用Model的接口对数据进行操作
- 一旦Model发生变化便通知相关视图进行更新。

前端简单理解：将html部分视作View，js处理逻辑部分视作controller，监听用户在view上的事件，处理之后，通过model处理数据（如ajax请求后端服务），然后将model的数据再同步给view，视图层展示出来。

痛点：大量频繁的DOM操作、开发者需要主动更新model变化并同步到view非常繁琐

### MVP

全由中间层presentor来间接传递，处理逻辑，但并不是自动同步的。

数据流： View<—>Presentor<—>model

1. 双向通信
2. View 与 Model 通过 Presenter **间接传递**
3. View 很薄不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter很厚，部署所有逻辑

### MVVM

MVVM与MVC最大的区别就是：实现了View和Model的**自动同步。**

MVVM：数据驱动数据流是双向的，model←→viwModel<—>view

不需要用户调用选择器手动操作dom，而是将数据绑定到viewModel上，会将数据自动渲染到页面中。如果视图变化，会通知viewModel层更新数据。

前端理解：

Vue框架是典型的MVVM模式：

- html部分相当于View层，View通过模板语法将数据渲染进DOM元素，当ViewModel对Model进行更新时，通过数据绑定更新到View。
- data相当于Model层，而ViewModel层的核心是Vue中的**双向数据绑定**，即Model变化时VIew可以实时更新，View变化也能让Model发生变化。

### 题外话

关于vue\react是否是MVVM模式有很多的讨论，设计模式只是一种理念，为了激发大家做框架设计的思维，实际VUE中也会有直接操作dom，如$refs的使用，并不是完全符合MVVM的不操作DOM的要求，但整体上我们可以这么来理解他的设计，尤其是他的双向数据绑定这一块，是非常核心的优秀设计。

# 2、**请说一下响应式数据的原理（Vue2和Vue3）**

demo演示可查看文章：[https://blog.csdn.net/qq_43378800/article/details/100086039](https://blog.csdn.net/qq_43378800/article/details/100086039)

### **vue2——核心点：Object.defineProperty —— 修改每一个属性**

Vue.js 是采用 Object.defineProperty 的 getter 和 setter，并结合观察者模式来实现数据绑定的。

默认Vue在初始化数据时，会给data中的属性使用Object.defineProperty，在获取和设置的进行拦截，重新定义所有属性。当页面取到对应属性时，会进行依赖收集（收集当前组件的watcher）。如果属性发生变化会通知相关依赖进行更新操作。**依赖收集、派发更新的作用：**如果没有这项操作，每个数据更新就会去渲染页面，极大的消耗性能。加了这项操作，去监听相关数据的改变，添加到队列里，当所有改变完事儿之后，一起进行渲染

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5fc93016-66f9-4304-bf24-f5fc90a8b0ea/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5fc93016-66f9-4304-bf24-f5fc90a8b0ea/Untitled.png)

从图中可以看出，

**当执行 new Vue() 时，Vue 就进入了初始化阶段，一方面Vue 会遍历 data 选项中的属性，并用 Object.defineProperty 将它们转为 getter/setter，实现数据变化监听功能；另一方面，Vue 的指令编译器Compile 对元素节点的指令进行扫描和解析，初始化视图，并订阅 Watcher 来更新视图， 此时Wather 会将自己添加到消息订阅器中(Dep)，初始化完毕。　　当数据发生变化时，Observer 中的 setter 方法被触发，setter 会立即调用Dep.notify()，Dep 开始遍历所有的订阅者，并调用订阅者的 update 方法，订阅者收到通知后对视图进行相应的更新。**

**defineProperty**只能对属性进行数据劫持，不能对整个对象进行劫持**，**对于数组和对象，Vue是通过通过遍历数组 和递归遍历对象，从而达到利用 Object.defineProperty() 也能对对象和数组（部分方法的操作）进行监听。

### **vue3——核心点：proxy（代理）—— 直接处理对象**

基于es6的[Proxy代理器](https://es6.ruanyifeng.com/#docs/proxy)来实现双向数据绑定，通过get和set方法监听数据变化。

defineProperty只能监听到自己所写的属性,其他的无法监听,但是proxy直接可以劫持整个对象，可以监听到所有写的属性。等于Object.defineProperty的超级加强版。

```jsx
<script>
    var data={}

    var dataProxy=new Proxy(data,{ // es6的新特性 proxy代理器，这里可用于监听这个data的变化
      get(obj,prop) {
        console.log('调用了')
      },

      set(obj,prop,value) {
        console.log('赋值了')
      }
    })

    dataProxy.name='jack'
    console.log(dataProxy.name)
  </script>
```

**解决了vue2中的处理对象递归、处理数组麻烦的问题**

**原理：**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8cdd2ef5-dd1e-4007-9ae2-0356b7a980ca/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8cdd2ef5-dd1e-4007-9ae2-0356b7a980ca/Untitled.png)

更多实现可参考文章：

[ES6的代理模式 | Proxy | Vue3](https://vue3js.cn/es6/#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%94%A8proxy%E9%87%8D%E6%9E%84)

# 3、**vue中时如何检测数组变化的**

vue2中的defineProperty是监听不了数组的，因此在底层，设计者通过`遍历数组，迭代对象`的方式，data中的数组，进行了原型链重写，指向了自己定义的数组原型方法。这样当调用数组api时，可以通知依赖更新。如果数组中包含着引用类型，会对数组中的引用类型再次进行监控。

Object.create()，保存原有原型

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99b5d41f-259c-4b7e-b61b-3c06fd9599aa/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99b5d41f-259c-4b7e-b61b-3c06fd9599aa/Untitled.png)

# 4、**nextTick 的作用和实现原理？**

参考地址：[https://zhuanlan.zhihu.com/p/174396758](https://zhuanlan.zhihu.com/p/174396758)

1. Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按**一定的策略**（会监听数据变化，并**缓存在同一事件循环**中，等同一数据循环中的所有数据变化完成之后，再统一进行视图更新）进行 `DOM 的更新`，以保证性能（即vue当中的DOM更新是异步执行的）。
2. 因此我们在修改了数据之后，视图不会立刻更新，如果这时候要获取更新后的DOM，是拿不到的，为了确保得到，设置了Vue.nextTick()方法
3. Vue.nextTick()方法是在下次DOM更新循环结束之后执行**延迟回调**。在修改数据之后立即使用这个方法，获取更新后的DOM。
4. 每次调用`Vue.nextTick`时会执行：
- 把传入的回调函数`cb`压入`callbacks`数组
- 执行`timerFunc`函数，延迟调用 `flushCallbacks` 函数
- 遍历执行 `callbacks` 数组中的所有函数

这里的 `callbacks` 没有直接在 `nextTick` 中执行回调函数的原因是保证在同一个 `tick` 内多次执行`nextTick`，不会开启多个异步任务，而是把这些异步任务都压成一个同步任务，在下一个 `tick` 执行完毕。

nextTick主要是使用了宏任务和微任务，定义了一个异步方法。多次调用nextTick会将方法存入队列中，通过这个异步方法清空当前队列，所以nextTick就是异步方法。

原理：

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f3083efa-df2f-45fc-b3ea-10ba5dfb46e0/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f3083efa-df2f-45fc-b3ea-10ba5dfb46e0/Untitled.png)

# 5、V**ue 怎么用 vm.$set() 解决对象新增属性不能响应的问题 ？**

受现代 JavaScript 的限制 ，Vue 无法检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化，所以属性必须在 data 对象上存在才能让 Vue 将它转换为响应式的。

但是 Vue 提供了 Vue.set (object, propertyName, value) / vm.$set (object, propertyName, value) 来实现为对象添加响应式属性，那框架本身是如何实现的呢？

我们查看对应的 Vue 源码：vue/src/core/instance/index.js

```jsx
export function set (target: Array<any> | Object, key: any, val: any): any {
  // target 为数组  
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    // 修改数组的长度, 避免索引>数组长度导致splcie()执行有误
    target.length = Math.max(target.length, key)
    // 利用数组的splice变异方法触发响应式  
    target.splice(key, 1, val)
    return val
  }
  // key 已经存在，直接修改属性值  
  if (key in target && !(key in Object.prototype)) {
    target[key] = val
    return val
  }
  const ob = (target: any).__ob__
  // target 本身就不是响应式数据, 直接赋值
  if (!ob) {
    target[key] = val
    return val
  }
  // 对属性进行响应式处理
  defineReactive(ob.value, key, val)
  ob.dep.notify()
  return val
}
```

我们阅读以上源码可知，vm.$set 的实现原理是：

- `如果目标是数组，直接使用数组的 splice 方法触发响应式；`
- 如果目标是对象，会先判读属性是否存在、对象是否是响应式，最终如果要对属性进行响应式处理，则是`通过调用 defineReactive 方法进行响应式处理`（ defineReactive 方法就是 Vue 在初始化对象时，给对象属性`采用 Object.defineProperty 动态添加 getter 和 setter 的功能所调用的方法`）

# 6、**computed的作用和实现原理？**

computed计算属性，有两种方式，一种是函数式，一种是声明式，在内部通过get获取改动。因为在模版中放入太多声明式的逻辑会让模板本身过重，所以computed就是用来处理大量复杂的逻辑表达式，然后将结果数据返回给绑定数据的。他`有缓存性，也就是当依赖的data中的数据没有改变时，不会重新计算数据返回。`

### computed原理是什么：

学习中最常见听到的一句话就是，computed就是一个特殊的getter方法。在代理函数可以结合watcher实现缓存与收集依赖。
1）计算属性具有缓存性，如何知道计算属性的返回值发生变化呢？
这其实就是结合了**`watcher的dirty属性`**来分辨的，当dirty为true时，说明需要重新计算，当为false时，计算属性没有改变，不需要重新计算，直接读取缓存值就好。
2）模拟一下计算属性内容发生改变后：
计算属性的watcher和组件内的watcher都会得到通知
计算属性的watcher将自己的属性dirty设置为true
下次读取计算属性时，因为dirty为true重新计算一次值
组件watcher得到通知，从而执行render函数进行重新渲染

### 执行过程：

使用watcher读取计算属性
读取计算属性函数中的数据，定义响应式时，get读取的就是watcher.value
计算属性和组件watcher同时观察数据的变化
当数据改变后，计算属性和组件watcher都会收到通知
组件watcher会重新渲染组件
计算属性watcher因为数据改变，dirty属性为true,将重新计算
计算属性计算的结果用于本次渲染，并缓存起来

默认computed也是一个watcher，具备缓存，只有当依赖的属性发生变化才会更新视图。

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a3f92999-d9e1-4f25-80d2-2a7973fab8ab/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a3f92999-d9e1-4f25-80d2-2a7973fab8ab/Untitled.png)

### watch和computed的区别是什么？

watch是一种行为，在状态改变之后需要做什么。适用一个数据影响多个数据。
computed就是一种状态，也可以说多种状态初始化后的结果。适用多个数据影响一个数据。
我认为把，computed与filter作为比较不是更好一些吗？都是用来初始化状态用的。
computed更适用于大量数据计算的结果，并且反复使用，而且不常更新。因为有缓存，大大提升性能。
filter适用于少量数据进行初始化处理，计算量不能太大，因为每次渲染都会计算，并且可以频繁更新。

# 7、**watch中的deep:true是如何实现的？**

当用户指定了watch中的deep属性为true时，如果当时监控的属性是数组类型，会对对象中的每一项进行求值，此时会将当前watcher存入到对应属性的依赖中，这样数组中对象发生变化时也会通知数据更新。

内部原理就是`递归`，耗费性能 。

# 8、**vue中模板编译原理**

**模板（template）》 ast语法树（抽象语法树）》 codegen方法 ==》render函数 ==》createElement方法 ==》 Virtual Dom（虚拟dom）**

1. **模板转语法树**
2. 模板结合数据，生成抽象语法树，描述html、js语法
3. 语法树生成render函数
4. 生成Virtual Dom(虚拟dom)，描述真实的dom节点
5. 渲染成真实dom

# 9、**简述vue中diff算法原理**

Vue中的diff算法进行了优化，只考虑同级不考虑跨级，将时间复杂度从O(n^3)降为O(n)。前端当中，很少会跨层级的移动Dom元素，所以Virtual Dom只会对同一个层级的元素进行对比。

**diff算法原理**

1、先同级比较，再比较儿子节点

2、先判断一方有儿子一方没儿子的情况

3、比较都有儿子的情况

4、递归比较子节点vue3中做了优化，只比较动态节点，略过静态节点，极大的提高了效率双指针去确定位置

# 10、**v-for中为什么要用key？**

解决vue中diff算法结构相同key相同，内容复用的问题，通过key（最好自定义id，不要用索引），明确dom元素，防止复用

![https://img-blog.csdnimg.cn/20200710143352940.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDk3MDk4Nw==,size_16,color_FFFFFF,t_70](https://img-blog.csdnimg.cn/20200710143352940.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDk3MDk4Nw==,size_16,color_FFFFFF,t_70)

# 11、**组件中的data为什么是个函数？**

同一个组件被复用多次，会创建多个实例。这些实例用的是同一个构造函数，如果data是一个对象的话，所有组件共享了同一个对象。为了保证组件的数据独立性，要求每个组件都必须通过data函数返回一个对象作为组件的状态。

# 12、**Vue中事件绑定的原理**

Vue的事件绑定分为两种：一种是原生的事件绑定，一种是组件的事件绑定

原生dom事件绑定采用的是addEventListener

组件的事件绑定采用的是$on方法

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f3bf7a21-2391-459d-a0be-a6c4252bb7ea/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f3bf7a21-2391-459d-a0be-a6c4252bb7ea/Untitled.png)

# 13、**v-model的实现原理及如何自定义v-model？**

v-model可以看成是value+input方法的语法糖