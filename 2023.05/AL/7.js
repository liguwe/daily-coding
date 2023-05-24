var permute = function (nums) {
    const len = nums.length;
    const res = []; // 结果集
    const options = []; // 选择列表

    function backtrack(options) {
        // 递归终止条件
        if (options.length === len) {
            return res.push(options)
        }
        for (let i = 0; i < len; i++) {

            // 已经选择过的数字不能再做选择
            if (!options.includes(nums[i])) {
                // 做选择
                options.push(nums[i]);

                backtrack([...options]);

                // 撤销选择
                options.pop()
            }
        }
    }
    backtrack(options)
    return res
};
