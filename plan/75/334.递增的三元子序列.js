/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = nums[0]
  let second = Number.MAX_VALUE
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]
    if (value > second) {
      return true
    } else if (value > first) {
      second = value
    } else {
      first = value
    }
  }
  return false
}

// console.log(increasingTriplet([0, 4, 2, 1, 0, -1, -3]))
// @lc code=end
