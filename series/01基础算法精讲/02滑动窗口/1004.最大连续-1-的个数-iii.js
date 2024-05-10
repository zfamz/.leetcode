/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let ans = 0
  let left = 0
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      k--
    }
    if (k < 0) {
      while (nums[left] !== 0) {
        left++
      }
      left++
      k = 0
    }
    ans = Math.max(ans, right - left + 1)
  }

  return ans
}
// @lc code=end
const args = [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2]
console.log(longestOnes(...args))
