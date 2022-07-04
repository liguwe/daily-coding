/*************************************************
 * 寻找二叉树的最近公共祖先序列
 * 且不确定两个子节点是否在树中
 * // :::: 只需要把前序位置的判断逻辑放到后序位置即可：
 * - p和q不一定存在于树中，所以你不能遇到一个目标值就直接返回
 * - 而应该对二叉树进行完全搜索（遍历每一个节点）
 *
 * https://mp.weixin.qq.com/s/njl6nuid0aalZdH5tuDpqQ
 ************************************************/

let findQ = false;
let findP = false;

// :::: 默认p/q都在二叉树里
var fn1 = function (root, p, q) {
    let res = find(root, p.val, q.val);
    if (!findQ || !findP) {
        return null;
    }
    return res;
};


/**
 * // :::: 这一系列问题，都单独提出个find函数来
 * @param root 根节点
 * @param v1 节点1的值
 * @param v2 节点2的值
 * */
function find(root, v1, v2) {
    // :::: 前序位置
    if (root === null) {
        return null;
    }

    let l = fn1(root.left, v1, v2);
    let r = fn1(root.right, v1, v2);

    // :::: 后序位置，判断是否找到了,且不是他们本身，所以直接返回了
    if (l && r) {
        return root;
    }
    // :::: 只找到一个，就得判断两个节点是否在树里面了
    if (root.val === v1 || root.val === v2) {
        if(root.val === v1) findP = true;
        if(root.val === v2) findQ = true;
        return root;
    }

    return l !== null ? l : r
}

