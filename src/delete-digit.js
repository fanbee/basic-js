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

function deleteDigit(n) {
  
  let max = [];
  n = (n+'').split('');
  
  n.forEach((x,i)=>{
    let mas = [...n];
    mas.splice(i,1);
    max.push(+(mas.join('')));    
  })

  return Math.max(...max);
}

module.exports = {
  deleteDigit
};
