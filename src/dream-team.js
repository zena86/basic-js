const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // Remove line below and write your code here
  if(!Array.isArray(members)) return false;

  const names = members.filter(item => typeof item === 'string');
  const initials = names.map(item => item.trim()[0].toUpperCase());

  if(initials.length === 0) return false;

  return initials.sort().join('');
}

module.exports = {
  createDreamTeam
};