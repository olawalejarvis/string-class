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
    assert.isFalse('...£$")()"...'.hasVowels();
  });
  it('should return false if string has no vowel', () => {
    assert.isFalse('99999999999'.hasVowels());
  });
});
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
    assert.isFalse('...£$")()"...'.hasVowels();
  });
  it('should return false if string has no vowel', () => {
    assert.isFalse('99999999999'.hasVowels());
  });
});
