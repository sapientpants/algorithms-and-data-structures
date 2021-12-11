import LinkedList from '../src/linked_list';

describe('LinkedList', () => {
  it('it is iterable', () => {
    const linkedList = new LinkedList<string>();
    expect(linkedList[Symbol.iterator]).not.toBeNull();
  });

  describe('constructor', () => {
    it('builds an empty linked list', () => {
      const linkedList = new LinkedList<string>();
      expect(linkedList.size()).toBe(0);
    });

    it('builds a linked list with 1 element', () => {
      const firstValue = 'one';
      const linkedList = new LinkedList<string>(firstValue);
      expect(linkedList.size()).toBe(1);
      expect(linkedList.head()).toBe(firstValue);
    });
  });

  describe('add()', () => {
    it('adding a new node when root is null', () => {
      const value = 'value';
      const linkedList = new LinkedList<string>().add(value);
      expect(linkedList.head()).toBe(value);
    });

    it('adding a new node when root is not null', () => {
      const firstValue = 'one';
      const secondValue = 'two';
      const thirdValue = 'three';
      const linkedList = new LinkedList<string>()
        .add(firstValue)
        .add(secondValue)
        .add(thirdValue);
      expect(linkedList.head()).toBe(firstValue);
      expect(linkedList.get(1)).toBe(secondValue);
      expect(linkedList.get(2)).toBe(thirdValue);
    });
  });

  describe('empty()', () => {
    it('returns true for an empty linked list', () => {
      const linkedList = new LinkedList<string>();
      expect(linkedList.empty()).toBeTruthy();
    });

    it('returns false for a non-empty linked list', () => {
      const linkedList = new LinkedList<string>().add('one');
      expect(linkedList.empty()).toBeFalsy();
    });
  });

  describe('get()', () => {});

  describe('head()', () => {
    it('returns null for an empty linked list', () => {
      const linkedList = new LinkedList<string>();
      expect(linkedList.head()).toBeNull();
    });

    it('returns the first element of a non-null linked list', () => {
      const firstValue = 'one';
      const linkedList = new LinkedList<string>()
        .add(firstValue)
        .add('two')
        .add('three');
      expect(linkedList.head()).toBe(firstValue);
    });
  });

  describe('insert()', () => {
    let src: LinkedList<string>;

    beforeEach(() => {
      src = new LinkedList<string>(['first', 'last']);
    });

    it('inserts at the front of the list', () => {
      const out = src.insert(0, 'x');
      expect(out.toArray()).toEqual(['x', 'first', 'last']);
    });

    it('inserts in the middle of the list', () => {
      const out = src.insert(1, 'x');
      expect(out.toArray()).toEqual(['first', 'x', 'last']);
    });

    it('inserts at the end of the list', () => {
      const out = src.insert(2, 'x');
      expect(out.toArray()).toEqual(['first', 'last', 'x']);
    });
  });

  describe('size()', () => {
    it('returns 0 for an empty linked list', () => {
      const linkedList = new LinkedList<string>();
      expect(linkedList.size()).toBe(0);
    });

    it('returns 1 for a linked list with 1 element', () => {
      const linkedList = new LinkedList<string>().add('one');
      expect(linkedList.size()).toBe(1);
    });

    it('returns 3 for a linked list with 3 elements', () => {
      const linkedList = new LinkedList<string>()
        .add('one')
        .add('two')
        .add('three');
      expect(linkedList.size()).toBe(3);
    });
  });

  describe('slice()', () => {});

  describe('tail()', () => {
    it('returns an empty list for an empty list', () => {
      const linkedList = new LinkedList<string>();
      expect(linkedList.tail().empty()).toBeTruthy();
    });

    it('returns an empty list with 1 element', () => {
      const linkedList = new LinkedList<string>().add('one');
      expect(linkedList.tail().empty()).toBeTruthy();
    });

    it('returns the tail of a list with more than 1 element', () => {
      const firstValue = 'one';
      const secondValue = 'two';
      const thirdValue = 'three';
      const linkedList = new LinkedList<string>()
        .add(firstValue)
        .add(secondValue)
        .add(thirdValue)
        .tail();

      expect(linkedList.head()).toBe(secondValue);
      expect(linkedList.get(1)).toBe(thirdValue);
    });
  });
});
