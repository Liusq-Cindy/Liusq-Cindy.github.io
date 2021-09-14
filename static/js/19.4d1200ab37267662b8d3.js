webpackJsonp([19],{Nea1:function(s,a,t){s.exports=t("jDfc")},jDfc:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("p",[t("a",{attrs:{href:"https://blog.csdn.net/wo_921110/article/details/107546829"}},[s._v("手写一个Vue.js响应式框架_任性的wo的博客-CSDN博客_手写vue框架")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/canfoo/p/6891868.html"}})]),s._v(" "),t("h1",[s._v("一、起步")]),s._v(" "),t("h2",[s._v("1、简单模拟vue的数据双向绑定：Object.defineProperty + get+set")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" data = {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("msg")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v('"hello"')]),s._v("\n}\n \n"),t("span",{staticClass:"hljs-comment"},[s._v("// 模拟Vue的实例")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" vm = {}\n \n"),t("span",{staticClass:"hljs-comment"},[s._v("//数据劫持：当访问或者设置vm中的成员的时候，做一些干预操作")]),s._v("\n"),t("span",{staticClass:"hljs-built_in"},[s._v("Object")]),s._v(".defineProperty(vm, "),t("span",{staticClass:"hljs-string"},[s._v('"msg"')]),s._v(", {\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 可枚举（可遍历）")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("enumerable")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 可配置（可以使用delete删除，可以通过defineProperty重新定义）")]),s._v("\n    "),t("span",{staticClass:"hljs-attr"},[s._v("configurable")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 当获取值的时候执行")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("get")]),s._v(" () {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" data.msg\n    }\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 当设置值的时候执行")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("set")]),s._v(" (newValue) {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (newValue === data.msg) {\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n        }\n        data.msg = newValue\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 数据更新，更新DOM的值")]),s._v("\n        "),t("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".querySelector("),t("span",{staticClass:"hljs-string"},[s._v("'#app'")]),s._v(").textContent = data.msg\n    }\n})\n")])]),s._v(" "),t("h2",[s._v("2、如果一个对象中多个属性需要转换getter/setter如何处理？")]),s._v(" "),t("p",[s._v("思路：在上述的条件中，不是直接针对一个属性，而是嵌套一层，添加一个方法遍历data中的所有属性，然后对每一个属性都绑定到这个vm的vue实例上，通过Object.defineProoerty(vm，key,{})设置get和set的读写操作")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("proxyData")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("data")]),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 遍历data中的所有属性")]),s._v("\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("Object")]),s._v(".keys(data).forEach("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("key")]),s._v(" =>")]),s._v(" {\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 把data的属性，转换成vm中的 setter/getter")]),s._v("\n        "),t("span",{staticClass:"hljs-built_in"},[s._v("Object")]),s._v(".defineProperty(vm, key, {\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// 可枚举（可遍历）")]),s._v("\n            "),t("span",{staticClass:"hljs-attr"},[s._v("enumerable")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// 可配置（可以使用delete删除，可以通过defineProperty重新定义）")]),s._v("\n            "),t("span",{staticClass:"hljs-attr"},[s._v("configurable")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// 当获取值的时候执行")]),s._v("\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("get")]),s._v(" () {\n                "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" data[key]\n            }\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// 当设置值的时候执行")]),s._v("\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("set")]),s._v(" (newValue) {\n                "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (newValue ===  data[key]) {\n                    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n                }\n                 data[key] = newValue\n                "),t("span",{staticClass:"hljs-comment"},[s._v("// 数据更新，更新DOM的值")]),s._v("\n                "),t("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".querySelector("),t("span",{staticClass:"hljs-string"},[s._v("'#app'")]),s._v(").textContent = data.msg\n            }\n        })\n    })\n}\n")])]),s._v(" "),t("h2",[s._v("3、vue3中，不用Object.defineproperty的方式，改用Proxy，怎么实现？")]),s._v(" "),t("p",[s._v("思路：proxy可以直接监听这个data对象，而不用想defineproperty的方式去监听每一个属性，只是在外层实现上加了一些改变")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-comment"},[s._v("// 模拟Vue中的 data选项")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" data = {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("msg")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'hello'")]),s._v(",\n    "),t("span",{staticClass:"hljs-attr"},[s._v("count")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n}\n \n"),t("span",{staticClass:"hljs-comment"},[s._v("// 模拟Vue实例")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" vm = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Proxy")]),s._v("(data, {\n     "),t("span",{staticClass:"hljs-comment"},[s._v("// 执行代理行为的函数")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 当访问vm的成员会执行")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("get")]),s._v(" (target, key) {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" target[key]\n    }\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 当设置vm的成员时会执行")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("set")]),s._v(" (target, key, newValue) {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (target[key] === newValue) {\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n        }\n        target[key] = newValue\n        "),t("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".querySelector("),t("span",{staticClass:"hljs-string"},[s._v("'#app'")]),s._v(").textContent = target[key]\n    }\n})\n")])]),s._v(" "),t("p",[s._v("另外需了解一下发布订阅模式和观察者模式")]),s._v(" "),t("h1",[s._v("二、整体来看")]),s._v(" "),t("p",[t("strong",[s._v("看一张图片")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8005dc5a-1c29-4087-855c-59d2cdc1301c/Untitled.png",alt:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8005dc5a-1c29-4087-855c-59d2cdc1301c/Untitled.png"}})]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("Vue")]),s._v(" "),t("ul",[t("li",[s._v("负责把data中的属性注入到Vue实例，转换成getter/setter")]),s._v(" "),t("li",[s._v("负责调用observer监听data中所有属性的变化")]),s._v(" "),t("li",[s._v("负责调用compliler解析指令/差值表达式")])])]),s._v(" "),t("li",[t("strong",[s._v("Observer")]),s._v(" "),t("ul",[t("li",[s._v("负责把data选项中的属性转换成响应式数据")]),s._v(" "),t("li",[s._v("data中的某个属性也是对象，把该属性转换成响应式数据")]),s._v(" "),t("li",[s._v("数据变化发生通知Dep")])])]),s._v(" "),t("li",[t("strong",[s._v("Compiler")]),s._v(" "),t("ul",[t("li",[s._v("负责编译模板，解析指令/差值表达式")]),s._v(" "),t("li",[s._v("负责页面的首次渲染")]),s._v(" "),t("li",[s._v("当数据变化后重新渲染视图")])])]),s._v(" "),t("li",[t("strong",[s._v("Dep")]),s._v(" "),t("ul",[t("li",[s._v("收集依赖，添加观察者(watcher)")]),s._v(" "),t("li",[s._v("通知所有观察者")])])]),s._v(" "),t("li",[t("strong",[s._v("Watcher")]),s._v(" "),t("ul",[t("li",[s._v("当数据变化触发依赖，dep通知所有的Watcher实例更新视图")]),s._v(" "),t("li",[s._v("自身实例化的时候往dep对象中添加自己")])])])]),s._v(" "),t("p",[t("strong",[s._v("一个个来看看他的实现方式：")])]),s._v(" "),t("h2",[s._v("1、Vue")]),s._v(" "),t("p",[s._v("就是前面写过的vue的数据双向绑定，options表示选项的数据，包括data、el元素等等。通过_proxyData对data中的属性进行转换")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-class"},[t("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Vue")]),s._v(" ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("constructor")]),s._v(" (options) {\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 1.通过属性保存选项的数据")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$options = options || {}\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$data = options.data || {}\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$el = "),t("span",{staticClass:"hljs-keyword"},[s._v("typeof")]),s._v(" options.el === "),t("span",{staticClass:"hljs-string"},[s._v("'string'")]),s._v(" ? "),t("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".querySelector(options.el) : options.el\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 2.把data中的成员转换成getter/setter，注入到vue实例中")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("._proxyData("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$data)\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 3.调用observer对象，监听数据的变化")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 4.调用compiler对象，解析指令和差值表达式")]),s._v("\n  }\n  _proxyData (data) {\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 遍历data中的所有属性")]),s._v("\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("Object")]),s._v(".keys(data).forEach("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("key")]),s._v(" =>")]),s._v(" {\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 把data的属性注入到Vue实例")]),s._v("\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("Object")]),s._v(".defineProperty("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(", key, {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("enumerable")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("configurable")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("get")]),s._v(" () {\n          "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" data[key]\n        },\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("set")]),s._v(" (newValue) {\n          "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (newValue === data[key]) {\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" \n          }\n          data[key] = newValue\n        }\n      })\n    })\n  }\n}\n")])]),s._v(" "),t("h2",[s._v("2、Observer")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-class"},[t("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Observer")]),s._v(" ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("constructor")]),s._v(" (data) {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".walk(data)\n  }\n  walk (data) {\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 1. 判断data是否是对象")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("(!data || "),t("span",{staticClass:"hljs-keyword"},[s._v("typeof")]),s._v(" data !== "),t("span",{staticClass:"hljs-string"},[s._v("'object'")]),s._v(") {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n    }\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 2.遍历data对象的所有属性")]),s._v("\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("Object")]),s._v(".keys(data).forEach("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("key")]),s._v(" =>")]),s._v(" {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".defineReactive(data, key, data[key])\n    })\n  }\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 3.给属性绑定get\\set")]),s._v("\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 实现当data的属性重新赋值新对象时，该对象的属性也会被转换为响应式的")]),s._v("\n defineReactive (obj, key, val) {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" that = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 如果val是对象，把val内部的属性转换成响应式数据")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".walk(val) "),t("span",{staticClass:"hljs-comment"},[s._v("// 迭代")]),s._v("\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("Object")]),s._v(".defineProperty(obj, key, {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("enumerable")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("configurable")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("get")]),s._v(" () {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" val "),t("span",{staticClass:"hljs-comment"},[s._v("// 使用闭包来扩展了val的作用域")]),s._v("\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// return obj[key] ---每次调用都会传递obj[key],会出现堆栈溢出的错误")]),s._v("\n      },\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("set")]),s._v(" (newValue) {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (newValue === val) {\n          "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n        }\n        val = newValue\n        that.walk(newValue)\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 发送通知")]),s._v("\n      }\n    })\n  }\n}\n")])]),s._v(" "),t("h2",[s._v("3、Compile")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-comment"},[s._v("// 编译模板，处理文本节点和元素节点")]),s._v("\n  compile (el) {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" childNodes = el.childNodes\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("Array")]),s._v(".from(childNodes).forEach("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("node")]),s._v(" =>")]),s._v(" {\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 处理文本节点")]),s._v("\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".isTextNode(node)) {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".compileText(node)\n      } "),t("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".isElementNode(node)) {\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// 处理元素节点")]),s._v("\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".compileElement(node)\n      }\n \n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 判断node节点，是否有子节点，如果有子节点，要递归调用compile")]),s._v("\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (node.childNodes && node.childNodes.length) {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".compile(node)\n      }\n    })\n  }\n\ncompileText\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 编译文本节点，处理差值表达式")]),s._v("\n  compileText (node) {\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// console.dir(node)")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// "),t("span",[s._v("{{")]),s._v(" msg "),t("span",[s._v("}}")]),s._v(" ")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" reg = "),t("span",{staticClass:"hljs-regexp"},[s._v("/\\{\\{(.+?)\\}\\}/")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" value = node.textContent\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (reg.test(value)) {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" key = "),t("span",{staticClass:"hljs-built_in"},[s._v("RegExp")]),s._v(".$"),t("span",{staticClass:"hljs-number"},[s._v("1.")]),s._v("trim()\n      node.textContent = value.replace(reg, "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".vm[key])\n    }\n  }\n")])]),s._v(" "),t("p",[s._v("compileElement的实现")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-comment"},[s._v("// 编译元素节点，处理指令")]),s._v("\n  compileElement (node) {\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// console.log(node.attributes)")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 遍历所有的属性节点")]),s._v("\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("Array")]),s._v(".from(node.attributes).forEach("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("attr")]),s._v(" =>")]),s._v(" {\n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 判断是否是指令")]),s._v("\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" attrName = attr.name\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".isDirective(attrName)) {\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// v-text --\x3e text")]),s._v("\n        attrName = attrName.substr("),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(")\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" key = attr.value\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".update(node, key, attrName)\n      }\n    })\n  }\n  update (node, key, attrName) {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" updateFn = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("[attrName + "),t("span",{staticClass:"hljs-string"},[s._v('"Updater"')]),s._v("]\n    updateFn && updateFn(node, "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".vm[key])\n  }\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 处理 v-text指令")]),s._v("\n  textUpdater (node, value) {\n    node.textContent = value\n  }\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// v-model")]),s._v("\n  modelUpdater (node, value) {\n    node.value = value\n  }\n")])]),s._v(" "),t("h2",[s._v("4、Dep")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-class"},[t("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Dep")]),s._v(" ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("constructor")]),s._v(" () {\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 存储所有的观察者")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".subs = []\n  }\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 添加观察者")]),s._v("\n  addSub (sub) {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (sub && sub.update) {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".subs.push(sub)\n    }\n  }\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 发送通知")]),s._v("\n  notify () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".subs.forEach("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("sub")]),s._v(" =>")]),s._v(" {\n      sub.update()\n    })\n  }\n}\n")])]),s._v(" "),t("p",[s._v("由此，我们的observer可以写成如下的样子")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[s._v("defineReactive (obj, key, val) {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" that = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 负责收集依赖，并发送通知")]),s._v("\n    **"),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" dep = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Dep()**\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 如果val是对象，把val内部的属性转换成响应式数据")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".walk(val)\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("Object")]),s._v(".defineProperty(obj, key, {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("enumerable")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n      "),t("span",{staticClass:"hljs-attr"},[s._v("configurable")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("get")]),s._v(" () {\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// get时收集依赖")]),s._v("\n        Dep.target && dep.addSub(Dep.target) "),t("span",{staticClass:"hljs-comment"},[s._v("// get时dep就添加观察者")]),s._v("\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" val "),t("span",{staticClass:"hljs-comment"},[s._v("// 使用闭包来扩展了val的作用域")]),s._v("\n      },\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("set")]),s._v(" (newValue) {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (newValue === val) {\n          "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n        }\n        val = newValue\n        that.walk(newValue)\n        "),t("span",{staticClass:"hljs-comment"},[s._v("// set时发送通知")]),s._v("\n        dep.notify() "),t("span",{staticClass:"hljs-comment"},[s._v("// set时调用dep的notify发送通知,在dep中会触发所有subs更新update()")]),s._v("\n      }\n    })\n  }\n")])]),s._v(" "),t("h2",[s._v("5、Watcher")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4494529-6143-4b86-b92e-4de92e379c7a/Untitled.png",alt:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4494529-6143-4b86-b92e-4de92e379c7a/Untitled.png"}})]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-class"},[t("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Watcher")]),s._v(" ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("constructor")]),s._v(" (vm, key, cb) {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".vm = vm\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// data中的属性名称")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".key = key\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 回调函数负责更新视图")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".cb = cb\n \n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 把watcher对象记录到Dep类的静态属性target")]),s._v("\n    Dep.target = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 触发get方法，在get方法中会调用addSub")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".oldValue = vm[key]\n    Dep.target = "),t("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v("\n  }\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 当数据发送变化的时候更新视图")]),s._v("\n  update () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" newValue = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".vm["),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".key]\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".oldValue === newValue) {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n    }\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".cd(newValue)\n  }\n}\n")])]),s._v(" "),t("p",[s._v("由此我们的compile可修改为：")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-comment"},[s._v("// 编译文本节点，处理差值表达式")]),s._v("\n  compileText (node) {\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// console.dir(node)")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// "),t("span",[s._v("{{")]),s._v(" msg "),t("span",[s._v("}}")]),s._v(" ")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" reg = "),t("span",{staticClass:"hljs-regexp"},[s._v("/\\{\\{(.+?)\\}\\}/")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" value = node.textContent\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (reg.test(value)) {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" key = "),t("span",{staticClass:"hljs-built_in"},[s._v("RegExp")]),s._v(".$"),t("span",{staticClass:"hljs-number"},[s._v("1.")]),s._v("trim()\n      node.textContent = value.replace(reg, "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".vm[key])\n \n      "),t("span",{staticClass:"hljs-comment"},[s._v("// 创建watcher对象，当数据改变更新视图")]),s._v("\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Watcher ("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".vm, key, (newValue) => {\n        node.textContent = newValue\n      })\n    }\n  }\n\nupdate (node, key, attrName) {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" updateFn = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("[attrName + "),t("span",{staticClass:"hljs-string"},[s._v('"Updater"')]),s._v("]\n    updateFn && updateFn.call("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(", node, "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".vm[key], key)\n  }\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 处理 v-text指令")]),s._v("\n  textUpdater (node, value, key) {\n    node.textContent = value\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Watcher("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".vm, key, (newValue) => {\n      node.textContent = newValue\n    })\n  }\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// v-model")]),s._v("\n  modelUpdater (node, value, key) {\n    node.value = value\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Watcher("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".vm, key, (newValue) => {\n      node.value = newValue\n    })\n  }\n")])]),s._v(" "),t("p",[t("strong",[s._v("双向绑定：就是在上述基础上，加一个监听input事件即可")])]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-comment"},[s._v("// v-model")]),s._v("\n  modelUpdater (node, value, key) {\n    node.value = value\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Watcher("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".vm, key, (newValue) => {\n      node.value = newValue\n    })\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 双向绑定")]),s._v("\n    node.addEventListener("),t("span",{staticClass:"hljs-string"},[s._v("'input'")]),s._v(", () => {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".vm[key] = node.value\n    })\n  }\n")])])])}]},e=t("VU/8")(null,n,!1,null,null,null);a.default=e.exports}});
//# sourceMappingURL=19.4d1200ab37267662b8d3.js.map