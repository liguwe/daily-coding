// Node 类
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
    }
}

class LinkedList {
    constructor(array = []) {
        this.count = 0;
        this.head = null;
        if (array?.length) {
            array.forEach((item) => {
                this.push(item)
            })
        }
    }

    push(value) {
        const node = new Node(value);
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    static toArray(node) {
        let arr = [];
        while (node.next != null) {
            arr.push(node.value);
            node = node.next
        }
        return arr;
    }
}

class PQ {
    constructor() {
        this.lists = []
    }

    size() {
        return this.lists.length;
    }

    // sortedLinkList 入队的元素, 为有序链表，权重为有序列表的第一个元素
    enqueue(sortedLinkList) {
        console.log(sortedLinkList);
        if (this.size() === 0) {
            this.lists.push(sortedLinkList);
        } else {
            let added = false;
            for (let i = 0; i < this.size(); i++) {
                if (sortedLinkList.value < this.lists[i].value) {
                    this.lists.splice(i, 0, sortedLinkList);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.lists.push(sortedLinkList);
            }
        }
    }

    dequeue() {
        return this.lists.shift();
    }
}


/**
 * @param {LinkedList[]} lists
 * @return {ListNode}
 * 分析:
 * 1、入参为有序链表，即可使用大小顶堆来表示
 * 2、根据取出的顶点，作为优先级队列的权重
 */

var mergeKLists = function (lists) {

    lists.forEach((it)=>{
        it = new LinkedList(it)
    })
    // base
    if (lists.length === 0) {
        return null
    }
    // 虚拟头结点
    let list = new Node(-1);
    // p指针
    let p = list;

    // 优先级队列初始化多个最小堆
    let pq = new PQ();
    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            pq.enqueue(lists[i].head)
        }
    }

    while (pq.size() !== 0) {
        let node = pq.dequeue();
        p.next = node;
        if (node.next !== null) {
            pq.enqueue(node.next)
        }
        // p指针不断前进
        p = p.next
    }

    return list.next

};

let arr = [[1, 4, 5], [1, 3, 4], [2, 6]];

//
// const list1 = new LinkedList([1, 4, 5]);
// const list2 = new LinkedList([1, 3, 4]);
// const list3 = new LinkedList([2, 6]);

let lists = mergeKLists(arr);
console.log(lists);
console.log(LinkedList.toArray(lists))





