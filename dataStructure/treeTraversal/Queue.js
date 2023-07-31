class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.first = this.last = null;
    this.size = 0;
  }

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
    if (!this.first) return undefined;
    let removedNode = this.first;
    if (this.first === this.last) this.first = this.last = null;
    else {
      this.first = removedNode.next;
      removedNode.next = null;
    }
    this.size--;

    return removedNode.value;
  }
}
