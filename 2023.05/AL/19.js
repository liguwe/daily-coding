// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码还未经过力扣测试，仅供参考，如有疑惑，可以参照我写的 java 代码对比查看。

/**
 * 需要填入矩阵的数字
 * 在顶部从左向右遍历，在右侧从上向下遍历，在底部从右向左遍历，在左侧从下向上遍历
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {


    var matrix = new Array(n).fill().map(() => new Array(n).fill(0));
    var upper_bound = 0, lower_bound = n - 1;
    var left_bound = 0, right_bound = n - 1;
    var num = 1;

    while (num <= n * n) {
        if (upper_bound <= lower_bound) {
            // 在顶部从左向右遍历
            for (var j = left_bound; j <= right_bound; j++) {
                matrix[upper_bound][j] = num++;
            }
            // 上边界下移
            upper_bound++;
        }

        if (left_bound <= right_bound) {
            // 在右侧从上向下遍历
            for (var i = upper_bound; i <= lower_bound; i++) {
                matrix[i][right_bound] = num++;
            }
            // 右边界左移
            right_bound--;
        }

        if (upper_bound <= lower_bound) {
            // 在底部从右向左遍历
            for (var j = right_bound; j >= left_bound; j--) {
                matrix[lower_bound][j] = num++;
            }
            // 下边界上移
            lower_bound--;
        }

        if (left_bound <= right_bound) {
            // 在左侧从下向上遍历
            for (var i = lower_bound; i >= upper_bound; i--) {
                matrix[i][left_bound] = num++;
            }
            // 左边界右移
            left_bound++;
        }
    }
    return matrix;
};
