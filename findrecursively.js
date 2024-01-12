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
  
    findRecursively(value) {
      return this._findRecursively(value, this.root);
    }
  
    _findRecursively(value, current) {
      if (!current) {
        return undefined;
      }
  
      if (value === current.value) {
        return current;
      } else if (value < current.value) {
        return this._findRecursively(value, current.left);
      } else {
        return this._findRecursively(value, current.right);
      }
    }
  }
  