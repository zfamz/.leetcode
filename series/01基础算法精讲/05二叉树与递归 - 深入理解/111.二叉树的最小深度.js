/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  if (!root) return 0
  let ans = Infinity
  const dfs = (node, level) => {
    if (!node || level > ans) {
      return
    }
    level++
    if (node.left === node.right) {
      ans = Math.min(ans, level)
      return
    }
    dfs(node.left, level)
    dfs(node.right, level)
  }

  dfs(root, 0)

  return ans
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
const args = gTree([3, 9, 20, null, null, 15, 7])
console.log(minDepth(args))

var minDepth_2 = function (root) {
  if (!root) return 0
  if (!root.left) {
    return minDepth(root.right) + 1
  }
  if (!root.right) {
    return minDepth(root.left) + 1
  }
  let l = minDepth(root.left)
  let r = minDepth(root.right)

  return Math.min(l, r) + 1
}
