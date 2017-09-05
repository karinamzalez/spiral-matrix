const math = require('mathjs');

class spiralMatrix {
  constructor(integer) {
    this.integer = integer;
  }

  isPerfectSquare() {
    //add one to integer to account for center at 0
    var integer = this.integer + 1;
    // check integer is positive and has no remainder after finding square root
    return math.sqrt(integer) % 1 === 0;
  }

  generateMatrix() {
    //generate array matrix with zeros as placeholders
    var dimension = math.sqrt(this.integer + 1);
    return math.zeros([dimension, dimension]);
  }
}

module.exports = spiralMatrix;
