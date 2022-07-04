/*************************************************
 * #iframe跨域专题
 * :::: iframe跨域通信方案
 *
 *  1、这些页面都嵌入一个允许跨域的域名(服务端设置)，比如proxy.com/bridge.html → 把它当做:::: 桥梁，嵌入到每个页面中
 *  2、设置cors 根治
 *
 *  ::::设置哪些字段呢？
 *  ● 简单请求，浏览器发现跨域了，就直接在请求头加Origin字段，sever端判断Origin是否给数据
 *  ● 非简单请求：put/delete 及 application/json
 *   ○ 浏览器预检  OPTIONS 请求
 *     ■ 三个字段:
 *       ● Access-Control-Request-Method
 *       ● Access-Control-Request-Headers
 *       ● Origin
 *     ■ 返回
 *       ● Access-Control-Allow-Methods
 *       ● Access-Control-Allow-Headers
 *       ● Access-Control-Allow-Origin: <origin> | *
 *       ● Access-Control-Allow-Credentials
 *       ● Access-Control-Max-Age
 *     ■ 之后就跟简单请求一样了
 ************************************************/
