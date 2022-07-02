/**
 * @description 数组扁平化
 */

var arr = [3, 5, [2, 3], [1, 2], [[10], [1, [[2, 111, [2, [2, [34, [33, [44, [55]]]]]]]]]]]


/*************************************************
 * 迭代递归的方式打平数组
 ************************************************/
function flatten(arr) {
    let res = [];
    arr.forEach((item) => {
        if (!Array.isArray(item)) {
            res.push(item);
        } else {
            res = res.concat(flatten(item))
        }
    })
    return res;
}

console.log('遍历的方式：')
console.log(flatten(arr));


/*************************************************
 * 使用原生方法实现
 ************************************************/
console.log('使用原生方法实现：')
console.log(arr.flat(Infinity))
