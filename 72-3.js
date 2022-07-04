/*************************************************
 * 惰性单例模式
 * 定义：惰性单例指的是在需要的时候才创建对象的实例。
 * 以创建登录模态框为例
 ************************************************/



const createLoginLayer = (function () {
    let div;
    //:::: 返回一个函数，用闭包保存变量div，保证只有调用时才会访问
    return function () {
        if (!div) {
            div = document.createElement('div');
            div.innerHTML = '我是登录模态框';
        }
        return div;
    };
})();

// 这里的对惰性单例的实现主要是只有单例了网页上的登录按钮，才会去创建，登录框的dom节点，并且只是创建一次。

// 在点击按钮时才创建节点（惰性）
document.getElementById('login-btn').onclick = function () {
    var loginLayer = createLoginLayer();
    loginLayer.style.display = 'block';
};



