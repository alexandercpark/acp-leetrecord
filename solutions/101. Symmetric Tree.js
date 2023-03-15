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
var isSymmetric = function(root) {
    if(root === null) {
        return true;
    }
​
    return bfs(root.left, root.right);
};
​
var bfs = function(l, r) {
    if(l === null && r === null) {
        return true;
    }
    if(l === null || r === null) {
        return false;
    }
    if(l.val !== r.val) {
        return false;
    }
​
    return bfs(l.left, r.right) && bfs(l.right, r.left);
}
