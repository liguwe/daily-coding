var permute = function (nums,k) {
    const len = nums.length;
    const res = []; // 结果集
    const options = []; // 选择列表
    function backtrack(options) {
        // ::::base case 选择完了
        if (options.length === k) {
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

console.log(permute([1, 2, 3], 3));
console.log(permute([1, 2, 3], 2));
