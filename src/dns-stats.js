const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  domains.forEach((e,ind) => {
    let domainSplitted = e.split('.');
    for (let i = domainSplitted.length - 1; i >= 0; i = i - 1) {
      let domainLVL = domains.length;
      //это бред, но я не понимаю, почему в примере code.yandex.ru - .ru 3го уровня, а здесь
      //.com - 2го при info.epam.com
      if (domainSplitted.slice(-(i+1)).length > domains.length) {
        domainLVL = 1;
      }
      res[`.${domainSplitted.slice(-(i+1)).reverse().join('.')}`] = domainLVL;
    }
  })
  console.log(res);
  return res;
}

module.exports = {
  getDNSStats
};
