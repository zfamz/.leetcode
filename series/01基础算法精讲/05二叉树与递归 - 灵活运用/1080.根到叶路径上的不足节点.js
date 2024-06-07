/*
 * @lc app=leetcode.cn id=1080 lang=javascript
 *
 * [1080] 根到叶路径上的不足节点
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
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function (root, limit) {
  const dfs = (node, sum) => {
    if (!node) return
    sum += node.val
    let l = dfs(node.left, sum)
    if (l) {
      node.left = null
    }
    let r = dfs(node.right, sum)
    if (r) {
      node.right = null
    }
    if (node.left === node.right) {
      if (sum < limit || l || r) return true
    }
  }
  return dfs(root, 0) ? null : root
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
// const args = gTree([1, 2, 3, 4, -99, -99, 7, 8, 9, -99, -99, 12, 13, -99, 14])
// console.log(sufficientSubset(args, 1))
const args = gTree([10, 5, 10])
console.log(sufficientSubset(args, 21))
