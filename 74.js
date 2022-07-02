/*************************************************
 * 二叉树的最大深度
 ************************************************/

var maxDepth = function (root) {
    // 记录最大深度
    let res = 0;
    // 记录遍历到的节点的深度
    let depth = 0;

    function traverse(root) {
        if (root === null) {
            return;
        }

        //::: 前序位置 start
        depth++;

        if (root.left === null && root.right === null) {
            res = Math.max(depth, res);
        }

        //::: 前序位置 end
        traverse(root.left);
        //::: 中序位置，什么也不做
        traverse(root.right);
        //::: 后续位置-1
        depth--;

    }

    traverse(root)
    return res;
};
