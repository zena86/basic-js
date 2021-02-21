const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arr =[];
  if(options.separator == undefined)
    options.separator = '+';
  if(options.additionSeparator == undefined)
    options.additionSeparator = '|';
  if(options.repeatTimes == undefined)
    options.repeatTimes = 1;
  if(options.additionRepeatTimes == undefined)
    options.additionRepeatTimes = 1;
  if(str === null)
    str = 'null';
  if(options.addition === null)
    options.addition = 'null';
  for(let i=0; i<options.repeatTimes; i++){
    arr.push(str);
    
    for(let j=0; j<options.additionRepeatTimes; j++){
      arr.push(options.addition);
      if(j !== options.additionRepeatTimes - 1)
        arr.push(options.additionSeparator);
    }
    if(i !== options.repeatTimes-1)
      arr.push(options.separator);
  }
  return arr.join('');
};
  