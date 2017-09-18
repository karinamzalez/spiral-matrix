/*jshint esversion: 6 */
const chai = require('chai');
const assert = chai.assert;
const { zeros, index, subset } = require('mathjs');
const { right, left, up, down, move } = require('../lib/instructions.js');

describe('instructions', function() {
  it('should take in a direction, currIndex, i, & matrix and return an array of the new currIndex and matrix', function() {
    let direction = right;
    let currIndex = [0, 0];
    let matrix = zeros([3, 3]);
    let i = 8;
    [currIndex, matrix] = move(down, currIndex, i, matrix);

    assert.equal(currIndex[0], 1);
    assert.equal(currIndex[1], 0);
    //assert that i was placed in correct index of matrix
    assert.equal((subset(matrix, index(1, 0))), 8);
  });

  it('should create coordinate instruction to move right', function() {
    assert.equal(right[0], 0);
    assert.equal(right[1], 1);
  });

  it('should create coordinate instruction to move left', function() {
    assert.equal(left[0], 0);
    assert.equal(left[1], -1);
  });

  it('should create coordinate instruction to move up', function() {
    assert.equal(up[0], -1);
    assert.equal(up[1], 0);
  });

  it('should create coordinate instruction to move down', function() {
    assert.equal(down[0], 1);
    assert.equal(down[1], 0);
  });
});
