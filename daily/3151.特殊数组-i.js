/*
 * @lc app=leetcode.cn id=3151 lang=javascript
 *
 * [3151] 特殊数组 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  let bit = nums[0] & 1
  for (let i = 1; i < nums.length; i++) {
    let m = nums[i] & 1
    if (m === bit) {
      return false
    }
    bit = m
  }
  return true
}
// @lc code=end
