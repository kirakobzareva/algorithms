// Given a string, return true if "bad" appears starting at index 0 or 1 in the string,
// such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.
//
//
// hasBad("badxx") → true
// hasBad("xbadxx") → true
// hasBad("xxbadxx") → false

function hasBad(str) {
    if (str.startsWith("bad") || str.indexOf("bad") == 1) {
        return true;
    }
    return false;

}

console.log(hasBad("badyy"));