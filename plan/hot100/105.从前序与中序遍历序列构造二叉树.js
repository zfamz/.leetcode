/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const dfs = (_pre, _in) => {
    if (!_pre.length) return null
    let rootVal = _pre[0]
    let rootIndex = _in.indexOf(rootVal)
    let root = new TreeNode(rootVal)
    root.left = dfs(_pre.slice(1, rootIndex + 1), _in.slice(0, rootIndex))
    root.right = dfs(_pre.slice(rootIndex + 1), _in.slice(rootIndex + 1))
    return root
  }

  return dfs(preorder, inorder)
}
// @lc code=end
import { TreeNode } from '../../lib/tree.js'
const args = [
  [3, 9, 20, 15, 7],
  [9, 3, 15, 20, 7],
]
console.log(buildTree(...args))
