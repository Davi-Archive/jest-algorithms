// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let array = [];
  let res = "";


  for (let i = 0; i < str.length; i++) {
    array[i] = str.charAt(i);
  }
  for (let i = str.length; i > 0; i--) {
    res = res + array[i - 1];
  }
  return res;
}

reverse("abcd");
module.exports = reverse;
