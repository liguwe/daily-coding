/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    // ::::add memo
    const memo = new Array(s.length).fill([]);
    for (let i = 0; i < s.length; i++) {
        // :::: 为什么是 -1 ？？？因为储存的值是 出现次数
        memo[i] = new Array(t.length).fill(-1);
    }
    return dp(s, 0, t, 0,memo);
};
function dp(s,i,t,j,memo) {
    if (j === t.length) {
        return 1;
    }
    if (s.length - i < t.length - j) {
        return 0;
    }
    // :::: 查备忘录防止冗余计算
    if (memo[i][j] !== -1) {
        return memo[i][j];
    }
    let res = 0;
    for (let k = i; k < s.length; k++) {
        if (s[k] === t[j]) {
            // 累加结果
            res += dp(s, k + 1, t, j + 1,memo);
        }
    }
    memo[i][j] = res;
    return res;
}

console.log(numDistinct('rabbbit', 'rabbit'));// 3
console.log(numDistinct('babgbag', 'bag')); // 5
