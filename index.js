const math = require('mathjs');

function isOdd(num) { return (num % 2) === 1; }

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
    // this.printMatrix = isPerfectSquare() ? fillMatrix(true) : fillMatrix(false);
  }

  fillMatrix() {
    let matrix = this.generateMatrix();
    let curr, center, dimensions = math.size(matrix);

    if (isOdd(dimensions[0])) {
      //set center of matrix
      center = math.dotDivide(math.subtract(dimensions, 1), 2);
      matrix = math.subset(matrix, math.index(2, 2), 9);

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

  generateOddSquareArray() {
    let squares = [1];
    for (var i=3; i < this.integer/2.5 ; i+=2) {
      let square = squares[squares.length - 1] + i;
      squares.push(square);
      isOdd(square) && this.oddSquares.push(square);
    }
  }

  isPerfectSquare() {
    //add one to integer to account for center at 0
    var integer = this.integer + 1;
    // check integer is positive and has no remainder after finding square root
    return math.sqrt(integer) % 1 === 0;
  }
}

module.exports = {
  SpiralMatrix: SpiralMatrix,
  isOdd: isOdd,
};
