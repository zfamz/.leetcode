/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  const ans = []
  const dfs = (node) => {
    if (!node) return
    node.left && dfs(node.left)
    ans.push(node.val)
    node.right && dfs(node.right)
  }
  dfs(root)
  return ans
}
// @lc code=end
import { gTree } from '../../lib/tree.js'
const args = [1, null, 2, 3]
console.log(inorderTraversal(gTree(args)))
