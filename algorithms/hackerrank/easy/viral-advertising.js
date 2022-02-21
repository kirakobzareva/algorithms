// Day Shared Liked Cumulative
// 1      5     2       2
// 2      6     3       5
// 3      9     4       9
// 4     12     6      15
// 5     18     9      24


function viralAdvertising(n) {
    let cumulative = 0;
    let shared = 5;

    for (let i = 1; i <= n; i++) {
        cumulative += Math.floor(shared / 2);
        shared = (Math.floor(shared / 2)) * 3;
    }
    return cumulative;
}


console.log(viralAdvertising(5));