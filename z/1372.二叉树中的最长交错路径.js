/*
 * @lc app=leetcode.cn id=1372 lang=javascript
 *
 * [1372] 二叉树中的最长交错路径
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
var longestZigZag = function (root) {
  let ans = 0
  const dfs = (node, isLeft) => {
    if (!node) return 0
    let l_count = dfs(node.left, true)
    let r_count = dfs(node.right, false)
    // 以当前节点为根节点计算
    let _ans = Math.max(r_count, l_count) + 1
    // 返回父节点需要的
    let res = (isLeft ? r_count : l_count) + 1
    ans = Math.max(ans, _ans, res)
    return res
  }
  dfs(root)
  return ans - 1
}
// @lc code=end
import { gTree } from '../lib/tree.js'
// const args = [1, null, 1, 1, 1, null, null, 1, 1, null, 1, null, null, null, 1, null, 1]
const args = [1, 1, 1, null, 1, null, null, 1, 1, null, 1]
console.log(longestZigZag(gTree(args)))
