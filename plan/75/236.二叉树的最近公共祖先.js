/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
  let ans
  const dfs = (root, p, q) => {
    if (!root || ans) {
      return false
    }
    let ls = dfs(root.left, p, q)
    let rs = dfs(root.right, p, q)
    let ms = root.val === p || root.val === q
    if ((ls && rs) || (ms && (ls || rs))) {
      ans = root
    }
    return ls || rs || ms
  }
  dfs(root, p.val, q.val)
  return ans
}

// @lc code=end

import { gTree } from '../../lib/tree.js'

console.log(
  lowestCommonAncestor(gTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), gTree([5]), gTree([1]))
)
