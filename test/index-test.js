const chai = require('chai');
const assert = chai.assert;
const {SpiralMatrix, isOdd} = require('../index.js');
const math = require('mathjs');

describe('isOdd', function(){
  it('should return true if input is an odd number', function(){
    assert.equal(isOdd(3), true);
  });

  it('should return false if number is even', function(){
    assert.equal(isOdd(4), false);
  });
});

describe('SpiralMatrix with even perfect square', function() {
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

  it('fills matrix in spiral format starting at center of square', function() {
    spiralMatrix.fillMatrix();
  });
});
