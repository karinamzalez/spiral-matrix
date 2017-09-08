/*jshint esversion: 6 */

const chai = require('chai');
const assert = chai.assert;
const math = require('mathjs');
const SpiralMatrix = require('../lib/spiral-matrix.js');

describe('SpiralMatrix with even perfect square', function() {
  var spiralMatrix = new SpiralMatrix(24);

  it('takes in an integer', function() {
    assert.equal(spiralMatrix.integer, 24);
  });

  it('generates Matrix with perfect square dimensions', function() {
    var matrix = spiralMatrix.generateMatrix();

    //math.size() returns array with both dimenstions
    assert.equal(math.size(matrix)[0], 5);
    assert.equal(math.size(matrix)[1], 5);
  });

  it('generates object of instructions upon instantiation', function() {

    assert.equal(spiralMatrix.instructions.right[0], 0);
    assert.equal(spiralMatrix.instructions.right[1], 1);
    assert.equal(spiralMatrix.instructions.left[0], 0);
    assert.equal(spiralMatrix.instructions.left[1], -1);
    assert.equal(spiralMatrix.instructions.up[0], -1);
    assert.equal(spiralMatrix.instructions.up[1], 0);
    assert.equal(spiralMatrix.instructions.down[0], 1);
    assert.equal(spiralMatrix.instructions.down[1], 0);
  });

  it('returns array of odd perfect squares up until given perfect square', function() {
    var matrix = new SpiralMatrix(24);
    matrix.generateOddSquaresArray();

    assert.equal(matrix.oddSquares[0], 9);
    assert.equal(matrix.oddSquares[1], 25);
  });

  it('fills matrix in spiral format starting at center of square', function() {
    spiralMatrix.fillMatrix();
  });
});
