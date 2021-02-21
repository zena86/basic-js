const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) 
{
  let turns = calculateTurns(disksNumber);
  let seconds = Math.floor(turns / turnsSpeed * 3600);
  return {'turns': turns, 'seconds': seconds};
};
function calculateTurns(disksNumber){
  if(disksNumber === 2){
    return 3;
  }
  return calculateTurns(disksNumber - 1) * 2 + 1;
}
