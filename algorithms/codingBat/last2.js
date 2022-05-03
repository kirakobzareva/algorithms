// Given a string, return the count of the number of times that a substring length 2 appears
// in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1
// (we won't count the end substring).
//
//
// last2("hixxhi") → 1
// last2("xaxxaxaxx") → 1
// last2("axxxaaxx") → 2

function last2(str) {
    if (str.length < 2) return 0;

    let end = str.substring(str.length - 2);
    let count = 0;

    for (let i = 0; i < str.length - 2; i++) {
        let sub = str.substring(i, i + 2);
        if (sub === end) {
            count++;
        }
    }
    return count;
}

console.log(last2("xxxx"));



