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
}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(11);
bst.insert(2);
bst.insert(16);
bst.insert(7);
bst.insert(3);

// console.log(bst.find(7));
console.log(bst.find(48));
// console.log(JSON.stringify(bst, null, 2));
