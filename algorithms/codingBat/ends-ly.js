// Given a string, return true if it ends in "ly".
//
//
// endsLy("oddly") → true
// endsLy("y") → false
// endsLy("oddy") → false

function endsLy(str) {

    if (str.endsWith("ly")) {
        return true;
    }
    return false;
}

console.log(endsLy("ly"));