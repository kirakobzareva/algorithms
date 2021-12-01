// Given 2 int values, return whichever value is nearest to the value 10,
// or return 0 in the event of a tie. Note that Math.abs(n) returns the
// absolute value of a number.
//
//
// close10(8, 13) → 8
// close10(13, 8) → 8
// close10(13, 7) → 0

export function close10(a, b) {
    let firstNum = Math.abs(10 - a);
    let secondNum = Math.abs(10 - b);
    if (firstNum > secondNum) {
        return b;
    } else if (firstNum < secondNum) {
        return a;
    } else {
        return 0;
    }
}