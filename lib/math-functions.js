/*jshint esversion: 6 */
const math = require('mathjs');

function isOdd(num) { return (num % 2) === 1; }

function isPerfectSquare(integer) {
  integer = integer + 1;
  return math.sqrt(integer) % 1 === 0;
}

function generateMatrixCenter(dimensions) {
  return math.dotDivide(math.subtract(dimensions, 1), 2);
}

module.exports = {
  isOdd: isOdd,
  isPerfectSquare: isPerfectSquare,
  generateMatrixCenter: generateMatrixCenter,
};
