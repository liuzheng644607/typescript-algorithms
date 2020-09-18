import TreeNode from './TreeNode';

type Callback = (node: TreeNode) => void;

export default class BinaryTree {
  constructor (
    public root: TreeNode | null = null
  ) {}

  /**
   * 前序遍历
   */
  public preOrderTraverseNode(node: TreeNode | null, callback: Callback) {
    if (node) {
      callback(node);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * 中序遍历
   * @param node TreeNode
   * @param callback Callback
   */
  public inOrderTraverseNode(node: TreeNode | null, callback: Callback) {
    if (node) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * 后序遍历
   * @param node 
   * @param callback 
   */
  public postOrderTraverseNode(node: TreeNode | null, callback: Callback) {
    if (node) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node);
    }
  }

  /**
   * 插入节点
   * @param node 
   * @param newNode 
   */
  public insertNode(node: TreeNode, newNode: TreeNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  public insert(value: any) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  public preOrderTraverse(callback: Callback) {
    this.preOrderTraverseNode(this.root, callback);
  } 
}
