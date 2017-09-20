'use strict';

const greet = require('../lib/greet.js');
const expect = require('expect');

describe('greet', function(){
  it('can say hello to a person given a name', function(){

    let result = greet('Megan');
    expect(result).toEqual('Hello Megan');

  });

  it('will return null if passed an empty string', function(){

    let result = greet('');
    expect(result).toEqual(null);

  });
  it('will return null if passed a non string', function(){

    let result = greet(5);
    expect(result).toEqual(null);

  });

  it('will return null if passed nothing', function(){

    let result = greet();
    expect(result).toEqual(null);

  });

  it('will return null if passed more than one argument', function(){

    let result = greet('Megan', 'Michael');
    expect(result).toEqual(null);

  });
});
