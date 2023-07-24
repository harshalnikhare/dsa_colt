class Node {
  constructor(val) {
    this.val = val;
    this.prev = this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) this.head = this.tail = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;

    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;

    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) this.head = this.tail = newNode;
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let middle = Math.floor(this.length / 2);
    let counter = index <= middle ? 0 : this.length - 1;
    let current = index <= middle ? this.head : this.tail;
    if (index <= middle) {
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      while (counter !== index) {
        current = current.prev;
        counter--;
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
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.prev = removedNode.next = null;

    this.length--;
    return removedNode;
  }
}

let list = new DoublyLinkedList();

list.push(10);
list.push(20);
list.push(30);

console.log(list.get(3));
// console.log(list);
