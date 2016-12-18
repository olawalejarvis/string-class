const stringPrototype = {
  /**
   * Check if a string contains vowels
   * @return {Boolean} True or false depending on the match
   */
  hasVowels () {
      return (/[aAeEiIoOuU]/g).test(this);
  },

  /**
 * Converts a string to uppercase characters
 * @return {String} Word in uppercase
 */
  toUpper() {
    return this.replace(/[a-z]/g, (match) => {
      return String.fromCharCode(match.charCodeAt() - 32)
    });
  },

  /**
 * Converts a string to lowercase characters
 * @return {String} Word in lowercase
 */
  toLower() {
    return this.replace(/[A-Z]/g, (match) => {
      return String.fromCharCode(match.charCodeAt() + 32)
    });
  },

  /**
   * Converts the first letter of a string to uppercase
   * @return {String} Word with capitalized first letter
   */
  ucFirst() {
    return this.replace(this[0], this[0].toUpper());
  },

};

Object.assign(String.prototype, stringPrototype);
