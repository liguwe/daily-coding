/*************************************************
 * #算法
 * #二叉树
 * 给你输入一棵不含重复值的二叉搜索树，以及存在于树中的两个节点p和q，请你计算p和q的最近公共祖先节点。
 * https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/
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
function fn1(root, p, q) {
    let v1 = Math.min(p.val, q.val);
    let v2 = Math.max(p.val, q.val);
    return find(root, v1, v2);
}

// ::::假设val1 < val2，那么val1 <= root.val <= val2则说明当前节点就是LCA；
//  ::::若root.val比val1还小，则需要去值更大的右子树寻找LCA；
//  ::::若root.val比val2还大，则需要去值更小的左子树寻找LCA。
function find(root, v1, v2) {
    if (root === null) {
        return null;
    }

    // 当前节点太小，去右子树找
    if (root.val < v1) {
        return find(root.right, v1, v2);
    }
    // 当前节点太大，去左子树找
    if (root.val > v2) {
        return find(root.left, v1, v2);
    }

    return root;

}
