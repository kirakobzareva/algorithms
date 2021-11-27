//
// Given a string, take the last char and return a new string with the last char added at the front and back,
// so "cat" yields "tcatt". The original string will be length 1 or more.
//
//
// backAround("cat") → "tcatt"
// backAround("Hello") → "oHelloo"
// backAround("a") → "aaa"

function backAround(str) {
    let firstChar = str.substring(str.length - 1);
    // let newWord = str.concat(firstChar);
    // console.log(newWord);
    return firstChar + str + firstChar;

}

console.log(backAround("cat"));