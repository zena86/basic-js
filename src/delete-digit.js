const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // Remove line below and write your code here
  let result = '';
  let maxResult = 0;
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    result = str.slice(0, i) + str.slice(i + 1);
    if (+result > maxResult) {
      maxResult = +result;
    }
  }
  return maxResult;
}

module.exports = {
  deleteDigit
};
