"use strict";
const stringPrototype = {
  /**
   * Has Vowels
   *
   * Check if a string contains vowels
   *
   * @return {Boolean} True or false depending on the match
   */
  hasVowels() {
    return (/[aeiou]/i).test(this);
  },

  /**
   * To upper
   *
   * Converts a string to uppercase characters
   *
   * @return {String} Word in uppercase
   */
  toUpper() {
    return this.replace(/[a-z]/g, (match) => {
      return String.fromCharCode(match.charCodeAt() - 32);
    });
  },

  /**
   * To Lower
   *
   * Converts a string to lowercase characters
   *
   * @return {String} Word in lowercase
   */
  toLower() {
    return this.replace(/[A-Z]/g, (match) => {
      return String.fromCharCode(match.charCodeAt() + 32);
    });
  },

  /**
   * Upper character First
   *
   * Converts the first letter of a string to uppercase
   *
   * @return {String} Word with capitalized first letter
   */
  ucFirst() {
    return this.replace(this[0], this[0].toUpper());
  },

  /**
   * Is Question
   *
   * Check if a string is a question
   *
   * @return {Boolean} True or false depending on the match
   */
  isQuestion() {
    return (/[\w ]+\?$/.test(this.trim()));
  },

  /**
   * Words
   *
   * Creates a list of words from the string
   *
   * @return {Array} A list of the words
   */
  words() {
    return this.match(/\w+/g);
  },

  /**
   * Word Count
   *
   * Checks for the number of words in a string
   *
   * @return {Number} The total number of words in the string
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * Inverse Case
   *
   * Inverts the case of a string
   *
   * @return {String} Inverted case string
   */
  inverseCase() {
    return this.replace(/[a-zA-Z]/g, (match) => {
      return match === match.toLower() ? match.toUpper() : match.toLower();
    });
  },

  /**
   * Alternating Case
   *
   * Alternates the case of a string
   *
   * @return {String} Alternated case string
   */
  alternatingCase() {
    return this.replace(/[a-zA-Z]/g, (match, index) => {
      return (index + 1) % 2 === 1 ? match.toLower() : match.toUpper();
    });
  },

  /**
   * Get Middle
   *
   * Identifies the middle character(s)
   *
   * @return {string} The character located in the middle of the string
   */
  getMiddle() {
    let lenDiv2 = this.length / 2;
    return this.length % 2 === 0 ? `${this[lenDiv2 - 1]}${this[(lenDiv2)]}`
                              : this[Math.floor(lenDiv2)];
  },

  /**
   * Number Words
   *
   * Converts numbers into words
   *
   * @return {String} Representation of numbers in words
   */
  numberWords() {
    const numberToWord = ['zero', 'one', 'two', 'three', 'four',
                          'five', 'six', 'seven', 'eight', 'nine'];
    return this.replace(/\d/g, (match) => {
      return `${numberToWord[match]} `;
    })
    .trim();
  },

  /**
   * Is Digit
   *
   * Tests if string is single digit
   *
   * @return {Boolean} True or False depending on the match
   */
  isDigit() {
    return (/^\d$/).test(this);
  },

  /**
   * Double Check
   *
   * Tests if a string contains double characters
   *
   * @return {Boolean} True or False depending on the match
   */
  doubleCheck() {
    return (/(.)\1/).test(this);
  },

  /**
   * To currency
   *
   * Performs a currency representation of a string
   *
   * @return {String} Represented as a currency
   */
  toCurrency() {
    return Number(this)
      ? Number(this).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,'$1,')
      : 'Invalid Input';
  },

  /**
   * From Currency
   *
   * Performs a number representation of a currency
   *
   * @return {String} Represented as a number
   */
  fromCurrency() {
    const result = Number(this.replace(/\,/g, ''));
    return result ? result : 'Invalid Input';
  }
};

Object.assign(String.prototype, stringPrototype);
