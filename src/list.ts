import Collection from './collection';

interface List<E> extends Collection<E> {
  get: (index: bigint) => E;
  head: () => E | null;
  insert: (index: bigint, t: E) => void;
  tail: () => List<E>;
}

export default List;
