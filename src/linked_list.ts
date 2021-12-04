import List from './list';
import Node from './node';
import { NotImplementedError } from './errors';

interface LinkedListNode<E> extends Node<E> {
  next: LinkedListNode<E> | null;
}

class LinkedList<E> implements List<E> {
  root: LinkedListNode<E> | null;

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

  get(index: BigInt): E {
    throw new NotImplementedError();
  }

  head(): E | null {
    throw new NotImplementedError();
  }

  insert(index: BigInt, e: E) {
    throw new NotImplementedError();
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
