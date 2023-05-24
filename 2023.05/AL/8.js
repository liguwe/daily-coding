let names = ["iPhone X", "iPhone XS"];
let colors = ["黑色", "白色"];
let storages = ["64g", "256g"];

// [
//     ["iPhone X", "黑色", "64g"],
//     ["iPhone X", "黑色", "256g"],
//     ["iPhone X", "白色", "64g"],
//     ["iPhone X", "白色", "256g"],
//     ["iPhone XS", "黑色", "64g"],
//     ["iPhone XS", "黑色", "256g"],
//     ["iPhone XS", "白色", "64g"],
//     ["iPhone XS", "白色", "256g"],
// ]

let combine = function (...skus) {
    console.log(skus);;
    let res = [];
    const backtrack = (opts, selectedArr, index) => {
        let options = opts[index];
        if (selectedArr.length === 3) {
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


console.log(combine(names, colors, storages));
