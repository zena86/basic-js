const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // Remove line below and write your code here
    if(!Array.isArray(arr))
      return 0;

    let maxDepth = 1;
    for(let i=0; i<arr.length; i++){
      if(Array.isArray(arr[i])){
        maxDepth = Math.max(maxDepth, this.calculateDepth(arr[i]) + 1);
      }
    }

    return maxDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
