/**
 * Node节点
 * */
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function traverse(root) {
    if (root === null) {
        return;
    }
    traverse(root.left);
    // 中序位置
    console.log(root.val);
    traverse(root.right);
}

let root;
traverse(root);
