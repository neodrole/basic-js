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
function minesweeper(matrix) {
  let res = [];
  matrix.forEach((row,ind) => {
    res.push([]);
    row.forEach((element, indElem) => {
      res[ind].push(0);
    })
  })

  matrix.forEach((row,ind) => {
    row.forEach((element, indElem) => {
      if (element) {
        // я тут понял, что я мог сделать это циклом -1 -> 1, но уже пусть будет так
        //
        if((ind - 1 >= 0) && (indElem >= 0)) {
          res[ind-1][indElem - 1] = res[ind-1][indElem - 1] + 1;
        }
        if((ind - 1 >= 0) && (indElem >= 0)) {
          res[ind-1][indElem] = res[ind-1][indElem] + 1;
        }
        if((ind - 1 >= 0) && (indElem >= 0)) {
          res[ind-1][indElem + 1] = res[ind-1][indElem + 1] + 1;
        }
        //
        if(indElem >= 0 && indElem < matrix[ind].length) {
          res[ind][indElem - 1] = res[ind][indElem - 1] + 1;
        }
        //if(res[ind][indElem]) {
        //  res[ind][indElem] = res[ind-1][indElem] + 1;
        //}
        if(indElem >= 0 && indElem < matrix[ind].length) {
          res[ind][indElem + 1] = res[ind][indElem + 1] + 1;
        }
        //
        if((ind+ 1 < matrix.length) && (indElem >= 0 && indElem < matrix[ind].length)) {
          res[ind+1][indElem - 1] = res[ind+1][indElem - 1] + 1;
        }
        if((ind+ 1 < matrix.length)) {
          res[ind+1][indElem] = res[ind+1][indElem] + 1;
        }
        if((ind+ 1 < matrix.length) && (indElem >= 0 && indElem < matrix[ind].length)) {
          res[ind+1][indElem + 1] = res[ind+1][indElem + 1] + 1;
        }
      }
    })


  })
  return res;
}

module.exports = {
  minesweeper
};
