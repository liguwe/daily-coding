/**
 * 第 11 题：将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组 #8
 * */
var arr = [[2, 3], [1, 2], [[10], [1]]]
// 方法1
let a1 = Array.from(new Set(arr.flat(Infinity))).sort((a, b) => {
    return a - b
})
// 方法2
let a2 = [...new Set(arr.toString().split(","))].sort((a, b) => {
    return a - b
}).map(Number);


console.log(a1);
console.log(a2);
