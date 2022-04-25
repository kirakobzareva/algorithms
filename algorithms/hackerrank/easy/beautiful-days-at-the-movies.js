// i - starting point
// j - ending point
// k - divider


function beautifulDays(i, j, k) {
    let count = 0;

    for (let l = i; l <= j; l++) {
        let str = l.toString();
        let num = str.split("").reverse().join("");

        if (Math.abs(l - num ) % k === 0) {
            count++;
        }
    }

    return count;
}

console.log(beautifulDays(13, 45, 3));


// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("223"));