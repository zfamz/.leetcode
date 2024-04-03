/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  let queue = [root]
  while (queue.length) {
    let tmp = []
    for (let i = 0; i < queue.length; i++) {
      let node = queue[i]
      if (node) {
        let { left, right } = node
        tmp.push(left)
        tmp.push(right)
      }
    }
    let len = tmp.length
    let mid = len >> 1
    for (let i = 0; i < mid; i++) {
      let l = tmp[i]
      let r = tmp[len - 1 - i]
      if (l && r && l.val !== r.val) {
        return false
      } else if ((l === null && r) || (l && r === null)) {
        return false
      }
    }
    queue = tmp
  }
  return true
}
// @lc code=end
import { gTree } from '../../lib/tree.js'
// const args = [1, 2, 2, 3, 4, 4, 3]
const args = [1, 2, 2, null, 3, null, 3]
console.log(isSymmetric(gTree(args)))
