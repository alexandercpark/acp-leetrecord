/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    /*
    //this way works too, but i think this woudn't get you far
    //in an actual interview
​
    let set = new Set(nums);
    return set.size !== nums.length;
    */
    
    let numMap = new Set();
    for(let num of nums) {
        if(numMap.has(num))
            return true;
        
        numMap.add(num);
    }
    
    return false;
};
