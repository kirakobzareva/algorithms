// Given a string, return a version without both the first and last char of the string.
// The string may be any length, including 0.
//
//
// withouEnd2("Hello") → "ell"
// withouEnd2("abc") → "b"
// withouEnd2("ab") → ""

function withouEnd2(str) {
    let newStr = str.slice(1, str.length-1);

    return newStr;
}

console.log(withouEnd2("java code"));