class Node {
  constructor(val) {
    this.val = val;
    this.next = this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) this.head = this.tail = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) this.head = this.tail = newNode;
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let removedNode = this.head;

    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }

    this.length--;
    return removedNode;
  }

  pop() {
    if (this.length === 0) return undefined;
    let removedNode = this.tail;

    if (this.length === 1) this.head = this.tail = null;
    else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }

    this.length--;
    return removedNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let mid = Math.floor(this.length / 2);

    let counter = index <= mid ? 0 : this.length - 1;
    let current = index <= mid ? this.head : this.tail;

    if (index <= mid) {
      while (counter !== index) {
        counter++;
        current = current.next;
      }
    } else {
      while (counter !== index) {
        counter--;
        current = current.prev;
      }
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);

    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    nextNode.prev = newNode;
    newNode.next = nextNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) !!this.pop();

    let removedNode = this.get(index);
    let beforeNode = removedNode.prev,
      nextNode = removedNode.next;

    beforeNode.next = nextNode;
    nextNode.prev = beforeNode;
    removedNode.next = removedNode.prev = null;

    this.length--;
    return true;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let nextNode = (prevNode = null);

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      currentNode.prev = nextNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    return this;
  }
}
// var doublyLinkedList = new DoublyLinkedList();
// doublyLinkedList.push(5); // doublyLinkedList
// doublyLinkedList.length; // 1
// doublyLinkedList.head.val; // 5
// doublyLinkedList.tail.val; // 5
// doublyLinkedList.head.prev; // null
// doublyLinkedList.push(10);
// doublyLinkedList;
// doublyLinkedList.length; // 2
// doublyLinkedList.head.val; // 5
// doublyLinkedList.head.next.val; // 10
// doublyLinkedList.tail.val; // 10
// doublyLinkedList.head.next.prev.val; // 10
// doublyLinkedList.push(15);
// doublyLinkedList;
// doublyLinkedList.length; // 3
// doublyLinkedList.head.val; // 5
// doublyLinkedList.tail.val; // 15
// doublyLinkedList.tail.prev.val; // 10
// doublyLinkedList.head.next.next.val; // 15

// doublyLinkedList.pop().val; // 15
// doublyLinkedList.length; // 2
// doublyLinkedList.pop().val; // 10
// doublyLinkedList.length; // 1
// doublyLinkedList.pop().val; // 5
// doublyLinkedList.length; // 0
// doublyLinkedList.pop(); // undefined
// doublyLinkedList.length; // 0
//
var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.unshift(5); // doublyLinkedList
doublyLinkedList.length; // 1
doublyLinkedList.head.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.unshift(10);
doublyLinkedList;
doublyLinkedList.length; // 2
doublyLinkedList.head.val; // 10
doublyLinkedList.head.next.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.unshift(15);
doublyLinkedList;
doublyLinkedList.length; // 3
doublyLinkedList.head.val; // 15
doublyLinkedList.tail.val; // 5
doublyLinkedList.head.next.next.val; // 5
