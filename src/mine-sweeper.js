const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix){
  let outputMatrix = [];
  let howManyMinesAround = (i, k) => {
    let counter = 0;
    for (let n = i - 1; n <= i + 1; n++){
      if (n < 0 || n >= matrix.length) continue;
      for (let m = k - 1; m <= k + 1; m++){
        if (m < 0 || m >= matrix[0].length) continue;
        if (n !== i || m !== k) {
          if (matrix[n][m]) {
            counter++;
          }
        }
      }
    }
    return counter;
  }
  for (let i = 0; i < matrix.length; i++){
      outputMatrix[i] = new Array();
         for (let k = 0; k < matrix[i].length; k++){
           outputMatrix[i].push(howManyMinesAround(i, k))
         }
       }
  return outputMatrix
}

module.exports = {
  minesweeper
};
