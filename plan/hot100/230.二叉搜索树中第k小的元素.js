/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let ans
  const dfs = (node) => {
    if (!node || k === 0) return
    dfs(node.left)
    if (--k === 0) {
      ans = node.val
    }
    dfs(node.right)
  }

  dfs(root)
  return ans
}
// @lc code=end
import { gTree } from '../../lib/tree.js'
const args = [5, 3, 6, 2, 4, null, null, 1]
console.log(kthSmallest(gTree(args), 3))
