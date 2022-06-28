// 请把俩个数组 [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，
// 合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]

arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
arr2 = ['A', 'B', 'C', 'D']
// 这个思路不错
let a2 = ['A', 'B', 'C', 'D'].map((item) => {
    return item + 3
})

function swap(arr, i, j) {
    let temp = arr[i];
    arr[j] = temp;
    arr[i] = temp;
}

function merge(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    arr = arr.sort();

    // 下面来个双重循环就行了

    return arr;
}

console.log(merge(arr1, arr2));
