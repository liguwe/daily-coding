/*************************************************
 * :::: 跨页面通信的方式
 * #跨域
 *
 * :::: 同域下
 *
 *  1、new BroadcastChannel('AlienZHOU');
 *  2、sw
 *  3、window.addEventListener('storage' , fun)
 *  4、轮询去查数据，比如查询IndexDB，其实只需要在 `visibilitychange` 去查询就好了
 *  5、window.open 与 window.opener
 *  6、服务中转，如websocket等
 *
 *  ::::不同域：
 *  这些页面都嵌入一个允许跨域的域名(服务端设置)，比如proxy.com/bridge.html
 *  → 把它当做:::: 桥梁，嵌入到每个页面中
 *
 ************************************************/


