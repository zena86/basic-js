const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return chainMaker.result.length;
  },
  addLink(value = '') {
    chainMaker.result.push(value);
    return chainMaker;
  },
  removeLink(position) {
    if(typeof(position) === 'number' && position >= 1 && position < chainMaker.result.length){
      chainMaker.result.splice(position - 1, 1);
    }else{
      chainMaker.result = [];
      throw new Error();
    }
      
    return chainMaker;
  },
  reverseChain() {
    chainMaker.result.reverse();
    return chainMaker;
  },
  finishChain() {
    let fin = chainMaker.result.map((item) => `( ${item} )`).join('~~');
    chainMaker.result = [];
    return fin;
  }
};
module.exports = chainMaker;
