[常用编码转换 · 语雀](https://www.yuque.com/along-n3gko/ezt5z9/dl87ro)

在JS中，经常有一些场景会用到一些编码转换，否则无法保证数据的准确传递，以下只列出最常用的几种

# 一、URL地址的编码转换：

## decodeURIComponent/encodeURIComponent

```jsx
encodeURIComponent('https://www.sojson.com/encodeurl.html?test=水电费&id=322')
// 加密，https%3A%2F%2Fwww.sojson.com%2Fencodeurl.html%3Ftest%3D%E6%B0%B4%E7%94%B5%E8%B4%B9%26id%3D322
decodeURIComponent('https%3A%2F%2Fwww.sojson.com%2Fencodeurl.html%3Ftest%3D%E6%B0%B4%E7%94%B5%E8%B4%B9%26id%3D322')	
// 解密，https://www.sojson.com/encodeurl.html?test=水电费&id=322
```

# 二、进制转换

### 十进制转n进制    Num.toString(n)

```jsx
var a = 10
var b = a.toString(2)
// b:"1010"
```

### n**进制转10进制 parseInt(number, n)**

```jsx
var a = 1010
var b = **parseInt(a, 2)**
// b:"10"
```

### 其他进制转换,基于以上两个方式灵活变化

parseInt(num,8);   //八进制转十进制
parseInt(num,16);   //十六进制转十进制
parseInt(num).toString(8)  //十进制转八进制
parseInt(num).toString(16)   //十进制转十六进制
parseInt(num,2).toString(8)   //二进制转八进制
parseInt(num,2).toString(16)  //二进制转十六进制
parseInt(num,8).toString(2)   //八进制转二进制
parseInt(num,8).toString(16)  //八进制转十六进制
parseInt(num,16).toString(2)  //十六进制转二进制
parseInt(num,16).toString(8)  //十六进制转八进制

# 三、序列化和反序列化

### JSON.parse和stringify

```jsx
let obj = {
    name: 'along'
}
typeof obj		//object
typeof JSON.stringify(obj)		//string 对象转为json
typeof JSON.parse(JSON.stringify(obj))		//object json转对象
```