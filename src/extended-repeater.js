const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, obj){
  let addition = String(obj.addition);
  str = String(str);
  let additionSeparator = obj.additionSeparator || '|';
  if (typeof additionSeparator !== 'string') additionSeparator = String(additionSeparator);
  let separator = obj.separator || '+';  
  if (addition !== 'undefined'){
    if (obj.additionRepeatTimes){
      str += new Array(obj.additionRepeatTimes)
                      .fill(addition)
                      .join(additionSeparator)  
    }
    else str += obj.addition;
  }
  return new Array(obj.repeatTimes).fill(str).join(separator)
}

module.exports = {
  repeater
};
