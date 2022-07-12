/**
 * 第 90 题：实现模糊搜索结果的关键词高亮显示
 * */

// 关键思路

let value = '北京';
let str = '北京谢谢你，北京再见'
let reg = new RegExp(`\(${value}\)`,'g')
// ::::这是关键，第二个参数是字符串
let s = str.replace(reg,'<i>$1</i>');
console.log(s); // <i>北京</i>谢谢你，<i>北京</i>再见
