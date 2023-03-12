/*************************************************
 * ::::斐波那契数列 https://leetcode.cn/problems/fibonacci-number/
 ************************************************/


/*************************************************
 * ::::第一种解法：暴力递归
 * 复杂度： O(n^2)
 ************************************************/
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
};


/*************************************************
 * ::::解决重叠子问题 - 带备忘录的递归解法
 * // ::::【自顶向下】的思路
 * 算法的时间复杂度是 O(n) ，空间复杂度O(n)
 ************************************************/
var fib1 = function (n) {
    // 备忘录全初始化为 0
    let memo = new Array(n + 1).fill(0);
    // ::::注意，这里利用了闭包，把memo传入，能够保证不销毁
    // 进行带备忘录的递归
    return dp(memo, n);
};

// 带着备忘录进行递归
var dp = function (memo, n) {
    // base case
    if (n === 0 || n === 1) return n;
    // 已经计算过，不用再计算了
    if (memo[n] !== 0) return memo[n];
    // 否则，重新计算，并且存到memo中
    // ::::这里利用了闭包，把memo传入
    memo[n] = dp(memo, n - 1) + dp(memo, n - 2);
    return memo[n];
};


/*************************************************
 * ::::解法3： DP table 【自低向上】dp 数组的迭代（递推）解法
 * // ::::所谓 【自低向上】 即 推倒过程，从0，1 推倒出 f(2)等
 * 算法的时间复杂度是 O(n) ，空间复杂度O(n)
 ************************************************/
var fib3 = function (N) {
    if (N === 0) return 0;
    let dp = new Array(N + 1).fill(0);
    // base case
    dp[0] = 0;
    dp[1] = 1;
    //// ::::状态转移方程
    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[N];
}


/*************************************************
 * ::::解法4： 进一步优化，把二维的dp table 压成一维的,即只要维护两个变量 prev  curr
 ************************************************/
var fib4 = function (n) {
    if (n === 0 || n === 1) return n;
    let prev = 1, curr = 1;
    for (let i = 2; i < n; i++) {
        let sum = prev + curr;
        prev = curr;
        curr = sum;
    }
    return curr;
}
