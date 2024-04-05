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
  const dfs = (node) => {
    if (!node) return [Infinity, -Infinity]
    let l = dfs(node.left)
    let r = dfs(node.right)
    const min = Math.min(l[0], r[0], node.val)
    const max = Math.max(l[1], r[1], node.val)
    ans = Math.max(ans, Math.abs(node.val - min), Math.abs(node.val - max))
    return [min, max]
  }
  dfs(root)
  return ans
}
// @lc code=end
import { gTree } from '../lib/tree.js'
const args = [8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13]
console.log(maxAncestorDiff(gTree(args)))

var maxAncestorDiff_1 = function (root) {
  let ans = 0
  const dfs = (node) => {
    if (!node) return null
    let l = dfs(node.left)
    let r = dfs(node.right)
    let min = node.val
    let max = node.val
    if (l) {
      ans = Math.max(ans, Math.abs(node.val - l[0]), Math.abs(node.val - l[1]))
      min = Math.min(l[0], min)
      max = Math.max(l[1], max)
    }
    if (r) {
      ans = Math.max(ans, Math.abs(node.val - r[0]), Math.abs(node.val - r[1]))
      min = Math.min(r[0], min)
      max = Math.max(r[1], max)
    }
    return [min, max]
  }
  dfs(root)
  return ans
}
