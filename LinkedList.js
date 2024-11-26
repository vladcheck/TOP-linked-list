import Node from "./Node";

export default class LinkedList {
  #head = new Node(0); // keeps the size of the list
  #tail = this.#head;
  constructor(values) {
    if (values instanceof Array && values.length > 0) {
      values.forEach((value) => {
        const node = !value instanceof Node ? Node(value) : value;
        this.#tail.nextNode = node;
        this.#tail = node;
        this.#head.value++;
      });
    }
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
