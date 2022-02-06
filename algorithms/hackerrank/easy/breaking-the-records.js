function breakingRecords(scores) {
    let countMax = 0;
    let countMin = 0;
    let currentPointMin = scores[0];
    let currentPointMax = scores[0];

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > currentPointMax) {
            countMax++;
            currentPointMax = scores[i];
        } else if (scores[i] < currentPointMin) {
            countMin++;
            currentPointMin = scores[i];
        }
    }

    return [countMax, countMin];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));