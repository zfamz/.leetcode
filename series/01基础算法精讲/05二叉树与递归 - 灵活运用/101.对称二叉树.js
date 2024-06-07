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
  const isSame = (n1, n2) => {
    if (n1 === n2) return true
    if (!n1 || !n2) return false
    if (n1.val !== n2.val) return false
    return isSame(n1.left, n2.right) && isSame(n1.right, n2.left)
  }
  return isSame(root.left, root.right)
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
const args = gTree([1, 2, 2, null, 3, null, 3])
console.log(isSymmetric(args))
