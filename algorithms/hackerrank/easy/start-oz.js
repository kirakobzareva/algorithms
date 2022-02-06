// Given a string, return a string made of the first 2 chars (if present),
// however include first char only if it is 'o' and include the second only if it is 'z',
// so "ozymandias" yields "oz".
//
//
// startOz("ozymandias") → "oz"
// startOz("bzoo") → "z"
// startOz("oxx") → "o"

export function startOz(str) {
    let part = "";
    if (str[0] === "o" && str[1] === "z") {
        part = "oz";
    } else if (str[0] === "o") {
        part = "o";
    } else if (str[1] === "z") {
        part = "z";
    }
    return part;
}

console.log(startOz("oxx"));