import List from './list';
import Node from './node';
import { IndexOutOfBoundsException, NotImplementedError } from './errors';

interface LinkedListNode<E> extends Node<E> {
  next: LinkedListNode<E> | null;
}

class LinkedList<E> implements List<E> {
  private root: LinkedListNode<E> | null;

  constructor() {
    this.root = null;
  }

  *[Symbol.iterator]() {
    let node = this.root;
    while (node) {
      yield node;
      node = node.next;
    }
  }

  add(e: E): boolean {
    const newNode = {
      next: null,
      value: e,
    };

    const node = this.lastNode();
    if (node) {
      node.next = newNode;
    } else {
      this.root = newNode;
    }

    return true;
  }

  empty(): boolean {
    return this.size() !== BigInt(0);
  }

  get(index: bigint): E {
    return this.getNode(index).value;
  }

  private getNode(index: bigint): LinkedListNode<E> {
    if (index < BigInt(0) || index >= this.size()) {
      throw new IndexOutOfBoundsException();
    }
    let i = index;
    let node = this.root as LinkedListNode<E>;
    while (i > 0) {
      node = node.next as LinkedListNode<E>;
      i -= BigInt(1);
    }
    return node;
  }

  head(): E | null {
    return this.root ? this.root.value : null;
  }

  insert(index: bigint, e: E) {
    if (index === BigInt(0)) {
    } else {
      const nodeBefore = this.getNode(index - BigInt(1));
      const nodeAfter = nodeBefore.next;
      const newNode: LinkedListNode<E> = {
        next: nodeAfter,
        value: e,
      };
      nodeBefore.next = newNode;
    }
  }

  size(): bigint {
    let s: bigint = BigInt(0);
    for (let n of this) {
      s += BigInt(1);
    }
    return s;
  }

  tail(): List<E> {
    throw new NotImplementedError();
  }

  private lastNode(): LinkedListNode<E> | null {
    if (this.root) {
      let node = null;
      for (let n of this) {
        node = n;
      }
      return node;
    }
    return null;
  }
}

export default LinkedList;
