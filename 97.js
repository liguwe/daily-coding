// :::: 网络攻击专题
// :::: XSS

/*************************************************
 * // :::: XSS 攻击有两大要素：
 * 1. 攻击者提交恶意代码。
 * 2. 浏览器执行恶意代码。
 ************************************************/

let html = `
<input type="text" value="<%= getParameter("keyword") %>">
<button>搜索</button>
<div>
  您搜索的关键词是：<%= getParameter("keyword") %>
</div>
`


// 攻击者访问 http://xxx/search?keyword="><script>alert('XSS');</script>
// 服务端解析keyword 返回如下 =>

    `
<input type="text" value=""><script>alert('XSS');</script>">
<button>搜索</button>
<div>
  您搜索的关键词是："><script>alert('XSS');</script>
</div>
`
// => 客户端执行了两次alert
// ::::如何解决这个case

`
<!-- ::::escapeHTML需要自己实现  -->
<input type="text" value="<%= escapeHTML(getParameter("keyword")) %>">
<button>搜索</button>
<div>

  您搜索的关键词是：<%= escapeHTML(getParameter("keyword")) %>
</div>
`

// :::: ，最终浏览器接收到的响应为
`
<input type="text" value="&quot;&gt;&lt;script&gt;alert(&#x27;XSS&#x27;);&lt;&#x2F;script&gt;">
<button>搜索</button>
<div>
  您搜索的关键词是：&quot;&gt;&lt;script&gt;alert(&#x27;XSS&#x27;);&lt;&#x2F;script&gt;
</div>
`


/*************************************************
 * // ::::XSS
 *
 * // :::: 如何防范
 * - 输入内容长度控制
 * - HTTP-only Cookie: 禁止 JavaScript 读取某些敏感 Cookie，攻击者完成 XSS 注入后也无法窃取此 Cookie。
 * - 验证码：防止脚本冒充用户提交危险操作。
 * - HTML 属性、HTML 文字内容、HTML 注释、跳转链接、内联 JavaScript 字符串、内联 CSS 样式表等,需要不同转移
 *    比如<a href="javascript:alert(&#x27;XSS&#x27;)">跳转...</a>
 *    比如eval
 *    DOM 中的内联事件监听器，如 location、onclick、onerror、onload、onmouseover 等，
 *    标签的href属性，JavaScript 的eval()、setTimeout()、setInterval()等
 ************************************************/


/*************************************************
 * // ::::最常见的几种分类：
 * 反射型（非持久型）XSS
 * 存储型（持久型）XSS
 * 反射型 XSS 跟存储型 XSS 的区别是：
 *      存储型 XSS 的恶意代码存在数据库里
 *      反射型 XSS 的恶意代码存在 URL 里。
 * DOM型XSS
 *      DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，
 *      而其他两种 XSS 都属于服务端的安全漏洞
 * 还有其他，就算了
 ************************************************/
