"use strict";
const assert = require('chai').assert;
require('../src/js/stringClass');

describe("StringClass", () => {
  describe("Check for vowel", () => {
    it('should return type of boolean', () => {
      assert(typeof(('olawale'.hasVowels())) === 'boolean');
    });
    it('should return true if string contain vowel', () => {
      assert.isTrue('olawale'.hasVowels());
      assert.isTrue('AndElA'.hasVowels());
    });
    it('should return false if string does not contain vowel', () => {
      assert.isFalse('vc'.hasVowels());
      assert.isFalse('...£$...'.hasVowels());
      assert.isFalse('99999999999'.hasVowels());
    });
  });

  describe("To uppercase", () => {
    it('should return type of string', () => {
      assert(typeof(('olawale'.toUpper())) === 'string');
    });
    it('should return the uppercase for all strings', () => {
      assert(('olawale'.toUpper()) === 'OLAWALE');
      assert(('oLaWaLe'.toUpper()) === 'OLAWALE');
    });
  });

  describe("To lowercase", () => {
    it('should return type of string', () => {
      assert(typeof(('olawale'.toLower())) === 'string');
    });
    it('should return the lowercase for all strings', () => {
      assert(('olawale'.toLower()) === 'olawale');
      assert(('OLAWALE'.toLower()) === 'olawale');
      assert(('oLaWaLe'.toLower()) === 'olawale');
    });
  });

  describe("First character uppercase", () => {
    it('should return type of string', () => {
      assert(typeof(('olawale'.ucFirst())) === 'string');
    });
    it('should return the first character of a string uppercase', () => {
      assert(('olawale'.ucFirst()) === 'Olawale');
      assert(('OLAWALE'.ucFirst()) === 'OLAWALE');
      assert(('oLaWaLe'.ucFirst()) === 'OLaWaLe');
    });
  });

  describe("Check for question", () => {
    it('should return type of boolean', () => {
      assert(typeof(('olawale'.isQuestion())) === 'boolean');
    });
    it('should return false when string is not a question', () => {
      assert.isFalse('olawale'.isQuestion());
      assert.isFalse('olaw?le'.isQuestion());
      assert.isFalse('?'.isQuestion());
      assert.isFalse('?hey'.isQuestion());
    });
    it('should return true when string is a question', () => {
      assert.isTrue('What is your name?'.isQuestion());
    });
  });

  describe("Words", () => {
    it('should return type of Object', () => {
      assert(typeof(('olawale'.words())) === 'object');
    });
    it('should return instance of array', () => {
      assert.isTrue('olawale adedeji'.words() instanceof Array);
    });
    it('should return a list of words in the string', () => {
      assert.deepEqual('my name is olawale'.words(), [ 'my', 'name', 'is', 'olawale' ]);
    });
  });

  describe("Word Count", () => {
    it('should return type of number', () => {
      assert(typeof(('my name is olawale'.wordCount())) === 'number');
    });
    it('should return the number of word in the string', () => {
      assert(('my name is olawale'.wordCount()) === 4);
    });
  });

  describe("Inverse Case", () => {
    it('should return type of string', () => {
      assert(typeof(('olawale'.inverseCase())) === 'string');
    });
    it('should return inverse case of each alphabet in the string', () => {
      assert(('olawale'.inverseCase()) === 'OLAWALE');
      assert(('olWAlE'.inverseCase()) === 'OLwaLe');
      assert(('OLAWALE'.inverseCase()) === 'olawale');
    });
  });

  describe("Alternating Case", () => {
    it('should return type of string', () => {
      assert(typeof(('olawale'.alternatingCase())) === 'string');
    });
    it('should return alternate case of each alphabet in the string starting from lowercase', () => {
      assert(('olawale'.alternatingCase()) === 'oLaWaLe');
      assert(('OLAWALE'.alternatingCase()) === 'oLaWaLe');
    });
  });

  describe("Get Middle", () => {
    it('should return type of string', () => {
      assert(typeof(('olawale'.getMiddle())) === 'string');
    });
    it('should return characters in the middle of the string', () => {
      assert(('olawale'.getMiddle()) === 'w');
      assert(('read'.getMiddle()) === 'ea');
    });
  });

  describe("Number Words", () => {
    it('should return type of string', () => {
      assert(typeof(('12312'.numberWords())) === 'string');
    });
    it('should return the numbers in words', () => {
      assert(('123'.numberWords()) === 'one two three');
    });
  });

  describe("Is Digit", () => {
    it('should return type of boolean', () => {
      assert(typeof(('1'.isDigit())) === 'boolean');
    });
    it('should return true if the string is single digit', () => {
      assert.isTrue('1'.isDigit());
    });
    it('should return false if the string is not a single digit', () => {
      assert.isFalse('re12'.isDigit());
    });
  });

  describe("Double Check", () => {
    it('should return type of boolean', () => {
      assert(typeof(('1211'.doubleCheck())) === 'boolean');
    });
    it('should return true if a string contain double characters', () => {
      assert.isTrue('11  '.doubleCheck());
    });
    it('should return false if a string does not contain double characters', () => {
      assert.isFalse('re12'.doubleCheck());
    });
  });

  describe("toCurrency", () => {
    it('should return type of string', () => {
      assert(typeof(('1211'.toCurrency())) === 'string');
    });
    it('should return a currency representation of the string', () => {
      assert(('1234567'.toCurrency()) === '1,234,567.00');
      assert(('1234567.98888'.toCurrency()) === '1,234,567.99');
    });
    it('should return nan when passing invalid string', () => {
      assert(('123ff4567.98ff888'.toCurrency()) === 'NaN');
    });
  });

  describe("fromCurrency", () => {
    it('should return type of number', () => {
      assert(typeof(('1211'.fromCurrency())) === 'number');
    });
    it('should return a number representation of the currency string', () => {
      assert(('1,234,567.00'.fromCurrency()) === 1234567.00);
      assert(('1,234,567.99'.fromCurrency()) === 1234567.99);
    });
  });
});
