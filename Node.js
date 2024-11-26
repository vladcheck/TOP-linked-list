export default class Node {
  #value;
  constructor(value = null, nextNode = null) {
    this.#value = value;
    this.nextNode = nextNode;
  }

  get value() {
    return this.#value;
  }
}
