/*************************************************
 * #算法
 * 寻找多个节点的公共祖先
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
 * @param {TreeNode} nodes
 */
// :::: 默认p/q都在二叉树里
var fn1 = function (root, nodes) {
    let values = [];
    for (const val of values) {
        values.push(val);
    }
    return find(root, values);
};


/**
 * // :::: 这一系列问题，都单独提出个find函数来
 * @param root 根节点
 * @param values 节点1的值
 * */
function find(root, values) {
    // :::: 前序位置
    if (root === null) {
        return null;
    }

    if (values.includes(root.val)) {
        return root;
    }

    let l = fn1(root.left, values);
    let r = fn1(root.right, values);

    // :::: 后序位置，已经知道了左右子树是否存在目标值
    if (l && r) {
        return root;
    }

    return l !== null ? l : r
}
