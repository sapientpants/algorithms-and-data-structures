import Collection from './collection';

interface List<T> extends Collection<T> {
  insert: (index: number, t: T) => void;
}

export default List;
