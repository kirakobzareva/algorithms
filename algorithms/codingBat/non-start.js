// Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.
//
//
// nonStart("Hello", "There") → "ellohere"
// nonStart("java", "code") → "avaode"
// nonStart("shotl", "java") → "hotlava"

function nonStart(a, b) {
    let newA = a.slice(1);
    let newB = b.slice(1);

    return newA + newB;
}

console.log(nonStart("mart", "dart"));