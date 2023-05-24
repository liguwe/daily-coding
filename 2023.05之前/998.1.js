/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// coins = [1, 2, 5], amount = 11

/**
 * 自顶向下的递归解法
 *
 * */

var dp = function (coins, amount) {
    // base case
    if (amount === 0) {
        return 0;
    }
    if (amount < 0) {
        return -1
    }
    // ::::res为最终返回的结果，即最少几枚硬币
    let res = Infinity;
    for (let coin of coins) {
        // 计算子问题的结果
        let subProblem = dp(coins, amount - coin);
        // 子问题无解则跳过
        if (subProblem === -1) continue;
        // 在子问题中选择最优解，然后加一
        res = Math.min(res, subProblem + 1);
    }
    return res === Infinity ? -1 : res;
};


console.log(dp([1, 2, 5], 11));
console.log(dp([2], 3));
console.log(dp([1], 0));
console.log(dp([1], 10));
console.log(dp([3,1], 10));
