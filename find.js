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
  
      let current = this.root;
  
      while (true) {
        if (value === current.value) {
          
          return this;
        }
  
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  
    findIteratively(value) {
      let current = this.root;
  
      while (current) {
        if (value === current.value) {
          return current;
        } else if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
  
      return undefined;
    }
  }
  
  const binarySearchTree = new BinarySearchTree();
  binarySearchTree.insert(15);
  binarySearchTree.insert(20);
  binarySearchTree.insert(10);
  binarySearchTree.insert(12);
  
  