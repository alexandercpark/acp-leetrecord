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
 * @return {boolean}
 */
var isBalanced = function(root) {
    return helper(root)[1];
};
​
​
// [height, isBalanced]
var helper = function(root) {
    if(!root) {
        return [0,true];
    }
    
    let [leftHeight, leftIsBalanced] = helper(root.left);
    let [rightHeight, rightIsBalanced] = helper(root.right);
    
    // is there a better way to do this?
    if(!leftIsBalanced || !rightIsBalanced) {
        return [Infinity, false];    
    }
    
    let height = Math.max(leftHeight, rightHeight) + 1;
    let isBalanced = Math.abs(leftHeight - rightHeight) <= 1;
    
    return [height, isBalanced];
}
