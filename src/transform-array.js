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
  if (!Array.isArray(arr)) {
    throw Error(`'arr' parameter must be an instance of the Array!`)
    throw error(`'arr' parameter must be an instance of the Array!`);
  }
  let arr1 = []
  for(let i = 0; i < arr.length; i++) {
    switch(arr[i]){
      case '--discard-next':
        if (typeof arr[i + 1]  == 'number') i++;
        break;
      case '--discard-prev':
        if (arr[i - 2] == '--discard-next') break;
        if (arr1.length > 0 && typeof arr1[arr1.length - 1] == 'number') arr1.pop();
        break;
      case '--double-next':
        if (typeof arr[i + 1] == 'number') arr1.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (arr[i - 2] == '--discard-next') break;
        if (arr1.length > 0) arr1.push(arr1[arr1.length - 1]);
        break;
      default:
        arr1.push(arr[i])
}
  }
  return arr1;
}

module.exports = {
  transform
};
