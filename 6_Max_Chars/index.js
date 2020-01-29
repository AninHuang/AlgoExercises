// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charsCounter = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!charsCounter[char]) {
      charsCounter[char] = 1;
    } else {
      charsCounter[char] += 1;
    }
  }

  let arrCharsCounter = Object.values(charsCounter);
  let maxValue = Math.max(...arrCharsCounter);

  return // How to get key by its value(maxValue) in object??
}

module.exports = maxChar;