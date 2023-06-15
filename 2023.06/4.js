var invertTree = function (root) {
    const traverse = function (root) {
        if (root === null) {
            return;
        }
        traverse(root.left);
        let tmp = root.left;

        root.left = root.right;
        traverse(root.right);
        root.right = tmp;
    };

    // 遍历二叉树，交换每个节点的子节点
    traverse(root);
    return root;
};
