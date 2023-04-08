function fn(coins, amount) {
    const memo = new Array(amount+1).fill(-999);

    function dp(coins, amount) {
        // :::: base case
        if (amount === 0) return 0;
        if (amount < 0) return -1;
        // ::::已经被存储过了，就放在这儿
        if (memo[amount] !== -999) return memo[amount];
        // ::::res为最终返回的结果，即最少几枚硬币
        let res = Infinity;
        for (let coin of coins) {
            let subProblem = dp(coins, amount - coin);
            if (subProblem === -1) continue;
            res = Math.min(res, subProblem + 1);
        }
        memo[amount] = (res === Infinity ? -1 : res);
        return memo[amount];
    }

    return dp(coins, amount);
}

console.log(fn([1, 2, 5], 10));  // 2
console.log(fn([1, 24, 100], 200));  //  2
console.log(fn([5, 10, 20, 50], 201)); // -1



