/**
 * @param {number[][]} matrix
 * @return {number}
 */
let minFallingPathSum = function (matrix) {
    let n = matrix.length;
    let res = Number.MAX_VALUE;
    // ::::add 初始化备忘录
    let memo = new Array(n).fill([]);
    for (let i = 0; i < n; i++) {
        memo[i] = new Array(n).fill(66666);
    }
    // 终点可能在最后一行的任意一列
    for (let j = 0; j < n; j++) {
        // ::::n-1 即最后一行，j 即最后一行的任意一列
        // ::::所以，只要【遍历】找出落到最后一行的最小路径和，就是最终结果
        res = Math.min(res, dp(matrix, n - 1, j, memo));
    }
    return res;
};

// 从第一行 matrix[0][?]  向下落，落到位置 matrix[i][j] 的最小路径和为 dp(matrix, i, j)
function dp(matrix, i, j, memo) {
    // ::::1、非法索引，返回特殊值
    if (i < 0 || i >= matrix.length || j < 0 || j >= matrix.length) {
        return 99999;
    }
    // ::::2、base case 递归结束条件, 落到第一行的任意一列，返回该列的值
    if (i === 0) return memo[i][j] = matrix[i][j];

    // ::::3、备忘录
    if (memo[i][j] !== 66666) return memo[i][j];

    // ::::状态转移方程
    // ::::从 matrix[i][j] 由三个值转移而来，
    //  即 matrix[i-1][j]、matrix[i-1][j-1]、matrix[i-1][j+1] 三个位置
    // :::: 注意：都是 i-1，即上一行, j-1、j, j+1 为上一行的左、中、右三个位置
    return memo[i][j] = matrix[i][j] + Math.min(
        dp(matrix, i - 1, j, memo),
        dp(matrix, i - 1, j - 1, memo),
        dp(matrix, i - 1, j + 1, memo)
    )
}


const matrix1 = [[2, 1, 3], [6, 5, 4], [7, 8, 9]];
const matrix2 = [[-19, 57], [-40, -5]];

console.log(minFallingPathSum(matrix1)); // 13
console.log(minFallingPathSum(matrix2)); // -59
