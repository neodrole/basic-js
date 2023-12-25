const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let splittedSTR = str.split('');
  let res = [];
  let num = 1;
  splittedSTR.forEach((e,ind) => {
    if (splittedSTR[ind+1] === e) {
      num = num + 1;
    } else {
      if (num > 1) {
        res.push(`${num}${e}`)
      } else {
        res.push(e);
      }
      num = 1;
    }
  });
  return res.join('');
}

module.exports = {
  encodeLine
};
