/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let right = 0
  let m = nums.length
  for (let i = 0; i < m; i++) {
    if (i > right) {
      return false
    }
    right = Math.max(right, i + nums[i])
  }
  return true
}
// @lc code=end
const args = [3, 2, 1, 0, 4]
console.log(canJump(args))
