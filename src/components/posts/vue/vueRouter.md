常见问题：

1. **[vue-router 路由模式有几种？](https://www.notion.so/Vue-router-2c420ba422064654a3b6732e43cf6b41)**
2. [hash和history路由的实现方式？](https://www.notion.so/Vue-router-2c420ba422064654a3b6732e43cf6b41)
3. [vue-router 是什么?它有哪些组件?](https://www.notion.so/Vue-router-2c420ba422064654a3b6732e43cf6b41)
4. [active-class 是哪个组件的属性？](https://www.notion.so/Vue-router-2c420ba422064654a3b6732e43cf6b41)
5. [怎么定义 vue-router 的动态路由? 怎么获取传过来的值？](https://www.notion.so/Vue-router-2c420ba422064654a3b6732e43cf6b41)
6. [vue-router 导航守卫？](https://www.notion.so/Vue-router-2c420ba422064654a3b6732e43cf6b41)
7. [$route 和 $router 的区别？](https://www.notion.so/Vue-router-2c420ba422064654a3b6732e43cf6b41)
8. [vue-router怎么监听路由变化？](https://www.notion.so/Vue-router-2c420ba422064654a3b6732e43cf6b41)
9. [vue-router路由懒加载？](https://www.notion.so/Vue-router-2c420ba422064654a3b6732e43cf6b41)

# 一、**vue-router 路由模式有几种？**

vue-router 有 3 种路由模式：hash、history、abstract，对应的源码如下所示：

```
switch (mode) {
  case 'history':
  this.history = new HTML5History(this, options.base)
  break
  case 'hash':
  this.history = new HashHistory(this, options.base, this.fallback)
  break
  case 'abstract':
  this.history = new AbstractHistory(this, options.base)
  break
  default:
  if (process.env.NODE_ENV !== 'production') {
    assert(false, `invalid mode: ${mode}`)
  }
}

```

其中，3 种路由模式的说明如下：

- hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器；
- history : 依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；
- abstract : 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.

# 二、**能说下 vue-router 中常用的 hash 和 history 路由模式实现原理吗？**

**（1）hash 模式的实现原理**

早期的前端路由的实现就是基于 location.hash 来实现的。其实现原理很简单，location.hash 的值就是 URL 中 `# 后面的内容`。比如下面这个网站，它的 location.hash 的值为 '#search'：

```jsx
https://www.word.com#search
```

hash 路由模式的实现主要是基于下面几个特性：

- URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送；
- hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制hash 的切换；
- 可以通过 a 标签，并设置 href 属性，当用户点击这个标签后，URL 的 hash 值会发生改变；或者使用 JavaScript 来对 loaction.hash 进行赋值，改变 URL 的 hash 值；
- 我们可以使用 `onhashchage 事件`来监听 hash 值的变化，从而对页面进行跳转（渲染）。

**（2）history 模式的实现原理**

HTML5 提供了 History API 来实现 URL 的变化。其中做最主要的 API 有以下两个：`history.pushState()` 和 `history.repalceState()`。这两个 API 可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录，如下所示：

```jsx
window.history.pushState(null, null, path);
window.history.replaceState(null, null, path);

```

**history 路由模式的实现主要基于存在下面几个特性：**

- pushState 和 repalceState 两个 API 来操作实现 URL 的变化 ；
- 我们可以使用 `popstate 事件`来监听 url 的变化，在页面前进后退时，从而对页面进行跳转（渲染）；
- history.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页面跳转（渲染）（vue当中会在route改变时调用pushstate方法，同时通过监听，手动触发新页面跳转）。

参考：

[vue-router路由跳转原理](https://www.jianshu.com/p/c609c08763e1)

# 三、vue-router 是什么?它有哪些组件

答：Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。

# 四、active-class 是哪个组件的属性？

答：active-class是router-link终端属性，用来做选中样式的切换，当router-link标签被点击时将会应用这个样式

# 五、怎么定义 vue-router 的动态路由? 怎么获取传过来的值？

答：

动态路由的创建，主要是使用path属性过程中，使用动态路径参数，以冒号开头，如下：

```jsx
{
  path: '/details/:id'
  name: 'Details'
  components: Details
}
```

当匹配到/details下的路由时，参数值会被设置到this.$route.params下，所以通过这个属性可以获取动态参数

**`console.log(this.$route.params.id)`**

# 六、vue-router 有哪几种导航钩子?

答：三种，
第一种：是全局导航钩子：router.beforeEach(to,from,next)，作用：跳转前进行判断拦截，跳转后进行处理。
第二种：单独路由独享组件
第三种：组件内的钩子

## 全局前置守卫

```jsx
const router = new VueRouter({})
router.beforeEach((to, from, next) = {
  // to do somethings
})
```

**`to:Route`**,代表要进入的目标，它是一个路由对象。

**`from:Route`**,代表当前正要离开的路由，也是一个路由对象

**`next:Function`**,必须需要调用的方法，具体的执行效果则依赖next方法调用的参数

**`next()`**:进入管道中的下一个钩子，如果全部的钩子执行完了，则导航的状态就是comfirmed（确认的）**`next(false)`**:终端当前的导航。如浏览器URL改变，那么URL会充值到from路由对应的地址。**`next('/')||next({path:'/'})`**:跳转到一个不同的地址。当前导航终端，执行新的导航。

> next 方法必须调用，否则钩子函数无法resolved

## 全局后置钩子

```
router.afterEach((to, from) = {
 // to do somethings
})

```

后置钩子并没有next函数，也不会改变导航本身。

## 路由独享钩子

```jsx
beforEnter
const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home，
      beforeEnter: (to, from, next) = {
        // to do somethings
        // 参数与全局守卫参数一样
    	}
    }
  ]
})
```

## 组件内导航钩子

```jsx
const Home = {
  template: `<div></div>`,
  beforeRouteEnter(to, from, next){
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不能获取组件实例 ‘this’，因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next){
    // 在当前路由改变，但是该组件被复用时调用
    // 例：对于一个动态参数的路径 /home/:id,在/home/1 和 /home/2 之间跳转的时候
    // 由于会渲染同样的 Home 组件，因此组件实例会被复用，而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 'this'
  },
  beforeRouteLeave(to, from, next){
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 'this'
  }
}
```

beforeRouterEnter不能访问this，因为守卫在导航确认前被调用，因此新组建还没有被创建,可以通过传一个回调给 next 来访问组件实例。在导航被确认的时候执行回调，并把实例作为回调的方法参数。

```jsx
const Home = {
  template: `<div></div>`,
  beforeRouteEnter(to, from, next){
    next( vm = {
      // 通过 'vm' 访问组件实例
    })
  }
}
```

# 七、$route 和 $router 的区别

答：

router为VueRouter的实例，是一个全局路由对象，包含了路由跳转的方法、钩子函数等。

route 是路由信息对象||跳转的路由对象，每一个路由都会有一个route对象，是一个局部对象，包含path,params,hash,query,fullPath,matched,name等路由信息参数。

# 八、vue-router怎么监听路由变化？

用watch 检测

```jsx
// 监听当前路由发生变化的时候执行
watch: {
  $route(to, from){
    console.log(to.path)
    // 对路由变化做出响应
  }
}
```

组件内导航钩子函数

```jsx
beforeRouteUpdate(to, from, next){
  // to do somethings
}

```

# 九、vue-router路由懒加载？

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

```jsx
const router = new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'Home'，
      component:() = import('../views/home')
		}
  ]
})
```

参考：[vue-router官方](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#%E6%8A%8A%E7%BB%84%E4%BB%B6%E6%8C%89%E7%BB%84%E5%88%86%E5%9D%97)，结合 Vue 的**[异步组件 (opens new window)](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6)**和 Webpack 的**[代码分割功能 (opens new window)](https://doc.webpack-china.org/guides/code-splitting-async/#require-ensure-/)**，轻松实现路由组件的懒加载。