import Collection from './collection';

interface List<E> extends Collection<E> {
  get: (index: number) => E;
  head: () => E | null;
  insert: (index: number, t: E) => List<E>;
  slice: (start: number, end: number) => List<E>;
  tail: () => List<E>;
}

export default List;
