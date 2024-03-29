/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let n = nums.length
  let ans = n + 1
  let sum = 0
  let left = 0
  for (let i = 0; i < n; i++) {
    sum += nums[i]
    while (sum - nums[left] >= target) {
      sum -= nums[left]
      left++
    }
    if (sum >= target) {
      ans = Math.min(ans, i - left + 1)
    }
  }
  return ans > n ? 0 : ans
}
// @lc code=end

// const args = [7, [2, 3, 1, 2, 4, 3]] // 2
const args = [11, [1, 1, 1, 1, 1, 1, 1, 1]]
console.log(minSubArrayLen(...args))
