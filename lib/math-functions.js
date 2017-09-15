/*jshint esversion: 6 */
const { sqrt, dotDivide,
        subtract, zeros } = require('mathjs');

function isOdd(num) { return (num % 2) === 1; }

function isPerfectSquare(integer) {
  integer = integer + 1;
  return sqrt(integer) % 1 === 0;
}

function generateMatrixCenter(dimensions) {
  return dotDivide(subtract(dimensions, 1), 2);
}

function generateOddSquaresArray(integer) {
  let squares = [1];
  let oddSquares = [];
  for (var i=3; i < integer/2.5 ; i+=2) {
    let square = squares[squares.length - 1] + i;
    squares.push(square);
    isOdd(square) && oddSquares.push(square);
  }
  return oddSquares;
}

function generateMatrix(integer) {
  var dimension = sqrt(integer + 1);
  return zeros([dimension, dimension]);
}

module.exports = {
  isOdd: isOdd,
  isPerfectSquare: isPerfectSquare,
  generateMatrixCenter: generateMatrixCenter,
  generateOddSquaresArray: generateOddSquaresArray,
  generateMatrix: generateMatrix,
};
