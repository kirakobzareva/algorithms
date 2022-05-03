// Given a string, if the first or last chars are 'x', return the string without those 'x' chars,
//     and otherwise return the string unchanged.


//withoutX("xHix") → "Hi"
// withoutX("xHi") → "Hi"
// withoutX("Hxix") → "Hxi"

function withoutX(str) {
    if (str[0]==="x" && str[str.length-1] === "x") {
        return str.slice(1, str.length-1);
    } else if (str[0]==="x") {
        return str.slice(1, str.length);
    }
    else if (str[str.length-1]==="x") {
        return str.slice(0, str.length-1);
    }
    return str;
}

console.log(withoutX("Hxix"));