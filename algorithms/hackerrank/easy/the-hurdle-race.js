function hurdleRace(k, height) {
    let maxHeight = Math.max(...height);
    if (maxHeight > k) {
        return maxHeight - k;
    }

    return 0;


}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));