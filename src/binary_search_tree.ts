import Cons, { cons } from './cons';

interface BinaryTreeCons<E>
  extends Cons<BinaryTreeCons<E> | null, BinaryTreeCons<E> | null> {
  value: E;
}

class BinarySearchTree<E> {
  private root: BinaryTreeCons<E> | null;

  constructor(e: E) {
    this.root = this.binaryTreeCons(null, null, e);
  }

  private binaryTreeCons(
    car: BinaryTreeCons<E> | null,
    cdr: BinaryTreeCons<E> | null,
    value: E
  ): BinaryTreeCons<E> {
    return cons<
      BinaryTreeCons<E> | null,
      BinaryTreeCons<E> | null,
      BinaryTreeCons<E>
    >(car, cdr, {
      value,
    });
  }
}

export default BinarySearchTree;
