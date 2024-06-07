/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let ans = true
  const dfs = (node) => {
    if (!ans || !node) return
    const { left, right, val } = node
    let [l_l, l_r] = dfs(left) || [val, val - 1]
    let [r_l, r_r] = dfs(right) || [val + 1, val]

    if (val > l_r && val < r_l) {
      return [l_l, r_r]
    } else {
      ans = false
      return
    }
  }
  dfs(root)
  return ans
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
// const args = gTree([2, 2, 2])
// const args = gTree([5, 1, 4, null, null, 3, 6])
const args = gTree([2, 1, 3])
console.log(isValidBST(args))

var isValidBST_in = function (root) {
  let prev = -Infinity
  const dfs = (node) => {
    if (!node) return true
    const state = dfs(node.left)
    if (state && node.val > prev) {
      prev = node.val
      return dfs(node.right)
    }
    return false
  }
  return dfs(root)
}

var isValidBST_prev = function (root) {
  const dfs = (node, max, min) => {
    if (!node) return true
    const { val } = node
    if (val >= max || val <= min) {
      return false
    }
    const left = dfs(node.left, val, min)
    const right = dfs(node.right, max, val)

    return left && right
  }
  return dfs(root, Infinity, -Infinity)
}
