// Given a string, return true if the first 2 chars in the string also appear 
//at the end of the string, such as with "edited".


//     frontAgain("edited") → true
// frontAgain("edit") → false
// frontAgain("ed") → true

function frontAgain(str) {
    let first = str.substr(0, 2);
    let last = str.substring(str.length - 2, str.length);

    if (first === last && str.length > 1) {
        return true;
    }

    return false;
}

console.log(frontAgain("javaja"));