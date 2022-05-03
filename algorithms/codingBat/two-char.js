// Given a string and an index, return a string length 2 starting at the given index.
// If the index is too big or too small to define a string length 2, use the first 2 chars.
// The string length will be at least 2.

// twoChar("java", 0) → "ja"
// twoChar("java", 2) → "va"
// twoChar("java", 3) → "ja"

function twoChar(str, index) {
  if (index < 0 || index > str.length-2) {
    return str.slice(0, 2);
  }
  let part = str.slice(index, index + 2);
  return part;
}

console.log(twoChar("yay",0));

// let str = "Kira";
// console.log(str.length);
