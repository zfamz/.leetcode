/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const dfs = (node) => {
    if (!node) return 0
    let l = dfs(node.left)
    if (l === -1) {
      return -1
    }
    let r = dfs(node.right)
    if (r === -1) {
      return -1
    }
    if (Math.abs(r - l) > 1) {
      return -1
    }
    return Math.max(l, r) + 1
  }
  return dfs(root) !== -1
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
const args = gTree([3, 9, 20, null, null, 15, 7])
console.log(isBalanced(args))
