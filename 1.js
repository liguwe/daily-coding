/**
 * 打印出 1 - 10000 之间的所有对称数 例如 121、1331 等
 * */

// 方法一
let a1 = [...Array(10000).keys()].filter(i => i.toString().length > 1 && i == i.toString().split('').reverse().join(''))


console.log(a1);
