'use strict';

const assert = require('chai').assert;
require('../src/stringClass');

describe("hasVowels", () => {
  it('should return type of boolean', () => {
    assert(typeof(('olawale'.hasVowels())) === 'boolean');
  });
  it('should return true if string has vowel', () => {
    assert.isTrue('olawale'.hasVowels());
  });
  it('should return false if string has no vowel', () => {
    assert.isFalse('vc'.hasVowels(), "message");
  });
  it('should return false if string has no vowel', () => {
    assert.isFalse('...£$...'.hasVowels());
  });
  it('should return false if string has no vowel', () => {
    assert.isFalse('99999999999'.hasVowels());
  });
});

describe("toUpper", () => {
  it('should return type of string', () => {
    assert(typeof(('olawale'.toUpper())) === 'string');
  });
  it('should return upper case for all string', () => {
    assert(('olawale'.toUpper()) === 'OLAWALE');
  });
  it('should return upper case for all string', () => {
    assert(('OLAWALE'.toUpper()) === 'OLAWALE');
  });
  it('should return upper case for all string', () => {
    assert(('12333'.toUpper()) === '12333');
  });
  it('should return upper case for all string', () => {
    assert(('oLaWaLe'.toUpper()) === 'OLAWALE');
  });
  it('should return upper case for all string', () => {
    assert((';.er'.toUpper()) === ';.ER');
  });
});

describe("toLower", () => {
  it('should return type of string', () => {
    assert(typeof(('olawale'.toLower())) === 'string');
  });
  it('should return lower case for all string', () => {
    assert(('olawale'.toLower()) === 'olawale');
  });
  it('should return lower case for all string', () => {
    assert(('OLAWALE'.toLower()) === 'olawale');
  });
  it('should return lower case for all string', () => {
    assert(('12333'.toLower()) === '12333');
  });
  it('should return lower case for all string', () => {
    assert(('oLaWaLe'.toLower()) === 'olawale');
  });
  it('should return lower case for all string', () => {
    assert((';.ER'.toLower()) === ';.er');
  });
});

describe("ucFirst", () => {
  it('should return type of string', () => {
    assert(typeof(('olawale'.ucFirst())) === 'string');
  });
  it('should return first letter to be Upper case for all string', () => {
    assert(('olawale'.ucFirst()) === 'Olawale');
  });
  it('should return first letter to be Upper case for all string', () => {
    assert(('OLAWALE'.ucFirst()) === 'OLAWALE');
  });
  it('should return first letter to be Upper case for all string', () => {
    assert(('12333'.ucFirst()) === '12333');
  });
  it('should return first letter to be Upper case for all string', () => {
    assert(('oLaWaLe'.ucFirst()) === 'OLaWaLe');
  });
  it('should return first letter to be Upper case for all string', () => {
    assert((';.ER'.ucFirst()) === ';.ER');
  });
});

describe("isQuestion", () => {
  it('should return type of boolean', () => {
    assert(typeof(('olawale'.isQuestion())) === 'boolean');
  });
  it('should return false when string is not a question', () => {
    assert.isFalse('olawale'.isQuestion());
  });
  it('should return true when string is a question', () => {
    assert.isTrue('What is your name?'.isQuestion());
  });
  it('should return false', () => {
    assert.isFalse('olaw?le'.isQuestion());
  });
  it('should return false', () => {
    assert.isFalse('?'.isQuestion());
  });
  it('should return false', () => {
    assert.isFalse('?hey'.isQuestion());
  });
});

describe("words", () => {
  it('should return type of Object', () => {
    assert(typeof(('olawale'.words())) === 'object');
  });
  it('should return instance of array', () => {
    assert.isTrue('olawale adedeji'.words() instanceof Array);
  });
  it('should return ["my", "name", "is", "olawale"]', () => {
    assert.deepEqual('my name is olawale'.words(), [ 'my', 'name', 'is', 'olawale' ]);
  });
});

describe("wordCount", () => {
  it('should return type of number', () => {
    assert(typeof(('my name is olawale'.wordCount())) === 'number');
  });
  it('should return instance of array', () => {
    assert(('my name is olawale'.wordCount()) === 4);
  });
});
