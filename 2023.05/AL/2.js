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
var maxDepth = function (root) {
    if (root == null) {
        return 0;
    }
    // 利用定义，计算左右子树的最大深度
    var leftMax = maxDepth(root.left);
    var rightMax = maxDepth(root.right);
    // 整棵树的最大深度等于左右子树的最大深度取最大值，
    // 然后再加上根节点自己
    var res = Math.max(leftMax, rightMax) + 1;

    return res;
};

/**
 * @param {TreeNode} root
 * @param level 当前节点所在的层数
 * */
function traverse(root, level) {
    if (root == null) {
        return;
    }
    console.log(`节点 ${root} 在第 ${level} 层`);
    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
}

traverse(root, 1);
