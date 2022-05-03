//
// Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".
//
//
// countXX("abcxx") → 1
// countXX("xxx") → 2
// countXX("xxxx") → 3

function countXX(str) {
let count = 0;

    for (let i = 0; i < str.length-1 ; i++) {
        if (str[i] === "x" && str[i+1] === "x"){
            count++
        }
    }

    return count;
}

console.log(countXX("Kittensxxx"));