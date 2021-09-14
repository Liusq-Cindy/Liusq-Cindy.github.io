[JS常用字符串API的合集](https://www.jianshu.com/p/16dc595528de)

总结如下:

1. splite()  字符串分割成数组   ’abcd‘.splite（’‘） = ['a','b','c','d']
2. startsWidth()
3. endsWidh()
4. toLowerCase() 转小写
5. toUpperCase() 转大写
6. trim() 去除前后空格
7. str.includes(xxx) 是否包含xxx
8. str.substr(n1,n2) 截取下标n1开始向后n2长度的数据
9. str.substring(n1,n2) 截取下标n1开始到下标n2位置所有的数据 (与slice的区别在于n2不能接收负数)
10. str.slice(n1,n2) 截取由下标n1开始到下标n2为止之间所有的数据
11. str.lastIndexOf('xxx') 查看xxx最后一次出现在字符串中的下标
12. str.indexOf('xxx') 查看xxx第一次出现在字符串中的下标
13. str1.concat(str2) 连接str1与str2
14. str.charCodeAt(index) 查看指定下标对应的Unicode编码
15. str.charAt(index) 查看指定下标对应的字符
16. str.length 查看字符串长度