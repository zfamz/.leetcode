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
  function dfs(root, max) {
    if (root.val >= max) {
      max = root.val
      ans++
    }
    root.left && dfs(root.left, max)
    root.right && dfs(root.right, max)
  }
  dfs(root, root.val)
  return ans
}
// @lc code=end

import { gTree } from '../../lib/tree.js'

console.log(goodNodes(gTree([3, 1, 4, 3, null, 1, 5])))
