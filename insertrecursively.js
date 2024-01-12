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
  
    insertRecursively(value, current = this.root) {
      const newNode = new Node(value);
  
      if (!this.root) {
        this.root = newNode;
        return this;
      }
  
      if (value === current.value) {
        // If the value already exists, you might handle it as per your requirements.
        // In this example, we won't insert duplicate values.
        return this;
      }
  
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        return this.insertRecursively(value, current.left);
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        return this.insertRecursively(value, current.right);
      }
    }
  }
  
