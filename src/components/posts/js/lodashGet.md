lodash中使用频率最高的，应该就是[_.get()](https://www.lodashjs.com/docs/lodash.get)方法去根据路径获取对象的值了。他的使用方式非常简单:

```jsx
_.get(object, path, [defaultValue])
// 根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。
```

这样我们可以使用如：_.get(object, 'a[0].c', 'default'); 获取对象n级路径下的值，如果中间路径值为空，返回默认值，以免直接使用a[0].c时因a[0]为undefind造成undefind.c报错。那么lodash中是如何实现_.get()方法的呢？

下面 Po 一段 lodash 中 _.get方法的实现（主要功能及解释）：

```jsx
// 1、主方法 get
function get(object, path, defaultValue) {
  // 判断object是否为null,如果不是，调用baseGet方法获取object的path路径下的值
  const result = object == null ? undefined : baseGet(object, path) 
 // 若结果是undefined，则返回默认值
  return result === undefined ? defaultValue : result
}

// 2、baseGet方法 获取对象路径下的值
function baseGet(object, path) {
	// castPath方法获取object的path
  **path = castPath(path, object)**

  let index = 0
  const length = path.length
  
	//如果object不为null且当前index < 路径的长度时，获取object的值,更新object
  **while (object != null && index < length) {
    object = object[toKey(path[index++])] // 将path数组中的值转为key
  }**
	// 最后一级，返回object或者返回 undefined
  return (index && index == length) ? object : undefined
}

// 以上涉及两个方法：（1）将castPath 获取 object中的path，转为数组
// （2）toKey 将path数组中对应的值转为key

// (1）castPath（path, object） 如castPath('a[b].c', object)
function castPath(value, object) {
  if (Array.isArray(value)) {
    return value // 如果value是个数组，直接返回
  }
  return isKey(value, object) ? [value] : stringToPath(value)
	// 其中，isKey方法判断value是不是object对象的获取key的合法路径，主要基于value的类型判断和正则匹配，具体可见[lodash的解释](https://github.com/Liusq-Cindy/lodash/blob/e0029485ab4d97adea0cb34292afb6700309cf16/.internal/isKey.js#L15)
	// stringTopath方法，则是将字符串形式的路径，转化为数组，如将'a[0].c.d' 利用正则和字符串api转化为 ['a',0,'c','d'],具体可见[github](https://github.com/Liusq-Cindy/lodash/blob/e0029485ab4d97adea0cb34292afb6700309cf16/.internal/isKey.js#L15)
}

//（2）toKey(path[index++]) 将path数组中对应的值转为key
const INFINITY = 1 / 0
function toKey(value) {
	// 如果数组中取到的key是字符串或isSymbol为true,则返回字符串
  if (typeof value === 'string' || isSymbol(value)) {
    return value
  }
	// 此外，判断+-0，或者返回value本身，如纯数字 
  const result = `${value}`
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result
}
```

以上为lodash中get方式获取path路径下的主流程，更多复杂的如isKey判断和字符串转path数组，可查看[github-get.js](https://github.com/Liusq-Cindy/lodash/blob/master/get.js)中具体的实现。

### 学习及感悟：

1、（1）每一级处理，都需要有判空的判断，避免流程阻断（3）对象获取下一级路径的值时，这里的while方法，要判断新的object是否为null；（3）在获取对象的下一级键值时，使用的是object[key]的方式，这样可以兼容获取a[2]及a['b']这两种形式。

2、学习isKey方法：判断 value 是否是Object的合法路径，并不是简单object[value]就能了事了

```jsx
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
const reIsPlainProp = /^\w*$/
function isKey(value, object) {
  if (isArray(value)) { // 数组，直接返回false
    return false;
  }
  var type = typeof value; // 对应的几种类型：number,symbol，boolean, null，还有isSymbol判断直接返回true
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
```

（1）、reIsPlainProp很好理解，\w 匹配字母或数字或下划线或汉字 等价于 ‘[A-Za-z0-9_]’，*表示0次或多次，即 reIsDeepProp.test(value) 表示value为任意数字及下划线

（2）、value in Object(object) 表示value是object的一个键值

（3）、reIsDeepProp正则表达式，用来匹配属性名里包含路径属性 例如什么. [] \这种