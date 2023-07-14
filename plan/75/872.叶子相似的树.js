/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const arr1 = []
  const arr2 = []
  function walk(root, arr) {
    if (!root) {
      return
    }
    if (!root.left && !root.right) {
      arr.push(root.val)
    }
    walk(root.left, arr)
    walk(root.right, arr)
  }
  walk(root1, arr1)
  walk(root2, arr2)
  return arr1.join() === arr2.join()
}
// @lc code=end

import { gTree } from './lib/tree.js'

console.log(
  leafSimilar(
    gTree([119, 113, null, 11, 30, 43, 76, 15, 60, 67, 74]),
    gTree([11, 69, 60, 115, 66, 15, 60, 67, 74, null, 76])
  )
)
