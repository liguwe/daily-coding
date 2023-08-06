
var successor = null; // 后驱节点

// 反转以 head 为起点的 n 个节点，返回新的头结点
function reverseN(head, n) {
    // base case
    // 反转一个元素，就是它本身，同时要记录后驱节点
    if (n === 1) {
        // 记录第 n + 1 个节点
        successor = head.next;
        return head;
    }
    // 以 head.next 为起点，需要反转前 n - 1 个节点
    var last = reverseN(head.next, n - 1);

    head.next.next = head;
    // 让反转之后的 head 节点和后面的节点连起来
    head.next = successor;
    return last;
}
