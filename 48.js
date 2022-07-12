/**
 *
 * @desc 回溯算法序列
 *
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
 *
 * 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，
 * 但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
 * 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，
 * 返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入'.' 来形成。
 * 你不能重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
 *
 *
 * 输入：s = "25525511135"
 * 输出：["255.255.11.135","255.255.111.35"]
 *
 * 输入：s = "0000"
 * 输出：["0.0.0.0"]
 *
 * 输入：s = "101023"
 * 输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/restore-ip-addresses
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * */



var fn = function (s) {
    if (s.length > 12) {
        return [];
    }
    let res = [];
    let track = [];

    function backtrack(s, track, res) {
        /**
         * 满足条件
         * */
        // console.log(track);
        if (track.length === 4 && s.length === 0) {
            res.push(track.join('.'));
            return;
        }
        // 最多选择3个，少于三个就选择剩余的
        let len = s.length >= 3 ? 3 : s.length;
        for (let i = 0; i < len; i++) {
            /**
             * 做选择
             * */

            const c = s.slice(0, i + 1);
            // 不能大于255
            if (Number(c) > 255) continue;
            // 排除 011 01 这类的场景
            if (c.length > 1 && c.indexOf('0') === 0) continue;
            track.push(c);

            backtrack(s.slice(i+1), track, res);
            /**
             * 取消选择
             * */
            track.pop();
        }
    }

    backtrack(s,track,res);
    console.log(res);
    return res;
};

fn('25525511135')
fn('0000')
fn('101023')





