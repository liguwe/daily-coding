/**
 * https://leetcode.cn/problems/combinations/
 * */
let combine = function (...skus) {
    let res = [];
    const backtrack = (opts, selectedArr, index) => {
        let options = opts[index];
        if (selectedArr.length === skus.length) {
            res.push([...selectedArr]);
            return;
        }
        for (let i = 0; i < options.length; i++) {
            // 选择
            selectedArr.push(options[i]);
            // ::::关键，选择下一个产品类型，即下一个数组
            backtrack(skus, selectedArr, index + 1);
            // 取消选择
            selectedArr.pop();
        }
    }
    backtrack(skus, [], 0)
    return res
}

// n = 4, k = 2
const a = [1, 2, 3,4];
const b = [1, 2];
console.log(combine(a, b));
