/**
 * 写一个快排吧
 * */

function fn(arr) {
    // base case
    if (arr.length < 2) {
        return arr;
    }
    /// TODO  //////////////////////////////// 前序遍历 start
    let mid = Math.floor((arr.length - 1) / 2);
    let midItem = arr.splice(mid, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (item < midItem) {
            left.push(item)
        } else {
            right.push(item)
        }
    }
    // TODO  ///////////////////////////////////  前序遍历 end
    // TODO 记得把midItem也加进去，不然有问题！
    return fn(left).concat(midItem, fn(right));
}

let a = fn([-1, -10, 3, 2, 9])
console.log(a);