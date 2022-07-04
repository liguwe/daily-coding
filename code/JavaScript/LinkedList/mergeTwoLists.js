/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let list = new ListNode(-1);

    console.log(list);

    // 写得快吧
    let p = list;
    let p1 = list1;
    let p2 = list2;

    while (p1 != null && p2 != null) {
        // 比较 p1 和 p2 两个指针
        // 将值较小的的节点接到 p 指针
        // console.log(p1.val,p2.val)
        if (p1.val <= p2.val) {
            p.next = p1;
            p1 = p1.next;
        } else {
            p.next = p2;
            p2 = p2.next
        }
        // p 不断前进
        p = p.next;
    }

    // 这个时候，只有p1还没遍历完，所以直接把p.next指向p1即可
    if (p1 !== null) {
        p.next = p1;
    }
    // 这个时候，只有p2还没遍历完，所以直接把p.next指向p2即可
    if (p2 !== null) {
        p.next = p2;
    }

    console.log(list.next);
    return list.next;

};


let list1 = new ListNode(1, new ListNode(2, new ListNode(3, null)))
let list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)))

console.log(mergeTwoLists(list1, list2).next)


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//*********************************************************************************

/**
 * 分析:
 * 1、入参为有序链表，即可使用大小顶堆来表示
 * 2、根据取出的顶点，作为优先级队列的权重
 *
 * */
class PQ {
    constructor() {
        this.lists = []
    }

    size() {
        return this.lists.length;
    }

    /**
     * params list 入队的元素, 为有序链表，权重为有序列表的第一个元素
     * */
    enqueue(list) {
        if (this.size() === 0) {
            this.lists.push(list);
        } else {
            let added = false;
            for (let i = 0; i < this.size(); i++) {
                if (list.val < this.lists[i].val) {
                    this.lists.splice(i, 0, list);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.lists.push(list);
            }
        }
    }

    dequeue() {
        return this.lists.shift();
    }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    // base
    if (lists.length === 0) {
        return []
    }
    // 虚拟头结点
    let list = new ListNode(-1);
    // p指针
    let p = list;
    // 优先级队列初始化多个最小堆
    let pq = new PQ();
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            pq.enqueue(lists[i])
        }
    }

    while (pq.size() !== 0) {
        let node = pq.dequeue();
        p.next = node;
        if(node.next !== null){
            pq.enqueue(node.next)
        }
        // p指针不断前进
        p = p.next
    }


    return list.next


};

console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]))





