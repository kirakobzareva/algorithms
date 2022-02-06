// Given a string, return true if the first instance of "x"
// in the string is immediately followed by another "x".
//
//
// doubleX("axxbb") → true
// doubleX("axaxax") → false
// doubleX("xxxxx") → true

function doubleX(str) {
    let indexOfFirstX = str.indexOf("x");
    let indexOfSecondX = indexOfFirstX + 1;

    if (str[indexOfSecondX] === "x") {
        return true;
    }
    return false;
}

console.log(doubleX("xaxx"));