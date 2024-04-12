/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
var maxPathSum = function (root) {
  let ans = -Infinity
  const dfs = (node) => {
    if (!node) return 0
    let lmax = dfs(node.left)
    let rmax = dfs(node.right)

    let max = Math.max(node.val, node.val + lmax, node.val + rmax)
    ans = Math.max(ans, max, node.val + lmax + rmax)
    return max
  }
  dfs(root)
  return ans
}
// @lc code=end
import { gTree } from '../../lib/tree.js'
const args = [-10, 9, 20, null, null, 15, 7]
console.log(maxPathSum(gTree(args)))
