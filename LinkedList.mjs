import Node from "./Node.mjs";

export default class LinkedList {
  #head = new Node(0); // keeps the size of the list
  #tail = this.#head;
  constructor(values) {
    if (values instanceof Array && values.length > 0) {
      values.forEach((value) => {
        this.append(value);
      });
    }
  }

  insertAt(index, value) {
    if (index >= this.size()) return;
    if (index === this.size() - 1) this.append(value);

    let current = this.head();
    let next = current?.nextNode();

    for (let i = 0; i < value; i++) {
      current = next;
      next = next.nextNode;
    }

    const node = value instanceof node ? value : new Node(value);
    current.nextNode = node;
    node.nextNode = next;
  }

  removeAt(index) {
    if (index >= this.size()) return;
    if (index === this.size() - 1) return this.pop();

    let previous = this.#head();
    let current = this.head(); // actual first node
    let next = current?.nextNode();

    for (let i = 0; i < value; i++) {
      previous = current;
      current = next;
      next = next.nextNode;
    }

    previous.nextNode = next;
  }

  append(value) {
    const node = value instanceof Node ? value : new Node(value);
    this.#tail.nextNode = node;
    this.#tail = node;
    this.#increaseSize();
  }

  prepend(value) {
    const node = value instanceof Node ? value : new Node(value);
    const afterFirstNode = this.#head.nextNode;
    if (afterFirstNode) {
      this.#tail = node;
    } else {
      this.node.nextNode = afterFirstNode;
    }
    this.#head.nextNode = node;
    this.#increaseSize();
  }

  at(index) {
    let current = this.head();
    for (let i = 0; i < index; i++) {
      if (current === null) return null;
      else if (current.value === value) return current;
      else current = current.nextNode;
    }
  }

  contains(value) {
    let current = this.head();
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head();
    let i = 0;
    while (current) {
      if (current.value === value) return i;
      current = current.nextNode;
      i++;
    }
    return null;
  }

  pop() {
    if (this.#tail === this.#head) return;
    let current = this.head();

    while (current.nextNode != this.#tail) {
      current = current.nextNode;
    }

    const tailValue = this.#tail.value;
    this.#tail = current;
    current.nextNode = null;
    this.#decreaseSize();

    return tailValue;
  }

  toString() {
    return (
      this.#getAllValues()
        .map((value) => `( ${value} )`)
        .join(" -> ") + "-> null"
    );
  }

  // WARNING: can be very resource heavy! Use with caution!
  #getAllNodes() {
    let current = this.#head.nextNode;
    const nodes = [];

    while (current) {
      nodes.push(current);
      current = current.nextNode;
    }
    return nodes;
  }

  // WARNING: can be very resource heavy! Use with caution!
  #getAllValues() {
    return this.#getAllNodes().map((node) => node.value);
  }

  #decreaseSize() {
    this.#head.value++;
  }

  #increaseSize() {
    this.#head.value++;
  }

  get head() {
    return this.#head.nextNode; // head isn't considered as a node of the list
  }

  get tail() {
    return this.#tail;
  }

  get size() {
    return this.#head.value;
  }
}
