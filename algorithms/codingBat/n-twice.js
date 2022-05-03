// Given a string and an int n, return a string made of the first and last n chars from the string.
// The string length will be at least n.
//
//
// nTwice("Hello", 2) → "Helo"
// nTwice("Chocolate", 3) → "Choate"
// nTwice("Chocolate", 1) → "Ce"

function nTwice(str, n) {
    let newStr = str.slice(0, n) + str.slice(str.length - n);

    return newStr;

}

console.log(nTwice("Code", 2));