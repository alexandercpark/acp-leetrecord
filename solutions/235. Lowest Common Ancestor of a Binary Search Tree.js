/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
​
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let lca = root;
    let foundNewLCA = true;
    
    // we are looking for the point where
    // these diverge in the tree.
    while(foundNewLCA) {
        foundNewLCA = false;
        
        if(p.val < lca.val && q.val < lca.val) {
            lca = lca.left;
            foundNewLCA=true;
        } else if (p.val > lca.val && q.val > lca.val) {
            lca = lca.right;
            foundNewLCA=true;
        }
    }
    
    return lca;
};
