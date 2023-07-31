import { Queue } from "./treeTraversal/Queue.js";

class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val === current.value) return undefined;
      let dir = "right";
      if (val < current.value) {
        dir = "left";
      }

      if (current[dir] === null) {
        current[dir] = newNode;
        break;
      }
      current = current[dir];
    }
    return this;
  }

  find(val) {
    if (!this.root) return null;
    let current = this.root;
    while (true) {
      let dir = "right";
      if (val < current.value) {
        dir = "left";
      }

      if (!current[dir]) return null;

      if (val === current[dir].value) {
        return current[dir];
      }
      current = current[dir];
    }
  }

  BFS() {
    let node = this.root,
      data = [],
      queue = new Queue();
    queue.enqueue(node);
    console.log("node ", node);
    console.log("queue", queue);

    while (queue.size !== 0) {
      node = queue.dequeue();
      console.log("node.value", node);

      data.push(node.value);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }

    return data;
  }

  DFSPreOrder() {
    let data = [],
      current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  DFSPostOrder() {
    let data = [],
      current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);

    return data;
  }

  DFSInOrder() {
    let data = [],
      current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);

    return data;
  }
}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

// console.log(bst.BFS());
// console.log(bst.DFSPreOrder());
// console.log(bst.DFSPostOrder());
// console.log(bst.DFSInOrder());
// console.log(bst.find(7));
// console.log(bst.find(48));
// console.log(JSON.stringify(bst, null, 2));
