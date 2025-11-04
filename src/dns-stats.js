const { NotImplementedError } = require('../lib');

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
  // Remove line below and write your code here
  let domainsArr;
  const result = {};
  for (let i = 0; i < domains.length; i++) {
    domainsArr = domains[i].split('.');
    for (let j = domainsArr.length - 1; j >= 0; j--) {
      const objectKey = `.${domainsArr.slice(j).reverse().join('.')}`;
      if (result[objectKey] === undefined) {
        result[objectKey] = 0;
      }
      result[objectKey]++;
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
