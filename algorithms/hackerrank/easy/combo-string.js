// Given 2 strings, a and b, return a string of the form short + long + short, with the shorter string on the outside and
// the longer string on the inside. The strings will not be the same length, but they may be empty(length 0).


//comboString("Hello", "hi") → "hiHellohi"
// comboString("hi", "Hello") → "hiHellohi"
// comboString("aaa", "b") → "baaab"

function comboString(a, b) {
    let aLength = a.length;
    let bLength = b.length;

    if (aLength > bLength) {
        return b + a + b;
    } else {
        return a + b + a;
    }

}

console.log(comboString("aaa", "1234"));