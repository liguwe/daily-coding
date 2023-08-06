var reverseBetween = function (head, m, n) {
    // ① base case
    if (m === 1) {
        // 反转以head开头的n个节点
        return reverseN(head, n);
    }
    // ② 将 head.next 作为起点 反转 前m-1个节点
    head.next = reverseBetween(head.next, m - 1, n - 1);
    return head;
}
