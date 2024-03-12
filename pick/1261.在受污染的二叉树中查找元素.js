/*
 * @lc app=leetcode.cn id=1261 lang=javascript
 *
 * [1261] 在受污染的二叉树中查找元素
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
 */
var FindElements = function (root) {
  const preorder = (root, val) => {
    if (!root) return
    root.val = val
    root.left && preorder(root.left, 2 * val + 1)
    root.right && preorder(root.right, 2 * val + 2)
  }
  preorder(root, 0)
  this.root = root
}

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  let flag = false
  const dfs = (root) => {
    if (!root || flag) return
    if (root.val === target) {
      return (flag = true)
    }
    root.left && dfs(root.left)
    root.right && dfs(root.right)
  }
  dfs(this.root)
  return flag
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
// @lc code=end
import { gTree } from '../lib/tree.js'
let foo = new FindElements(gTree([-1, -1, -1, -1, -1]))
console.log(foo.find(1))
console.log(foo.find(3))
console.log(foo.find(5))
