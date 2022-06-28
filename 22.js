/**
 * 请把俩个数组 [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，
 * 合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]
 * */

let arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
let arr2 = ['A', 'B', 'C', 'D']

// 这个思路不错
let a2 = arr2.map((item) => {
    return item + 3
})



function merge(arr1, arr2) {
    let arr = [...arr1, ...a2];
    arr = arr.sort();
    // 下面来个双重循环就行了
    return arr;
}

console.log(merge(arr1, arr2));
// [
//     'A1', 'A2', 'A3',
//     'B1', 'B2', 'B3',
//     'C1', 'C2', 'C3',
//     'D1', 'D2', 'D3'
// ]

// 遍历todo 在把X3 换成 X 即可
