import List from './list';
import Node from './node';

interface LinkedListNode<T> extends Node<T> {
  next: LinkedListNode<T> | null;
}

class LinkedList<T> implements List<T> {
  root: LinkedListNode<T> | null;

  constructor(value: T | null = null) {
    this.root = value
      ? {
          next: null,
          value,
        }
      : null;
  }

  add(t: T): boolean {
    const newNode = {
      next: null,
      value: t,
    };

    const node = this.lastNode();
    if (node) {
      node.next = newNode;
    } else {
      this.root = newNode;
    }

    return true;
  }

  insert(index: number, t: T) {
    // do nothing
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
