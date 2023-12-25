const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  matrix.forEach((row,index) => {
    row.forEach( (e, ind2) => {
      let upperRowIndex = (index-1) >= 0 ? (index - 1) : 0;
      if (matrix[upperRowIndex][ind2] !== 0) {
        sum = sum + e;
      }
    })
  })
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
