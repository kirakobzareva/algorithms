// Given two strings, append them together(known as "concatenation") and return the result.However, 
// if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string.
//     So "Hello" and "Hi" yield "loHi".The strings may be any length.


// minCat("Hello", "Hi") → "loHi"
// minCat("Hello", "java") → "ellojava"
// minCat("java", "Hello") → "javaello"

function minCat(a, b) {
    let lengthA = a.length;
    let lengthB = b.length;
    let diff;

    if (lengthA === lengthB) {
        return a + b;
    } else if (lengthA < lengthB) {
         diff = lengthB - lengthA;
        return a + b.slice(diff, b.length);
    } else if (lengthA > lengthB) {
        diff = lengthA - lengthB;
        return a.slice(diff, a.length) + b;
    }

}

console.log(minCat("abc", ""));