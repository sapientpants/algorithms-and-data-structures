import List from './list';
import Node from './node';
import { IndexOutOfBoundsException, NotImplementedError } from './errors';

interface LinkedListNode<E> extends Node<E> {
  readonly next: LinkedListNode<E> | null;
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

  add(e: E): LinkedList<E> {
    let node: LinkedListNode<E> = {
      next: null,
      value: e,
    };
    const values = this.toArray();
    let i = values.length - 1;

    while (i >= 0) {
      node = {
        next: node,
        value: values[i],
      };
      i--;
    }

    const newLinkedList = new LinkedList<E>();
    newLinkedList.root = node;
    return newLinkedList;
  }

  empty(): boolean {
    return this.root == null;
  }

  get(index: number): E {
    return this.getNode(index).value;
  }

  private getNode(index: number): LinkedListNode<E> {
    if (index < 0 || index >= this.size()) {
      throw new IndexOutOfBoundsException();
    }
    let i = index;
    let node = this.root as LinkedListNode<E>;
    while (i > 0) {
      node = node.next as LinkedListNode<E>;
      i--;
    }
    return node;
  }

  head(): E | null {
    return this.root ? this.root.value : null;
  }

  insert(index: number, e: E): LinkedList<E> {
    throw new NotImplementedError();
    // if (index === 0) {
    // } else {
    //   const nodeBefore = this.getNode(index - 1);
    //   const nodeAfter = nodeBefore.next;
    //   const newNode: LinkedListNode<E> = {
    //     next: nodeAfter,
    //     value: e,
    //   };
    //   nodeBefore.next = newNode;
    // }
  }

  size(): number {
    let s: number = 0;
    for (let n of this) {
      s++;
    }
    return s;
  }

  slice(start: number, end: number): LinkedList<E> {
    if (start < 0 || start >= this.size()) {
      throw new IndexOutOfBoundsException();
    }
    if (end < start || end > this.size()) {
      throw new IndexOutOfBoundsException();
    }

    const values = this.toArray();
    let i = end - 1;

    let node: LinkedListNode<E> = {
      next: null,
      value: values[i],
    };

    while (i >= start) {
      node = {
        next: node,
        value: values[i],
      };
      i--;
    }

    const newLinkedList = new LinkedList<E>();
    newLinkedList.root = node;
    return newLinkedList;
  }

  tail(): LinkedList<E> {
    return this.size() <= 1 ? new LinkedList<E>() : this.slice(1, this.size());
  }

  toArray(): Array<E> {
    const elements: Array<E> = [];

    for (let n of this) {
      elements.push(n.value);
    }

    return elements;
  }
}

export default LinkedList;
