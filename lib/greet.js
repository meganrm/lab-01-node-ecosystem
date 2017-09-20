'use strict';

function greet(name) {
  if (arguments.length !== 1) {
    return null;
  }

  if (typeof name !== 'string') {
    return null;
  }
  
  if (!name.length) {
    return null;
  }

  return `Hello ${name}`;
};



module.exports = greet;
