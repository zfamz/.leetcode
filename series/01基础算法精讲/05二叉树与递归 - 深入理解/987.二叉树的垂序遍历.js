/*
 * @lc app=leetcode.cn id=987 lang=javascript
 *
 * [987] 二叉树的垂序遍历
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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  let ans = []
  let map = {}
  const dfs = (node, row, col) => {
    if (!node) return
    if (!(col in map)) {
      map[col] = []
    }
    map[col].push([row, node.val])
    dfs(node.left, row + 1, col - 1)
    dfs(node.right, row + 1, col + 1)
  }
  dfs(root, 0, 0)
  Object.keys(map)
    .sort((a, b) => a - b)
    .forEach((key) => {
      let t = map[key]
      t.sort((a, b) => {
        if (a[0] === b[0]) {
          return a[1] - b[1]
        }
        return a[0] - b[0]
      })
      ans.push(t.map((item) => item[1]))
    })

  return ans
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
const args = gTree([1, 2, 3, 4, 5, 6, 7])
console.log(verticalTraversal(args))
