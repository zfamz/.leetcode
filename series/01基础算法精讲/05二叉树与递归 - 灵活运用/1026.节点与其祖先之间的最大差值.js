/*
 * @lc app=leetcode.cn id=1026 lang=javascript
 *
 * [1026] 节点与其祖先之间的最大差值
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
var maxAncestorDiff = function (root) {
  let ans = 0
  const dfs = (node, max, min) => {
    if (!node) return
    const { val } = node
    if (val > max) {
      max = val
      ans = Math.max(ans, max - min)
    } else if (val < min) {
      min = val
      ans = Math.max(ans, max - min)
    }

    dfs(node.left, max, min)
    dfs(node.right, max, min)
  }
  dfs(root, root.val, root.val)
  return ans
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
const args = gTree([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13])
console.log(maxAncestorDiff(args))

var maxAncestorDiff_2 = function (root) {
  let ans = 0
  const dfs = (node, max, min) => {
    if (!node) {
      ans = Math.max(ans, max - min)
      return
    }
    const { val } = node
    if (val > max) {
      max = val
    } else if (val < min) {
      min = val
    }

    dfs(node.left, max, min)
    dfs(node.right, max, min)
  }
  dfs(root, root.val, root.val)
  return ans
}
