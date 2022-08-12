/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = new Array(nums.length).fill(1);
    let right = new Array(nums.length).fill(1);
    let sln = new Array(nums.length).fill(0);
    
    for(let i = right.length - 2; i >= 0; i--) {
        right[i] = nums[i+1] * right[i + 1];
    }
    
    // "base" case
    sln[0] = right[0];
    for(let i = 1; i < left.length; i++) {
        left[i] = nums[i-1] * left[i-1];
        sln[i] = left[i] * right[i];
    }
    
    return sln;
};
