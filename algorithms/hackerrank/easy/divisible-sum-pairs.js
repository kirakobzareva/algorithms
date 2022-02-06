// Given an array of integers and a positive integer k, determine the number of (i, j)  pairs where i < j
// and ar[i] + ar[j]  is divisible by k.

// arr = [1, 2, 3, 4, 5, 6];
// k = 5;
//  pairs: [1, 4], [2, 3], [4, 6]
// return number of pairs so 3
// n - amount ints in array , k - to be divisible by, ar - array



function divisibleSumPairs(n, k, ar) {
    let countPairs = 0;

    for (let i = 0; i < n ; i++) {
        for (let j = i + 1; j < n ; j++) {
            console.log(ar[i], ar[j]);
            let sum = ar[i] + ar[j];
            if (sum % k === 0){
                countPairs++;
            }
        }
    }
    return countPairs;
}

console.log(divisibleSumPairs(100, 40, [13, 91, 5, 100, 5, 12, 5, 79, 99, 87, 59, 65, 62, 73, 93, 73, 63, 65, 59, 46, 67, 35, 22, 55, 50, 53, 38, 79, 75, 44, 95, 53, 5, 73, 44, 94, 95, 21, 60, 2, 32, 48, 72, 13, 91, 74, 79, 99, 17, 31, 53, 20, 88, 17, 54, 47, 56, 79, 23, 49, 95, 81, 9, 50, 12, 20, 45, 82, 44, 82, 93, 15, 73, 51, 65, 96, 4, 77, 37, 41, 30, 11, 65, 100, 62, 51, 64, 48, 12, 11, 68, 81, 46, 37, 10, 46, 75, 82, 21, 23]));

