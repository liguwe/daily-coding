let rotate = function (matrix) {
    let n = matrix.length;
    // 先沿【对角线】镜像对称二维矩阵
    for (let i = 0; i < n; i++) {
        //// :::: 这里为什么是 j < n-i ?
        for (let j = 0; j < n - i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[n - j - 1][n - i - 1];
            matrix[n - j - 1][n - i - 1] = temp;
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
