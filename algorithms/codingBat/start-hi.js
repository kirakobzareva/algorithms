// Given a string, return true if the string starts with "hi" and false otherwise.
//
//
// startHi("hi there") → true
// startHi("hi") → true
// startHi("hello hi") → false

export function startHi(str) {
    if (str.startsWith("hi")) {
        return true;
    }
    return false;
}

//console.log(startHi("hi there"));