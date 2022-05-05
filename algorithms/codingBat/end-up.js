//
// Given a string, return a new string where the last 3 chars are now in upper case.
// If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase()
// returns the uppercase version of a string.
//
//
// endUp("Hello") → "HeLLO"
// endUp("hi there") → "hi thERE"
// endUp("hi") → "HI"

function endUp(str) {
    let lastPart = str.substring(str.length - 3, str.length);
    let newLastPart = lastPart.toUpperCase();
    if (str.length > 3) {
        return str.replace(lastPart, newLastPart);
    }
    return str.toUpperCase();
}

console.log(endUp(""));