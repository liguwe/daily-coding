/**
 *
 * @description 递归实现反转字符串
 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。
 如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，
 输入函数必须只有一个参数传入，必须返回字符串。

 */
let str = '1234';


function fn(str) {
    if (str === '') {
        return str;
    } else {
        return fn(str.slice(1)) + str[0]
    }
}

console.log(fn(str));
