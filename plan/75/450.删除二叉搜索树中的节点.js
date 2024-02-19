/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) {
    return null
  }
  if (key > root.val) {
    root.right = deleteNode(root.right, key)
    return root
  }
  if (key < root.val) {
    root.left = deleteNode(root.left, key)
    return root
  }
  if (key === root.val) {
    if (!root.left && !root.right) {
      return null
    }
    if (!root.left) {
      return root.right
    }
    if (!root.right) {
      return root.left
    }

    let rNode = root.right
    while (rNode.left) {
      rNode = rNode.left
    }
    root.right = deleteNode(root.right, rNode.val)
    rNode.right = root.right
    rNode.left = root.left
    return rNode
  }
}
// @lc code=end

import { gTree } from '../../lib/tree.js'

console.log(deleteNode(gTree([5, 3, 6, 2, 4, null, 7]), 3))
