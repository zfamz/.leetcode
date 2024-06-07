/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function (root) {
  let ans = 0
  const dfs = (node, sum) => {
    if (!node) return
    let { left, right, val } = node
    let s = sum * 10 + val
    if (left === right) {
      ans += s
      return
    }
    dfs(left, s)
    dfs(right, s)
  }
  dfs(root, 0)

  return ans
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
const args = gTree([4, 9, 0, 5, 1])
console.log(sumNumbers(args))
