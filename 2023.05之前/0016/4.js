/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const memo = new Array(s.length).fill([]);
    for (let i = 0; i < s.length; i++) {
        memo[i] = new Array(t.length).fill(-1);
    }
    return dp(s, 0, t, 0, memo);
};

// 定义：s[i..] 的子序列中 t[j..] 出现的次数为 dp(s, i, t, j, memo)
var dp = function(s, i, t, j, memo) {
    // base case 1
    if (j === t.length) {
        return 1;
    }
    // base case 2
    if (s.length - i < t.length - j) {
        return 0;
    }
    // 查备忘录防止冗余计算
    if (memo[i][j] !== -1) {
        return memo[i][j];
    }
    let res = 0;
    // 执行状态转移方程
    if (s[i] === t[j]) {
        // 匹配，两种情况，累加关系
        res += dp(s, i + 1, t, j + 1, memo) + dp(s, i + 1, t, j, memo);
    } else {
        // 不匹配，在 s[i+1..] 的子序列中计算 t[j..] 的出现次数
        res += dp(s, i + 1, t, j, memo);
    }
    // 结果存入备忘录
    memo[i][j] = res;
    return res;
};

console.log(numDistinct('rabbbit', 'rabbit'));// 3
console.log(numDistinct('babgbag', 'bag')); // 5
