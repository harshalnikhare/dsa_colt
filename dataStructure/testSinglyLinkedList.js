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

  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.head = this.tail = null;

    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) this.head = this.tail = newNode;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return null;

    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    let newNode = new Node(val);

    if (index < 0 || index > this.length) return false;
    if (index === 0) !!this.unshift(val);
    if (index === this.length) !!this.push(val);

    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length - 1) return fasle;

    if (index === 0) return !!this.shift();
    if (index === this.length - 1) !!this.pop();

    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    removedNode.next = null;

    this.length--;

    return removedNode;
  }

  // isko samajhna hai
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null,
      next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = next;
      node = next;
    }

    return this;
  }
}
