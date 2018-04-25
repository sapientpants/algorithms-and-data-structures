import { expect } from 'chai';
import { IndexOutOfBoundsError } from '../src/errors';
import LinkedList from '../src/linked_list';

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('#append()', () => {
    it('should append an element to the list', () => {
      linkedList.append(1);
      expect(linkedList.size).to.equal(1);
      expect(linkedList.get(0)).to.equal(1);
    });
  });

  describe('#clear()', () => {
    it('should remove all elements from the list', () => {
      linkedList.append(1);
      linkedList.clear();
      expect(linkedList.size).to.equal(0);
    });
  });

  describe('#contains()', () => {
    beforeEach(() => {
      linkedList.append(1);
    });

    it('should return false for elements not in the list', () => {
      expect(linkedList.contains(2)).to.be.false;
    });

    it('should return true for elements in the list', () => {
      expect(linkedList.contains(1)).to.be.true;
    });
  });

  describe('#findAll()', () => {
    it('should return an empty LinkedList with an empty receiver', () => {
      expect(
        linkedList.findAll(() => {
          return true;
        }).size
      ).to.equal(0);
    });

    it('should return the expected elements', () => {
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      const matchingNodes = linkedList.findAll(element => {
        return element === 2;
      });
      expect(matchingNodes.size).to.equal(1);
      expect(matchingNodes.get(0)).to.equal(2);
    });
  });

  describe('#findFirst()', () => {
    it('should return null with an empty receiver', () => {
      expect(
        linkedList.findFirst(() => {
          return true;
        })
      ).to.be.null;
    });

    it('should return the expected element', () => {
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      const matchedElement = linkedList.findFirst(element => {
        return element === 2;
      });
      expect(matchedElement).to.equal(2);
    });
  });

  describe('#get()', () => {
    it('should raise an exception getting the first element of an empty list', () => {
      expect(() => linkedList.get(0)).to.throw(IndexOutOfBoundsError);
    });

    it('should raise an exception getting the n+1-element of an n-element list', () => {
      linkedList.append(1);
      expect(() => linkedList.get(1)).to.throw(IndexOutOfBoundsError);
    });

    it('should get the n-th element of a list', () => {
      linkedList.append(1);
      linkedList.append(2);
      expect(linkedList.get(0)).to.equal(1);
      expect(linkedList.get(1)).to.equal(2);
    });
  });

  describe('#insertAt()', () => {
    it('should raise an exception for a non-existant index', () => {
      const element = 'element';
      expect(() => linkedList.insertAt(2, element)).to.throw(IndexOutOfBoundsError);
    });

    it('should insert the element at the correct position in the list', () => {
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(4);
      linkedList.insertAt(2, 3);
      expect(linkedList.size).to.equal(4);
      expect(linkedList.get(2)).to.equal(3);
    });
  });

  describe('#remove()', () => {
    beforeEach(() => {
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
    });

    it('should return false for a non-existant value', () => {
      expect(linkedList.remove(4)).to.be.false;
      expect(linkedList.size).to.equal(3);
    });

    it('should return true for the first value and remove it from the list', () => {
      expect(linkedList.remove(1)).to.be.true;
      expect(linkedList.size).to.equal(2);
      expect(linkedList.findFirst(e => e === 1)).to.be.null;
    });

    it('should return true for the middle value and remove it from the list', () => {
      expect(linkedList.remove(2)).to.be.true;
      expect(linkedList.size).to.equal(2);
      expect(linkedList.findFirst(e => e === 2)).to.be.null;
    });

    it('should return true for the last value and remove it from the list', () => {
      expect(linkedList.remove(3)).to.be.true;
      expect(linkedList.size).to.equal(2);
      expect(linkedList.findFirst(e => e === 3)).to.be.null;
    });
  });

  describe('#removeAt()', () => {
    it('should raise an exception for a non-existant index');
    it('should remove the specified element');
  });

  describe('#size', () => {
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
