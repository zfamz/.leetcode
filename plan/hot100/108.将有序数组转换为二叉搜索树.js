/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const build = (arr, l, r) => {
    if (l > r) return null
    let mid = l + ((r - l) >> 1)
    let node = new TreeNode(nums[mid])
    node.left = build(arr, l, mid - 1)
    node.right = build(arr, mid + 1, r)
    return node
  }

  return build(nums, 0, nums.length - 1)
}
// @lc code=end
import { gTree, TreeNode } from '../../lib/tree.js'
const args = [-10, -3, 0, 5, 9]
console.log(sortedArrayToBST(args))
