/**
 * console结果
 * */
function changeObjProperty(o) {
    // 改变对应地址内的对象属性值
    o.siteUrl = "http://www.baidu.com"
    // todo 变量a指向新的地址 以后的变动和旧地址无关
    // 这两个o指向的地址不同
    o = new Object()
    o.siteUrl = "http://www.google.com"
}

let webSite = new Object();
changeObjProperty(webSite);
// http://www.baidu.com
//函数的形参是值的传递，传递对象的话，函数接受的是这个对象的指针。
console.log(webSite.siteUrl);
