const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result: [],
  getLength() {
    // Remove line below and write your code here
    return this.result.length;
  },
  addLink(value) {
    // Remove line below and write your code here
    if (arguments.length === 0) {
      this.result.push('( )');
    } else {
      this.result.push(String(value));
    }
    return this;
  },
  removeLink(position) {
    // Remove line below and write your code here
    if (typeof position !== "number" || position <= 0 || position > this.result.length) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.result.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    // Remove line below and write your code here
    this.result.reverse();
    return this;
  },
  finishChain() {
    // Remove line below and write your code here
    let fin = this.result.map((item) => `( ${item} )`).join('~~');
    this.result = [];
    return fin;
  },
};

module.exports = {
  chainMaker,
};
