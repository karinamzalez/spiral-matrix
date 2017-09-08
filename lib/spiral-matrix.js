/*jshint esversion: 6 */
const math = require('mathjs');
const { isOdd, isPerfectSquare,
        generateMatrixCenter } = require('./math-functions.js');

class SpiralMatrix {
  constructor(integer) {
    this.integer = integer;
    this.oddSquares = [];
    this.instructions = {
      right: [0, 1],
      left: [0, -1],
      up: [-1, 0],
      down: [1, 0]
    };
    // this.printMatrix = this.isPerfectSquare() && this.fillMatrix(true);
  }

  fillMatrix(boolean) {
    this.generateOddSquaresArray();
    let matrix = this.generateMatrix();
    let currIndex, center, i, dimensions = math.size(matrix);
    let rotations =  2;

    //fill matrix starting at center if the dimensions are odd
    if (isOdd(dimensions[0])) {
      //set center of matrix as current Index
      currIndex = generateMatrixCenter(dimensions);

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
            currIndex = math.add(currIndex, this.instructions.right);
            matrix = math.subset(matrix, math.index(currIndex[0], currIndex[1]), i + 1);
          } else if (i < math.sqrt(currLayer) && i !== 1){
            currIndex = math.add(currIndex, this.instructions.down);
            matrix = math.subset(matrix, math.index(currIndex[0], currIndex[1]), i);
          } else if (i >= math.sqrt(currLayer) && i < (math.sqrt(currLayer) + rotations)) {
            currIndex = math.add(currIndex, this.instructions.left);
            matrix = math.subset(matrix, math.index(currIndex[0], currIndex[1]), i);
          } else if (i >= (math.sqrt(currLayer) + rotations) && i < (currLayer - rotations)) {
            currIndex = math.add(currIndex, this.instructions.up);
            matrix = math.subset(matrix, math.index(currIndex[0], currIndex[1]), i);
          } else if (i >= currLayer - rotations && i < currLayer) {
            currIndex = math.add(currIndex, this.instructions.right);
            matrix = math.subset(matrix, math.index(currIndex[0], currIndex[1]), i);
          } else if (i === currLayer) {
            currIndex = math.add(currIndex, this.instructions.right);
            matrix = math.subset(matrix, math.index(currIndex[0], currIndex[1]), i);
          }
        }
        rotations = rotations + 2;
      }

      console.log(matrix);
    }
    //generate array of perfect squares up until the perfect square given
  }

  generateMatrix() {
    //generate array matrix with zeros as placeholders
    var dimension = math.sqrt(this.integer + 1);
    //set this.dimensions equal to dimenstions
    return math.zeros([dimension, dimension]);
  }

  generateOddSquaresArray() {
    let squares = [1];
    for (var i=3; i < this.integer/2.5 ; i+=2) {
      let square = squares[squares.length - 1] + i;
      squares.push(square);
      isOdd(square) && this.oddSquares.push(square);
    }
  }
}

module.exports = SpiralMatrix;
