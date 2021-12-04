import LinkedList from './linked_list';

describe('LinkedList', () => {
  describe('constructor()', () => {
    test('can be created', () => {
      const linkedList = new LinkedList<string>();
      expect(linkedList.root).toBeNull();
    });
  });

  describe('add()', () => {
    test('adding a new node when root is null', () => {
      const linkedList = new LinkedList<string>();
      const value = 'value';
      linkedList.add(value);
      expect(linkedList.root?.value).toBe(value);
    });

    test('adding a new node when root is not null', () => {
      const linkedList = new LinkedList<string>();
      linkedList.add('blah');
      const value = 'value';
      linkedList.add(value);
      expect(linkedList.root?.next?.value).toBe(value);
    });
  });
});
