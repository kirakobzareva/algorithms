//
// Given a string, return a version where all the "x" have been removed.
// Except an "x" at the very start or end should not be removed.
//
//
// stringX("xxHxix") → "xHix"
// stringX("abxxxcd") → "abcd"
// stringX("xabxxxcdx") → "xabcdx"

function stringX(str) {
    let part = str.substr(1, str.length - 2);
    let newStr = part.replace(/x/g, "");

    if (str.length === 0){
        return "";
    }
    if (str.length > 1){
        return str[0] + newStr + str[str.length - 1];
    }
     return str[0] + newStr;
}

console.log(stringX("x"));