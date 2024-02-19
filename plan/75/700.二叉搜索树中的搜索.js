/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) {
    return null
  }
  const bfs = (node) => {
    if (!node) {
      return null
    }
    const { left, right, val: value } = node
    if (value === val) {
      return node
    } else if (val > value) {
      return bfs(right)
    } else {
      return bfs(left)
    }
  }
  return bfs(root)
}
// @lc code=end
import { gTree } from '../../lib/tree.js'

console.log(searchBST(gTree([4, 2, 7, 1, 3]), 2))
