/*************************************************
 *
 * 一棵二叉树中的两个节点 p 和 q，返回它们的最近公共祖先节点（LCA）。
 *
 * 一棵二叉树中的两个节点 p 和 q => // :::: 说明p、q都在节点中
 *
 * 每个节点都包含其父节点的引用（指针）。Node的定义如下：
 *
 * class Node {
 *     public int val;
 *     public Node left;
 *     public Node right;
 *     public Node parent;
 * }
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-iii
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 ************************************************/

// ::::这道题其实不是公共祖先的问题，而是单链表相交的问题，你把parent指针想象成单链表的next指针
//  :::: 题目就变成了：
// ::::给你输入两个单链表的头结点p和q，这两个单链表必然会相交，请你返回相交点。

function fn1(p, q) {
    let a = p;
    let b = q;
    while (a !== b) {
        // a 走一步，如果走到根节点，转到 q 节点
        if (a == null) a = q;
        else a = a.parent;
        // b 走一步，如果走到根节点，转到 p 节点
        if (b == null) b = p;
        else b = b.parent;
    }
    return a;
}
