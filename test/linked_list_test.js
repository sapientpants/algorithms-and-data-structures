import { expect } from 'chai';
import LinkedList from '../src/linked_list';

describe('LinkedList', () => {
  describe('#append()', () => {
    it('should append an element to the list', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      expect(linkedList.size).to.equal(1);
      expect(linkedList.get(0)).to.equal(1);
    });
  });

  describe('#clear()', () => {
    it('should remove all elements from the list', () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.clear();
      expect(linkedList.size).to.equal(0);
    });
  });

  describe('#contains()', () => {
    let linkedList;

    beforeEach(() => {
      linkedList = new LinkedList();
      linkedList.append(1);
    });

    it('should return false for elements not in the list', () => {
      expect(linkedList.contains(2)).to.be.false;
    });

    it('should return true for elements in the list', () => {
      expect(linkedList.contains(1)).to.be.true;
    });
  });

  describe('#get()', () => {
    let linkedList;

    beforeEach(() => {
      linkedList = new LinkedList();
    });

    it('should raise an exception getting the first element of an empty list', () => {
      expect(() => linkedList.get(0)).to.throw(/index out of bounds/);
    });

    it('should raise an exception getting the n+1-element of an n-element list', () => {
      linkedList.append(1);
      expect(() => linkedList.get(1)).to.throw(/index out of bounds/);
    });

    it('should get the n-th element of a list', () => {
      linkedList.append(1);
      linkedList.append(2);
      expect(linkedList.get(0)).to.equal(1);
      expect(linkedList.get(1)).to.equal(2);
    });
  });

  describe('#insertAt()', () => {
    it('should raise an exception for a non-existant index');
    it('should insert the element at the correct position in the list');
  });

  describe('#remove()', () => {
    it('should return null for a non-existant value');
    it('should return the value for an existant value and remove it from the list');
  });

  describe('#removeAt()', () => {
    it('should raise an exception for a non-existant index');
    it('should remove the specified element');
  });

  describe('#size', () => {
    let linkedList;

    beforeEach(() => {
      linkedList = new LinkedList();
    });

    it('should return 0 when the list is empty', () => {
      expect(linkedList.size).to.equal(0);
    });

    it('should return 1 when the list has 1 node', () => {
      linkedList.append(1);
      expect(linkedList.size).to.equal(1);
    });

    it('should return 2 when the list has 2 nodes', () => {
      linkedList.append(1);
      linkedList.append(2);
      expect(linkedList.size).to.equal(2);
    });
  });
});
