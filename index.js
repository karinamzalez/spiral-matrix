const math = require('mathjs');

function isOdd(num) { return (num % 2) === 1; }

class spiralMatrix {
  constructor(integer) {
    this.integer = integer;
    // this.printMatrix = isPerfectSquare() ? fillMatrix(true) : fillMatrix(false);
  }

  fillMatrix() {
    var matrix = this.generateMatrix();
    let center, dimensions = math.size(matrix);

    if (isOdd(dimensions[0])) {
      //set center of matrix
      console.log(math.subtract(dimensions, 1));
      // var center = math.dotDivide([], [2, 2]);
    }
  }

  generateMatrix() {
    //generate array matrix with zeros as placeholders
    var dimension = math.sqrt(this.integer + 1);
    //set this.dimensions equal to dimenstions
    return math.zeros([dimension, dimension]);
  }

  isPerfectSquare() {
    //add one to integer to account for center at 0
    var integer = this.integer + 1;
    // check integer is positive and has no remainder after finding square root
    return math.sqrt(integer) % 1 === 0;
  }
}

module.exports = spiralMatrix;
