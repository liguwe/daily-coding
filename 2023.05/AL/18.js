let generateMatrix = function (n) {
    // const matrix = Array.from(
    //     {length: n},
    //     () => Array.from({length: n}, () => 0)
    // );


    let matrix = new Array(n).fill().map(() => new Array(n).fill(0));

    let top = 0, bottom = n - 1;
    let left = 0, right = n - 1;
    let num = 1;
    while (num <= n * n) {
        if (top <= bottom) {
            // 在顶部从左向右遍历
            for (let j = left; j <= right; j++) {
                matrix[top][j] = num + 1;
            }
            // 上边界下移
            top++;
        }
        if (left <= right) {
            // 在右侧从上向下遍历
            for (let i = top; i <= bottom; i++) {
                matrix[i][right] = num + 1;
            }
            // 右边界左移
            right--;
        }
        if (top <= bottom) {
            // 在底部从右向左遍历
            for (let j = right; j >= left; j--) {
                matrix[bottom][j] = num + 1;
            }
            // 下边界上移
            bottom--;
        }
        if (left <= right) {
            // 在左侧从下向上遍历
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num + 1;
            }
            // 左边界右移
            left++;
        }
    }
    return matrix;
};
