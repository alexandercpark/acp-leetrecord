/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // honestly, this can probably be done in a better way
    // need to revisit and think about this one.
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    let max = nums[0];
    
    for(let i = 1; i < dp.length; i++) {
        dp[i] = Math.max(nums[i], dp[i-1] + nums[i]);
        max = Math.max(max, dp[i]);
    }
    
    return max;
};
