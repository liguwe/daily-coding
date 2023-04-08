/**
 * // ::::模板
 * # 自底向上迭代的动态规划
 * # 初始化 base case
 * dp[0][0][...] = base case
 * # 进行状态转移
 * for 状态1 in 状态1的所有取值：
 *     for 状态2 in 状态2的所有取值：
 *         for ...
 *             dp[状态1][状态2][...] = 求最值(选择1，选择2...)
 * */

function fn(coins, amount) {
    // ::::第一步：初始化
    // :::: dp 数组的定义：当目标金额为 `i` 时，至少需要 `dp[i]` 枚硬币凑出
    // :::: 初始化为 amount + 1 就相当于初始化为正无穷
    // :::: 因为最多dp[amount] 最大只能等于 amount ,即都找零 1 块钱的
    const dp = new Array(amount + 1).fill(amount + 1);

    // ::::第二步 base case
    dp[0] = 0;

    // ::::第三步 嵌套循环
    // 外层 for 循环在遍历所有状态的所有取值
    for (let i = 0; i < dp.length; i++) {
        // ::::内层 for 循环在求所有选择的最小值
        for (let coin of coins) {
            // 子问题无解，跳过
            if (i - coin < 0) {
                continue;
            }
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }
    return (dp[amount] === amount + 1) ? -1 : dp[amount];
}

console.log(fn([1, 2, 5], 10));  // 2
console.log(fn([1, 24, 100], 200));  //  2
console.log(fn([5, 10, 20, 50], 201)); // -1



