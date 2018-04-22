import { expect } from "chai";
import BinarySearchTree from "../src/binary_search_tree";

describe("BinarySearchTree", () => {
  let binarySearchTree;

  beforeEach(() => {
    binarySearchTree = new BinarySearchTree();
  });

  describe("#contains()", () => {
    it("should return false for any key and an empty tree");
    it("should return false for a non-existant key");
    it("should return true for an existant key");
  });

  describe("#delete()", () => {
    it("should not alter an empty tree");
    it("should not alter a tree when given a non-existant key");
    it("should remove the node with the given key");
  });

  describe("#deleteMax()", () => {
    it("should not alter an empty tree");
    it("should delete the node with the maximum key");
  });

  describe("#deleteMin()", () => {
    it("should not alter an empty tree");
    it("should delete the node with the minimum key");
  });

  describe("#get()", () => {
    it("should return null for an empty tree", () => {
      expect(binarySearchTree.get(1)).to.be.null;
    });

    it("should get the root element", () => {
      binarySearchTree.put(1, 1);
      expect(binarySearchTree.get(1)).to.equal(1);
    });

    it("should get the leaf elements", () => {
      binarySearchTree.put(2, 2);
      binarySearchTree.put(1, 1);
      binarySearchTree.put(3, 3);
      expect(binarySearchTree.get(1)).to.equal(1);
      expect(binarySearchTree.get(3)).to.equal(3);
    });
  });

  describe("#height", () => {
    it("should be 0 for an empty tree", () => {
      expect(binarySearchTree.height).to.equal(0);
    });

    it("should be 1 for a tree with 1 element", () => {
      binarySearchTree.put(1, 1);
      expect(binarySearchTree.height).to.equal(1);
    });

    it("should be 2 for a balanced tree with 3 elements", () => {
      binarySearchTree.put(2, 2);
      binarySearchTree.put(1, 1);
      binarySearchTree.put(3, 3);
      expect(binarySearchTree.height).to.equal(2);
    });

    it("should be 3 for an ascending unbalanced tree with 3 elements", () => {
      binarySearchTree.put(1, 1);
      binarySearchTree.put(2, 2);
      binarySearchTree.put(3, 3);
      expect(binarySearchTree.height).to.equal(3);
    });

    it("should be 3 for a descending unbalanced tree with 3 elements", () => {
      binarySearchTree.put(3, 3);
      binarySearchTree.put(2, 2);
      binarySearchTree.put(1, 1);
      expect(binarySearchTree.height).to.equal(3);
    });
  });

  describe("#isEmpty", () => {
    it("should return true when the tree is empty");
    it("should return false when the tree is not empty");
  });

  describe("#max", () => {
    it("should return null for an empty tree");
    it("should return the maximum key");
  });

  describe("#min", () => {
    it("should return null for an empty tree");
    it("should return the minimum key");
  });

  describe("#put()", () => {
    it("should add an element", () => {
      binarySearchTree.put(1, 1);
      expect(binarySearchTree.size).to.equal(1);
    });

    it("should add many elements", () => {
      binarySearchTree.put(2, 2);
      binarySearchTree.put(1, 1);
      binarySearchTree.put(3, 3);
      expect(binarySearchTree.size).to.equal(3);
    });
  });

  describe("#size", () => {
    it("should be 0 for an empty tree", () => {
      expect(binarySearchTree.size).to.equal(0);
    });

    it("should be 1 for a tree with 1 element", () => {
      binarySearchTree.put(1, 1);
      expect(binarySearchTree.size).to.equal(1);
    });

    it("should be 3 for a tree with 3 elements", () => {
      binarySearchTree.put(2, 2);
      binarySearchTree.put(1, 1);
      binarySearchTree.put(3, 3);
      expect(binarySearchTree.size).to.equal(3);
    });
  });
});
