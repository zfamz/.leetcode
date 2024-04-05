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
  let hit = true
  const dfs = (node) => {
    if (!hit) return
    if (!node) return
    let x = node.val
    let [lmin, lmax] = dfs(node.left) || [x, x - 1]
    let [rmin, rmax] = dfs(node.right) || [x + 1, x]
    if (x <= lmax || x >= rmin) {
      hit = false
      return
    }
    return [lmin, rmax]
  }
  dfs(root)
  return hit
}
// @lc code=end
import { gTree } from '../../lib/tree.js'
const args = [5, 1, 6, null, null, 3, 8]
console.log(isValidBST(gTree(args)))

// 中序
var isValidBST = function (root) {
  let pre = -Infinity
  const dfs = (node) => {
    if (!node) return true
    let state = dfs(node.left)
    if (!state || pre >= node.val) {
      return false
    }
    pre = node.val
    return dfs(node.right)
  }
  return dfs(root)
}

//  前序
var isValidBST_1 = function (root) {
  const dfs = (node, min, max) => {
    if (!node) return true
    if (node.val > min && node.val < max) {
      return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)
    } else {
      return false
    }
  }
  return dfs(root, -Infinity, Infinity)
}
