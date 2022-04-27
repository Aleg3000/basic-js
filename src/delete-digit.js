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
 function deleteDigit(num) {
  num = num.toString().split('');
  for (i = 0; i < num.length; i++){
  if (num[i] == num [i + 1]) continue;
  if (num[i] > num[i + 1]) {
    num.splice(i + 1, 1);
    return +num.join('');
  }
  else {
    num.splice(i, 1);
    return +num.join('');
}}
}

module.exports = {
  deleteDigit
};
