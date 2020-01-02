// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let left = 0;
  let right = str.length - 1;
  let reversedString = str;

  while (left < right) {
    let prevLeftChar = reversedString[left];

    reversedString[left] = reversedString[right];
    reversedString[right] = prevLeftChar;

    left++;
    right--;
  }

  return reversedString;
}

module.exports = reverse;