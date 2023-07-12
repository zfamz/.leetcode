/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  if (!root) {
    return 0
  }
  let queue = [root]
  let max = 0
  while (queue.length) {
    let len = queue.length
    while (len) {
      const node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      len--
    }
    max++
  }
  return max
}
// @lc code=end

import { gTree } from './lib/tree.js'

let tree = gTree([3, 9, 20, null, null, 15, 7])
console.log(maxDepth(tree))

function maxDepth_(root) {
  if (!root) {
    return 0
  }
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  return Math.max(left, right) + 1
}
