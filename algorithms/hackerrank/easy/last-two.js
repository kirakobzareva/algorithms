// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding"
//yields "codign".

// lastTwo("coding") → "codign"
// lastTwo("cat") → "cta"
// lastTwo("ab") → "ba"

function lastTwo(str) {
  if (str.length < 2) {
    return str;
  }
  let end = str.slice(str.length - 2, str.length);
  let firstPaty = str.slice(0, str.length - 2);

  return firstPaty + end[1] + end[0];
}

console.log(lastTwo("cat"));
