/*jshint esversion: 6 */
const chai = require('chai');
const assert = chai.assert;
const math = require('mathjs');
const { isOdd, isPerfectSquare,
        generateMatrixCenter, generateOddSquaresArray,
        generateMatrix } = require('../lib/math-functions.js');

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

describe('calculateMatrixCenter', function() {
  it('should calculate the index of the center of the matrix given dimensions', function() {
    assert.equal(calculateMatrixCenter([5, 5])[0], 2);
    assert.equal(calculateMatrixCenter([5, 5])[1], 2);
  });
});

describe('generateOddSquaresArray', function() {
  it('should return array of odd perfect squares up until given perfect square', function() {
    let oddSquares = generateOddSquaresArray(24);

    assert.equal(oddSquares[0], 9);
    assert.equal(oddSquares[1], 25);
  });
});

describe('generateMatrix', function() {
  it('should generate matrix with perfect square dimensions', function() {
    let matrix = generateMatrix(24);

    assert.equal(math.size(matrix)[0], 5);
    assert.equal(math.size(matrix)[1], 5);
  });
});
