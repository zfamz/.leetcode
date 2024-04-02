/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const dfs = (node) => {
    if (!node) return
    ;[node.left, node.right] = [node.right, node.left]
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  // console.log(toArr(root))
  return root
}
// @lc code=end
import { gTree, toArr } from '../../lib/tree.js'
const args = [4, 2, 7, 1, 3, 6, 9]
console.log(invertTree(gTree(args)))
