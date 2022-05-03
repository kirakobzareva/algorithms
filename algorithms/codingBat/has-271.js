// Given an array of ints, return true if it contains a 2, 7, 1 pattern: a value, followed by the value plus 5,
// followed by the value minus 1. Additionally the 271 counts even if the "1" differs by 2 or less from the correct value.
//
//
// has271([1, 2, 7, 1]) → true
// has271([1, 2, 8, 1]) → false
// has271([2, 7, 1]) → true

function has271(nums) {

    for (let i = 0; i < nums.length - 1; i++) {
        let firstNum = nums[i];
        let secondNum = nums[i + 1];
        let thirdNum = nums[i + 2];

        if (secondNum === firstNum + 5 && (thirdNum === firstNum - 1 ||
            thirdNum === (firstNum - 1) + 1 || thirdNum === (firstNum - 1) + 2 ||
            thirdNum === (firstNum - 1) - 1 || thirdNum === (firstNum - 1) - 2)) {
            return true;
        }
    }
    
    return false;
}


console.log(has271([2, 7, 5, 10, 1]));

