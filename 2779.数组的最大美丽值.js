/*
 * @lc app=leetcode.cn id=2779 lang=javascript
 *
 * [2779] 数组的最大美丽值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
  nums.sort((a, b) => a - b)
  let range = k + k
  let ans = 0
  let left = 0
  let right = 0
  while (right < nums.length) {
    if (nums[right] - nums[left] <= range) {
      ans = Math.max(ans, right - left + 1)
      right++
    } else {
      left++
    }
  }

  return ans
}
// @lc code=end
const args = [[4, 6, 1, 2], 2]
console.log(maximumBeauty(...args))
