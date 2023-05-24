var diameterOfBinaryTree = function (root) {
    var maxDiameter = 0;

    // 遍历二叉树
    var traverse = function (node) {
        if (node == null) {
            return 0;
        }
        // ::::双重递归，复杂度比较高
        // 对每个节点计算直径
        var leftMax = maxDepth(node.left);
        var rightMax = maxDepth(node.right);
        var myDiameter = leftMax + rightMax;
        // 更新全局最大直径
        maxDiameter = Math.max(maxDiameter, myDiameter);
        // 递归遍历左子树
        traverse(node.left);
        // 递归遍历右子树
        traverse(node.right);
    }

    // 计算二叉树的最大深度
    var maxDepth = function (node) {
        if (node == null) {
            return 0;
        }
        // 计算左右子树最大深度
        var leftMax = maxDepth(node.left);
        var rightMax = maxDepth(node.right);
        return 1 + Math.max(leftMax, rightMax);
    }

    // 对每个节点计算直径，求最大直径
    traverse(root);
    return maxDiameter;
}
