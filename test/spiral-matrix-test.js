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

  it('fills matrix in spiral format starting at center of square', function() {
    spiralMatrix.fillMatrix();
  });
});
