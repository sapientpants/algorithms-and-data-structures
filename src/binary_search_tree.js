import { IllegalArgumentException } from './errors';

/**
 * An implementation of a binary search tree. This implementation does not try to
 * rebalance the tree if it becomes unbalanced. In other words, the order that nodes
 * are added matters.
 * @class BinarySearchTree
 * @constructor
 */
export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * The height of the receiver.
   * @property {Integer} height
   */
  get height() {
    return BinarySearchTree.heightOfTree(this.root);
  }

  static heightOfTree(root) {
    if (root == null) return 0;
    return 1 + Math.max(this.heightOfTree(root.left), this.heightOfTree(root.right));
  }

  /**
   * True if the receiver is empty, otherwise false.
   * @property {Boolean} isEmpty
   */
  get isEmpty() {
    return this.size === 0;
  }

  /**
   * The maximum key.
   * @property {Object} max
   */
  get max() {
    return BinarySearchTree.maxKeyInTree(this.root);
  }

  static maxKeyInTree(root) {
    if (root == null) return null;
    if (root.right == null) return root.key;
    return this.maxKeyInTree(root.right);
  }

  /**
   * The minimum key.
   * @property {Object} min
   */
  get min() {
    return BinarySearchTree.minKeyInTree(this.root);
  }

  static minKeyInTree(root) {
    if (root == null) return null;
    if (root.left == null) return root.key;
    return this.minKeyInTree(root.left);
  }

  /**
   * The size of the receiver.
   * @property {Integer} size
   */
  get size() {
    return BinarySearchTree.sizeOfTree(this.root);
  }

  static sizeOfTree(root) {
    return root != null ? 1 + this.sizeOfTree(root.left) + this.sizeOfTree(root.right) : 0;
  }

  /**
   * Returns true if the given key exists in the receiver, false otherwise.
   * @method contains
   * @param {Object} key
   * @return {Boolean} true if the given key exists, false otherwise.
   */
  contains(key) {
    return this.get(key) != null;
  }

  /**
   * Gets the value of the node with the given key.
   * @method get
   * @param {Object} key
   * @return {Object} the value of the associated node or null if it does not exist in the receiver
   */
  get(key) {
    return BinarySearchTree.getFromTree(this.root, key);
  }

  static getFromTree(root, key) {
    if (key == null) throw new IllegalArgumentException('key must not be null');
    if (root == null) return null;
    if (key < root.key) return this.getFromTree(root.left, key);
    if (key > root.key) return this.getFromTree(root.right, key);
    return root.value;
  }

  /**
   * Removes the node with the given key from the receiver.
   * @method delete
   * @param {Object} key
   */
  delete(key) {
    if (key == null) throw new IllegalArgumentException('key must not be null');
    this.root = BinarySearchTree.deleteNodeFromTree(this.root, key);
  }

  static deleteNodeFromTree(root, key) {
    if (root == null) return null;
    if (key < root.key) root.left = this.deleteNodeFromTree(root.left, key);
    else if (key > root.key) root.right = this.deleteNodeFromTree(root.right, key);
    else {
      if (root.right == null) return root.left;
      if (root.left == null) return root.right;
      const tmp = root;
      root = this.minKeyInTree(tmp.right);
      root.right = this.deleteMinInTree(tmp.right);
      root.left = tmp.left;
    }
    return root;
  }

  static deleteMinInTree(root) {
    if (root.left == null) return root.right;
    root.left = this.deleteMinInTree(root.left);
    return root;
  }

  /**
   * Removes the node with the minimum key from the receiver.
   * @method deleteMin
   */
  deleteMin() {
    if (this.isEmpty) return;
    this.root = BinarySearchTree.deleteMinInTree(this.root);
  }

  /**
   * Removes the node with the maximum key from the receiver.
   * @method deleteMax
   */
  deleteMax() {
    if (this.isEmpty) return;
    this.root = BinarySearchTree.deleteMaxInTree(this.root);
  }

  static deleteMaxInTree(root) {
    if (root.right == null) return root.left;
    root.right = this.deleteMaxInTree(root.right);
    return root;
  }

  /**
   * Adds or updates the node with the given key to have the given value.
   * @method put
   * @param {Object} key
   * @param {Object} value
   */
  put(key, value) {
    if (key == null) throw new IllegalArgumentException('key must not be null');
    if (value == null) {
      this.delete(key);
      return;
    }
    this.root = BinarySearchTree.putInTree(this.root, key, value);
  }

  static putInTree(root, key, value) {
    if (root == null) return Node.forKeyAndValue(key, value);
    if (key < root.key) root.left = this.putInTree(root.left, key, value);
    else if (key > root.key) root.right = this.putInTree(root.right, key, value);
    else root.value = value;
    return root;
  }
}

class Node {
  constructor(key, value) {
    if (key == null) throw new IllegalArgumentException('key must not be null');
    if (value == null) throw new IllegalArgumentException('value must not be null');
    this.key = key;
    this.left = null;
    this.right = null;
    this.value = value;
  }

  static forKeyAndValue(key, value) {
    return new Node(key, value);
  }
}
