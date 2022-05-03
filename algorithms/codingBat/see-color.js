// Given a string, if the string begins with "red" or "blue" return that color string, otherwise returns the empty string.
//
//
// seeColor("redxx") → "red"
// seeColor("xxred") → ""
// seeColor("blueTimes") → "blue"

function seeColor(str) {
    if (str.startsWith("red")) {
        return "red";
    } else if (str.startsWith("blue")) {
        return "blue";
    }
    return "";

}

console.log(seeColor("fgjjkguhijlhkjgf"));