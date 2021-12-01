//
// Return true if the given string begins with "mix", except the 'm' can be anything,
// so "pix", "9ix" .. all count.
//
//
// mixStart("mix snacks") → true
// mixStart("pix snacks") → true
// mixStart("piz snacks") → false

export function mixStart(str) {
    if (str.startsWith("ix", 1)) {
        return true;
    }
    return false;
}

//console.log(mixStart("fix"));