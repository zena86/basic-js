const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arrFlatCats = matrix.flat(1);
  let result = 0;

  for(let i=0; i<arrFlatCats.length; i++)
  {
    if(arrFlatCats[i] === "^^")
      result += 1;
  }
  return result;
};
