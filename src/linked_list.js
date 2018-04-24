import { IndexOutOfBoundsError } from './errors';

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
    const newNode = Node.forElement(element);
    if (this.head == null) this.head = newNode;
    else {
      const lastNode = this.findFirstNode(n => {
        return n.next == null;
      });
      lastNode.next = newNode;
    }
  }

  /**
   * Finds the first element in the receiver for which the predicate returns a true value.
   * @method findFirst
   * @param {Function} predicate parameters are the current node and its index
   * @return {Object} the first matching element or null.
   */
  findFirst(predicate) {
    let node = this.findFirstNode((node, index) => {
      return predicate(node.data, index);
    });
    return node != null ? node.data : null;
  }

  findFirstNode(predicate) {
    let node = this.head;
    let index = 0;
    while (node != null) {
      if (predicate(node, index)) return node;
      node = node.next;
      index += 1;
    }
    return null;
  }

  /**
   * Returns a LinkedList containing all elements of the receiver for which the predicate
   * returns a true value.
   * @method findAll
   * @param {Function} predicate parameters are the current node and its index
   * @return {LinkedList} the matching nodes
   */
  findAll(predicate) {
    const matchingNodes = new LinkedList();
    let node = this.head;
    let index = 0;
    while (node != null) {
      if (predicate(node.data, index)) matchingNodes.append(node.data);
      node = node.next;
      index += 1;
    }
    return matchingNodes;
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
    if (this.head == null) return false;
    else {
      const node = this.findFirst(e => {
        return e === element;
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
    if (index < 0 || this.head == null) {
      throw new IndexOutOfBoundsError(index);
    }

    const node = this.findFirstNode((n, i) => {
      return index === i;
    });

    if (node == null) {
      throw new IndexOutOfBoundsError(index);
    }
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
}

class Node {
  constructor(data, next = null) {
    this.next = next;
    this.data = data;
  }

  static forElement(element) {
    return new Node(element);
  }
}
