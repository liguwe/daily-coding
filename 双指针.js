/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * https://leetcode.cn/problems/middle-of-the-linked-list/
 * 876. 链表的中间结点
 * */
var middleNode = function (head) {
    let slow = head,
        fast = head;
    // 快指针走到末尾时停止
    while (fast != null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

/**
 * 判断链表中是否包含环
 * https://leetcode.cn/problems/linked-list-cycle/
 * */
var hasCycle = function (head) {
    let slow = head;
    let fast = head;
    // todo 是并且的关系
    // TODO 注意，这里犯错了
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return fast;
};

/**
 * 如果链表中含有环，找环的起点
 * */
var hasCycleLinkedStart = function (head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }
    // 遇到空指针，相交环
    if (fast === null || fast.next === null) {
        return null;
    }

    // 相交点就是环起点
    slow = head;
    while (slow !== fast) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow;
};

/**
 * https://leetcode.cn/problems/intersection-of-two-linked-lists/
 * 判断两个环是否相交
 * */
var getIntersectionNode = function (headA, headB) {
    let p1 = headA;
    let p2 = headB;
    while (p1 !== p2) {
        if (p1 === null) {
            p1 = headB;
        } else {
            p1 = p1.next;
        }
        if (p2 === null) {
            p2 = headA;
        } else {
            p2 = p2.next;
        }
    }
    return p1
};


