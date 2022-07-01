/**
 *
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 示例 1：
 * 输入: "III"
 * 输出: 3
 * 示例 2：
 * 输入: "IV"
 * 输出: 4
 * 示例 3：
 *  输入: "IX"
 *  输出: 9
 * 示例 4：
 *  输入: "LVIII"
 *  输出: 58
 * 解释: L = 50, V= 5, III = 3.
 * */


// 输入: "MCMXCIV"
// 输出: 1994
// 解释: M = 1000, CM = 900, XC = 90, IV = 4.

let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function fn(str) {
    let arr = str.split('');
    let res = [];
    arr.forEach((item) => {
        res.push(map[item]);
    })
    let val = 0;
    for (let i = 0; i < res.length; i++) {
        let a = res[i];
        let b = res[i + 1];
        if (b && b > a) {
            val += b - a;
            i++;
        } else {
            val += a;
        }
    }
    console.log(val);
    return val;
}


fn('MCMXCIV')
fn('LVIII')
fn('IX')


