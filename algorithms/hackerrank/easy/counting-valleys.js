// The function is expected to return an INTEGER.
//  The function accepts following parameters:
//   1. INTEGER steps
//  2. STRING path

function countingValleys(steps, path) {
    let sea = 0;
    let count = 0;

    for (let i = 0; i < path.length ; i++) {
        if (path[i] === "U") {
            sea++;
        } else if (path[i] === "D") {
            sea--;
        }


    }
return count;
}

console.log(countingValleys(12, "DDUUDDUDUUUD"));