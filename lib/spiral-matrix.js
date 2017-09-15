/*jshint esversion: 6 */
const math = require('mathjs');
const { isOdd, isPerfectSquare,
        calculateMatrixCenter, generateOddSquaresArray,
        generateMatrix } = require('./math-functions.js');
const { right, left, up, down, move } = require('./instructions.js');

class SpiralMatrix {
  constructor(integer) {
    this.integer = integer;
    this.oddSquares = generateOddSquaresArray(integer);
    this.matrix = generateMatrix(integer);
    // this.printMatrix = this.isPerfectSquare() && this.fillMatrix(true);
  }

  fillMatrix(boolean) {
    let matrix = this.matrix;
    let currIndex, center, i, dimensions = math.size(matrix);
    let rotations =  2;

    //fill matrix starting at center if the dimensions are odd
    if (isOdd(dimensions[0])) {
      //set center of matrix as current Index
      currIndex = calculateMatrixCenter(dimensions);

      for (var j = 0; j < 1; j++) {

        let currLayer = this.oddSquares[j];
        if (j > 0) {
          i = this.oddSquares[j - 1] + 1;
          rotations = rotations + 2;
        } else {
          i = 0;
        }
        for (i; i <= currLayer; i++) {
          if (i === 0) {
            [currIndex, matrix] = move(right, currIndex, (i + 1), matrix);
          } else if (i < math.sqrt(currLayer) && i !== 1){
            [currIndex, matrix] = move(down, currIndex, i, matrix);
          } else if (i >= math.sqrt(currLayer) && i < (math.sqrt(currLayer) + rotations)) {
            [currIndex, matrix] = move(left, currIndex, i, matrix);
          } else if (i >= (math.sqrt(currLayer) + rotations) && i < (currLayer - rotations)) {
            [currIndex, matrix] = move(up, currIndex, i, matrix);
          } else if (i >= currLayer - rotations && i < currLayer || i === currLayer) {
            [currIndex, matrix] = move(right, currIndex, i, matrix);
          }
        }
        rotations = rotations + 2;
      }

      console.log(matrix);
    }
    //generate array of perfect squares up until the perfect square given
  }
}

module.exports = SpiralMatrix;
