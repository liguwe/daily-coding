/*************************************************
 * 单例模式实现一个登录框
 ************************************************/


// es6 来模拟登录框
class Login {

    //构造器
    constructor() {
        this.init();
    }

    //初始化方法
    init() {
        //新建div
        let mask = document.createElement('div');
        //添加样式
        mask.classList.add('mask-layer');
        //添加模板字符串
        mask.innerHTML = `<div class="login-wrapper">
      <div class="username-input user-input">
        <span class="login-text">用户名:</span>
        <input type="text">
      </div>
      <div class="pwd-input user-input">
        <span class="login-text">密码:</span>
        <input type="password">
      </div>
      <div class="btn-wrapper">
        <button class="confrim-btn">确定</button>
        <button class="clear-btn">清空</button>
      </div>
    </div>
    `;
        //插入元素
        document.body.insertBefore(mask, document.body.childNodes[0]);
        //注册关闭登录框事件
        Login.addCloseLoginEvent();
    }

    //静态方法: 获取元素
    static getLoginDom(cls) {
        return document.querySelector(cls);
    }

    //静态方法: 注册关闭登录框事件
    static addCloseLoginEvent() {
        this.getLoginDom('.close-btn').addEventListener('click', () => {
            //给遮罩层添加style, 用于隐藏遮罩层
            this.getLoginDom('.mask-layer').style = "display: none";
        })
    }

    //静态方法: 获取实例(单例)
    // ::::我们调用Login.getInstance()实例化了一个登陆框，
    // ::::且在之后的点击中，并没有重新创建新的登陆框，只是移除掉了"display: none"这个样式来显示登陆框，节省了内存开销。
    static getInstance() {

        if (!this.instance) {
            this.instance = new Login();
        } else {
            // :::: 移除遮罩层style, 用于显示遮罩层
            this.getLoginDom('.mask-layer').removeAttribute('style');
        }
        return this.instance;
    }
}
