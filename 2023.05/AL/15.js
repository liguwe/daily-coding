let rotate = function (matrix) {
    let n = matrix.length;
    // 先沿【对角线】镜像对称二维矩阵
    // :::: 交换 matrix[i][j] 和 matrix[j][i]
    for (let i = 0; i < n; i++) {
        // ::::这里 j=i，遍历第 i 行后，只需要交换对称线右上方的元素即可, 如果 j 从 0 开始，会把对称线左下方的元素也交换了，即相当于根本就没有交互
        for (let j = 0; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // 然后反转二维矩阵的【每一行】
    for (let row of matrix) {
        reverse(row);
    }
}

/**
 * 同样使用双指针技巧实现数组的翻转
 * */
let reverse = function (arr) {
    let i = 0,
        j = arr.length - 1;
    while (j > i) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}


let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// 原地修改两个数组
rotate(matrix);
rotate(matrix2);
console.log(matrix);
console.log(matrix2);
