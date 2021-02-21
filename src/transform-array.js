const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr) || arr == undefined) throw new Error('Bug');
  
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
