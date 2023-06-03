/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    const track = [];

    // 主函数
    function backtrack(start, n, k) {
        // base case
        if (k === track.length) {
            // 遍历到了第 k 层，收集当前节点的值
            res.push([...track]);
            return;
        }

        // 回溯算法标准框架
        for (let i = start; i <= n; i++) {
            // 选择
            track.push(i);
            // 通过 start 参数控制树枝的遍历，避免产生重复的子集
            backtrack(i + 1, n, k);
            // 撤销选择
            track.pop();
        }
    }

    backtrack(1, n, k);
    return res;
};
