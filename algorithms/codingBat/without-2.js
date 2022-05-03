
// Given a string, if a length 2 substring appears at both its beginning and end, 
//return a string without the substring at the beginning, so "HelloHe" yields "lloHe".
//The substring may overlap with itself, so "Hi" yields "".Otherwise, return the 
//original string unchanged.

//  without2("HelloHe") → "lloHe"
// without2("HelloHi") → "HelloHi"
// without2("Hi") → ""

function without2(str) {
    let first = str.substr(0, 2);
    let last = str.substring(str.length - 2, str.length);

    if (str.length == 1) {
        return str;
    }
    else if (first === last) {
        return str.slice(2);
    } else {
        return str;
    }
}

console.log(without2("xxx"));