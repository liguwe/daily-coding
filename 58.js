/**
 * 双指针
 * 二分
 *
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 *
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。
 * （例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 *
 * 示例 1：
 *
 * 输入：s = "abc", t = "ahbgdc"
 * 输出：true
 * 示例 2：
 *
 * 输入：s = "axc", t = "ahbgdc"
 * 输出：false
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/is-subsequence
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 * */


// 快慢指针
// O(N)
const fn = (s, t) => {
    let i = 0;
    let j = 0;
    for (let k = 0; k < t.length; k++) {
        j = k;
        if (s[i] === t[j]) {
            i++;
        }
    }
    return i === s.length
}

console.log(fn('axc', 'ahbgdc'))
console.log(fn('abc', 'ahbgdc'))
console.log(fn('aecgi', 'ahbgdcdeghrcgi'))


/**
 * // 二分优化
 * //  O(MlogN)
 * //TODO  没太明白，构造出下面结构
 * { a: [ 0, 6 ],c:[1,2,3]} 这样的结构也是需要遍历一遍啊，所以至少也是O(M) + 其他
 * 所以不明白😖优化到哪了
 * */

const fn1 = (s, t) => {
    let map = {};
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        let item = map[s];
        if(item){
            map[s].push(i);
        }else {
            map[s] = [i]
        }
    }
    console.log(map);
}

console.log(fn1('axc', 'ahbgdc'))
console.log(fn1('abc', 'ahbgdca'))
