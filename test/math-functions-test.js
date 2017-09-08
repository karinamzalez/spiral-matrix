/*jshint esversion: 6 */
const chai = require('chai');
const assert = chai.assert;
const math = require('mathjs');
const { isOdd, isPerfectSquare,
        generateMatrixCenter } = require('../lib/math-functions.js');

describe('isOdd', function() {
  it('should return true if input is an odd number', function() {
    assert.equal(isOdd(3), true);
  });

  it('should return false if number is even', function() {
    assert.equal(isOdd(4), false);
  });
});

describe('isPerfectSquare', function() {
  it('should return true when input +1 is a perfect square', function() {
    assert.equal(isPerfectSquare(24), true);
  });

  it('should return false when input +1 is not a perfect square', function() {
    assert.equal(isPerfectSquare(6), false);
  });
});

describe('generateMatrixCenter', function() {
  it('should generate the index of the center of the matrix given the dimensions', function() {
    assert.equal(generateMatrixCenter([5, 5])[0], 2);
    assert.equal(generateMatrixCenter([5, 5])[1], 2);
  });
});
