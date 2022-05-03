// Given a string, return a new string where the first and last chars have been exchanged.
//
//
// frontBack("code") → "eodc"
// frontBack("a") → "a"
// frontBack("ab") → "ba"

export function frontBack(str) {
    let arr = str.split("");
    let firstLetter = arr[0];
    let lastLetter = arr[arr.length - 1];
    arr.splice(0, 1, lastLetter);
    arr.splice(arr.length - 1, 1, firstLetter);
    return arr.join("");
}



