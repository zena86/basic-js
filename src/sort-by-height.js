const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Remove line below and write your code here
  const result = arr;
  const arrSm = result.filter((item) => item !== -1).sort((a, b) => a - b);
  let j = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== -1) {
      result[i] = arrSm[j];
      j++;
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
