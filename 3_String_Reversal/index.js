// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reversedStr, curCharacter) => curCharacter + reversedStr, '');
}

module.exports = reverse;

// Solution #1
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// Solution #2
// function reverse(str) {
//   let reversedStr = '';

//   // for (let i = 0; i < str.length; i++) {

//   // }
//   for (let character of str) {
//     reversedStr = character + reversedStr;
//   }

//   return reversedStr;
// }