//
// Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.
//
//
// array123([1, 1, 2, 3, 1]) → true
// array123([1, 1, 2, 4, 1]) → false
// array123([1, 1, 2, 1, 2, 3]) → true

function array123(nums) {
    let indexOfOne;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            indexOfOne = i;
        } else if (nums[indexOfOne + 1] === 2 && nums[indexOfOne + 2] === 3) {
            return true;
            break;
        }
    }
    return false;
}

console.log(array123([]));

