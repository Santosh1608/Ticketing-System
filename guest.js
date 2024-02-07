export default class Guest {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

  getName() {
    return this.#name;
  }
}
