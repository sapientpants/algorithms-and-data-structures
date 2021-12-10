import Cons, { cons } from './cons';
import List from './list';
import { IndexOutOfBoundsException, NotImplementedError } from './errors';

interface LinkedListCons<E> extends Cons<E, LinkedListCons<E> | null> {}

class LinkedList<E> implements List<E> {
  private root: LinkedListCons<E> | null;

  constructor(source: E[] | E | null = null) {
    if (Array.isArray(source)) {
      this.root = LinkedList.buildNodes<E>(source);
    } else if (source == null) {
      this.root = null;
    } else {
      this.root = LinkedList.buildNodes<E>([source]);
    }
  }

  *[Symbol.iterator]() {
    let node = this.root;
    while (node) {
      yield node.car;
      node = node.cdr;
    }
  }

  private static buildNodes<E>(source: Iterable<E>): LinkedListCons<E> | null {
    const values = Array.from(source);
    let node: LinkedListCons<E> | null = null;
    for (let i = values.length - 1; i >= 0; i--) {
      node = cons<E, LinkedListCons<E> | null>(values[i], node);
    }
    return node;
  }

  add(e: E): LinkedList<E> {
    const values = this.toArray();
    values.push(e);

    return new LinkedList<E>(values);
  }

  empty(): boolean {
    return this.root == null;
  }

  get(index: number): E {
    return this.getNode(index).car;
  }

  private getNode(index: number): LinkedListCons<E> {
    if (index < 0 || index >= this.size()) {
      throw new IndexOutOfBoundsException();
    }
    let i = index;
    let n = this.root as LinkedListCons<E>;
    while (i > 0) {
      n = n.cdr as LinkedListCons<E>;
      i--;
    }
    return n;
  }

  head(): E | null {
    return this.root ? this.root.car : null;
  }

  insert(index: number, e: E): LinkedList<E> {
    if (index < 0 || index > this.size()) {
      throw new IndexOutOfBoundsException();
    }

    const values = this.toArray();
    const first = values.slice(0, index);
    const last = values.slice(index);
    first.push(e);
    return new LinkedList<E>(first.concat(last));
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

    const values = this.toArray().slice(start, end);
    return new LinkedList<E>(values);
  }

  tail(): LinkedList<E> {
    return this.size() <= 1 ? new LinkedList<E>() : this.slice(1, this.size());
  }

  toArray(): Array<E> {
    const elements: Array<E> = [];

    for (let e of this) {
      elements.push(e);
    }

    return elements;
  }
}

export default LinkedList;
