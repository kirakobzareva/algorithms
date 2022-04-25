// Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri".
// The string length will be at least 2.


// middleTwo("string") → "ri"
// middleTwo("code") → "od"
// middleTwo("Practice") → "ct"

function middleTwo(str) {
    let index = str.length / 2 -1;

     let newStr = str.slice(index, index+2)

    return newStr;
}

console.log(middleTwo("0123456789"));