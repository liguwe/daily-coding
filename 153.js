// 二叉搜索树的公共节点
function fn1(root, p, q) {
    let v1 = Math.min(p.val, q.val);
    let v2 = Math.max(p.val, q.val);
    return find(root, v1, v2);
}

function find(root, v1, v2) {
    if (root === null) {
        return null;
    }
    if (root.val < v1) {
        return find(root.right, v1, v2);
    }
    if (root.val > v2) {
        return find(root.left, v1, v2);
    }
    return root;
}
