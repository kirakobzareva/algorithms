// Given a string, return a string length 2 made of its first 2 chars.If the string length is less than 2,
//     use '@' for the missing chars.

// atFirst("hello") → "he"
// atFirst("hi") → "hi"
// atFirst("h") → "h@"

function atFirst(str) {
  if (str.length === 0) {
    return "@@";
  }
  if (str.length < 2) {
    return str + "@";
  }
  return str.slice(0, 2);
}

console.log(atFirst("j"));
