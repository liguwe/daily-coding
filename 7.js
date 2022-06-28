/**
 * 第175题：实现颜色转换 'rgb(255, 255, 255)' -> '#FFFFFF' 的多种思路 #475
 * 1、从 rgb(255, 255, 255) 中提取出 r=255 、 g=255 、 b=255
 * 2、将 r 、 g 、 b 转换为十六进制，不足两位则补零
 * 3、组合 #
 * */
// 1、从 rgb(255, 255, 255) 中提取出 r=255 、 g=255 、 b=255
let s = 'rgb(1, 2, 3)';
let reg = /[rgb|RGB]/g
let m = s.replace(reg, '').split(/[\(\),]/).filter(Boolean).map(Number);
console.log(m);

// 2、将 r 、 g 、 b 转换为十六进制，不足两位则补零
let arr = [];
m.forEach((item) => {
    let ss = item.toString(16);
    ss =  ss.length === 1 ? `0${ss}` : ss;
    arr.push(ss);
    console.log(ss)
})
// 最后需要转成大写
console.log(arr.join('').toUpperCase())
// 测试
// ('rgb(255, 255, 255)')
// // "#FFFFFF"
// ('rgb(16, 10, 255)')
// // "#100AFF"
// ('rgb(1, 2, 3)')
// // "#010203"
