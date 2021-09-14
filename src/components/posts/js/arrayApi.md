- 前言：工作中涉及了很多数组的操作，以下一一罗列出常用的操作API及一些知识点，以供熟悉和查询，提高效率。更全面的数组API及Array构造器的方法见**[http://louiszhai.github.io/2017/04/28/array/](http://louiszhai.github.io/2017/04/28/array/)**

数组的API操作demo见 本地文件demo-self/math-api.html 或7.1math-api.html存到本地查看

## **总体划分**

数组原型的基本方法主要分为可改变自身值的、不会改变的和迭代方法。

### 1、基于ES6，改变自身值的方法一共有9个，分别为pop、push、reverse、shift、sort、splice、unshift，以及两个ES6新增的方法copyWithin 和 fill。

1. **pop()** 方法删除一个数组中的最后的一个元素，并且返回这个元素。
2. **push()**方法添加一个或者多个元素到数组末尾，并且返回数组新的长度。
3. **reverse()**方法颠倒数组中元素的位置，第一个会成为最后一个，最后一个会成为第一个，该方法返回对数组的引用。
4. **shift()**方法删除数组的第一个元素，并返回这个元素。
5. s**ort()**方法对数组元素进行排序，并返回这个数组。
6. **splice()**方法用新元素替换旧元素的方式来修改数组。
7. **unshift()** 方法用于在数组开始处插入一些元素(就像是栈底插入)，并返回数组新的长度。
8. **copyWithin()** 方法基于ES6，用于数组内元素之间的替换，即替换元素和被替换元素均是数组内的元素。
9. **fill()** 方法基于ES6，它同样用于数组元素替换，但与copyWithin略有不同，它主要用于将数组指定区间内的元素替换为某个值。

### 2、基于ES7，不会改变自身的方法一共有9个，分别为concat、join、slice、toString、toLocateString、indexOf、lastIndexOf、未标准的toSource以及ES7新增的方法includes。

1. **concat()** 方法将传入的数组或者元素与原数组合并，组成一个新的数组并返回。
2. **join()** 方法将数组中的所有元素连接成一个字符串。
3. **slice()** 方法将数组中一部分元素浅复制存入新的数组对象，并且返回这个数组对象。
4. **toString()** 方法返回数组的字符串形式，该字符串由数组中的每个元素的 toString() 返回值经调用 join() 方法连接（由逗号隔开）组成
5. **toLocaleString()** 类似toString()的变型，该字符串由数组中的每个元素的 toLocaleString() 返回值经调用 join() 方法连接（由逗号隔开）组成
6. **indexOf()** 方法用于查找元素在数组中第一次出现时的索引，如果没有，则返回-1。
7. **astIndexOf()** 方法用于查找元素在数组中最后一次出现时的索引，如果没有，则返回-1。并且它是indexOf的逆向查找，即从数组最后一个往前查找。
8. **includes()** 方法基于es7，它用来判断当前数组是否包含某个指定的值，如果是，则返回 true，否则返回 false。
9. **toSource()** 方法是非标准的，该方法返回数组的源代码，目前只有 Firefox 实现了它。
10. **astIndexOf()** 方法用于查找元素在数组中最后一次出现时的索引，如果没有，则返回-1。并且它是indexOf的逆向查找，即从数组最后一个往前查找。

### 3、所有API的使用可见上述链接，以下仅列出了部分最常用方法。

# **第一组：操作方法**

**splice方法的使用方式主要有以下3种**

1.删除：可以删除任意数量的项，指定2个参数，要删除的第一项的位置和要删除的项数。

splice(0,2)删除数组的前两项。

2.插入：指定3个参数：起始位置，0(要删除的项数)和要插入的项。splice(2,0,"red","green")。

3.替换：可向指定位置插入任意数量的项，splice(2,1,"red","green")

**示例：**

```jsx
var a = [1,2,3,4,5,6,7];

// concat 拼接数组

var colors = a.concat(["yellow",["black","brown"]]);

var colors2 = a.concat("yellow","black","brown");

console.log(a) // [1, 2, 3, 4, 5, 6, 7]

console.log (colors) // [1, 2, 3, 4, 5, 6, 7, "yellow", ["black", "brown"]]

console.log (colors2) // [1, 2, 3, 4, 5, 6, 7, "yellow", "black", "brown"]

// slice 截取数组

var cut1 = a.slice(2)

var cut2 = a.slice(2,5)

console.log(cut1) // [3, 4, 5, 6, 7]

console.log(cut2) // [3, 4, 5]

// splice 删除、添加、替换数组

var origin1 = [1,2,3,4,5,6,7,8,9]

var del1 = origin1.splice(2) // 从第3项开始删除

console.log(origin1) // [1, 2]

console.log(del1) // [3, 4, 5, 6, 7, 8, 9]

var origin2 = [1,2,3,4,5,6,7,8,9]

var del2 = origin2.splice(2,3) // 从第3项开始删除3项

console.log(origin2) // [1, 2, 6, 7, 8, 9]

console.log(del2) // [3, 4, 5]

var origin3 = [1,2,3,4,5,6,7,8,9]

var del3 = origin3.splice(2,3,'no') // 从第3项开始删除3项,替换成'no'

console.log(origin3) // [1, 2, "no", 6, 7, 8, 9]

console.log(del3) // [3, 4, 5]
```

# **第二组：位置方法**

**indexOf()**和**lastIndexOf()**。这两个方法都接受两个参数：要查找的项和表示查找起点位置的索引。indexOf()从数组的开头开始向后查找，lastIndexOf()从数组的末尾开始向前查找。

**示例：**

```jsx
// 数组位置方法

var b = [1,2,3,4,5,6]

var loc1 = b.indexOf(5)

var loc2 = b.indexOf(5,2)

var loc3 = b.indexOf (3,5)

console.log(loc1) // 4

console.log(loc2) // 4

console.log(loc3) // -1 表示从第6项开始找没有找到3

var loc11 = b.lastIndexOf(5)

console.log(loc11) // 4 从后面开始查找，不是说要改变index值
```

# **第三组：迭代方法（实际使用非常广泛！）**

**1、基本用法**

每个方法接受两个参数，要在每一项上运行的函数和运行该函数的作用域对象，传入这些方法中的**函数**会接收三个参数：数组项的值、该项在数组中的位置和数组对象本身**(item,index,array）**。

以下是5个迭代器方法的作用

这五个数组迭代的方法中，其中forEach()、every()和some()方法不生成一个新数组，而filter()和map()方法将会生成一个新数组（符合条件）。

**(1)every():**对数组的每一项运行给定函数，如果数组的每一项都返回true，则返回true。对数组应用该方法，有返回值为true或false

**示例：**

```jsx
// 数组迭代方法 every() 必须每一项都返回true 则返回true

var numbers = [1,2,3,4,5,4,3,2,1];

var everyResult=numbers.every(function (item,index,array) {

return(item>2);

});

console.log(everyResult);   //false
```

**(2)some():**对数组的每一项运行给定函数，如果数组的任一项都返回true，则返回true。对数组应用该方法，有返回值为true或false

**示例：**

```jsx
// 数组迭代方法 some() 某一项返回true 则返回true

var numbers = [1,2,3,4,5,4,3,2,1];

var someResult=numbers.some(function (item,index,array) {

return(item>2);

});

console.log(someResult);   //true
```

**(3)filter():**对数组的每一项运行给定函数，返回该函数中会返回true的项组成的数组。有返回值，为符合条件的项组成的`**数组**`

**示例：**

```jsx
// 数组迭代方法filter()利用指定的函数确定返回在数组中包含某一项。 返回一个所有的数值都要大于2的数组。

var numbers = [1,2,3,4,5,4,3,2,1];

var filterResult=numbers.filter(function (item,index,array) {

return(item>2);

});

console.log(filterResult);  // [3, 4, 5, 4, 3]
```

**(4)map():**对数组的每一项运行给定函数,有返回每次函数调用的结果组成的数组。

**示例：**

```jsx
var numbers = [1,2,3,4,5,4,3,2,1];

var mapResult=numbers.map(function (item,index,array) {

return item * 2;

});

console.log(mapResult);  //[2, 4, 6, 8, 10, 8, 6, 4, 2]
// 数组迭代方法map()也返回一个数组。而这个数组的每一项都是在原始数组中的对应上运行入函数的结果。
```

**(5)forEach():**对数组的每一项运行给定函数,这个方法没有返回值。本质上与使用for循环迭代数组是一样的。

**示例：**

```jsx
// 数组迭代方法forEach()

numbers.forEach(function(item,index,array){

//执行某些操作

})
```

## **2、深入**

**在实际使用中，通常不是简单的数组，更多的是数组里面嵌套了对象，甚至有多层对象，对这些对象进行相关的操作。基于以上数组的API，用好三个参数即可，对目前接触到的几个常用操作如下示例：**

**给定一个数组，如下形式：对象{}有相同的键值结构**

```jsx
var compli = [

{name: 'lsq1', age: '25', sex: 'girl' , address: '杭州'},

{name: 'lsq2', age: '34', sex: 'boy' , address: '杭州'},

{name: 'lsq3', age: '12', sex: 'girl' , address: '武汉'},

{name: 'lsq4', age: '45', sex: 'boy' , address: '湖南'}

]
```

**1、取出某一个键的值，组成新的数组**

```jsx
var getname = compli.map((item,index,arr)=>item.name)

console.log(getname) // ["lsq1", "lsq2", "lsq3", "lsq4"]
```

**2、修改某些键的名称以及添加新的键**

```jsx
var scoreAll = [88,89,90,100]

var addNew = compli.map((item, index) => {

return {  // 对每一项操作，返回一个对象，结果汇总成一个数组

'姓名': item.name,

isAlive: true,

score: scoreAll[index], // scoreAll可为外部的数组

}

})

console.log(addNew)

// [{姓名: "lsq1", isAlive: true, score: 88},

//  {姓名: "lsq2", isAlive: true, score: 89},

//  {姓名: "lsq3", isAlive: true, score: 90},

//  {姓名: "lsq4", isAlive: true, score: 100}]
```

**3、操作原数组，将原数组中每个对象的某个键值修改、删除某个属性**

```jsx
var changeV = compli.forEach((item, index) => {

item.sex = '不详' // sex都改成不详

delete item.age  // 删除age这个属性

})

console.log(changeV) // undefined 无返回值

console.log(compli)

// [{name: "lsq1", sex: "不详", address: "杭州"},

//  {name: "lsq2", sex: "不详", address: "杭州"},

//  {name: "lsq3", sex: "不详", address: "武汉"},

//  {name: "lsq4", sex: "不详", address: "湖南"}]
```

**4、获得这个数组中年龄大于20的人的名字，组成新数组返回**

```jsx
var getOld = class1.filter((item,index,arr)=> (item.age > 20))

console.log (getOld)

// [{name: 'lsq1', age: '25', sex: 'girl' , address: '杭州'},

// {name: 'lsq2', age: '34', sex: 'boy' , address: '杭州'},

// {name: 'lsq4', age: '45', sex: 'boy' , address: '湖南'}]

var getOldName = getOld.map((item)=>item.name)

console.log(getOldName) // ["lsq1", "lsq2", "lsq4"]

// 综合就是 getOldName = class1.filter((item,index,arr)=> (item.age > 20)).map((item)=>item.name)
```

**5、获取这个数组中某个对象的属性名**

```jsx
var key1 = Object.keys(class1)

var key2 = Object.keys(class1[0]) // class1[0]才是对象

console.log(key1) // ["0", "1", "2", "3"]

console.log(key2) //["name", "age", "sex", "address"]
```

**6、获取数组对象中每一个对象的属性名（不相同）**

```jsx
var class2 = [

{name: 'lsq1', age: '25', sex: 'girl'},

{age: '34', sex: 'boy' , address: '杭州'},

{name: 'lsq3', age: '12', address: '武汉'}

]

var collectKey = []

var keyMany = class2.forEach((item,index,arr)=>{

var keyall = Object.keys(item)

collectKey.push(keyall)

})

console.log(keyMany) // undefined

console.log('collectKey', collectKey)

//[["name", "age", "sex"],["age", "sex", "address"],["name", "age", "address"]]
```

**7、末位重复校验看数组对象中是否有重复的对象键值**

```jsx
*var* lowerArr = this.scoreSetList.map((*item*) *=>* item.scoreLower);

*var* isDuplicate = lowerArr.some((*item*, *index*) *=>*

lowerArr.indexOf(item) !== index

);

if (isDuplicate) {

this.$message.error('请删除重复的结果设置项！');

this.submitLoading = false;

}
```

### **3、利用for遍历**

**注：用这些api解决不了的，就用for操作吧！只是没有这么简洁**

javascript原生遍历方法的建议用法：

- 用for循环遍历数组
- 用for-in遍历对象
- 用for-of遍历类数组对象（ES6）
- 用Object.keys()获取对象属性名的集合

**1、for循环**

for(var i=0;i<arrTmp.length;i++){

console.log(i+": "+objTmp[i])

}

**2、for-in** 遍历对象属性,i指代属性名;遍历数组i指代索引值

for(var i in arrTmp){

console.log(i+": "+arrTmp[i])

}

**3、for-of**  它被设计用来遍历各种类数组集合，例如DOM NodeList对象、Map和Set对象，甚至字符串也行

// for-of遍历Map对象

let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let [key, value] of iterable) {

console.log(value); //输出 1 2 3

}

**4、Object.keys** 获取对象属性名的集合

let xyz = {z: "zzz", x: "xxx", y: "yyy"};

console.log(Object.keys(xyz)); // ["z", "x", "y"]

具体用法不赘述，可见  [https://www.cnblogs.com/yangshifu/p/7377102.html](https://www.cnblogs.com/yangshifu/p/7377102.html)

# **第四组：归并方法**

**reduce()和reduceRight()**。他们的区别在于从哪头开始遍历数组，除此之外，它们完全相同。

这两个方法都接收两个参数：一个在每一项上调用的函数和(可选)作为归并基础的初始值。

传给reduce()和reduceRight()的函数接收4个参数：**(prev,cur,index,array)** 前一个值、当前值、项的索引和数组对象。

reduce( ) 方法从数组的第一项开始，逐个遍历到最后。

reduceRight()方法则从数组的最后一个开始，向前遍历到第一项。

**示例：**

```jsx
// 数组归并方法 reduce()

var values = [1,2,3,4,5];

var sum1 = values.reduce(function(prev,cur,index,array){

return prev + cur;

})

console.log(sum1);  // 15  从头开始遍历数组相加

// 数组归并方法 reduceRight()

var values = [1,2,3,4,5];

var sum2 = values.reduceRight(function(prev,cur,index,array){

return prev*cur;

})

console.log(sum2);  // 120  从头开始遍历数组相乘
```

附：本文所参考引用的链接如下：

[https://blog.csdn.net/shuidinaozhongyan/article/details/77815150](https://blog.csdn.net/shuidinaozhongyan/article/details/77815150)

[https://blog.csdn.net/weixin_41470109/article/details/79910348](https://blog.csdn.net/weixin_41470109/article/details/79910348)

[https://www.cnblogs.com/yangshifu/p/7377102.html](https://www.cnblogs.com/yangshifu/p/7377102.html)

[https://blog.csdn.net/weixin_41470109/article/details/79912772](https://blog.csdn.net/weixin_41470109/article/details/79912772)

**非常全面：[http://louiszhai.github.io/2017/04/28/array/](http://louiszhai.github.io/2017/04/28/array/)**