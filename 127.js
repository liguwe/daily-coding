/*************************************************
 * 删除 单链表的倒数第 k 个节点
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/submissions/
 ************************************************/

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// 返回链表中倒数第k个节点
const findFromEnd = function (head, k) {
    let p1 = head;
    for (let i = 0; i < k; i++) {
        p1 = p1.next;
    }
    let p2 = head;
    while (p1 !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2;
}

var removeNthFromEnd = function (head, k) {
    // 虚拟头结点
    let p = new ListNode(-1);
    p.next = head;
    // 删除倒数第 n 个，要先找倒数第 k + 1 个节点
    let x = findFromEnd(p, k + 1);
    // 删掉倒数第 n 个节点
    x.next = x.next.next;
    return p.next;
};
