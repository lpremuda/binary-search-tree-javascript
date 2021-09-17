// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// BinarySearchTree class
class BinarySearchTree {
  constructor() {
    // root of a binary search tree
    this.root = null;
  }

  insert(data) {
    // Create new Node object
    let newNode = new Node(data);

    // If root is null, set root to newNode
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root,newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left,newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right,newNode);
      }
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  invert(node) {
    if (node === null) {
      return;
    }

    let tempNode = node.left;
    node.left = node.right;
    node.right = tempNode;

    this.invert(node.left);
    this.invert(node.right);
  }

} // class BinarySearchTree {

let BST = new BinarySearchTree();
let arrToInsert = [15,25,10,7,22,17,13,5,9,27];

arrToInsert.forEach(el => BST.insert(el));

console.log('BST.inOrder(BST.root)')
BST.inOrder(BST.root);

console.log('BST.invert(BST.root)')
BST.invert(BST.root);
console.log('BST.inOrder(BST.root)')
BST.inOrder(BST.root);

