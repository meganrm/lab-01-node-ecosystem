'use strict';

const mathy = require('../lib/arithmetic.js');
const expect = require('expect');

describe('Add', function(){
  it('takes two numbers and adds them together', function(){

    let result = mathy.add(2, 2);
    expect(result).toEqual(4);

  });
  it('returns null if the two arguments are not numbers', function(){

    let result = mathy.add('oops', 3);
    expect(result).toEqual(null);

  });

  it('returns null if there are more than 2 arguments', function(){

    let result = mathy.add(4, 4, 2);
    expect(result).toEqual(null);

  });
  it('returns null if there are no arguments', function(){

    let result = mathy.add();
    expect(result).toEqual(null);

  });

});

describe('Subtract', function(){
  it('takes two numbers and subtracts the second from the first', function(){

    let result = mathy.sub(2, 2);
    expect(result).toEqual(0);

  });
  it('returns null if the two arguments are not numbers', function(){

    let result = mathy.sub('oops', 3);
    expect(result).toEqual(null);

  });

  it('returns null if there are more than 2 arguments', function(){

    let result = mathy.sub(4, 4, 2);
    expect(result).toEqual(null);

  });
  it('returns null if there are no arguments', function(){

    let result = mathy.sub();
    expect(result).toEqual(null);

  });

});
