//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with  places after the decimal.


//plusMinus([1, 1, 0, -1, -1]);

export function plusMinus(arr) {
    let n = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positive++
        } else if (arr[i] < 0) {
            negative++;
        } else if (arr[i] === 0) {
            zero++;
        }
    }
    return [(positive / n).toFixed(6), (negative / n).toFixed(6), (zero / n).toFixed(6)];
}