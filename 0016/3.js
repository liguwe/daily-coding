/**
 * // ::::转态转移方程定义：
 *    s[i..] 的子序列中 t[j..] 出现的次数为 dp(s, i, t, j)
 */
var dp = function(s, i, t, j){
    if(s[i] === t[j]){
        // 匹配，两种情况，累加关系
        return dp(s, i + 1, t, j + 1) + dp(s, i + 1, t, j);
    } else {
        // 不匹配，在 s[i+1..] 的子序列中计算 t[j..] 的出现次数
        return dp(s, i + 1, t, j);
    }
}
