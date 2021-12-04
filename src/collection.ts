interface Collection<E> {
  add: (e: E) => boolean;
  empty: () => boolean;
  size: () => bigint;
}

export default Collection;
