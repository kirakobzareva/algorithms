//
// Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array.
// Return true if the array does not contain any triples.
//
//
// noTriples([1, 1, 2, 2, 1]) → true
// noTriples([1, 1, 2, 2, 2, 1]) → false
// noTriples([1, 1, 1, 2, 2, 2, 1]) → false

function noTriples(nums) {
let currentNum = 0;
    for (let i = 0; i < nums.length; i++) {
        currentNum = nums[i];
        if (nums[i+1] === currentNum && nums[i+2] === currentNum){
            return false;
        }
    }
    return true;
}


console.log(noTriples([]));