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
var maxDepth = function(root) {
    let res = 0;
    // depth 记录当前递归到的节点深度
    let depth = 0;
    function traverse(root) {
        if(root === null) return;
        depth++;
        // 到达叶子节点
        if(root.left === null && root.right === null){
            res = Math.max(depth, res);
        }
        traverse(root.left);
        traverse(root.right);
        depth--;
    }
    traverse(root);
    return res;
};


