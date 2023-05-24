/**
 * 如何初始化一个二维数组
 * */
function initArr(m, n) {
    // :::: 从可迭代或类数组对象创建一个新的浅拷贝的数组实例
    return Array.from({length: m}, (item,index) => Array(n).fill('.'));
}

console.log(initArr(3, 4));
console.log(initArr(4, 4));
console.log(initArr(4, 3));
