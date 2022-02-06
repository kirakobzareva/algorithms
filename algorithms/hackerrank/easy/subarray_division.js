// Lily decides to share a contiguous segment of the bar selected such that:
//
// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.

// c - array with numbers on chocolat,
// d - day of birthday - sum of numbers,
// m - month of birthday - how many to give


function birthday(s, d, m) {
    let countWays = 0;
    let subArr = [];
    let sumOfSubArr = 0;
    for (let i = 0; i < s.length ; i++) {
        subArr = s.slice(i, m);
       sumOfSubArr = subArr.reduce((previousVal, currentValue) => previousVal+currentValue,0);
        if (sumOfSubArr === d) {
            countWays++;
        }
        sumOfSubArr = 0;
        m++;
    }
    return countWays;
}

console.log(birthday([4], 4, 1));




