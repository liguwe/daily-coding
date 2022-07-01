var arr = [[2, 3], [1, 2], [[10], [1, [[2, 111, [2, [2, [34, [33, [44, [55]]]]]]]]]]]


console.log(arr.toString());

// 方法1：排序，去重等
console.log(
    [...new Set(arr.toString().split(","))].sort((a, b) => {
        return a - b
    }).map(Number)
)


// 方法2： 迭代的方式打平数组
function flatten(arr) {
    let res = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            res = res.concat(flatten(item))
        } else {
            res.push(item);
        }
    }
    return res;
}

console.log(flatten(arr));


// 方法3：原生方法实现
console.log(arr.flat(Infinity));
