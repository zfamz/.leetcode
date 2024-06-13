/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function (root) {
  let ans = []
  if (!root) return ans
  let queue = [root]
  let flag = true
  while (queue.length) {
    let t = []
    let arr = []
    for (const node of queue) {
      t.push(node.val)
      node.left && arr.push(node.left)
      node.right && arr.push(node.right)
    }
    queue = arr
    ans.push(flag ? t : t.reverse())
    flag = !flag
  }
  return ans
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
const args = gTree([3, 9, 20, null, null, 15, 7])
console.log(zigzagLevelOrder(args))
