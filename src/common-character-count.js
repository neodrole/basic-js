const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Arr = s1.split('');
  let s2Arr = s2.split('');
  const res = [];
  s1Arr.forEach((e) => {
    if (s2Arr.includes(e)) {
      res.push(e);
      s2Arr.splice(s2Arr.indexOf(e), 1);
    }
  });
  return res.length;
}

module.exports = {
  getCommonCharacterCount
};
