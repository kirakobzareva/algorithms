// Given an int n, return true if it is within 10 of 100 or 200.
// Note: Math.abs(num) computes the absolute value of a number.
//
//
// nearHundred(93) → true
// nearHundred(90) → true
// nearHundred(89) → false


export function nearHundred(n) {
    if (n > 89 && n < 111) {
        return true
    } else if (n > 189 && n < 211) {
        return true
    }
    return false;
}

console.log(nearHundred(111));