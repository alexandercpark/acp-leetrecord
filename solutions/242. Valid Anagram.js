/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return 0;
    }
    
    let occurances = {};
    
    count(s, occurances, 1)
    return count(t, occurances, -1);
};
​
var count = function(s, occurances, delta) {
    for(let c of s) {
        if(!occurances[c]) {
            occurances[c] = 0;
        }
        
        occurances[c] += delta;
        if(occurances[c] < 0) {
            return false;
        }
    }
    
    return true;
}
