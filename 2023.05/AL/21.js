let combine = function (n,k) {
    let res = [];
    const skus = new Array(n).fill(0).map((_, i) => i + 1);

    /**
     * @param {number[][]} opts 可选择的产品类型
     * @param {number[]} selectedArr 已选择的产品类型
     * @param {number} index 当前选择第几个产品类型
     * */
    const backtrack = (opts, selectedArr, index) => {
        let options = opts[index];

        // base case, 选择完了,一共选择了 k 个产品类型
        if (selectedArr.length === k) {
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
    console.log(skus)
    backtrack(skus, [], 0)
    return res
}

console.log(combine(4, 2));
