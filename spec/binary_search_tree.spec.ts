import BinarySearchTree from '../src/binary_search_tree';

describe('BinarySearchTree', () => {
  describe('constructor()', () => {
    it('can be constructed for a number', () => {
      const value: number = 5;
      const bst: BinarySearchTree<number> = new BinarySearchTree<number>(value);
      expect(bst).toBeDefined();
    });
  });
});
