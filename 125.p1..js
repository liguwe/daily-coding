
// 反转单链表
function reverseList(head) {
    let p = head;
    if (p && p.next !== null) {
        return head;
    }
    let last = reverseList(head);
    head.next.next = head;
    head.next = null;
    return last;
}
// 反转单链表前N个节点
var reverseN = function (head, n) {
    let successor = null; // 后驱节点
    // base case
    if (n === 1) {
        successor = head.next;
        return head;
    }
    // 执行递归 reverseList
    let last = reverseN(head.next, n - 1)
    head.next.next = head; //   让下一个节点的next指向自己
    head.next = successor;  //
    return last;
};
// 反转指定的区间
var reverseBetween = function (head, m, n) {
    // base case
    if (m === 1) {
        return reverseN(head, n);
    }
    // 前进到反转的起点触发 base case
    head.next = reverseBetween(head.next, m - 1, n - 1);
    return head;
};
