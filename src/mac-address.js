const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let digits = [];
  for (i = 0; i <=16; i = i + 1) {
    digits.push(i.toString(16).toUpperCase());
  }
  digits.push('-');
  let result = true;
  n.split('').forEach(element => {
    if (!(digits.includes(element))) {
      result = false;
    }
  });
  return result;
}
module.exports = {
  isMAC48Address
};
