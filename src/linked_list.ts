import Node from './node';

interface LinkedListNode<T> extends Node<T> {
  next: LinkedListNode<T> | null;
}

class LinkedList<T> {
  root: LinkedListNode<T> | null;

  constructor(value: T | null = null) {
    this.root = value
      ? {
          next: null,
          value,
        }
      : null;
  }

  add(value: T) {
    const newNode = {
      next: null,
      value,
    };

    const node = this.lastNode();
    if (node) {
      node.next = newNode;
    } else {
      this.root = newNode;
    }
  }

  private lastNode(): LinkedListNode<T> | null {
    if (this.root) {
      let node = this.root;
      while (node.next) {
        node = node.next;
      }
      return node;
    }
    return null;
  }
}

export default LinkedList;
