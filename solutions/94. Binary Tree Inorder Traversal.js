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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let traversal = [];
    inorder(root, traversal);
    return traversal;
};
​
var inorder = function(root, traversal) {
    if(!root) {
        return;
    }
    
    inorder(root.left, traversal);
    traversal.push(root.val);
    inorder(root.right, traversal);
}
