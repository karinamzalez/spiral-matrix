const chai = require('chai');
const assert = chai.assert;
const SpiralMatrix = require('../index.js');

describe('SpiralMatrix', function() {
  var spiralMatrix = new SpiralMatrix(24);

  it('takes in an integer', function() {
    assert.equal(spiralMatrix.integer, 24);
  });

  it('checks if given integer + 1 is perfect square', function() {
    
  });
});
