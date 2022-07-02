/*************************************************
 * 原地去重数组
 * 数组去重
 ************************************************/

function fn1(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
}


// 移除所有重复的元素
function fn2(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === arr.lastIndexOf(item);
    })
}

console.log(fn1([1, 2, 3, 2, 5, 5]))


console.log(fn2([1, 2, 3, 2, 5, 5]))
