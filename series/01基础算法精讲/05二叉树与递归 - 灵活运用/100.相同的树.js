/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === q) return true
  if (!p || !q || p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
const args = [
  [1, 2],
  [1, null, 3],
]
console.log(isSameTree(gTree(args[0]), gTree(args[1])))

var isSameTree_2 = function (p, q) {
  let ans = true
  const dfs = (p, q) => {
    if (!ans || p === q) return
    if (!p || !q || p.val !== q.val) {
      ans = false
      return
    }
    dfs(p.left, q.left)
    dfs(p.right, q.right)
  }
  dfs(p, q)

  return ans
}
