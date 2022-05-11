class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.firts = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.firts;
  }
  dequeue() {
    this.firts = this.firts.next
    
    this.length--;

    return this.firts;

  }
  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.firts = newNode;
      this.last = newNode; debugger
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++; //Recordar validar que no sea menor a cero cuando este vacia la estructura

    return this;
  }
}

const myQueue = new Queue