/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (root == null) {
        return 0;
    }
    let q = [root];
    // root 本身就是一层，depth 初始化为 1
    let depth = 1;
    while (q.length > 0) {
        // 一定要写在这儿！
        const sz = q.length;
        /* 将当前队列中的所有节点向四周扩散 */
        for (let i = 0; i < sz; i++) {
            let cur = q.shift();
            /* 判断是否到达终点 */
            if (cur.left == null && cur.right == null) {
                return depth;
            }

            /* 将 cur 的相邻节点加入队列 */
            if (cur.left != null) {
                q.push(cur.left);
            }
            if (cur.right != null) {
                q.push(cur.right);
            }
        }
        /* 这里增加步数 */
        depth++;
    }
    return depth;


};


const BFS = function (start,target) {
    let q = [start]; // 核心数据结构 // 将起点加入队列
    let visited = new Set(); // 避免走回头路
    visited.add(start);
    let step = 0; // 记录扩散的步数
    while (q.length > 0) {
        let sz = q.size();
        /* 将当前队列中的所有节点向四周扩散 */
        for (let i = 0; i < sz; i++) {
            let cur = q.unshift();
            /* 划重点：这里判断是否到达终点 */
            if (cur === target) return step;
            /* 将 cur 的相邻节点加入队列 */
            for (let x of cur.adj()) {
                if (!visited.has(x)) {
                    q.push(x);
                    visited.add(x);
                }
            }
        }
        /* 划重点：更新步数在这里 */
        step++;
    }
};


