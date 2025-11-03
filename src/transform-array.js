const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // Remove line below and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let result = [];
  let pushItem = null;

  for(let i=0; i<arr.length; i++){
    if(arr[i] == '--discard-next'){
      i++;
      pushItem = null;
    }else if(arr[i] == '--discard-prev'){
      if(i > 0 && pushItem !== null)
        result.pop();
    }else if(arr[i] == '--double-next'){
      if(i < arr.length-1 && arr[i+1] !== undefined)
        result.push(arr[i+1]);
        pushItem = arr[i+1];
    }else if(arr[i] == '--double-prev'){
        if(i > 0 && pushItem !== null && pushItem !== undefined)
          result.push(pushItem);
    }else{
      if(arr[i] !== undefined){
        result.push(arr[i]);
        pushItem = arr[i];
      }
    }
  }
  return result;
}

module.exports = {
  transform
};
