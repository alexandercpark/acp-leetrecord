/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let compliments = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let compliment = target - num;
        if(compliments.has(compliment)) {
            return [i, compliments.get(compliment)];
        }
        
        compliments.set(num, i);
    }
    
    return [];
};
