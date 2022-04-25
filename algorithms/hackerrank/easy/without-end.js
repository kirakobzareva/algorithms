//
// Given a string, return a version without the first and last char, so "Hello" yields "ell".
// The string length will be at least 2.
//
//
// withoutEnd("Hello") → "ell"
// withoutEnd("java") → "av"
// withoutEnd("coding") → "odin"

function withoutEnd(str) {
    let newStr = str.slice(1, str.length - 1);
    return newStr;

}

console.log(withoutEnd("woohoo"));