import Node from "./Node";

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
    return this.#getAllNodes()[index];
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

    return tailValue;
  }

  toString() {
    return (
      this.#getAllValues()
        .map((value) => `( ${value} )`)
        .join(" -> ") + "null"
    );
  }

  #getAllNodes() {
    let current = this.#head.nextNode;
    const nodes = [];

    while (current) {
      valuesInNodes.push(current);
      current = current.nextNode;
    }
    return nodes;
  }

  #getAllValues() {
    return this.#getAllNodes.map((node) => node.value);
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
