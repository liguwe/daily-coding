var permute = function (nums) {
    const len = nums.length;
    const res = []; // 结果集
    const used = new Array(nums.length).fill(false); // 选择列表

    /**
     * @param {Array} track 已经选择的列表
     * */
    function backtrack(track) {
        // 递归终止条件
        if (track.length === len) {
            return res.push(track)
        }
        for (let i = 0; i < len; i++) {
            // 已经选择过的数字不能再做选择
            if(used[i]) continue;
            // 做选择
            track.push(nums[i]);
            used[i] = true;
            backtrack([...track]);
            // 撤销选择
            track.pop();
            used[i] = false;
        }
    }
    backtrack([]);
    return res
};

console.log(permute([1, 2, 3]));
console.log(permute([1, 2, 3, 4]));
