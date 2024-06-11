/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let x = root.val
  if (x < p.val && x < q.val) {
    return lowestCommonAncestor(root.right, p, q)
  }
  if (x > p.val && x > q.val) {
    return lowestCommonAncestor(root.left, p, q)
  }
  return root
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
const args = [[6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], [7], [8]].map((_) => gTree(_))
console.log(lowestCommonAncestor(...args))
