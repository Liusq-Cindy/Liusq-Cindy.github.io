参考文章：

[8大前端安全问题（上）](https://zhuanlan.zhihu.com/p/30649102)

[【基本功】 前端安全系列之一：如何防止XSS攻击？](https://zhuanlan.zhihu.com/p/45568315)

[【基本功】 前端安全系列之二：如何防止CSRF攻击？](https://zhuanlan.zhihu.com/p/46592479)

# 一、概念

所有发生在浏览器、单页面应用、Web页面当中的安全问题则算是“前端安全问题”

# 二、分类

8大典型的前端安全问题，它们分别是：

- 老生常谈的XSS
- 警惕iframe带来的风险
- 别被点击劫持了
- 错误的内容推断
- 防火防盗防猪队友：不安全的第三方依赖包
- 用了HTTPS也可能掉坑里
- 本地存储数据泄露
- 缺失静态资源完整性校验

# 三、XSS

## 1、说明

**XSS是跨站脚本攻击（Cross-Site Scripting）**的简称，为了避免和css重名所以简称XSS

XSS这类安全问题发生的本质原因在于，**浏览器错误的将攻击者提供的用户输入数据当做JavaScript脚本给执行了。**

## 2、防御

1. 对数据进行严格的输出编码
2. 设置CSP HTTP Header
3. 输入验证
4. 开启浏览器XSS防御
5. 警惕iframe带来的风险
6. sandbox等

等等

# 四、CSRF

**CSRF（Cross-site request forgery）跨站请求伪造**：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。

## 典型案例

一个典型的CSRF攻击有着如下的流程：

- 受害者登录[http://a.com](https://link.zhihu.com/?target=http%3A//a.com)，并保留了登录凭证（Cookie）。
- 攻击者引诱受害者访问了[http://b.com](https://link.zhihu.com/?target=http%3A//b.com)。
- [http://b.com](https://link.zhihu.com/?target=http%3A//b.com) 向 [http://a.com](https://link.zhihu.com/?target=http%3A//a.com) 发送了一个请求：[http://a.com/act=xx](https://link.zhihu.com/?target=http%3A//a.com/act%3Dxx)。浏览器会默认携带[http://a.com](https://link.zhihu.com/?target=http%3A//a.com)的Cookie。
- [http://a.com](https://link.zhihu.com/?target=http%3A//a.com)接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求。
- [http://a.com](https://link.zhihu.com/?target=http%3A//a.com)以受害者的名义执行了act=xx。
- 攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让[http://a.com](https://link.zhihu.com/?target=http%3A//a.com)执行了自己定义的操作。

## **CSRF的特点**

- 攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生。
- 攻击利用受害者在被攻击网站的登录凭证，冒充受害者提交操作；而不是直接窃取数据。
- 整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”。
- 跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪。

## 防御

- 阻止不明外域的访问
    - 同源检测
    - Samesite Cookie
- 提交时要求附加本域才能获取的信息
    - CSRF Token
    - 双重Cookie验证