const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainItems: [], //будто бы можно было сделать это круче
  getLength() {
    return this.chainItems.length;
  },
  addLink(value) {
    this.chainItems.push(String(value));
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || this.chainItems.length < position || position <= 0) {
      this.chainItems = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chainItems.splice(position-1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chainItems.reverse();
    return this;
  },
  finishChain() {
    let res =  `( ${this.chainItems.join(' )~~( ')} )`;
    this.chainItems = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
