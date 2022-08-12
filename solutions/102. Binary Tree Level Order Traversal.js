/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // base case, empty tree
    if(!root) {
        return [];
    }
    
    let sln = [];
    let nodes = [root];
    
    while(nodes.length > 0) {
        
        let nextLevel = [];
        let row = [];
        while(nodes.length > 0) {
            let node = nodes.shift();
            row.push(node.val);
            if(node.left) nextLevel.push(node.left);
            if(node.right) nextLevel.push(node.right);
        }
        
        sln.push(row);
        nodes = nextLevel;
    }
    return sln;
};
