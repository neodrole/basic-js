const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const newArr = [];
  let save = 1;
  let recent = 1;
  const copyArr = [...arr];
  //мне не нравится эта реализация, но ))
  copyArr.forEach((e,ind) => {
    if (e === '--discard-next') {
      save = 0;
    } else if (e === '--discard-prev') {
      if (recent === 1) {
        newArr.pop();
      }
    } else if (e === '--double-next') {
      if (copyArr[ind + 1]) {
        newArr.push(copyArr[ind + 1]);
      }
    } else if (e === '--double-prev') {
      if (newArr[newArr.length - 1] && recent === 1) {
        newArr.push(newArr[newArr.length - 1]);
      }
    } else {
      if (recent === 0) {
        recent = 1;
      }
      newArr.push(e);
      if (save === 0) {
        save = 1;
        newArr.pop();
        recent = 0;
      }
    }
  })
  return newArr;
}

module.exports = {
  transform
};
