/*jshint esversion: 6 */
const { size, sqrt } = require('mathjs');
const { isOdd, isPerfectSquare,
        calculateMatrixCenter, generateOddSquaresArray,
        generateMatrix } = require('./math-functions.js');
const { right, left, up, down, move } = require('./instructions.js');

class SpiralMatrix {
  constructor(integer) {
    this.integer = integer;
    this.oddSquares = generateOddSquaresArray(integer);
    this.matrix = generateMatrix(integer);
  }

  fillMatrix() {
    let matrix = this.matrix;
    let currIndex, center, i, dimensions = size(matrix);
    let rotations =  2;

    //fill matrix starting at center if the dimensions are odd
    if (isOdd(dimensions[0])) {
      //set center of matrix as current Index
      currIndex = calculateMatrixCenter(dimensions);

      for (var j = 0; j < 1; j++) {
        let currLayer = this.oddSquares[j];
        for (i = 0; i <= currLayer; i++) {
          if (i === 0) {
            [currIndex, matrix] = move(right, currIndex, (i + 1), matrix);
          } else if (i < sqrt(currLayer) && i !== 1){
            [currIndex, matrix] = move(down, currIndex, i, matrix);
          } else if (i >= sqrt(currLayer) && i < (sqrt(currLayer) + rotations)) {
            [currIndex, matrix] = move(left, currIndex, i, matrix);
          } else if (i >= (sqrt(currLayer) + rotations) && i < (currLayer - rotations)) {
            [currIndex, matrix] = move(up, currIndex, i, matrix);
          } else if (i >= currLayer - rotations && i < currLayer || i === currLayer) {
            [currIndex, matrix] = move(right, currIndex, i, matrix);
          }
        }
        rotations = rotations + 2;
      }
      console.log(matrix);
    }
  }
}

module.exports = SpiralMatrix;
