/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  let ans = null
  let queue = [root]
  while (queue.length) {
    ans = queue.shift()
    ans.right && queue.push(ans.right)
    ans.left && queue.push(ans.left)
  }
  return ans.val
}
// @lc code=end
import { gTree } from '../../../lib/tree.js'
// const args = gTree([1, 2, 3, 4, null, 5, 6, null, null, 7])
const args = gTree([2, 1, 3])
console.log(findBottomLeftValue(args))

var findBottomLeftValue_2 = function (root) {
  let ans = 0
  let level = -1
  const dfs = (node, depth = 0) => {
    if (!node) return
    if (depth > level) {
      ans = node.val
      level = depth
    }
    dfs(node.left, depth + 1)
    dfs(node.right, depth + 1)
  }
  dfs(root)
  return ans
}
