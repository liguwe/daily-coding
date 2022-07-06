/**
 * 括号生成
 * 数字 n代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 * 示例 1：
 *
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 示例 2：
 *
 * 输入：n = 1
 * 输出：["()"]
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/generate-parentheses
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * */

function fn(n) {
    let res = [];

    function backtrack(len, res, b) {
        /**
         * 满足条件
         * */
        if (b.length === n * 2) {
            if (isValid(b)) {
                res.push([...b]);
            }
            return;
        }
        /**
         * 选择列表
         * */
        for (let str of ['(', ')']) {
            /**
             * 做选择
             * */
            b.push(str);
            backtrack(len - 1, res, b);
            /**
             * 取消选择
             * */
            b.pop();

        }
    }

    backtrack(n * 2, res, []);

    console.log('res:', res);
    console.log('res.length:', res.length);

    return res;
}


function isValid(b) {
    let stack = [];
    for (let i = 0; i < b.length; i++) {
        const str = b[i];
        if (str === '(') {
            stack.push(str);
        }
        if (str === ')') {
            if (stack.pop() !== '(') {
                return false;
            }
        }
    }
    return stack.length === 0;

}

console.log(isValid(['(', ')', ')', '(']))

fn(2);
fn(4);
