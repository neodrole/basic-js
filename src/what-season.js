const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  console.log(date);
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  let res;
  try {
    let month = date.getMonth();
    if (month <= 1) {
      res = 'winter';
    }
    if (month >1 && month <=4) {
      res = 'spring';
    }
    if (month > 4 && month <= 7) {
      res = 'summer';
    }
    if (month > 7 && month <= 10) {
      res = 'autumn';
    }
    if (month === 11) {
      res = 'winter';
    }
    date.valueOf();
  } catch {
    throw new Error('Invalid date!');
  }
  return res;
}

module.exports = {
  getSeason
};
