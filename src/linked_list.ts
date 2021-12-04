import List from './list';
import Node from './node';
import { NotImplementedError } from './error';

interface LinkedListNode<E> extends Node<E> {
  next: LinkedListNode<E> | null;
}

class LinkedList<E> implements List<E> {
  root: LinkedListNode<E> | null;

  constructor() {
    this.root = null;
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
    throw new NotImplementedError();
  }

  tail(): List<E> {
    throw new NotImplementedError();
  }

  private lastNode(): LinkedListNode<E> | null {
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
