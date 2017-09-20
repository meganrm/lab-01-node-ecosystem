'use strict';

let arithmetic = {};

arithmetic.add = function (a, b) {

  if (arguments.length !== 2) {
    return null;
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }

  return a + b;
};

arithmetic.sub = function (a, b) {

  if (arguments.length !== 2) {
    return null;
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }

  return a - b;
};


module.exports = arithmetic;
