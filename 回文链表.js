/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * 判断一字符串是否是回文
 * */
function isHuiWen(str) {
    if (!str) {
        return true;
    }
    return str.reverse() === str;
}

function isHuiWen1(str) {
    let left = 0;
    let right = str.length - 1;
    while (left <= right) {
        if (str[left] !== str[right]) {
            return false
        }
        left++;
        right--;
    }
    return true;
}

/**
 * 返回最长回文字符串场景
 * */

/**
 * 判断一回文链表
 * https://leetcode.cn/problems/palindrome-linked-list/submissions/
 * */
// 遍历解法
// todo 不通过LeetCode
function isHuiWenLinked(head) {
    let p = head;
    let values = [];
    while (p && p.val) {
        values.push(head.val)
        p = p.next
    }
    return isHuiWen(values.join(''));
}

// 递归解法,看看吧，不理解就算了
function isHuiWenLinked2(head) {
    let left = head;

    function traverse(right) {
        if (right === null) return true;
        let res = traverse(right.head);
        // 后续位置
        res = res && (right.val === left.val);
        left = left.next;
        return res;
    }
    traverse(head);
}

// TODO 解法3，翻转链表，再比较


