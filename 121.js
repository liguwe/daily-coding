/*************************************************
 * 判断倒计时到天
 * // 366天  => 1年1天
 * // 766天  => 1年天
 ************************************************/

function fn(days) {
    let y = Math.floor(days / 365);
    let m = Math.floor((days - 365 * y) / 30);
    let d = days - 365 * y - 30 * m;
    let arr = [];
    if (y > 0) {
        arr.push(`${y}年`)
    }
    if (m > 0) {
        arr.push(`${m}月`)
    }
    if (d > 0) {
        arr.push(`${d}天`)
    }
    return arr.join('')
}

console.log(fn(766));
console.log(fn(366));
console.log(fn(100));

