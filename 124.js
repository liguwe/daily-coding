/*************************************************
 * 排序链表
 ************************************************/
/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * 删除排序链表中的重复元素
 * */
// 1 -> 1 -> 2 -> 3 -> 3
// 1 -> 2 -> 3 -> null
const deleteDuplicates = (head) => {
    let p = head;
    while (p) {
        if (p.val === p.next.val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return head;
}

/**
 * 合并两个有序列表
 * 1 -> 3 -> 5 -> null
 * 4 -> 7 -> 8 -> null
 * */
var mergeTwoLists = function (list1, list2) {
    let list = new ListNode(-1);
    // todo 必须重新赋值，因为要返回list
    let p = list;
    let p1 = list1;
    let p2 = list2;
    while (p1 && p2) {
        if (p1.val >= p2.val) {
            p.next = p2;
            p2 = p2.next;
        } else {
            p.next = p1;
            p1 = p1.next;
        }
    }
    if (p1) {
        p.next = p1;
    }
    if (p2) {
        p.next = p2;
    }
    return list.next;
}

/**
 * 合并 k 个有序链表：优先列队，列队的每个元素是小顶堆
 * todo 没写出来，再写一遍
 * */
var mergeKLists = function (lists) {
    // 虚拟头结点
    let list = new ListNode(-1);
    let p = list;
    // 优先级队列，值最小的先入队，入队函数
    let q = [];
    let enqueue = (node) => {
        if (q.length === 0) {
            q.push(node);
            return;
        }
        let added = false;
        for (let i = 0; i < q.length; i++) {
            if (node.val < q[i].val) {
                q.splice(i, 0, node)
                added = true;
                break;
            }
        }
        if (!added) {
            q.push(node);
        }
    }
    //  根据入栈的 最小堆的顶点的值，最小的先入队列
    //  越小越大，最新入队列
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] !== null) {
            enqueue(lists[i])
        }
    }

    while (q.length !== 0) {
        let node = q.shift()
        p.next = node;
        // 通过这里来判断是否需要加入到队列中，很重要！！！
        if (node.next !== null) {
            enqueue(node.next);
        }
        // p指针不断前进
        p = p.next;
    }

    return list.next;
};

let m = s.
