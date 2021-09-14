正则表达式(Regular Expression)是一种文本模式，包括普通字符元字符，用于字符串操作，比如查找、匹配等

**基础用法、各符号的意义，不再赘述，看文章即可：**

[正则 · 语雀](https://www.yuque.com/along-n3gko/ezt5z9/rpq40u)

# 一、**表达形式：**

```jsx
//构造函数
var reg = new RegExp('along','img')
console.log(reg)		-->  /along/gim

//字面量方式
var reg = /a/ 
console.log(reg)		-->  /along/gim

//工厂模式
var reg = RegExp('along','img')
console.log(reg)		-->  /along/gim
```

# 二、基础常用方法

- **RegExp.prototype.test 检测是否包含**

```jsx
//作用：用来检测字符中是否含有某个内容。
var str = 'hello world';
var reg = /hello/g;
reg.test(str);  ---> true  返回值：true或者false
```

- **String.prototype.match 匹配筛选**

```jsx
//作用：筛选指定字符
var str = 'hellowo12345rdle';
var reg = /[0-9]/img;
str.match(reg);  ---> ['1','2','3','4','5'];
```

- **String.prototype.split 拆分**

```jsx
var str = '2019-05-12';
var reg = /-/g;
console.log(str.split(reg)) .   --->["2019", "05", "12"]
```

- **String.prototype.replace 替换**

```jsx
var str = 'aadfsfsdf21AAAA324aaa';
var reg = /a/img;
console.log(str.replace(reg, '哈')) .  --> 哈哈dfsfsdf21哈哈哈哈324哈哈哈
// replace第二个参数也可以是函数
str.replace(reg, function($1){
return $1+'111'})
```

# 三、（）与$1,$2

[js正则表达式()和$1...$9的理解和使用_愤怒无济于事-CSDN博客](https://blog.csdn.net/pc_gad/article/details/48194605)

### **理解：**

()就是起到一个分组作用，将匹配到的放到mathches集合中，$相当于集合名字，1-9就相当于索引，$1...$9相当于对应索引的值。可以**使用()和$1...$9来限制输入位数**

### 应用：

**例：**只能输入1-9999正整数

```jsx
<input id="digit" type="text" οnkeyup="clearInput(this)" 
									onafterpaste="clearInput(this)">

//只能输入1-9999正整数 
	function clearInput(obj){
		obj.value = obj.value.replace(/[^\d]/g,""); // 对于输入的^/d非数字，替换成''
		obj.value = obj.value.replace(/^0.*$/g,""); // 对于0.后面无论有没有值，替换成''
		obj.value = obj.value.replace(/^([1-9])(\d{3}).*$/,'$1$2'); //只能输入正整数
	} // 对于四位数，后面带小数点.的，替换成$1$2,也就是只保留四位数，不带后面小数点的部分
```

**例：只能输入数字和保留两位小数**

```jsx
<script language="JavaScript" type="text/javascript"> 
function clearNoNum(obj){ 
    obj.value = obj.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符  
    obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个小数点. 清除多余的. 如2..3..4这种只留下2.3.4
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$","."); 
// 第一个replace只会替换第一个.然后将其他的.去掉，再将第一个转回来，为了将2.3.4这种，2.34454
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数，可以为负数
// -可以有或没有，然后纯数字d，然后小数点后两位数字，然后再是小数点可有可无，对这种形式，只取前面$123,
// 也就是对应三个括号-33.3类似这种。
    if(obj.value.indexOf(".")< 0 && obj.value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额 
        obj.value= parseFloat(obj.value); 
    } 
} 
</script>

<!DOCTYPE html>
<html>
    <head>
        <title>demo</title>
    </head>
    <body>
        <input type="text" onkeyup="clearNoNum(this)">
    </body>
</html>
```

# 四**、正则深入：**

**1、贪婪模式、非贪婪模式  (量词{m.n},?,*,+后面是否加？)**

[正则表达式之 贪婪与非贪婪模式详解（概述）_正则表达式_脚本之家](https://www.jb51.net/article/31491.htm)

简单理解： 在正则表达式的**匹配量词后面没有加？的是贪婪匹配**，在使整个表达式匹配成功的前提下，会尽可能多的匹配到内容，加了？的是非贪婪匹配，当匹配完成就结束。

被匹配优先量词修饰的子表达式，使用的是贪婪模式；被忽略优先量词修饰的子表达式，使用的是非贪婪模式。

匹配优先量词包括：“{m,n}”、“{m,}”、“?”、“*”和“+”。

忽略优先量词包括：“{m,n}?”、“{m,}?”、“??”、“*?”和“+?”。

```jsx
举例：

源字符串：aa<div>test1</div>bb<div>test2</div>cc

正则表达式一：<div>.*</div>

匹配结果一：<div>test1</div>bb<div>test2</div>

正则表达式二：<div>.*?</div>

匹配结果二：<div>test1</div>（这里指的是一次匹配结果，所以没包括<div>test2</div>）
```

**2、捕获匹配非捕获匹配 （括号分组是否加?: ）**

(…)     正常分组，捕获

(?:…)   分组，但是不捕获，也就是我们后面要用到$123排序取分组的时候，是会略过的

[Python正则表达式教程之二：捕获篇_python_脚本之家](https://www.jb51.net/article/107215.htm)

非捕获匹配只用来做判断，但是不作为匹配内容被捕获出来存储

**（1）正向预言 ？：非捕获，相当于（x)？,但x不记在捕获中**

**（2）正向前瞻 z(?=x) 表示z后面一定要有x，但x不记在捕获中**

**（3）负向前瞻 z(?!x)表示z后面一定不要有x,但x不记在捕获中**

**（4）正向后瞻，负向后瞻 。。。。 js不支持**

```jsx
正向预言：
var a='3.456'
a.replace(/(\d+)(\.)(\d\d)(\d)/,'$1$2$3')
// "3.45" 保留2位小数
a.replace(/(?:\d+)(?:\.)(\d\d)(\d)/,'$1$2')
// '456' 取出小数部分

正向前瞻
var str = 'Hello, Hi, I am Hilary.';
2     var reg = /H(?=i)/g;
3     var newStr = str.replace(reg, "T");
console.log(newStr);//Hello, Ti, I am Tilary. 把后面带i的H，替换成了T

负向前瞻
var str = 'Hello, Hi, I am Hilary.';
var reg = /H(?!i)/g;
var newStr = str.replace(reg, "T");
console.log(newStr);//Tello, Hi, I am Hilary. 吧后面不带i的H，替换成了T
```

# 五、汇总一览表

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/014b8828-7244-4005-99d6-6b6e04a4bd86/image.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/014b8828-7244-4005-99d6-6b6e04a4bd86/image.png)