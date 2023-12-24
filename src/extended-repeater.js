const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr = '';
  const additionArray = [];
  let additionRepeatTimes = 1;
  let additionSeparator = '|';
  let repeatTimes = 1;
  let separator = '+';
  let addition = ''
  if (options['addition'] !== undefined) {
    addition = String(options['addition']);
  }
  if (typeof str !== 'string') {
    str = String(str);
  }
  if (options['separator']) {
    separator = options['separator'];
  }
  if (options['additionSeparator']) {
    additionSeparator = options['additionSeparator'];
  }
  if (options['additionRepeatTimes']) {
    additionRepeatTimes = options['additionRepeatTimes'];
  }
  if (options['repeatTimes']) {
    repeatTimes = options['repeatTimes'];
  }
  console.log(addition);
  for (let i = 0; i < additionRepeatTimes; i += 1) {
    additionArray.push(addition);
  }
  newStr = str + additionArray.join(additionSeparator);
  const repeatArray = [];
  for (let i = 0; i < repeatTimes; i += 1) {
    repeatArray.push(newStr);
  }
  return repeatArray.join(separator);
}

module.exports = {
  repeater
};
