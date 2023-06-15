// 定义：将以 root 为根的这棵二叉树翻转，返回翻转后的二叉树的根节点
var invertTree = function (root) {
    if (root === null) {
        return null;
    }
    // 利用函数定义，先翻转左右子树
    // ::::翻转左子树
    var left = invertTree(root.left);
    // ::::翻转右子树
    var right = invertTree(root.right);

    // 然后交换左右子节点
    root.left = right;
    root.right = left;

    // 和定义逻辑自恰：以 root 为根的这棵二叉树已经被翻转，返回 root
    return root;
}
