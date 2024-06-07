/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false
  let ans = false

  const dfs = (node, sum) => {
    if (!node || ans) return
    let { left, right, val } = node
    let s = sum + val
    if (left === right) {
      if (s === targetSum) {
        ans = true
      }
    }
    dfs(left, s)
    dfs(right, s)
  }
  dfs(root, 0)
  return ans
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
// const args = gTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1])
const args = gTree([1])
console.log(hasPathSum(args, 1))
