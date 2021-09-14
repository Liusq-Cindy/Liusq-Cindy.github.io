## 一、节流(throttle)与防抖（debounce）的含义

**节流：**

指连续触发事件但是在 n 秒中只执行一次函数。即 2n 秒内执行 2 次，3n秒内执行3次... 。节流如字面意思，会稀释函数的执行频率。

使用场景：dom元素拖拽，搜索联想等等

**防抖：**

连续的事件响应我们在n秒内只执行一次回调。如n秒内触发6次，只在最后一次再执行回调。

使用场景：文本输入验证

## 二、简单实现

### 节流：

setTimeout版本：

```bash
function throttle1(fn, wait) {
    let timer = null;
    return function () {
      if (timer) {
        return;
      }
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null; // 或者clearTimeout（timer)清空定时器
      }, wait);
    };
  }
```

定时器版本：

```jsx
function throttle(fn,wait){
 // 首先获取调用throttle时的一个时间戳作为触发时时间，实现用闭包保存 pre 变量。
 var pre = Date.now();
 return function(){
     var now = Date.now(); 
     if( now - pre >= wait){ // 当当前时间-出发时时间大于等待时间后，触发fn函数执行
         fn.apply(this,arguments);
         pre = Date.now(); // 更新触发时间
     } else{
      //让方法在脱离事件后也能执行一次
        timeout = setTimeout(function(){
           fn.apply(this, arguments) 
        }, wait);
     }
  }
}
```

       由此可以实现，在wait时间范围内，只执行一次，下一个时间窗内，会再次触发。调用方式：比如在2秒后调用handleSth()方法： throttle(handleSth, 2000)

### 防抖：

```jsx
// 1、非立即执行版：一开始不触发delay秒后才会执行
function debounce(func, delay) {
  let timer = null;
  return function() {
   clearTimeout(timer);
   timer = setTimeout(() => {
    func.apply(this, arguments)
    // 具体分析可见：https://blog.csdn.net/weixin_44494811/article/details/103486637
   }, delay)
  }
}
 
// 2、立即执行版：一开始就触发，后面再触发不执行，delay秒后可以再触发
function debounce (func, delay) {
  let timer;
  return function(){
    clearTimeout(timer);
    let callNow = !timer
    timer = setTimeout(() => {
      timer = null;
    }, delay)
    if (callNow) {
      func.apply(this, arguments);
    }
  }
}

// 3、综合版
// 合成版
/**
   * @desc 函数防抖
   * @param func 目标函数
   * @param wait 延迟执行毫秒数
   * @param immediate true - 立即执行， false - 延迟执行
   */
  function debounce(func, wait, immediate) {
    let timer;
    return function() {
      let context = this,
          args = arguments;
      // 根据immediate参数配置是否立即执行
      if (timer) clearTimeout(timer);
      if (immediate) {
        let callNow = !timer;
        timer = setTimeout(() => {
          timer = null;
        }, wait);
        if (callNow) func.apply(context, args);
      } else {
        timer  = setTimeout(() => {
          func.apply
        }, wait)
      }
    }
}
```

### 拓展延伸

以上涉及的函数设计和思想可参考更详细的分解：[节流函数的原理和设计](https://www.cnblogs.com/zhangycun/p/10949450.html)、[关于闭包中变量的存储](https://blog.csdn.net/qq_41293573/article/details/99330608)

## 三、Lodash源码中的实现

lodash库中关于节流函数的实现，比简单的方法要成熟得多，首先，1、对引入的函数方法增加了类型判断：typeof function, 对配置也增加了对象类型判断：[isObject.js](https://github.com/Liusq-Cindy/lodash/blob/e0029485ab4d97adea0cb34292afb6700309cf16/isObject.js#L24) 2、对函数节流函数增加了更多的可配置化参数，比如设置个最长等待时间，不管如何先响应一次再防抖等等，避免用户看上次页面假死。

### 1、节流：

### _.throttle(func, [wait=0], [options=])

**参数**

1. `func` *(Function)*: 要节流的函数。
2. `[wait=0]` *(number)*: 需要节流的毫秒。
3. [options=] *(Object)*: 选项对象。
4. `[options.leading=true]` *(boolean)*: 指定调用在节流开始前。
5. `[options.trailing=true]` *(boolean)*: 指定调用在节流结束后。

主方法如下：

```jsx
function throttle(func, wait, options) {
  let leading = true
  let trailing = true
	// 首先判断传入的func是否是function类型
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
	// 判断配置参数是否是对象，并转换options.leading的类型为boolean
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }
  // 执行debouce方法，并传递参数
  return debounce(func, wait, {
    leading,
    trailing,
    'maxWait': wait
  })
}
```

### 2、防抖：

### _.debounce(func, [wait=0], [options=])#

**参数**

1. `func` *(Function)*: 要防抖动的函数。
2. `[wait=0]` *(number)*: 需要延迟的毫秒数。
3. [options=] *(Object)*: 选项对象。
4. `[options.leading=false]` *(boolean)*: 指定在延迟开始前调用。
5. `[options.maxWait]` *(number)*: 设置 `func` 允许被延迟的最大值。
6. `[options.trailing=true]` *(boolean)*: 指定在延迟结束后调用。

在lodash库中，对于节流和防抖的处理，核心内容是debouce方法，下面对这个debounce方法进行简单的分析

### 可配置化的debounce方法

```jsx
function debounce(func, wait, options) {
  let lastArgs,
    lastThis,
    maxWait, // 最大等待时间
    result, // 执行func
    timerId, // 定时器句柄
    lastCallTime // 上次触发的时间，比如不断scroll，为上次scroll的时间

  let lastInvokeTime = 0 // 上次执行func的时间
  let leading = false // 配置参数，是否第一次触发立即执行
  let maxing = false // 是否有最长等待时间
  let trailing = true // 是否在等待周期结束后执行传入的func函数

  // 如果wait没传，调用window.requestAnimationFrame()
  const useRAF = (!wait && wait !== 0 && typeof root.requestAnimationFrame === 'function')
	// 判断func是否是函数类型
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }

	// 从传入的options中取出参数并做一些类型转换
  wait = +wait || 0
  if (isObject(options)) {
    leading = !!options.leading
    maxing = 'maxWait' in options
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }

	// 定义函数invokeFunc：用户传入的func方法的执行函数，传入参数time，并更新lastInvokeTime记录上次执行invokeFunc的时间
  function invokeFunc(time) {
    const args = lastArgs
    const thisArg = lastThis

    lastArgs = lastThis = undefined
    lastInvokeTime = time
    result = func.apply(thisArg, args)
    return result
  }

	// 定义函数startTimer： 创建一个定时器，传参pendingFunc待执行函数，wait延迟多久后执行
  function startTimer(pendingFunc, wait) {
    if (useRAF) {
      root.cancelAnimationFrame(timerId)
      return root.requestAnimationFrame(pendingFunc)
    }
    return setTimeout(pendingFunc, wait)
  }

	// 定义函数cancelTimer： 清除创建的这个定时器：id句柄
  function cancelTimer(id) {
    if (useRAF) {
      return root.cancelAnimationFrame(id)
    }
    clearTimeout(id)
  }

  // 定义leadingEdge：防抖开始执行的函数，根据leading判断，如果true,立即执行
  function leadingEdge(time) {
    // 开始执行，则记录这个time为上次执行func的时间：lastInvokeTime
    lastInvokeTime = time
    // 开始创建定时器执行
    timerId = startTimer(timerExpired, wait)
    // 根据leading参数判断是否立即执行
    return leading ? invokeFunc(time) : result
  }

	// 根据传入的time,计算还需要等待的时间
  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime // 现在距离上次触发scroll的时间
    const timeSinceLastInvoke = time - lastInvokeTime // 现在距离上次执行func的时间
    const timeWaiting = wait - timeSinceLastCall // wait延迟时间 - 距离上次触发scroll的时间
    return maxing
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting 
		// 如果设置了最大等待时间，则还需等待：（延迟时间wait - 已经等候时间，最大等待时间-上次执行func剩余的时间）两者取较小值
		// 否则，还需等待 wait - 已经等候时间
  }

// 根据传入的time判断是否应该执行func函数
  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime // 上次触发
    const timeSinceLastInvoke = time - lastInvokeTime // 上次执行

   // 四种情况执行：
			// 1、第一次触发，lastCallTime为undefined
			// 2、距离上次触发已经大于延迟时间了
			// 3、当前-上次触发<0,特殊情况，比如原本是2020，修改了系统时间为2018
			// 4、距离上次执行的时间> 最长等待时间了
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait))
  }

	// 防抖核心，判断是执行函数，还是继续设置定时器
  function timerExpired() {
    const time = Date.now()
    if (shouldInvoke(time)) { // 根据当前时间，判断是否应该执行，如果是，执行func
      return trailingEdge(time)
    }
    // 否则，重置定时器，将剩余的时间传入
    timerId = startTimer(timerExpired, remainingWait(time))
  }

	// 执行func的判断函数
  function trailingEdge(time) {
    timerId = undefined

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time)
    }
    lastArgs = lastThis = undefined
    return result
  }

// 取消防抖
  function cancel() {
    if (timerId !== undefined) {
      cancelTimer(timerId)
    }
    lastInvokeTime = 0
    lastArgs = lastCallTime = lastThis = timerId = undefined
  }
  // 直接执行
  function flush() {
    return timerId === undefined ? result : trailingEdge(Date.now())
  }

	// 判断是否在等待中
  function pending() {
    return timerId !== undefined
  }

// 入口函数
  function debounced(...args) {
    const time = Date.now()
    const isInvoking = shouldInvoke(time) // 根据当前时间判断是否应该执行func函数

    lastArgs = args
    lastThis = this
    lastCallTime = time

    if (isInvoking) {
			// 如果定时器还未创建，创建定时器按照所设置的是否立即执行去执行
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }
			// 如果设置了最长等待时间，创建定时器，返回func的执行方法
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = startTimer(timerExpired, wait)
        return invokeFunc(lastCallTime)
      }
    }
		// 如果还没有创建定时器，创建定时器
    if (timerId === undefined) {
      timerId = startTimer(timerExpired, wait)
    }
    return result
  }
  debounced.cancel = cancel
  debounced.flush = flush
  debounced.pending = pending
  return debounced
}

export default debounce
```

基于以上debounce的基础，其实lodash中，对节流的的实现，就是传了一个maxWait参数（ `func` 允许被延迟的最大值）为wait （延迟数），它的结果是如果连续不断触发则每隔 wait 秒执行一次func。

参考文章：[防抖和节流概念理解—timeline图](https://zhuanlan.zhihu.com/p/38313717)、[lodash源码赏析](https://blog.csdn.net/weixin_33701564/article/details/88703489?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-8.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-8.control)