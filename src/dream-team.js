const { NotImplementedError } = require('../extensions/index.js');

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
  if (Array.isArray(members) === false) {
    return false;
  }
  const newMembers = members.map((e) => {
    if (e === null || e === undefined || typeof e === 'object') {
      return
    }
    if (typeof e === 'string') {
      return e.toUpperCase().trimStart();
    }
    return
  });
  newMembers.sort();
  const res = [];
  newMembers.forEach((e) => {
    if (typeof e === 'string') {
      let trimStr = e.trimStart();
      res.push(trimStr.charAt(0).toUpperCase());
      return
    }
  })
  return res.join('');
}

module.exports = {
  createDreamTeam
};
