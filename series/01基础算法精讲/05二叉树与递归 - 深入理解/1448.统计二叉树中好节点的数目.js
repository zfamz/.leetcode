/*
 * @lc app=leetcode.cn id=1448 lang=javascript
 *
 * [1448] 统计二叉树中好节点的数目
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
var goodNodes = function (root) {
  let ans = 0
  const dfs = (node, max) => {
    if (!node) return
    const { left, right, val } = node
    if (val >= max) {
      ans++
      max = val
    }
    dfs(left, max)
    dfs(right, max)
  }
  dfs(root, -Infinity)

  return ans
}
// @lc code=end

import { gTree } from '../../../lib/tree.js'
const args = gTree([3, 1, 4, 3, null, 1, 5])
console.log(goodNodes(args))
