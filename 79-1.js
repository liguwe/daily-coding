
/*************************************************
 * #跨域专题
 *
 * ::::跨域名的表现
 * 无法读取cookie、localStorage、indexDB等
 * DOM无法获得
 * ajax请求无法发送，结果被浏览器拦截了
 *
 * :::: 一些资源标签允许跨域
 * <img src=XXX>
 * <link href=XXX>
 * <script src=XXX>
 * <video><audio> 在video标签中添加crossOrigin属性，Chrome 76以上就得添加这个属性了
 * @font-face等
 *
 * ::::请求跨域了，那么请求到底发出去没有？
 * 跨域并不是请求发不出去，请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了。
 *
 * :::: 跨域解决方案
 * 1、JOSNP，利用script标签的::::漏洞
 * 2、cors , ie不能低于ie10、需要、客户端、服务端同时支持
 *      简单请求：HEAD 、GET、POST /// HTTP的头信息不超出以下几种字段如Accept、Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
 *          如果是简单请求，就自动在头信息之中，添加一个Origin字段，服务器根据orgin字段返回
 *      复杂请求：是PUT或DELETE，或者Content-Type字段的类型是application/json。
 *          需要预检：OPTIONS
 *
 *      跨域这种错误无法通过状态码识别，因为HTTP回应的状态码有可能是200，能够被xhr的onerror捕获
 *
 * 3、otherWindow.postMessage(message, targetOrigin, [transfer]);
 *
 * 4、Websocket
 *
 * 5、代理服务器，node中间层
 *      同源策略是浏览器需要遵循的标准，而如果是服务器向服务器请求就无需遵循同源策略
 *      http-proxy-middleware
 *
 * 6、Nginx反向代理，类似于Node中间层
 *
 * 7、window.name + iframe
 *      a.html和b.html是同域的 http://localhost:3000
 *      c.html 是独立的 http://localhost:3001
 *      a.html获取c.html的数据
 *      a.html先引用c.html，c把值放在window.name，把a 引用的地址改为b.html
 *
 * 8、location.hash+iframe ，同样是三个页面，但不同于👆🏻那个，太费解了，pass吧，知道有这个就行了
 *
 * 9、对于主域相同而子域不同的例子，设置document.domain = ‘a.com’
 *
 *
 ************************************************/






