const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) 
    return false;

  let sumLetter = '';
  for(let i=0; i<members.length; i++)
  {
   if(typeof members[i] == "string"){
      let bigFirstLetter = members[i].trim().split('')[0].toUpperCase();
      sumLetter += bigFirstLetter;
   }
  }
  if(sumLetter === '') return false;
  return sumLetter.split('').sort().join('');
};
