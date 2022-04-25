// Given 2 strings, a and b, return a new string made of the first char of a and the last char of b,
// so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.
//
// lastChars("last", "chars") → "ls"
// lastChars("yo", "java") → "ya"
// lastChars("hi", "") → "h@"

function lastChars(a, b) {
    let newA = a[0];
    let newB = b[b.length - 1];

    if (a.length === 0) {
        newA = "@";
    }
    if (b.length === 0) {
        newB = "@";
    }

    return newA + newB;
}

console.log(lastChars("kitt", ""));