// 1、找基准值，然后分成两个数组
// 2、与该基准点数据比较，如果比它小，放左边；反之，放右边。
// 3、左右分别用一个空数组去存储比较后的数据。
// 4、最后递归执行上述操作，直到数组长度 <= 1
const quickSort1 = arr => {
    if (arr.length <= 1) {
        return arr;
    }
    // 取基准点
    const midIndex = Math.floor(arr.length / 2);
    // 取基准点的值，splice(index,1) 则返回的是含有被删除的元素的数组。
    const midIndexVal = arr.splice(midIndex, 1)[0];
    const left = []; // 存放比基准点小的数组
    const right = []; // 存放比基准点大的数组
    // 遍历数组，进行判断分配
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midIndexVal) {
            left.push(arr[i]); //比基准点小的放在左边数组
        } else {
            right.push(arr[i]); //比基准点大的放在右边数组
        }
    }
    //递归执行以上操作，对左右两个数组进行操作，直到数组长度为 <= 1
    return quickSort1(left).concat(midIndexVal, quickSort1(right));
};
const array2 = [5, 4, 3, 2, 1];
console.log('quickSort1 ', quickSort1(array2));
