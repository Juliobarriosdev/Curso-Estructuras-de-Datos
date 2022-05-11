class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    }
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
  }
  insert(index, value) {
    if(index >= this.length) {
      return this.append(value)
    }

    const newNode = new Node(value);
    const firtsPointer = this.getTheIndex(index - 1);
    const holdingPointer = firtsPointer.next;
    firtsPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return this;
  }
  remove(index) {
    const firtsPointer = this.getTheIndex(index - 1);
    const nodeRemove = firtsPointer.next;
    const nodeDesplacement = nodeRemove.next;
    firtsPointer.next = nodeDesplacement;

    this.length--
    return this;
  }
  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }


}

let myLinkedList = new MySinglyLinkedList(1);
