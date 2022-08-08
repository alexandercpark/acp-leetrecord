/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let letters = new Array(26).fill(0);
    let top = 'z'.charCodeAt(0);
    
    for(let char of ransomNote) {
        letters[top - char.charCodeAt(0)]++;
    }
    
    for(let char of magazine) {
        letters[top - char.charCodeAt(0)]--;
    }
    
    return !letters.some(letter => letter > 0);
};
