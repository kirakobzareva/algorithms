// Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and".
// The string length will be at least 3.
//
//
// middleThree("Candy") → "and"     5 - 2
// middleThree("and") → "and"        3-1
// middleThree("solving") → "lvi"     7-3

function middleThree(str) {

  let index =  Math.floor(str.length / 2 );

  return str.slice(index-1, index+2);
}

console.log(middleThree("XabcxyzabcX"));