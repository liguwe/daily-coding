var maxDepth = function (root) {
    let res = 0;
    let depth = 0;

    function traverse(root) {
        if (root === null) {
            return;
        }
        depth++;
        if (root.left === null && root.right === null) {
            res = Math.max(depth, res);
        }
        traverse(root.left);
        traverse(root.right);
        depth--;
    }

    traverse(root)
    return res;
};
