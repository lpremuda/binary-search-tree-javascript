class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root,newNode);
    }
  }

  insertNode(node,newNode) {
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
}

let BST = new BinarySearchTree();
let arrToInsert = [15,25,10,7,22,17,13,5,9,27];

arrToInsert.forEach(el => BST.insert(el));

console.log('BST.inOrder(BST.root)')
BST.inOrder(BST.root);

console.log('BST.invert(BST.root)')
BST.invert(BST.root);
console.log('BST.inOrder(BST.root)')
BST.inOrder(BST.root);