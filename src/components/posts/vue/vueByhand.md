[手写一个Vue.js响应式框架_任性的wo的博客-CSDN博客_手写vue框架](https://blog.csdn.net/wo_921110/article/details/107546829)

[](https://www.cnblogs.com/canfoo/p/6891868.html)

# 一、起步

## 1、简单模拟vue的数据双向绑定：Object.defineProperty + get+set

```jsx
let data = {
    msg: "hello"
}
 
// 模拟Vue的实例
let vm = {}
 
//数据劫持：当访问或者设置vm中的成员的时候，做一些干预操作
Object.defineProperty(vm, "msg", {
    // 可枚举（可遍历）
    enumerable: true,
    // 可配置（可以使用delete删除，可以通过defineProperty重新定义）
    configurable: true,
    // 当获取值的时候执行
    get () {
        return data.msg
    }
    // 当设置值的时候执行
    set (newValue) {
        if (newValue === data.msg) {
            return
        }
        data.msg = newValue
        // 数据更新，更新DOM的值
        document.querySelector('#app').textContent = data.msg
    }
})
```

## 2、如果一个对象中多个属性需要转换getter/setter如何处理？

思路：在上述的条件中，不是直接针对一个属性，而是嵌套一层，添加一个方法遍历data中的所有属性，然后对每一个属性都绑定到这个vm的vue实例上，通过Object.defineProoerty(vm，key,{})设置get和set的读写操作

```jsx
function proxyData (data) {
    // 遍历data中的所有属性
    Object.keys(data).forEach(key => {
        // 把data的属性，转换成vm中的 setter/getter
        Object.defineProperty(vm, key, {
            // 可枚举（可遍历）
            enumerable: true,
            // 可配置（可以使用delete删除，可以通过defineProperty重新定义）
            configurable: true,
            // 当获取值的时候执行
            get () {
                return data[key]
            }
            // 当设置值的时候执行
            set (newValue) {
                if (newValue ===  data[key]) {
                    return
                }
                 data[key] = newValue
                // 数据更新，更新DOM的值
                document.querySelector('#app').textContent = data.msg
            }
        })
    })
}
```

## 3、vue3中，不用Object.defineproperty的方式，改用Proxy，怎么实现？

思路：proxy可以直接监听这个data对象，而不用想defineproperty的方式去监听每一个属性，只是在外层实现上加了一些改变

```jsx
// 模拟Vue中的 data选项
let data = {
    msg: 'hello',
    count: 0
}
 
// 模拟Vue实例
let vm = new Proxy(data, {
     // 执行代理行为的函数
    // 当访问vm的成员会执行
    get (target, key) {
        return target[key]
    }
    // 当设置vm的成员时会执行
    set (target, key, newValue) {
        if (target[key] === newValue) {
            return
        }
        target[key] = newValue
        document.querySelector('#app').textContent = target[key]
    }
})
```

另外需了解一下发布订阅模式和观察者模式

# 二、整体来看

**看一张图片**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8005dc5a-1c29-4087-855c-59d2cdc1301c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8005dc5a-1c29-4087-855c-59d2cdc1301c/Untitled.png)

- **Vue**
    - 负责把data中的属性注入到Vue实例，转换成getter/setter
    - 负责调用observer监听data中所有属性的变化
    - 负责调用compliler解析指令/差值表达式
- **Observer**
    - 负责把data选项中的属性转换成响应式数据
    - data中的某个属性也是对象，把该属性转换成响应式数据
    - 数据变化发生通知Dep
- **Compiler**
    - 负责编译模板，解析指令/差值表达式
    - 负责页面的首次渲染
    - 当数据变化后重新渲染视图
- **Dep**
    - 收集依赖，添加观察者(watcher)
    - 通知所有观察者
- **Watcher**
    - 当数据变化触发依赖，dep通知所有的Watcher实例更新视图
    - 自身实例化的时候往dep对象中添加自己

**一个个来看看他的实现方式：**

## 1、Vue

就是前面写过的vue的数据双向绑定，options表示选项的数据，包括data、el元素等等。通过_proxyData对data中的属性进行转换

```jsx
class Vue {
  constructor (options) {
    // 1.通过属性保存选项的数据
    this.$options = options || {}
    this.$data = options.data || {}
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
    // 2.把data中的成员转换成getter/setter，注入到vue实例中
    this._proxyData(this.$data)
    // 3.调用observer对象，监听数据的变化
    // 4.调用compiler对象，解析指令和差值表达式
  }
  _proxyData (data) {
    // 遍历data中的所有属性
    Object.keys(data).forEach(key => {
      // 把data的属性注入到Vue实例
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get () {
          return data[key]
        },
        set (newValue) {
          if (newValue === data[key]) {
            return 
          }
          data[key] = newValue
        }
      })
    })
  }
}
```

## 2、Observer

```jsx
class Observer {
  constructor (data) {
    this.walk(data)
  }
  walk (data) {
    // 1. 判断data是否是对象
    if(!data || typeof data !== 'object') {
      return
    }
    // 2.遍历data对象的所有属性
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }
// 3.给属性绑定get\set
// 实现当data的属性重新赋值新对象时，该对象的属性也会被转换为响应式的
 defineReactive (obj, key, val) {
    let that = this
    // 如果val是对象，把val内部的属性转换成响应式数据
    this.walk(val) // 迭代
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get () {
        return val // 使用闭包来扩展了val的作用域
        // return obj[key] ---每次调用都会传递obj[key],会出现堆栈溢出的错误
      },
      set (newValue) {
        if (newValue === val) {
          return
        }
        val = newValue
        that.walk(newValue)
        // 发送通知
      }
    })
  }
}
```

## 3、Compile

```jsx
// 编译模板，处理文本节点和元素节点
  compile (el) {
    let childNodes = el.childNodes
    Array.from(childNodes).forEach(node => {
      // 处理文本节点
      if(this.isTextNode(node)) {
        this.compileText(node)
      } else if (this.isElementNode(node)) {
        // 处理元素节点
        this.compileElement(node)
      }
 
      // 判断node节点，是否有子节点，如果有子节点，要递归调用compile
      if (node.childNodes && node.childNodes.length) {
        this.compile(node)
      }
    })
  }

compileText
// 编译文本节点，处理差值表达式
  compileText (node) {
    // console.dir(node)
    // {{ msg }} 
    let reg = /\{\{(.+?)\}\}/
    let value = node.textContent
    if (reg.test(value)) {
      let key = RegExp.$1.trim()
      node.textContent = value.replace(reg, this.vm[key])
    }
  }
```

compileElement的实现

```jsx
// 编译元素节点，处理指令
  compileElement (node) {
    // console.log(node.attributes)
    // 遍历所有的属性节点
    Array.from(node.attributes).forEach(attr => {
      // 判断是否是指令
      let attrName = attr.name
      if (this.isDirective(attrName)) {
        // v-text --> text
        attrName = attrName.substr(2)
        let key = attr.value
        this.update(node, key, attrName)
      }
    })
  }
  update (node, key, attrName) {
    let updateFn = this[attrName + "Updater"]
    updateFn && updateFn(node, this.vm[key])
  }
  // 处理 v-text指令
  textUpdater (node, value) {
    node.textContent = value
  }
  // v-model
  modelUpdater (node, value) {
    node.value = value
  }
```

## 4、Dep

```jsx
class Dep {
  constructor () {
    // 存储所有的观察者
    this.subs = []
  }
  // 添加观察者
  addSub (sub) {
    if (sub && sub.update) {
      this.subs.push(sub)
    }
  }
  // 发送通知
  notify () {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}
```

由此，我们的observer可以写成如下的样子

```jsx
defineReactive (obj, key, val) {
    let that = this
    // 负责收集依赖，并发送通知
    **let dep = new Dep()**
    // 如果val是对象，把val内部的属性转换成响应式数据
    this.walk(val)
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get () {
        // get时收集依赖
        Dep.target && dep.addSub(Dep.target) // get时dep就添加观察者
        return val // 使用闭包来扩展了val的作用域
      },
      set (newValue) {
        if (newValue === val) {
          return
        }
        val = newValue
        that.walk(newValue)
        // set时发送通知
        dep.notify() // set时调用dep的notify发送通知,在dep中会触发所有subs更新update()
      }
    })
  }
```

## 5、Watcher

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4494529-6143-4b86-b92e-4de92e379c7a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4494529-6143-4b86-b92e-4de92e379c7a/Untitled.png)

```jsx
class Watcher {
  constructor (vm, key, cb) {
    this.vm = vm
    // data中的属性名称
    this.key = key
    // 回调函数负责更新视图
    this.cb = cb
 
    // 把watcher对象记录到Dep类的静态属性target
    Dep.target = this
    // 触发get方法，在get方法中会调用addSub
    this.oldValue = vm[key]
    Dep.target = null
  }
  // 当数据发送变化的时候更新视图
  update () {
    let newValue = this.vm[this.key]
    if (this.oldValue === newValue) {
      return
    }
    this.cd(newValue)
  }
}
```

由此我们的compile可修改为：

```jsx
// 编译文本节点，处理差值表达式
  compileText (node) {
    // console.dir(node)
    // {{ msg }} 
    let reg = /\{\{(.+?)\}\}/
    let value = node.textContent
    if (reg.test(value)) {
      let key = RegExp.$1.trim()
      node.textContent = value.replace(reg, this.vm[key])
 
      // 创建watcher对象，当数据改变更新视图
      new Watcher (this.vm, key, (newValue) => {
        node.textContent = newValue
      })
    }
  }

update (node, key, attrName) {
    let updateFn = this[attrName + "Updater"]
    updateFn && updateFn.call(this, node, this.vm[key], key)
  }
  // 处理 v-text指令
  textUpdater (node, value, key) {
    node.textContent = value
    new Watcher(this.vm, key, (newValue) => {
      node.textContent = newValue
    })
  }
  // v-model
  modelUpdater (node, value, key) {
    node.value = value
    new Watcher(this.vm, key, (newValue) => {
      node.value = newValue
    })
  }
```

**双向绑定：就是在上述基础上，加一个监听input事件即可**

```jsx
// v-model
  modelUpdater (node, value, key) {
    node.value = value
    new Watcher(this.vm, key, (newValue) => {
      node.value = newValue
    })
    // 双向绑定
    node.addEventListener('input', () => {
      this.vm[key] = node.value
    })
  }
```