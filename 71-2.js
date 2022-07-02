
/*************************************************
 * // :::通用的单例模式
 ************************************************/
const getSingle = function (fn) {
    let result;
    //::: 闭包返回一个函数
    return function () {
        return result || (result = fn.apply(this, arguments));
    };
};

// 创建登录模态框
const createLoginLayer = function () {
    const div = document.createElement('div');
    div.innerHTML = '我是登录模态框';
    document.body.appendChild(div);
    return div;
};


// 为登录模态框使用单例模式
const createSingleLoginLoyer = getSingle(createLoginLayer);
const loginLayer1 = createSingleLoginLoyer(); // 第一个登录模态框
const loginLayer2 = createSingleLoginLoyer(); // 还是第一个登录模态框
// 不管你执行多少次 createSingleLoginLoyer() 方法，都只会生产一个 div 节点。
console.log(loginLayer1 === loginLayer2); // true

