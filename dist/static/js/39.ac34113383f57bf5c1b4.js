webpackJsonp([39],{"4MPC":function(s,a,t){s.exports=t("XAbl")},XAbl:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("p",[s._v("参考文章：")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/68aad73963e8?utm_campaign=maleskine"}},[s._v("JS常见手写代码题（一）")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/vickylinj/p/14427534.html"}},[s._v("【javascript】手写call,apply,bind函数")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/weixin_45844049/article/details/118026630?utm_medium=distribute.wap_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0.wap_blog_relevant_pic"}},[s._v("手写 实现call、apply和bind方法 超详细！！！_前端圆圆-CSDN博客")])]),s._v(" "),t("p",[s._v("以下为一些常见的js手写代码系列")]),s._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://www.notion.so/JS-1-1a766bb7ad8242b8953ac65a863b4c08"}},[s._v("call")])]),s._v(" "),t("li",[t("strong",[t("a",{attrs:{href:"https://www.notion.so/JS-1-1a766bb7ad8242b8953ac65a863b4c08"}},[s._v("apply")])])]),s._v(" "),t("li",[t("strong",[t("a",{attrs:{href:"https://www.notion.so/JS-1-1a766bb7ad8242b8953ac65a863b4c08"}},[s._v("bind")])])]),s._v(" "),t("li",[t("strong",[t("a",{attrs:{href:"https://www.notion.so/JS-1-1a766bb7ad8242b8953ac65a863b4c08"}},[s._v("new")])])]),s._v(" "),t("li",[t("strong",[s._v("数组扁平化")])]),s._v(" "),t("li",[t("strong",[s._v("数组去重")])]),s._v(" "),t("li",[t("strong",[s._v("原型继承")])])]),s._v(" "),t("h1",[s._v("一、JS实现一个call")]),s._v(" "),t("p",[t("strong",[s._v("方法或函数fun.call(obj, 参数1，参数2，...)，第一个值是改变this指向到obj，后面是参数队列，调用call立即执行方法fun")])]),s._v(" "),t("h3",[s._v("call的定义和用法")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-comment"},[s._v("// call方法第一个参数指的是this的指向；接受一个参数列表;方法立即执行")]),s._v("\n"),t("span",{staticClass:"hljs-comment"},[s._v("// Function.prototype.call()样例")]),s._v("\n"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("fun")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("arg1, arg2")]),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".name)\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(arg1 + arg2)\n}\n"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" _this = { "),t("span",{staticClass:"hljs-attr"},[s._v("name")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'YIYING'")]),s._v(" }\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 这里把fun里的this，指向对象_this，然后立即执行，由此才可以输出YIYING")]),s._v("\nfun.call(_this, "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(")\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 输出")]),s._v("\nYIYING\n"),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("\n")])]),s._v(" "),t("h3",[s._v("手写实现call")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[s._v("Funcion.prototype.mockCall = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("context = window, ...args")]),s._v(") ")]),s._v("{\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" key = "),t("span",{staticClass:"hljs-built_in"},[s._v("Symbol")]),s._v("()\n\tcontext[key] = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" result = context[key](...args)\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("delete")]),s._v(" context[key]\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" result\n}\n或者：\n"),t("span",{staticClass:"hljs-built_in"},[s._v("Function")]),s._v(".prototype.myCall = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("context")]),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ("),t("span",{staticClass:"hljs-keyword"},[s._v("typeof")]),s._v(" context === "),t("span",{staticClass:"hljs-string"},[s._v('"undefined"')]),s._v(" || context === "),t("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v(") {\n        context = "),t("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v("\n    }\n   "),t("span",{staticClass:"hljs-comment"},[s._v("//context=context||window  和上面的代码一样")]),s._v("\n    context.fn = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),t("span",{staticClass:"hljs-comment"},[s._v("//(因为call的调用方式形如：myFun.call(obj)，")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 因此此时call方法的this指向为myFun，因此context.fn = this即为context.fn = myFun)")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" args = [...arguments].slice("),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(")"),t("span",{staticClass:"hljs-comment"},[s._v("//第一个参数为context，要去除")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" result = context.fn(...args)\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("delete")]),s._v(" context.fn\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" result\n}\n")])]),s._v(" "),t("h3",[s._v("实现分析")]),s._v(" "),t("ul",[t("li",[s._v("首先context为可选参数，如果不传的话默认上下文是window")]),s._v(" "),t("li",[s._v("接下来给content创建一个独一无二的属性(Symbol表示)，并将值设置为需要调用的函数")]),s._v(" "),t("li",[s._v("因为call可以传入多个参数作为调用函数的参数，这里用的...扩展运算符")]),s._v(" "),t("li",[s._v("然后调用函数并将对象上的函数删除")])]),s._v(" "),t("h1",[s._v("二、JS实现一个apply")]),s._v(" "),t("p",[t("strong",[s._v("方法或函数fun.apply(obj, [参数1，参数2，...])，改变this指向到obj，立即执行方法fun")])]),s._v(" "),t("p",[s._v("apply接受两个参数，第一个参数是要"),t("strong",[s._v("绑定给this的值")]),s._v("，第二个参数是一个**参数数组。**apply和call实现类似，不同的就是参数的处理")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-built_in"},[s._v("Function")]),s._v(".protoType.mockApply = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("context = window, args")]),s._v(") ")]),s._v("{\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" key = "),t("span",{staticClass:"hljs-built_in"},[s._v("Symbol")]),s._v("()\n\tcontext[key] = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" result = context[key](...args)\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("delete")]),s._v(" context[key]\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" result\n}\n")])]),s._v(" "),t("h1",[s._v("三、JS实现一个bind")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/u010176097/article/details/80348447"}},[s._v("【一篇终结你的困惑】JavaScript中call()、apply()、bind()的区别_Linda的前端开发路-CSDN博客")])]),s._v(" "),t("h3",[s._v("用法：")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".x = "),t("span",{staticClass:"hljs-number"},[s._v("9")]),s._v(";\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("module")]),s._v(" = {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("x")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("81")]),s._v(",\n  "),t("span",{staticClass:"hljs-attr"},[s._v("getX")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{ "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".x; }\n};\n\n"),t("span",{staticClass:"hljs-built_in"},[s._v("module")]),s._v(".getX(); "),t("span",{staticClass:"hljs-comment"},[s._v("// 81")]),s._v("\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" retrieveX = "),t("span",{staticClass:"hljs-built_in"},[s._v("module")]),s._v(".getX;\nretrieveX();  "),t("span",{staticClass:"hljs-comment"},[s._v("// 9")]),s._v("\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" boundGetX = retrieveX.bind("),t("span",{staticClass:"hljs-built_in"},[s._v("module")]),s._v(");\nboundGetX(); "),t("span",{staticClass:"hljs-comment"},[s._v("// 81  返回的是方法")]),s._v("\n")])]),s._v(" "),t("p",[s._v("Function.prototype.bind 第一个参数是"),t("strong",[s._v("this的指向")]),s._v("，从第二个参数开始是"),t("strong",[s._v("接收的参数列表")]),s._v("。和call的区别在于bind方法返回值是函数以及bind接收的参数列表的使用。")]),s._v(" "),t("h3",[s._v("区别new的使用")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-comment"},[s._v("// bind的使用 区分普通调用和new调用")]),s._v("\n"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("A")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("a,b")]),s._v(")")]),s._v("{\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v("'this传入'")]),s._v("+"),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".name + "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".old + "),t("span",{staticClass:"hljs-string"},[s._v('"参数传入"')]),s._v(" + a + b)\n}\n"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" obj = {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("name")]),s._v(":"),t("span",{staticClass:"hljs-string"},[s._v('"Bill"')]),s._v(",\n    "),t("span",{staticClass:"hljs-attr"},[s._v("old")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v('"两岁"')]),s._v("\n}\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" bindFn = A.bind(obj,"),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(") "),t("span",{staticClass:"hljs-comment"},[s._v("// 修改this的作用域，返回一个函数")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" newFn = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" bindFn("),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v(") "),t("span",{staticClass:"hljs-comment"},[s._v("// 对bin的函数执行new操作符，打印 this传入undefinedundefined参数传入34")]),s._v("\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 当使用new时，相当于 newFn = new A(...args1,...args2),将new传入，与这个obj无关")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" doFn = bindFn("),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v(") "),t("span",{staticClass:"hljs-comment"},[s._v("// 调用函数，传入额外参数 打印 this传入Bill两岁参数传入35")]),s._v("\n")])]),s._v(" "),t("p",[s._v("实现思路：")]),s._v(" "),t("ul",[t("li",[s._v("利用闭包保存调用bind时的this，这时的this就是原函数")]),s._v(" "),t("li",[s._v("使用call/apply指定this")]),s._v(" "),t("li",[s._v("返回一个绑定函数")]),s._v(" "),t("li",[s._v("当返回的绑定函数被new运算符调用的时候，绑定的上下文指向new运算符创建的对象")]),s._v(" "),t("li",[s._v("将绑定函数的prototype修改为原函数的prototype")])]),s._v(" "),t("p",[s._v("无传参简易的版本")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-built_in"},[s._v("Function")]),s._v(".prototype.mockBind = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 将arguments类数组转成数组")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" args = "),t("span",{staticClass:"hljs-built_in"},[s._v("Array")]),s._v(".prototype.slice.call("),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v(");\n\t"),t("span",{staticClass:"hljs-comment"},[s._v("// 取出第一个对象和后面的参数")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" t = args.shift(); "),t("span",{staticClass:"hljs-comment"},[s._v("// args会删去第一项")]),s._v("\n\t"),t("span",{staticClass:"hljs-comment"},[s._v("// 保留this,这个this指向对应的原函数（调用bind的这个函数）")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" samp = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(";\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 返回一个函数,将原函数的this指向传入的t对象并返回这个函数")]),s._v("\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n\t\t"),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" samp.apply(t, args)\n\t}\n}\n")])]),s._v(" "),t("p",[s._v("或有传参的版本")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-built_in"},[s._v("Function")]),s._v(".protoType.mockBind = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("context = window, ...initArgs")]),s._v(") ")]),s._v("{\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" foo = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" bindFoo = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("...args")]),s._v(") ")]),s._v("{\n\t\t"),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("instanceof")]),s._v(" bindFoo){\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" foo(...initArgs, ...args)\n    }\n\t\t"),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" foo.call(context, ...initArgs, ...args)\n\t}\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" bindFoo\n}\n")])]),s._v(" "),t("p",[s._v("或")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-comment"},[s._v("// 参考：https://www.cnblogs.com/BoatGina/p/11220731.html")]),s._v("\n"),t("span",{staticClass:"hljs-built_in"},[s._v("Function")]),s._v(".prototype.mybind = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("context = window, ...argus")]),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" fn = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" fBound = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("...argus2")]),s._v(") ")]),s._v("{\n\t\t\t\t"),t("span",{staticClass:"hljs-comment"},[s._v("// 判断是否是new调用，整合传参")]),s._v("\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" fn.apply("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("instanceof")]),s._v(" fBound ? "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" : context, [...argus, ...argus2])\n    }\n    fBound.prototype = "),t("span",{staticClass:"hljs-built_in"},[s._v("Object")]),s._v(".create("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".prototype)\n\t\t"),t("span",{staticClass:"hljs-comment"},[s._v("// mybind 执行后返回的函数fBound修改prototype的时候，不应该影响到fn.prototype，两者应该是独立的。")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 所以源码使用了fBound.prototype = Object.create(this.prototype)， 而不是fBound.prototype = this.prototype。")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" fBound\n}\n")])]),s._v(" "),t("p",[t("strong",[s._v("其他版本：一步步优化：")])]),s._v(" "),t("p",[s._v("参考："),t("a",{attrs:{href:"https://www.cnblogs.com/echolun/p/12178655.html"}},[s._v("https://www.cnblogs.com/echolun/p/12178655.html")])]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[s._v("版本一：不支持传参\n"),t("span",{staticClass:"hljs-built_in"},[s._v("Function")]),s._v(".prototype.mockBind = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("ctx")]),s._v(")")]),s._v("{\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" fn = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n        fn.apply(ctx)\n    }  \n}\n版本二：处理参数\n"),t("span",{staticClass:"hljs-built_in"},[s._v("Function")]),s._v(".prototype.bind_ = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("ctx")]),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-comment"},[s._v("//第0位是this，所以得从第一位开始裁剪")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" args = "),t("span",{staticClass:"hljs-built_in"},[s._v("Array")]),s._v(".prototype.slice.call("),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" fn = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(";\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n        fn.apply(ctx, args);\n    };\n};\n版本三：支持柯里化\n"),t("span",{staticClass:"hljs-built_in"},[s._v("Function")]),s._v(".prototype.bind_ = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("ctx")]),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-comment"},[s._v("//第0位是this，所以得从第一位开始裁剪")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" args = "),t("span",{staticClass:"hljs-built_in"},[s._v("Array")]),s._v(".prototype.slice.call("),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" fn = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(";\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n        "),t("span",{staticClass:"hljs-comment"},[s._v("//二次调用我们也抓取arguments对象")]),s._v("\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" params = "),t("span",{staticClass:"hljs-built_in"},[s._v("Array")]),s._v(".prototype.slice.call("),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v(");\n        "),t("span",{staticClass:"hljs-comment"},[s._v("//注意concat的顺序")]),s._v("\n        fn.apply(ctx, args.concat(params));\n    };\n};\n版本四：完整实现，\n"),t("span",{staticClass:"hljs-built_in"},[s._v("Function")]),s._v(".prototype.bind_ = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("obj")]),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ("),t("span",{staticClass:"hljs-keyword"},[s._v("typeof")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" !== "),t("span",{staticClass:"hljs-string"},[s._v('"function"')]),s._v(") {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("throw")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Error")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v('"Function.prototype.bind - what is trying to be bound is not callable"')]),s._v(");\n    };\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" args = "),t("span",{staticClass:"hljs-built_in"},[s._v("Array")]),s._v(".prototype.slice.call("),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" fn = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(";\n    "),t("span",{staticClass:"hljs-comment"},[s._v("//创建中介函数")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" miFn = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{};\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" bound = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" params = "),t("span",{staticClass:"hljs-built_in"},[s._v("Array")]),s._v(".prototype.slice.call("),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v("); "),t("span",{staticClass:"hljs-comment"},[s._v("// 传入的额外参数")]),s._v("\n        "),t("span",{staticClass:"hljs-comment"},[s._v("//通过constructor判断调用方式，为true this指向实例，否则为obj")]),s._v("\n        fn.apply("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".constructor === fn ? "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" : obj, args.concat(params));\n        "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(");\n    };\n    "),t("span",{staticClass:"hljs-comment"},[s._v("// 维护原型关系--参考寄生组合式继承")]),s._v("\n    miFn.prototype = fn.prototype;\n    bound.prototype = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" miFn();\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" bound;\n};\n")])]),s._v(" "),t("p",[s._v("第一个参数是"),t("strong",[s._v("this的指向")]),s._v("，从第二个参数开始是"),t("strong",[s._v("接收的参数列表")]),s._v("。区别在于bind方法返回值是函数以及bind接收的参数列表的使用。")]),s._v(" "),t("h3",[s._v("完整实现原理："),t("a",{attrs:{href:"https://blog.csdn.net/q3254421/article/details/82999718"}},[s._v("https://blog.csdn.net/q3254421/article/details/82999718")])]),s._v(" "),t("h1",[s._v("四、手写一个new的实现")]),s._v(" "),t("h3",[s._v("正常使用new")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Dog")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("name")]),s._v(")")]),s._v("{\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".name = name\n\t\t"),t("span",{staticClass:"hljs-comment"},[s._v("// 如果构造函数做个改动，执行时返回一个对象，那么new 返回这个对象")]),s._v("\n\t\t "),t("span",{staticClass:"hljs-comment"},[s._v("// return {")]),s._v("\n\t\t "),t("span",{staticClass:"hljs-comment"},[s._v("//  name: 'gg'+ name")]),s._v("\n\t\t "),t("span",{staticClass:"hljs-comment"},[s._v("// }")]),s._v("\n}\nDog.prototype.sayName = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v("'名字'")]),s._v(", "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".name)\n}\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" dog1 = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Dog("),t("span",{staticClass:"hljs-string"},[s._v("'小狗'")]),s._v(")\ndog1.sayName() "),t("span",{staticClass:"hljs-comment"},[s._v("// 输出--名字 小狗")]),s._v("\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 如果加上了return这部分，那么dog1 = {name: 'gg小狗'},")]),s._v("\n"),t("span",{staticClass:"hljs-comment"},[s._v("// dog1.sayName会打印出：dog1.sayName is not a function")]),s._v("\n")])]),s._v(" "),t("p",[s._v("思考一下new 操作符做了哪些事情？")]),s._v(" "),t("ul",[t("li",[s._v("创建一个新对象")]),s._v(" "),t("li",[s._v("新对象会被执行 "),t("code",[s._v("__proto__")]),s._v("链接，关联到构造函数的"),t("code",[s._v(".prototype")]),s._v(" 属性上,即和构造函数用的一个原型，从而可调用原型上的方法")]),s._v(" "),t("li",[s._v("函数调用的this绑定到新对象上")]),s._v(" "),t("li",[s._v("如果函数没有返回其他对象，那么new表达式中的函数会调用自动返回这个新对象")])]),s._v(" "),t("h3",[s._v("手写new实现")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("mockNew")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("foo, ...args")]),s._v(") ")]),s._v("{\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ("),t("span",{staticClass:"hljs-keyword"},[s._v("typeof")]),s._v(" foo !== "),t("span",{staticClass:"hljs-string"},[s._v("'function'")]),s._v(") {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("throw")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Error")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'foo is not a constructor'")]),s._v(")\n  }\n\t"),t("span",{staticClass:"hljs-comment"},[s._v("// 基于obj的原型创建一个新的对象")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" newObj = "),t("span",{staticClass:"hljs-built_in"},[s._v("Object")]),s._v(".create(foo.prototype);\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 添加属性到新创建的newObj上, 并获取foo函数执行的结果.")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" result = foo.apply(newObj, rest);\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("typeof")]),s._v(" result === "),t("span",{staticClass:"hljs-string"},[s._v("'object'")]),s._v(" ? result : newObj;\n}\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v("的具体步骤\n"),t("span",{staticClass:"hljs-number"},[s._v("1.")]),s._v(" 创建一个空对象 "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" obj = {}\n"),t("span",{staticClass:"hljs-number"},[s._v("2.")]),s._v(" 修改obj.__proto__=Dog.prototype\n"),t("span",{staticClass:"hljs-number"},[s._v("3.")]),s._v(" 只改"),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("指向并且把参数传递过去,call和apply都可以\n"),t("span",{staticClass:"hljs-number"},[s._v("4.")]),s._v(" 根据规范，fn如果不返回数据或返回 "),t("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v(" 和 "),t("span",{staticClass:"hljs-literal"},[s._v("undefined")]),s._v(" ，则"),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v("会返回这个新对象obj，\n如果fn返回一个对象，那么优先返回fn的这个执行结果。\n参考：https:"),t("span",{staticClass:"hljs-comment"},[s._v("//juejin.cn/post/6844903937405878280")]),s._v("\n")])]),s._v(" "),t("h1",[s._v("五、数组扁平化")]),s._v(" "),t("h3",[s._v("方法一：es6 flat方法")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" arr = ["),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(",["),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v(",["),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("6")]),s._v(",["),t("span",{staticClass:"hljs-number"},[s._v("7")]),s._v("]]]]\narr.flat("),t("span",{staticClass:"hljs-literal"},[s._v("Infinity")]),s._v(") "),t("span",{staticClass:"hljs-comment"},[s._v("// [1,2,3,4,5,6,7]")]),s._v("\n")])]),s._v(" "),t("h3",[s._v("方法二：递归")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" flatArr = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("arr1")]),s._v(") ")]),s._v("{\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" newArr = [];\n  "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("getChild")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("arr")]),s._v(") ")]),s._v("{\n\t\t"),t("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v("("),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" i = "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; i<arr.length;i++) {\n\t\t\t"),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("(arr[i] "),t("span",{staticClass:"hljs-keyword"},[s._v("instanceof")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Array")]),s._v(" === "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(") {\n\t\t\t\tnewArr.push(arr[i])\n\t\t\t} "),t("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v(" {\n\t\t\t\tgetChild(arr[i])\n\t\t\t}\n\t\t}\n\t}\n\tgetChild(arr1);\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" newArr;\n}\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 调用：")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" a = [["),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("], ["),t("span",{staticClass:"hljs-number"},[s._v("6")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("7")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("8")]),s._v(", ["),t("span",{staticClass:"hljs-number"},[s._v("11")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("12")]),s._v(", ["),t("span",{staticClass:"hljs-number"},[s._v("12")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("13")]),s._v(",["),t("span",{staticClass:"hljs-number"},[s._v("14")]),s._v("]]], "),t("span",{staticClass:"hljs-number"},[s._v("10")]),s._v("]];\n"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v("'水电费'")]),s._v(", flatArr(a))\n"),t("span",{staticClass:"hljs-comment"},[s._v("// [1, 2, 2, 6, 7, 8, 11, 12, 12, 13, 14, 10]")]),s._v("\n")])]),s._v(" "),t("h3",[s._v("方法三：正则")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" res2 = "),t("span",{staticClass:"hljs-built_in"},[s._v("JSON")]),s._v(".stringify(arr).replace("),t("span",{staticClass:"hljs-regexp"},[s._v("/\\[|\\]/g")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(").split("),t("span",{staticClass:"hljs-string"},[s._v("','")]),s._v(");\nres2.map("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("item")]),s._v("=>")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("parseInt")]),s._v("(item))\n")])]),s._v(" "),t("h3",[s._v("方案四: toString方法")]),s._v(" "),t("p",[s._v('[1,[2,[3,[4,5,[6]]]]].toString = "1,2,3,4,5,6"')]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[s._v("*"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("* "),t("span",{staticClass:"hljs-title"},[s._v("flatArr")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("*arr1*")]),s._v(") ")]),s._v("{\n "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" ans = *arr1*.toString().split("),t("span",{staticClass:"hljs-string"},[s._v("','")]),s._v(");\n "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" ans.map(*item* *=>* +*item*)\n}\n")])]),s._v(" "),t("h1",[s._v("六、数组去重")]),s._v(" "),t("h3",[s._v("方法一：es6 Set")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" arr = ["),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v("]\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" newArr = "),t("span",{staticClass:"hljs-built_in"},[s._v("Array")]),s._v(".from("),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Set")]),s._v("(arr)); "),t("span",{staticClass:"hljs-comment"},[s._v("// [1,2,3,4,5]")]),s._v("\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 或者arr = [...set]      Array.from() 将伪数组转换为数组")]),s._v("\n")])]),s._v(" "),t("h3",[s._v("方法二：循环遍历数组")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("filterArr")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("arr")]),s._v(")")]),s._v("{\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" newArr = [];\n\tarr.forEach("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("item")]),s._v(" =>")]),s._v(" {\n\t\t"),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("(!newArr.includes(item)) { "),t("span",{staticClass:"hljs-comment"},[s._v("// 也可以是!newArr.indexOf(item)")]),s._v("\n\t\t\tnewArr.push(item)\n\t\t}\n\t})\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" newArr\n}\n")])]),s._v(" "),t("h3",[s._v("方法三：hash表")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" arr = ["),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("]\n"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("unique")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("arr")]),s._v(")")]),s._v("{\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" obj = {}\n    arr.forEach("),t("span",{staticClass:"hljs-function"},[s._v("("),t("span",{staticClass:"hljs-params"},[s._v("item")]),s._v(") =>")]),s._v(" {\n        obj[item] = "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n    })\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" keys = "),t("span",{staticClass:"hljs-built_in"},[s._v("Object")]),s._v(".keys(obj)\n    keys = keys.map("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("item")]),s._v(" =>")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("parseInt")]),s._v("(item)) "),t("span",{staticClass:"hljs-comment"},[s._v("// 转为数字")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" keys\n}\n"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(unique(arr))\n")])]),s._v(" "),t("h1",[s._v("七、原型继承（寄生组合继承）")]),s._v(" "),t("pre",[t("code",{staticClass:"language-jsx"},[s._v("这里只写寄生组合继承了，中间还有几个演变过来的继承但都有一些缺陷\n"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Parent")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".name = "),t("span",{staticClass:"hljs-string"},[s._v("'parent'")]),s._v(";\n}\n"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Child")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  Parent.call("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(");\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".type = "),t("span",{staticClass:"hljs-string"},[s._v("'children'")]),s._v(";\n}\nChild.prototype = "),t("span",{staticClass:"hljs-built_in"},[s._v("Object")]),s._v(".create(Parent.prototype);\nChild.prototype.constructor = Child;\n")])])])}]},l=t("VU/8")(null,n,!1,null,null,null);a.default=l.exports}});
//# sourceMappingURL=39.ac34113383f57bf5c1b4.js.map