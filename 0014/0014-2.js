let minDistance = function (s1, s2) {
    let m = s1.length, n = s2.length;
    // 定义：s1[0..i] 和 s2[0..j] 的最小编辑距离是 dp[i+1][j+1]
    let dp = [];
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }
    // base case
    // ::::即 s2 = ''
    for (let i = 1; i <= m; i++) {
        dp[i][0] = i;
    }
    // ::::即 s1 = ''
    for (let j = 1; j <= n; j++) {
        dp[0][j] = j;
    }
    // 自底向上求解
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j - 1] + 1
                );
            }
        }
    }
    // 储存着整个 s1 和 s2 的最小编辑距离
    return dp[m][n];
};

