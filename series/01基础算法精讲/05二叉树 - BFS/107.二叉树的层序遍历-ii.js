/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
var levelOrderBottom = function (root) {
  if (!root) return []
  let ans = []
  let queue = [root]
  while (queue.length) {
    let vals = []
    let n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      vals.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    ans.unshift(vals)
  }
  return ans
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
const args = gTree([3, 9, 20, null, null, 15, 7])
console.log(levelOrderBottom(args))

var levelOrderBottom_2 = function (root) {
  if (!root) return []
  let ans = []
  let cur = [root]
  while (cur.length) {
    let next = []
    let vals = []
    for (const node of cur) {
      vals.push(node.val)
      node.left && next.push(node.left)
      node.right && next.push(node.right)
    }
    cur = next
    ans.unshift(vals)
  }
  return ans
}
