/*************************************************
 * 最小找零硬币
 ************************************************/
// 暴力解法,根本就通不过
var coinChange = function (coins, amount) {

    function dp(coins, amount) {
        // base case
        if (amount === 0) return 0;
        if (amount < 0) return -1;

        let res = Number.MAX_VALUE;
        for (let coin of coins) {
            let subProblem = dp(coins, amount - coin);
            if (subProblem === -1) continue;
            res = Math.min(subProblem + 1, res);
            console.log(res);
        }
        return res === Number.MAX_VALUE ? -1 : res;
    }

    return dp(coins, amount);
};

// memo,递归
var coinChange1 = function (coins, amount) {
    let memo = new Array(amount + 1).fill(-999);

    function dp(coins, amount) {
        // base case
        if (amount === 0) return 0;
        if (amount < 0) return -1;
        if (memo[amount] !== -999) {
            return memo[amount];
        }

        let res = Number.MAX_VALUE;
        for (let coin of coins) {
            let subProblem = dp(coins, amount - coin);
            if (subProblem === -1) continue;
            res = Math.min(subProblem + 1, res);
        }
        memo[amount] = res === Number.MAX_VALUE ? -1 : res;
        return memo[amount];
    }

    return dp(coins, amount);
};

// 遍历
/**
 *
 * dp[i] 代表金额i的最优解，即最小使用张数
 * coins = [1, 2, 5], amount = 11
 * dp[11] = Math.min(dp[10] + 1， dp[9] + 1, dp[6] + 1)
 * */
var coinChange3 = function (coins, amount) {
    let dp = new Array(amount + 1).fill( Number.MAX_VALUE);
    // base case
    dp[0] = 0;

    for (let i = 0; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin < 0) continue;
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }
    return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
};
