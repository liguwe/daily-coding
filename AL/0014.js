var minDistance = function (s1, s2) {
    var m = s1.length, n = s2.length;
    // 直接使用对象，而不是二维数组，减少空间复杂度
    const memo = {};
    // i，j 初始化指向最后一个索引
    return dp(s1, m - 1, s2, n - 1, memo);
};

// 定义：返回 s1[0..i] 和 s2[0..j] 的最小编辑距离
var dp = function (s1, i, s2, j, memo) {
    // base case
    // :::: 即 s1 = '' ,所以 s1 变成 s2 的最小编辑距离就是 s2 的长度,
    //  即一直插入
    if (i === -1) return j + 1;
    // :::: 即 s2 = '' ,所以 s1 变成 s2 的最小编辑距离就是 s1 的长度，
    //  即一直删除
    if (j === -1) return i + 1;

    // memo[i][j] 已经计算过
    if (memo[`${i}-${j}`] !== undefined) return memo[`${i}-${j}`];

    // skip, 所以 i-1, j-1
    if (s1[i] === s2[j]) {
        return memo[`${i}-${j}`] = dp(s1, i - 1, s2, j - 1, memo);
    }
    return memo[`${i}-${j}`] = Math.min(
        // 插入, s1[i] 插入到 s2[j] 前面, 所以 j-1
        dp(s1, i, s2, j - 1, memo) + 1,
        // 删除，s1[i] 删除，所以 i-1
        dp(s1, i - 1, s2, j, memo) + 1,
        // 替换, s2[j] 替换为 s1[i], 所以 i-1, j-1
        dp(s1, i - 1, s2, j - 1, memo) + 1
    );
};


console.log(minDistance('horse', 'ros'));
console.log(minDistance('intention', 'execution'));
