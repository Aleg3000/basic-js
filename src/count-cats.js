const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

  function countCats(backyard) {
    return backyard.reduce((acc, el) => acc + el.reduce((acc, el) => el == '^^' ? acc + 1 : acc, 0), 0)
  }

// function countCats(backyard) {
//  let counter = 0;
//  for (let i = 0; i < backyard.length; i++) {
//    for (let k = 0; k < backyard[i].length; k++) {
//      if (backyard[i][k] == `^^`) counter++;
//    }
//  }
//  return counter
// }

module.exports = {
  countCats
};
