/*jshint esversion: 6 */
const { subset, index, add } = require('mathjs');

function move(direction, currIndex, i, matrix) {
  currIndex = add(currIndex, direction);
  matrix = subset(matrix, index(currIndex[0], currIndex[1]), i);
  return [currIndex, matrix];
}

module.exports = {
  move: move,
  right: [0, 1],
  left: [0, -1],
  up: [-1, 0],
  down: [1, 0]
};
