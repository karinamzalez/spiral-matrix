const chai = require('chai');
const assert = chai.assert;
const SpiralMatrix = require('../index.js');
const math = require('mathjs');

describe('SpiralMatrix with perfect square', function() {
  var spiralMatrix = new SpiralMatrix(24);

  it('takes in an integer', function() {
    assert.equal(spiralMatrix.integer, 24);
  });

  it('checks if given integer + 1 is perfect square', function() {
    assert.equal(spiralMatrix.isPerfectSquare(), true);
  });

  it('generates Matrix with perfect square dimensions', function() {
    var matrix = spiralMatrix.generateMatrix();

    //math.size() returns array with both dimenstions
    assert.equal(math.size(matrix)[0], 5);
    assert.equal(math.size(matrix)[1], 5);
  });
});
