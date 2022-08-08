/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let chars = {};
    
    for(let char of s) {
        if(!chars[char]) {
            chars[char] = 0;
        }
        
        chars[char]++;
    }
    
    let soln = 0;
    let hasOdd = false;
    for(let key in chars) {
        let value = chars[key];
        
        if(value % 2 === 0) {
            soln += value;
        } else {
            soln += value - 1;
            hasOdd = true;
        }
    }
    
    return hasOdd ? soln + 1 : soln;
};
