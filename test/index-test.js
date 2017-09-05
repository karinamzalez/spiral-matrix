const chai = require('chai');
const assert = chai.assert;
const SpiralMatrix = require('../index.js');

describe('SpiralMatrix', function() {
  it('takes in an integer', function() {
    var spiralMatrix = new SpiralMatrix(24);

    assert.equal(spiralMatrix.integer, 24);
  });
});
