import LinkedList from './linked_list';

describe('LinkedList', () => {
  it('it is iterable', () => {
    const linkedList = new LinkedList<string>();
    expect(linkedList[Symbol.iterator]).not.toBeNull();
  });

  describe('add()', () => {
    it('adding a new node when root is null', () => {
      const linkedList = new LinkedList<string>();
      const value = 'value';
      linkedList.add(value);
      expect(linkedList.head()).toBe(value);
    });

    it('adding a new node when root is not null', () => {
      const linkedList = new LinkedList<string>();
      const firstValue = 'blah';
      const secondValue = 'value';
      linkedList.add(firstValue);
      linkedList.add(secondValue);
      expect(linkedList.head()).toBe(firstValue);
      expect(linkedList.get(BigInt(1))).toBe(secondValue);
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
