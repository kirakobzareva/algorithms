// Given a string, return a new string made of 3 copies of the last 2 chars of the original string.
// The string length will be at least 2.
//
//
// extraEnd("Hello") → "lololo"
// extraEnd("ab") → "ababab"
// extraEnd("Hi") → "HiHiHi"

function extraEnd(str) {
    let newStr = "";

    if (str.length < 2){
        newStr = str.slice(0);
    } else{
        newStr = str.slice(str.length - 2);
    }
    return newStr + newStr + newStr;
}

console.log(extraEnd("Code"));