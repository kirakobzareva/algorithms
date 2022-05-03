//
// Given a string, return a string length 1 from its front, unless front is false,
// in which case return a string length 1 from its back. The string will be non-empty.
//
//
// theEnd("Hello", true) → "H"
// theEnd("Hello", false) → "o"
// theEnd("oh", true) → "o"

function theEnd(str, front) {

    if (front === true){
        return str[0];
    }
    return str[str.length-1];
}

console.log(theEnd(theEnd("x", true)));