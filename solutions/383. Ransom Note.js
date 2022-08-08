/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let dictionary = new Array(26).fill(0);
    let top = 'z'.charCodeAt(0);
    
    for(let char of ransomNote) {
        dictionary[top - char.charCodeAt(0)]++;
    }
    
    for(let char of magazine) {
        dictionary[top - char.charCodeAt(0)]--;
    }
    
    return !dictionary.some(letter => letter > 0);
};
