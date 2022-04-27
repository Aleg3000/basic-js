const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let output = new Array();
  let counter = 1;
  for(let i = 0; i < str.length; i++){
    if(str[i] == str[i + 1]){
      counter++;
    } else {
      counter == 1 ? output.push(str[i]) : output.push(counter, str[i]);
      counter = 1;
    }
  }
  return output.join('')
}

module.exports = {
  encodeLine
};
