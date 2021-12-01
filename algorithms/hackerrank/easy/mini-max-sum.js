export function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        minSum += arr[i];
        maxSum += arr[i];
    }

    return [minSum - (Math.max(...arr)), maxSum - (Math.min(...arr))];
}

