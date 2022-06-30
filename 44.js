/**
 * 第 50 题：实现 (5).add(3).minus(2) 功能。
 * */

Number.prototype.add = function (i) {
    //todo  typeof === number
    return this + i;
}
Number.prototype.minus = function (i) {
    return this + i;
}

let s = (5).add(3).minus(2);

console.log(s);
