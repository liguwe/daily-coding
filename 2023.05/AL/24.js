/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const len = nums.length;
    const res = []; // 结果集
    const track = []; // 选择列表
    const used = new Array(len).fill(false); // 记录元素是否使用过

    // ::::排序，让相同的元素靠在一起,以便于剪枝算法的实现
    nums.sort((a, b) => a - b);

    function backtrack(track) {
        // 递归终止条件
        if (track.length === len) {
            return res.push([...track]);
        }
        for (let i = 0; i < len; i++) {
            // :::: 已经选择过的数字不能再做选择
            if (used[i]) {
                continue;
            }
            // :::: 两个元素相邻，并且还未选择前一个元素
            if (i > 0 && nums[i-1] === nums[i] && !used[i-1]) {
                // 如果前面的相邻相等元素没有用过，则跳过
                continue;
            }

            // 做选择
            track.push(nums[i]);
            used[i] = true;
            backtrack([...track]);
            // 撤销选择
            track.pop();
            used[i] = false;
        }
    }

    // 传入空数组，代表选择列表
    backtrack(track)
    return res
};

console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 3, 2]));
