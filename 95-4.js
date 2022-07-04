/*************************************************
 *  :::: 优化吸顶
 *  1、ios不能实时响应，页面滚动停止之后才会出现具体效果
 *      =>解决方案：IOS 使用 position:sticky，Android 使用滚动监听 getBoundingClientRect().top 的值。
 *  2、使用window.requestAnimationFrame()来优化 => 牺牲平滑度
 *  3、window.requestIdleCallback()来优化  => 牺牲平滑度
 *  3、节流  => 也会牺牲平滑度
 ************************************************/
