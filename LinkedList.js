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

  #getAllValues() {
    let current = this.#head.nextNode;
    const valuesInNodes = [];

    while (current) {
      valuesInNodes.push(current.value);
      current = current.nextNode;
    }
    return valuesInNodes;
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
