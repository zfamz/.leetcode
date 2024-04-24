/*
 * @lc app=leetcode.cn id=2385 lang=javascript
 *
 * [2385] 感染二叉树需要的总时间
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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
  let ans = 0
  function dfs(node) {
    if (node === null) {
      return [0, false]
    }
    const [lLen, lFound] = dfs(node.left)
    const [rLen, rFound] = dfs(node.right)
    if (node.val === start) {
      // 计算子树 start 的最大深度
      // 注意这里和方法一的区别，max 后面没有 +1，所以算出的也是最大深度
      ans = Math.max(lLen, rLen)
      return [1, true] // 找到了 start
    }
    if (lFound || rFound) {
      // 只有在左子树或右子树包含 start 时，才能更新答案
      ans = Math.max(ans, lLen + rLen) // 两条链拼成直径
      // 保证 start 是直径端点
      return [(lFound ? lLen : rLen) + 1, true]
    }
    return [Math.max(lLen, rLen) + 1, false]
  }
  dfs(root)
  return ans
}

// @lc code=end
import { gTree } from '../lib/tree.js'
// const args = [[1, 5, 3, null, 4, 10, 6, 9, 2], 3]
const args = [[16, null, 20, 7, 12, null, 15, null, 19, null, 1, 2], 1]
console.log(amountOfTime(gTree(args[0]), args[1]))
