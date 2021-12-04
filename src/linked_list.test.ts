import LinkedList from './linked_list';

describe('LinkedList', () => {
  describe('constructor()', () => {
    test('can be created without a root node', () => {
      const linkedList = new LinkedList<string>();
      expect(linkedList.root).toBeNull();
    });

    test('can be created with a root node', () => {
      const value = 'value';
      const linkedList = new LinkedList<string>(value);
      expect(linkedList.root).not.toBe(null);
      expect(linkedList.root?.value).toBe(value);
    });
  });

  describe('add()', () => {
    test('adding a new node when root is null', () => {
      const linkedList = new LinkedList<string>();
      const value = 'value';
      linkedList.add(value);
      expect(linkedList.root?.value).toBe(value);
    });
  });
});
