class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.next = this.prev = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) this.head = this.tail = newNode;
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newtail = current;

    while (current.next) {
      newtail = current;
      current = current.next;
    }

    this.tail = newtail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) this.head = this.tail = null;

    return current;
  }
}
