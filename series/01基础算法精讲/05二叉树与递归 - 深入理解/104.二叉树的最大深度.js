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
  if (!root) return 0
  let ans = 0
  const dfs = (node, level) => {
    if (!node) return
    ans = Math.max(level, ans)
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
  dfs(root, 1)

  return ans
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
const args = gTree([3, 9, 20, null, null, 15, 7])
console.log(maxDepth(args))

var maxDepth_3 = function (root) {
  if (!root) return 0
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  return Math.max(left, right) + 1
}

var maxDepth_2 = function (root) {
  if (!root) return 0
  let queue = [root]
  let ans = 0
  while (queue.length) {
    ans++
    let count = queue.length
    while (count) {
      count--
      let node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return ans
}
