/*jshint esversion: 6 */
const chai = require('chai');
const assert = chai.assert;
const math = require('mathjs');
const { isOdd, isPerfectSquare } = require('../lib/math-functions.js');

describe('isOdd', function() {
  it('should return true if input is an odd number', function() {
    assert.equal(isOdd(3), true);
  });

  it('should return false if number is even', function() {
    assert.equal(isOdd(4), false);
  });
});

describe('isPerfectSquare', function() {
  it('should return true when input is a perfect square', function() {

  });
});
