/*jshint esversion: 6 */
const { sqrt, dotDivide,
        subtract } = require('mathjs');

function isOdd(num) { return (num % 2) === 1; }

function isPerfectSquare(integer) {
  integer = integer + 1;
  return sqrt(integer) % 1 === 0;
}

function generateMatrixCenter(dimensions) {
  return dotDivide(subtract(dimensions, 1), 2);
}

module.exports = {
  isOdd: isOdd,
  isPerfectSquare: isPerfectSquare,
  generateMatrixCenter: generateMatrixCenter,
};
