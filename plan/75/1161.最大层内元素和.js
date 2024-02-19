/*
 * @lc app=leetcode.cn id=1161 lang=javascript
 *
 * [1161] 最大层内元素和
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
var maxLevelSum = function (root) {
  if (!root) {
    return 0
  }
  let level = 0
  let max = root.val
  let ans = max
  let queue = [root]
  while (queue.length) {
    let sum = 0
    let size = queue.length
    level++
    for (let i = 0; i < size; i++) {
      let { left, right, val } = queue.shift()
      sum += val
      left && queue.push(left)
      right && queue.push(right)
    }
    if (sum > max) {
      max = sum
      ans = level
    }
  }
  return ans
}
// @lc code=end

import { gTree } from '../../lib/tree.js'

console.log(maxLevelSum(gTree([1, 7, 0, 7, -8, null, null])))
