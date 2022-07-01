/**
 * 打印出 1 - 10000 之间的所有对称数 例如 121、1331 等
 * */

// 方法一
let a1 =
    [...Array(10000).keys()]
        .filter((i) => {
            return String(i).length > 1 &&
                String(i) === i.toString().split('').reverse().join('')
        })


console.log(a1);
