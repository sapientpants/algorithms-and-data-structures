interface Collection<E> extends Iterable<E> {
  add: (e: E) => Collection<E>;
  empty: () => boolean;
  size: () => number;
}

export default Collection;
