/*
 * @lc app=leetcode.cn id=1110 lang=javascript
 *
 * [1110] 删点成林
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  let ans = []
  let set = new Set(to_delete)
  const dfs = (node) => {
    if (!node) return
    const l = dfs(node.left)
    l && (node.left = null)
    const r = dfs(node.right)
    r && (node.right = null)
    if (set.has(node.val)) {
      node.left && ans.push(node.left)
      node.right && ans.push(node.right)
      return true
    }
  }
  !dfs(root) && ans.push(root)

  return ans
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
const args = gTree([1, 2, 3, 4, 5, 6, 7])
console.log(delNodes(args, [3, 5]))
