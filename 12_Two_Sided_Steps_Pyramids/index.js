// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Solution #2 - Recursion
function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    pyramid(n, row + 1);
    return;
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }

  pyramid(n, row, level + add);
}

module.exports = pyramid;

// Solution #1 - Iteration
// function pyramid(n) {
//   let midpoint = Math.floor((2 * n - 1) / 2);

//   // Row
//   for (let row = 0; row < n; row++) {
//     let level = '';

//     // Column
//     for (let column = 0; column < 2 * n - 1; column++) {
//       // ? <= column <= ?
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }