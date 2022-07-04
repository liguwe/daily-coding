/****************************************************************
 * 一句话，函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域
 * **************************************************************/
function a() {
    var temp = 10;
    function b() {
        console.log(temp); // 10
    }
    b();
}
a();

function a() {
    var temp = 10;
    // 打印出的temp是定义时的作用域，而在外层根本没有定义，所以报错
    b();
}
function b() {
    console.log(temp); // 报错 Uncaught ReferenceError: temp is not defined
}
a();


