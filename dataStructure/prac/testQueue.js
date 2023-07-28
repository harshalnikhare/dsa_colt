class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = this.last = null;
    this.size = 0;
  }

  // 1, 2, 3 => push(val) & shift()
  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) this.first = this.last = newNode;
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    if (this.first === this.last) this.first = this.last = null;
    let removedNode = this.first;
    this.first = removedNode.next;
    removedNode.next = null;
    this.size--;
    return removedNode.val;
  }
}
