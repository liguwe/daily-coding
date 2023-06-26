var detectCycle = function (head) {
    var fast, slow;
    fast = slow = head;

    //// ::::第一步： 相遇时，即相遇点，
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) break;
    }
    // 上面的代码类似 hasCycle 函数
    if (fast == null || fast.next == null) {
        // fast 遇到空指针说明没有环
        return null;
    }

    // ::::第二步：在相遇点，重新同速度前进

    // 重新指向头结点
    slow = head;
    // 快慢指针同步前进，相交点就是环起点
    while (slow !== fast) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow;
};
