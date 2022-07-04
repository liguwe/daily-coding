/**
 * 第 50 题：实现 (5).add(3).minus(2) 功能。
 * */

Number.prototype.add = function (i) {
    if (typeof i !== 'number') {
        throw new Error('请输入数字～');
    }
    return this + i;
}
Number.prototype.minus = function (i) {
    if (typeof i !== 'number') {
        throw new Error('请输入数字～');
    }
    return this + i;
}

let s = (5).add(3).minus(2);

console.log(s);
