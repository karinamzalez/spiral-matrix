/*jshint esversion: 6 */
const chai = require('chai');
const assert = chai.assert;
const math = require('mathjs');
const { right, left, up, down } = require('../lib/instructions.js');

describe('instructions', function() {
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
