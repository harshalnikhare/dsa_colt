class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.first) this.first = this.last = newNode;
    else {
      this.first.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    if (this.first === this.last) this.first = this.last = null;
    let poppedNode = this.first;
    this.first = poppedNode.next;
    poppedNode.next = null;

    this.size--;
    return poppedNode.val;
  }
}
