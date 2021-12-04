import LinkedList from './linked_list';

describe('LinkedList', () => {
  it('can be constructed', () => {
    const linkedList = new LinkedList<string>();
    expect(linkedList.root).toBeNull();
  });

  it('it is iterable', () => {
    const linkedList = new LinkedList<string>();
    expect(linkedList[Symbol.iterator]).not.toBeNull();
  });

  describe('add()', () => {
    it('adding a new node when root is null', () => {
      const linkedList = new LinkedList<string>();
      const value = 'value';
      linkedList.add(value);
      expect(linkedList.root?.value).toBe(value);
    });

    it('adding a new node when root is not null', () => {
      const linkedList = new LinkedList<string>();
      linkedList.add('blah');
      const value = 'value';
      linkedList.add(value);
      expect(linkedList.root?.next?.value).toBe(value);
    });
  });

  describe('size()', () => {
    it('returns 0 for an empty linked list', () => {
      const linkedList = new LinkedList<string>();
      expect(linkedList.size()).toBe(BigInt(0));
    });

    it('returns 1 for a linked list with 1 element', () => {
      const linkedList = new LinkedList<string>();
      linkedList.add('value');
      expect(linkedList.size()).toBe(BigInt(1));
    });
  });
});
