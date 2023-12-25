const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nStr = String(n).split('');
  let maxN = 0;

  for (let i = 0; i < nStr.length; i = i + 1) {
    let copyN = nStr.slice();
    copyN.splice(i, 1);
    let nTestMax = Number(copyN.join(''));
    if (maxN < nTestMax) {
      maxN = nTestMax;
    }
  }
  return maxN;

}

module.exports = {
  deleteDigit
};
