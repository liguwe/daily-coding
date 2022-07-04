/*************************************************
 * 实现一个前端路由
 * - popstate方式，history事件
 * popstate 事件
 * ● 仅仅调用pushState()方法或replaceState()方法 ，并不会触发该事件;
 * ● 只有用户点击浏览器倒退按钮和前进按钮，或者使用 JavaScript 调用History.back()、History.forward()、History.go()方法时才会触发。
 * ● 另外，该事件只针对同一个文档，如果浏览历史的切换，导致加载不同的文档，该事件也不会触发。
 * ● 页面第一次加载的时候，浏览器不会触发popstate事件。
 ************************************************/

`<body>
<ul>
    <li><a href='/home'>home</a></li>
    <li><a href='/about'>about</a></li>
    <div id="routeView"></div>
</ul>
</body>`


// ::::页面加载完不会触发 popstate，这里主动触发一次 popstate 事件
window.addEventListener('DOMContentLoaded', onLoad)
// 监听路由变化
window.addEventListener('popstate', onPopState)

// 路由视图
var routerView = null

function onLoad() {
    routerView = document.querySelector('#routeView')
    //:::: 这里主动触发一次 popstate 事件
    onPopState()

    // 拦截 <a> 标签点击事件默认行为， 点击时使用 pushState 修改 URL并更新手动 UI，从而实现点击链接更新 URL 和 UI 的效果。
    var linkList = document.querySelectorAll('a[href]')
    linkList.forEach(el => el.addEventListener('click', function (e) {
        e.preventDefault()
        history.pushState(null, '', el.getAttribute('href'))
        onPopState()
    }))
}

// 路由变化时，根据路由渲染对应 UI
function onPopState() {
    switch (location.pathname) {
        case '/home':
            routerView.innerHTML = 'Home'
            return
        case '/about':
            routerView.innerHTML = 'About'
            return
        default:
            return
    }
}



