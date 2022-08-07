/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    for(let p of s) {
        if(p === '(' || p === '{' || p === '[') {
            stack.push(p);
        } else if (p === ')') {
            if(stack.pop() !== '(') {
                return false;
            }
        } else if (p === '}') {
            if(stack.pop() !== '{') {
                return false;
            }
        } else {
            if(stack.pop() !== '[') {
                return false;
            }            
        }
    }
    
    return stack.length === 0;
};
