/**
 * @param {string[]} words
 * @return {number}
 */
const alphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
​
const base = 'a'.charCodeAt(0);
​
var uniqueMorseRepresentations = function(words) {
    let set = new Set();
    
    for(let word of words) {
        let toMorseCode = "";
        for(let letter of word) {
            let letterToMorseCode = alphabet[letter.charCodeAt(0) - base];
            toMorseCode += letterToMorseCode;
        }
        set.add(toMorseCode);
    }
    
    return set.size;
};
