const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, n = 1) {
    if(!Array.isArray(arr))
      return 0;
    let maxN = n;
    for(let i=0; i<arr.length; i++){
      if(Array.isArray(arr[i])){
        maxN = Math.max(this.calculateDepth(arr[i], n + 1), maxN);
      }   
    }
  return maxN;
  }
};