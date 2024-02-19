/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return []
  }
  const ans = []
  const queue = [root]
  while (queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      if (i === size - 1) {
        ans.push(node.val)
      }
    }
  }
  return ans
}
// @lc code=end

import { gTree } from '../../lib/tree.js'

console.log(rightSideView(gTree([1, 2, 3, null, 5, null, null])))

var rightSideView_ = function (root) {
  const ans = []
  const dfs = (root, depth) => {
    if (!root) return
    if (depth === ans.length) {
      ans.push(root.val)
    }
    depth++
    dfs(root.right, depth)
    dfs(root.left, depth)
  }
  dfs(root, 0)
  return ans
}
