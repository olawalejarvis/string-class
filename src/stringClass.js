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

  /**
   * Check if a string is a question
   * @return {Boolean} True or false depending on the match
   */
  isQuestion(){
    return (/[\w ]+\?$/.test(this))
  },

  /**
 *Creates a list of words from the string
 @return {Array} A list of the words
 */
  words() {
    return this.match(/\w+/g);
  },

  /**
 * Checks for the number of words in a string
 * @return {Number} The total number of words in the string
 */
  wordCount() {
    return this.words().length;
  },

  /**
 * Inverts the case of a string
 * @return {String} Inverted case string
 */
  inverseCase() {
    return this.replace(/[a-z]|[A-Z]/g, (match) => {
      return match === match.toLower()? match.toUpper() : match.toLower();
    });
  },

  /**
 * Alternates the case of a string
 * @return {String} Alternated case string
 */
  alternatingCase() {
    return this.replace(/[a-z]|[A-Z]/g, (match, index) => {
      return (index+1) % 2 === 1? match.toLower() : match.toUpper();
    });
  }
};

Object.assign(String.prototype, stringPrototype);
