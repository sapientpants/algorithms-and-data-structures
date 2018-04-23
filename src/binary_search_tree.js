import { IllegalArgumentException } from './errors';

class Node {
  constructor(key, value) {
    if (key == null) throw new IllegalArgumentException('key must not be null');
    if (value == null) throw new IllegalArgumentException('value must not be null');
    this.key = key;
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

/**
 * An implementation of a binary search tree.
 * @class BinarySearchTree
 * @constructor
 */
export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  static _delete(node, key) {
    if (node == null) return null;
    if (key < node.key) node.left = this._delete(node.left, key);
    else if (key > node.key) node.right = this._delete(node.right, key);
    else {
      if (node.right == null) return node.left;
      if (node.left == null) return node.right;
      const tmp = node;
      node = this._min(tmp.right);
      node.right = this._deleteMin(tmp.right);
      node.left = tmp.left;
    }
    return node;
  }

  static _deleteMax(node) {
    if (node.right == null) return node.left;
    node.right = this._deleteMax(node.right);
    return node;
  }

  static _deleteMin(node) {
    if (node.left == null) return node.right;
    node.left = this._deleteMin(node.left);
    return node;
  }

  static _get(node, key) {
    if (key == null) throw new IllegalArgumentException('key must not be null');
    if (node == null) return null;
    if (key < node.key) return this._get(node.left, key);
    if (key > node.key) return this._get(node.right, key);
    return node.value;
  }

  static _height(node) {
    if (node == null) return 0;
    return 1 + Math.max(this._height(node.left), this._height(node.right));
  }

  static _max(node) {
    if (node == null) return null;
    if (node.right == null) return node.key;
    return this._max(node.right);
  }

  static _min(node) {
    if (node == null) return null;
    if (node.left == null) return node.key;
    return this._min(node.left);
  }

  static _put(node, key, value) {
    if (node == null) return new Node(key, value);
    if (key < node.key) node.left = this._put(node.left, key, value);
    else if (key > node.key) node.right = this._put(node.right, key, value);
    else node.value = value;
    return node;
  }

  static _size(node) {
    return node != null ? 1 + this._size(node.left) + this._size(node.right) : 0;
  }

  /**
   * The height of the receiver.
   * @property {Integer} height
   */
  get height() {
    return BinarySearchTree._height(this.root);
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
    return BinarySearchTree._max(this.root);
  }

  /**
   * The minimum key.
   * @property {Object} min
   */
  get min() {
    return BinarySearchTree._min(this.root);
  }

  /**
   * The size of the receiver.
   * @property {Integer} size
   */
  get size() {
    return BinarySearchTree._size(this.root);
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
   * Removes the node with the given key from the receiver.
   * @method delete
   * @param {Object} key
   */
  delete(key) {
    if (key == null) throw new IllegalArgumentException('key must not be null');
    this.root = BinarySearchTree._delete(this.root, key);
  }

  /**
   * Removes the node with the maximum key from the receiver.
   * @method deleteMax
   */
  deleteMax() {
    if (this.isEmpty) return;
    this.root = BinarySearchTree._deleteMax(this.root);
  }

  /**
   * Removes the node with the minimum key from the receiver.
   * @method deleteMin
   */
  deleteMin() {
    if (this.isEmpty) return;
    this.root = BinarySearchTree._deleteMin(this.root);
  }

  /**
   * Gets the value of the node with the given key.
   * @method get
   * @param {Object} key
   * @return {Object} the value of the associated node or null if it does not exist in the receiver
   */
  get(key) {
    return BinarySearchTree._get(this.root, key);
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
    this.root = BinarySearchTree._put(this.root, key, value);
  }
}
