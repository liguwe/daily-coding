/*************************************************
 *
 * 146、字符最短距离
 *
 * 给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。
 *
 * 返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。
 *
 * 两个下标i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。
 *
 * 示例 1：
 * 输入：s = "loveleetcode", c = "e"
 * 输出：[3,2,1,0,1,0,0,1,2,2,1,0]
 * 解释：字符 'e' 出现在下标 3、5、6 和 11 处（下标从 0 开始计数）。
 * 距下标 0 最近的 'e' 出现在下标 3 ，所以距离为 abs(0 - 3) = 3 。
 * 距下标 1 最近的 'e' 出现在下标 3 ，所以距离为 abs(1 - 3) = 2 。
 * 对于下标 4 ，出现在下标 3 和下标 5 处的 'e' 都离它最近，但距离是一样的 abs(4 - 3) == abs(4 - 5) = 1 。
 * 距下标 8 最近的 'e' 出现在下标 6 ，所以距离为 abs(8 - 6) = 2 。
 *
 * 示例 2：
 * 输入：s = "aaab", c = "b"
 * 输出：[3,2,1,0]
 *
 * 链接：https://leetcode.cn/problems/shortest-distance-to-a-character
 ************************************************/

function fn1(s, c) {
    const n = s.length;
    const res = new Array(n).fill(0);

    // ::::-n 和 2n 其实从左边找还是从右边找，保证没找着前值尽量大，方便后面去最小值
    //// ::::idx变量很重要，一个是i-idx，另外一个是idx-i
    // ::::从左边找
    for (let i = 0, idx = -n; i < n; i++) {
        if (s[i] === c) {
            idx = i;
        }
        res[i] = i - idx;
    }

    // ::::从右边找
    for (let i = n - 1, idx = 2n; i >= 0; i--) {
        if (s[i] === c) {
            idx = i;
        }
        res[i] = Math.min(res[i], idx - i);
    }

    console.log(res);
}


fn1("loveleetcode", 'e')
fn1("aaab", 'b')
