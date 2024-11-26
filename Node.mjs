export default class Node {
  #value;
  constructor(value = null, nextNode = null) {
    this.#value = value;
    this.nextNode = nextNode;
  }

  set value(val) {
    if (typeof this.#value === typeof val) {
      this.#value = val;
    } else {
      throw Error("Types don't match.");
    }
  }

  get value() {
    return this.#value;
  }
}
