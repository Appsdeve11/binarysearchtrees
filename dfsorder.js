class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
        return this;
      }
  
      this._insertRecursively(newNode, this.root);
      return this;
    }
  
    _insertRecursively(newNode, current) {
      if (newNode.value === current.value) {
        // If the value already exists, you might handle it as per your requirements.
        // In this example, we won't insert duplicate values.
        return;
      }
  
      if (newNode.value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        this._insertRecursively(newNode, current.left);
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        this._insertRecursively(newNode, current.right);
      }
    }
  
    dfsPreOrder() {
      const result = [];
      this._dfsPreOrder(this.root, result);
      return result;
    }
  
    _dfsPreOrder(current, result) {
      if (current) {
        result.push(current.value);
        this._dfsPreOrder(current.left, result);
        this._dfsPreOrder(current.right, result);
      }
    }
  }