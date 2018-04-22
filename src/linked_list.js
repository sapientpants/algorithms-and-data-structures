import { IndexOutOfBoundsError } from "./errors";

class Node {
  constructor(data, next = null) {
    this.next = next;
    this.data = data;
  }
}

/**
 * An implementation of a linked list.
 * @class LinkedList
 * @constructor
 */
export default class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Append an element to the end of the receiver.
   * @method append
   * @param {Object} element The element to append.
   */
  append(element) {
    const newNode = new Node(element);
    if (this.head == null) {
      this.head = newNode;
    } else {
      const node = this._findNode(node => {
        return node.next == null;
      });
      node.next = newNode;
    }
  }

  /**
   * Removes all elements from the receiver.
   * @method clear
   */
  clear() {
    this.head = null;
  }

  /**
   * Checks if the receiver contains the given element.
   * @method contains
   * @param {Object} element the element to find
   * @return {Boolean} true if the given element was found, false otherwise
   */
  contains(element) {
    if (this.head == null) {
      return false;
    } else {
      const node = this._findNode(node => {
        return node == null || node.data === element;
      });
      return node != null;
    }
  }

  /**
   * Gets the object at the given index.
   * @method get
   * @param {Integer} index
   * @throws {Error} if the index is < 0 or > size - 1
   * @return {Object} the element at the given index
   */
  get(index) {
    const node = this._findNodeAt(index);
    return node.data;
  }

  /**
   * The size of the receiver.
   * @property size
   * @type Integer
   */
  get size() {
    let size = 0;
    if (this.head != null) {
      let node = this.head;
      while (node != null) {
        size += 1;
        node = node.next;
      }
    }
    return size;
  }

  _findNode(predicate) {
    if (this.head == null) {
      return null;
    } else {
      let node = this.head;
      while (!predicate(node)) {
        node = node.next;
      }
      return node;
    }
  }

  _findNodeAt(index, validator = null) {
    if (index < 0 || this.head == null) {
      throw new IndexOutOfBoundsError(index);
    }

    let node = this.head;
    let i = index;
    while (i > 0) {
      if (node.next == null) {
        throw new IndexOutOfBoundsError(index);
      }
      node = node.next;
      i -= 1;
    }

    if (node == null) {
      throw new IndexOutOfBoundsError(index);
    }

    if (typeof validator == "function") {
      if (!validator(node)) {
        throw new IndexOutOfBoundsError(index);
      }
    }

    return node;
  }
}
