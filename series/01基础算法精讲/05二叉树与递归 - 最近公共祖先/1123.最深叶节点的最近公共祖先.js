/*
 * @lc app=leetcode.cn id=1123 lang=javascript
 *
 * [1123] 最深叶节点的最近公共祖先
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
var lcaDeepestLeaves = function (root) {
  const dfs = (node) => {
    if (!node) return [0, null]
    let [l_h, l_n] = dfs(node.left)
    let [r_h, r_n] = dfs(node.right)
    if (l_h === r_h) {
      return [l_h + 1, node]
    } else if (l_h > r_h) {
      return [l_h + 1, l_n]
    } else {
      return [r_h + 1, r_n]
    }
  }

  return dfs(root)[1]
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
const args = gTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
console.log(lcaDeepestLeaves(args))

var lcaDeepestLeaves_2 = function (root) {
  let ans = null
  let maxLevel = -1
  const dfs = (root, level) => {
    if (!root) {
      maxLevel = Math.max(maxLevel, level)
      return level
    }
    let h = level + 1
    let left = dfs(root.left, h)
    let right = dfs(root.right, h)
    if (left === right && left === maxLevel) {
      ans = root
    }

    return Math.max(left, right)
  }

  dfs(root, 0)
  return ans
}
