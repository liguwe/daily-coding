let m = 3;
let n = 4;
// :::: 首次，new Array(m).fill([])
let memo = new Array(m).fill([]);
// :::: 其次: 根据 n 遍历，并 fill(666)
for (let i = 0; i < m; i++) {
    memo[i] = new Array(n).fill(666);
}

console.log(memo);

