/*************************************************
 * 实现一个前端路由
 * - hashchange方式
 ************************************************/

`<body>
<ul>
    <!-- 定义路由 -->
    <li><a href="#/home">home</a></li>
    <li><a href="#/about">about</a></li>

    <!-- 渲染路由对应的 UI -->
    <div id="routeView"></div>
</ul>
</body>`


// :::: 页面加载完不会触发 hashchange，这里主动触发一次 hashchange 事件
window.addEventListener('DOMContentLoaded', onLoad)
// 监听路由变化
window.addEventListener('hashchange', onHashChange)



// 路由视图
var routerView = null

function onLoad () {
    routerView = document.querySelector('#routeView')
    // :::: 这里主动触发一次 hashchange 事件
    onHashChange()
}

// 路由变化时，根据路由渲染对应 UI
function onHashChange () {
    switch (location.hash) {
        case '#/home':
            routerView.innerHTML = 'Home'
            return
        case '#/about':
            routerView.innerHTML = 'About'
            return
        default:
            return
    }
}


到到扥疯狂将复垦的发肯江肯就疯狂将疯狂肯江肯近况反就框架反动将疯狂反动肯SDK反动反动啃囧交付但森江苏
