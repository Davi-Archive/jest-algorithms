// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let res = n
    .toString()
    .split("")
    .reduce((a, b) => {
      return b + a;
    });
  return parseInt(res) * Math.sign(n);
}

reverseInt(981);

module.exports = reverseInt;
