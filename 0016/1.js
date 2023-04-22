/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    return dp(s, 0, t, 0);
};
function dp(s,i,t,j) {
    //// :::: base case 1
    if (j === t.length) {
        // t 已经全部匹配完成
        return 1;
    }
    // :::: base case 2
    if (s.length - i < t.length - j) {
        // s[i..] 比 t[j..] 还短，必然没有匹配的子序列
        return 0;
    }

    // ::::代表出现的次数
    let res = 0;
    // :::: 在 s[i..] 中寻找 k，使得 s[k] == t[j]
    for (let k = i; k < s.length; k++) {
        if (s[k] === t[j]) {
            // 累加结果
            res += dp(s, k + 1, t, j + 1);
        }
    }
    return res;
}

console.log(numDistinct('rabbbit', 'rabbit'));// 3
console.log(numDistinct('babgbag', 'bag')); // 5
