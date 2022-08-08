/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let first = 0;
    let second = 1;
    
    while(n--) {
        let temp = first;
        first = second;
        second = first + temp;
    }
    
    return second;
};
