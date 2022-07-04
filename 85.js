/*************************************************
 * #算法
 * 寻找二叉树的最近公共祖先序列
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/
 *
 * // :::: 从root上找，如果left和right都存在时，说明找到了
 ************************************************/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// :::: 默认p/q都在二叉树里
var fn1 = function (root, p, q) {
    return find(root, p.val, q.val)
};


/**
 * // :::: 这一系列问题，都单独提出个find函数来
 * @param root 根节点
 * @param v1 节点1的值
 * @param v2 节点2的值
 * */
function find(root, v1, v2) {
    // :::: 前序位置
    if (root === null) {
        return null;
    }

    if (root.val === v1 || root.val === v2) {
        return root;
    }

    let l = fn1(root.left, v1, v2);
    let r = fn1(root.right, v1, v2);

    // :::: 后序位置，已经知道了左右子树是否存在目标值
    if (l && r) {
        return root;
    }

    return l !== null ? l : r
}
