/*
 * @lc app=leetcode.cn id=894 lang=javascript
 *
 * [894] 所有可能的真二叉树
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
  const ans = []
  // const dp = new Array(n + 1).fill(0).map((_) => [])
  const dp = Array.from({ length: n + 1 }, () => [])
  dp[1].push(new TreeNode())
  for (let i = 3; i < n + 1; i += 2) {
    for (let j = 1; j < i; j++) {
      for (const left of dp[j]) {
        for (const right of dp[i - j - 1]) {
          dp[i].push(new TreeNode(0, left, right))
        }
      }
    }
  }
  return dp[n]
}
// @lc code=end
import { gTree, toArr, TreeNode } from '../lib/tree.js'
const args = 7
console.log(allPossibleFBT(args))
