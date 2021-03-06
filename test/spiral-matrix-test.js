/*jshint esversion: 6 */

const chai = require('chai');
const assert = chai.assert;
const SpiralMatrix = require('../lib/spiral-matrix.js');

describe('SpiralMatrix with even perfect square', function() {
  var spiralMatrix = new SpiralMatrix(24);

  it('takes in an integer', function() {
    assert.equal(spiralMatrix.integer, 24);
  });

  it('fills matrix in spiral format starting at center of square', function() {
    spiralMatrix.fillMatrix();
  });
});
