// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution #2 - Regular Expression
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

module.exports = vowels;

// Solution #1 - Iteration
// function vowels(str) {
//   let counter = 0;
//   //let checker = 'aeiou';
//   let checker = ['a', 'e', 'i', 'o', 'u'];

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       counter++;
//     }
//   }

//   return counter;
// }
