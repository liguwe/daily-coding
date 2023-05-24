const mergeSort = arr => {
    // 采用自上而下的递归方法
    const len = arr.length;
    // 递归条件
    if (len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle); // 拆分为两个子数组

    const leftArr = mergeSort(left);
    const rightArr = mergeSort(right);

    // ::::后序位置
    return merge(leftArr, rightArr);
};

// 合并两个已经排好序的数组，无论left或者right里有多少元素
const merge = (left, right) => {
    const result = [];
    // :::: left和right都有元素，这判断大小后，取最小的放入结果集，注意使用shift了的副作用
    while (left.length && right.length) {
        //// :::: 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    // 走到这里，说明left和right其中一个为空，另一个不为空，遍历剩下的元素，放入结果集
    // :::: 每次都取最小的放入结果集，注意使用shift了的副作用
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
    return result;
};

const array = [5, 4, 3, 2, 1, 32, 2, 1, 0];
console.log('mergeSort ', mergeSort(array));
