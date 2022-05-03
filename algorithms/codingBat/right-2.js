// Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.


// right2("Hello") → "loHel"
// right2("java") → "vaja"
// right2("Hi") → "Hi"

function right2(str) {

    let end = str.slice(str.length-2, str.length);
    

    return end + str.slice(0, str.length-2);
}

console.log(right2("12345"));