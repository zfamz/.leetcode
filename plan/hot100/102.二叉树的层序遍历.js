/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  if (!root) return []
  let ans = []
  let queue = [root]
  while (queue.length) {
    let tmp = []
    let tmp_val = []
    queue.forEach((item) => {
      let { left, right, val } = item
      tmp_val.push(val)
      left && tmp.push(left)
      right && tmp.push(right)
    })
    queue = tmp
    ans.push(tmp_val)
  }
  return ans
}
// @lc code=end

import { gTree } from '../../lib/tree.js'
const args = [3, 9, 20, null, null, 15, 7]
console.log(levelOrder(gTree(args)))
