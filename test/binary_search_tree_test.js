import { expect } from 'chai';
import BinarySearchTree from '../src/binary_search_tree';

describe('BinarySearchTree', () => {
  let binarySearchTree;

  beforeEach(() => {
    binarySearchTree = new BinarySearchTree();
  });

  describe('#contains()', () => {
    it('should return false for any key and an empty tree', () => {
      expect(binarySearchTree.contains(1)).to.be.false;
    });

    it('should return false for a non-existant key', () => {
      binarySearchTree.put(1, 1);
      expect(binarySearchTree.contains(2)).to.be.false;
    });

    it('should return true for an existant key', () => {
      binarySearchTree.put(1, 1);
      expect(binarySearchTree.contains(1)).to.be.true;
    });
  });

  describe('#delete()', () => {
    it('should not alter an empty tree', () => {
      binarySearchTree.delete(1);
      expect(binarySearchTree.size).to.be.equal(0);
    });

    it('should not alter a tree when given a non-existant key', () => {
      binarySearchTree.put(1, 1);
      binarySearchTree.delete(2);
      expect(binarySearchTree.contains(1)).to.be.true;
    });

    it('should remove the node with the given key', () => {
      binarySearchTree.put(1, 1);
      binarySearchTree.put(2, 2);
      binarySearchTree.delete(1);
      expect(binarySearchTree.contains(1)).to.be.false;
      expect(binarySearchTree.contains(2)).to.be.true;
    });
  });

  describe('#deleteMax()', () => {
    it('should not alter an empty tree', () => {
      binarySearchTree.deleteMax();
      expect(binarySearchTree.size).to.be.equal(0);
    });

    it('should delete the node with the maximum key', () => {
      binarySearchTree.put(1, 1);
      binarySearchTree.put(2, 2);
      binarySearchTree.deleteMax();
      expect(binarySearchTree.contains(1)).to.be.true;
      expect(binarySearchTree.contains(2)).to.be.false;
    });
  });

  describe('#deleteMin()', () => {
    it('should not alter an empty tree', () => {
      binarySearchTree.deleteMin();
      expect(binarySearchTree.size).to.be.equal(0);
    });

    it('should delete the node with the minimum key', () => {
      binarySearchTree.put(1, 1);
      binarySearchTree.put(2, 2);
      binarySearchTree.deleteMin();
      expect(binarySearchTree.contains(1)).to.be.false;
      expect(binarySearchTree.contains(2)).to.be.true;
    });
  });

  describe('#get()', () => {
    it('should return null for an empty tree', () => {
      expect(binarySearchTree.get(1)).to.be.null;
    });

    it('should get the root element', () => {
      binarySearchTree.put(1, 1);
      expect(binarySearchTree.get(1)).to.equal(1);
    });

    it('should get the leaf elements', () => {
      binarySearchTree.put(2, 2);
      binarySearchTree.put(1, 1);
      binarySearchTree.put(3, 3);
      expect(binarySearchTree.get(1)).to.equal(1);
      expect(binarySearchTree.get(3)).to.equal(3);
    });
  });

  describe('#height', () => {
    it('should be 0 for an empty tree', () => {
      expect(binarySearchTree.height).to.equal(0);
    });

    it('should be 1 for a tree with 1 element', () => {
      binarySearchTree.put(1, 1);
      expect(binarySearchTree.height).to.equal(1);
    });

    it('should be 2 for a balanced tree with 3 elements', () => {
      binarySearchTree.put(2, 2);
      binarySearchTree.put(1, 1);
      binarySearchTree.put(3, 3);
      expect(binarySearchTree.height).to.equal(2);
    });

    it('should be 3 for an ascending unbalanced tree with 3 elements', () => {
      binarySearchTree.put(1, 1);
      binarySearchTree.put(2, 2);
      binarySearchTree.put(3, 3);
      expect(binarySearchTree.height).to.equal(3);
    });

    it('should be 3 for a descending unbalanced tree with 3 elements', () => {
      binarySearchTree.put(3, 3);
      binarySearchTree.put(2, 2);
      binarySearchTree.put(1, 1);
      expect(binarySearchTree.height).to.equal(3);
    });
  });

  describe('#isEmpty', () => {
    it('should return true when the tree is empty', () => {
      expect(binarySearchTree.isEmpty).to.be.true;
    });

    it('should return false when the tree is not empty', () => {
      binarySearchTree.put(1, 1);
      expect(binarySearchTree.isEmpty).to.be.false;
    });
  });

  describe('#max', () => {
    it('should return null for an empty tree', () => {
      expect(binarySearchTree.max).to.be.null;
    });

    it('should return the maximum key', () => {
      binarySearchTree.put(1, 1);
      binarySearchTree.put(2, 2);
      binarySearchTree.put(3, 3);
      expect(binarySearchTree.max).to.equal(3);
    });
  });

  describe('#min', () => {
    it('should return null for an empty tree', () => {
      expect(binarySearchTree.min).to.be.null;
    });

    it('should return the minimum key', () => {
      binarySearchTree.put(1, 1);
      binarySearchTree.put(2, 2);
      binarySearchTree.put(3, 3);
      expect(binarySearchTree.min).to.equal(1);
    });
  });

  describe('#put()', () => {
    it('should add an element', () => {
      binarySearchTree.put(1, 1);
      expect(binarySearchTree.size).to.equal(1);
    });

    it('should add many elements', () => {
      binarySearchTree.put(2, 2);
      binarySearchTree.put(1, 1);
      binarySearchTree.put(3, 3);
      expect(binarySearchTree.size).to.equal(3);
    });
  });

  describe('#size', () => {
    it('should be 0 for an empty tree', () => {
      expect(binarySearchTree.size).to.equal(0);
    });

    it('should be 1 for a tree with 1 element', () => {
      binarySearchTree.put(1, 1);
      expect(binarySearchTree.size).to.equal(1);
    });

    it('should be 3 for a tree with 3 elements', () => {
      binarySearchTree.put(2, 2);
      binarySearchTree.put(1, 1);
      binarySearchTree.put(3, 3);
      expect(binarySearchTree.size).to.equal(3);
    });
  });
});
