/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  let ans = 0
  const dfs = (node) => {
    if (!node) return 0
    let dl = dfs(node.left)
    let dr = dfs(node.right)
    ans = Math.max(ans, dl + dr)
    return Math.max(dl, dr) + 1
  }
  dfs(root)
  return ans
}
// @lc code=end
import { gTree } from '../../lib/tree.js'
const args = [1, 2, 3, 4, 5]
console.log(diameterOfBinaryTree(gTree(args)))
