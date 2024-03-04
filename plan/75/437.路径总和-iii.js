/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let count = 0
  let set = new Set()
  const dfs = (node, sum, flag) => {
    if (!node) return
    if (flag && set.has(node)) return

    flag && set.add(node)

    sum = sum + node.val
    if (sum === targetSum) {
      count++
    }
    dfs(node.left, sum)
    dfs(node.left, 0, true)
    dfs(node.right, sum)
    dfs(node.right, 0, true)
  }
  dfs(root, 0, true)
  return count
}
// @lc code=end

import { gTree } from '../../lib/tree.js'

console.log(pathSum(gTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8))
