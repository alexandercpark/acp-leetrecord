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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    // need this as an object to keep updating it
    // correctly through the recurssion
    let data = {diameter: 0};
    helper(root, data);
    return data.diameter;
};
​
var helper = function(root, data) {
    if(!root) {
        return 0;
    }
    
    let leftHeight = helper(root.left, data);
    let rightHeight = helper(root.right, data);
    
    let myHeight = Math.max(leftHeight, rightHeight) + 1;
    data.diameter = Math.max(data.diameter, leftHeight + rightHeight);
    
    return myHeight;
}
