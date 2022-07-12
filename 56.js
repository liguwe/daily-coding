/***
 * 回溯算法
 * sku全排列
 * */
let names = ["iPhone", 'iPhone xs']
let colors = ['黑色', '白色']
let storages = ['64g', '256g']


let combine = function (...chunks) {
    let res = [];
    const backtrack = (arr, track, index) => {
        let options = arr[index];
        if (track.length === 3) {
            res.push([...track]);
            return;
        }
        for (let i = 0; i < options.length; i++) {
            // 选择
            track.push(options[i]);
            backtrack(chunks, track, index + 1);
            // 取消选择
            track.pop();
        }
    }
    backtrack(chunks, [], 0)
    return res
}

console.log(combine(names, colors, storages));

