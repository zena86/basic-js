const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(sampleActivity === '' 
     || typeof(sampleActivity) !== "string" 
     || parseFloat(sampleActivity) !== "number"
     || +sampleActivity > 15 
     || +sampleActivity <= 0) 
        return false
  let k = 0.693/HALF_LIFE_PERIOD;
  let numSampleActivity = +sampleActivity;
  return Math.ceil((Math.log(MODERN_ACTIVITY/numSampleActivity))/k);
};
