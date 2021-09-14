# 简介

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 `store`（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。

（1）Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

（2）改变 store 中的状态的唯一途径就是`显式地提交 (commit) mutation`。这样使得我们可以方便地跟踪每一个状态的变化。

### 主要包括以下几个模块：

- State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。
- Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。
- Mutation：是唯一更改 store 中状态的方法，且`必须是同步函数`。
- Action： @用于提交 mutation，而不是直接变更状态，可以包含任意`异步操作`。
- Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。

# 常见问题QA

1. vuex是什么？什么场景使用？
2. vuex有哪几种属性？
3. Vuex中actions和mutations的区别

## 1、vuex是什么？什么场景使用？

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。简单来说就是：应用遇到多个组件共享状态时，使用vuex。

场景：多个组件共享数据或者是跨组件传递数据时

vuex的流程

页面通过mapAction异步提交事件到action。action通过commit把对应参数同步提交到mutation，mutation会修改state中对应的值。最后通过getter把对应值跑出去，在页面的计算属性中，通过，mapGetter来动态获取state中的值

## 2、vuex有哪几种属性？

有五种,分别是State , Getter , Mutation , Action , Module (就是mapAction)

1. state：vuex的基本数据，用来存储变量

2. getter：从基本数据(state)派生的数据，相当于state的计算属性

3. mutation：提交更新数据的方法，必须是同步的(如果需要异步使用action)。每个mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数，提交载荷作为第二个参数。

4. action：和mutation的功能大致相同，不同之处在于 ==》1. Action 提交的是 mutation，而不是直接变更状态。 2. Action 可以包含任意异步操作。

5. modules：模块化vuex，可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。

## 3、Vuex中actions和mutations的区别

### Mutation

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数

```jsx
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})
```

### Action

Action 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。 .

```jsx
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
```