// node节点类
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  toString() {
    return `${this.key}`;
  }
}

export default class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  // 向树中插入一个新的键。
  insert(key) {
    // special case: first key
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      // 从root开始遍历查找合适的位置插入
      this.insertNode(this.root, key);
    }
  }

  // 遍历树，将插入节点的键值与遍历到的节点键值比较，如果前者大于后者，继续递归遍历右子节点，
  // 反之，继续遍历左子节点，直到找到一个空的节点，在该位置插入。
  insertNode(node, key) {
    // 如果插入节点的键值小于当前节点的键值，则需要插入左边
    if (key < node.key) {
      // 左节点没有值，则直接插入
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
      // 否则需要插入右边
    } else {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }

  }

  getRoot() {
    return this.root;
  }


  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  // 搜索特定值的处理与插入值的处理类似。遍历树，
  // 将要搜索的值与遍历到的节点比较，如果前者大于后者，
  // 则递归遍历右侧子节点，反之，则递归遍历左侧子节点。
  searchNode(node, key) {
    if (node == null) {
      return false;
    }
    // 如果要查找的值小于该节点，继续递归遍历其左侧节点
    if (key < node.key) {
      return this.searchNode(node.left, key);
    }
    // 如果要查找的值大于该节点，继续递归遍历其右侧节点
    if (key > node.key) {
      return this.searchNode(node.right, key);
    }
    return true;
  }

  min() {
    return this.minNode(this.root);
  }

  // 在二叉搜索树里，不管是整个树还是其子树，最小值一定在树最左侧的最底层。
  // 因此给定一颗树或其子树，只需要一直向左节点遍历到底就行了。
  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  max() {
    return this.maxNode(this.root);
  }

  // 搜索最大值与搜索最小值类似，只是沿着树的右侧遍历。
  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  // 移除节点，首先要在树中查找到要移除的节点，再判断该节点是否有子节点、有一个子节点或者有两个子节点，最后分别处理。
  remove(key) {
    // 同样从root开始遍历查找
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    // 如果 node 不存在，直接返回
    if (node == null) {
      return null;
    }
    // 找到要删除的node
    node = this.searchNode(node, key)

    // 第一种情况，该节点没有子节点
    if (node.left == null && node.right == null) {
      node = null;
      return node;
    }
    // 第二种情况，该节点只有一个子节点的节点
    if (node.left == null) {
      // 将右子节点替换自己
      node = node.right;
      return node;
    }
    if (node.right == null) {
      // 将左子节点替换自己
      node = node.left;
      return node;
    }
    // 第三种情况，有有两个子节点的节点
    // 1、找到将右侧子树中的最小值，替换到要删除的位置
    // 2、从右侧子树中移除最小节点
    const aux = this.minNode(node.right);
    node.key = aux.key;
    node.right = this.removeNode(node.right, aux.key);
    return node;
  }
}
