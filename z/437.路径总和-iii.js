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
  const dfs = (root, sum) => {
    if (!root) return

    let sum = sum + root.val
    if (sum === targetSum) {
      count++
    }
    dfs(root.left, sum)
    dfs(root.right, sum)
  }
  return targetSum
}
// @lc code=end

import { gTree } from '../lib/tree.js'

console.log(pathSum(gTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 5))
