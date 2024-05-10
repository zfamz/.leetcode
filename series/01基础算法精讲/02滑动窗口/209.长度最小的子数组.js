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
  let m = nums.length
  let ans = m + 1
  let left = 0
  let sum = 0
  for (let right = 0; right < m; right++) {
    sum += nums[right]
    while (sum - nums[left] >= target) {
      sum -= nums[left]
      left++
    }

    if (sum >= target) {
      ans = Math.min(ans, right - left + 1)
    }
  }
  return ans > m ? 0 : ans
}
// @lc code=end
// const args = [7, [2, 3, 1, 2, 4, 3]]
const args = [11, [1, 2, 3, 4, 5]]
console.log(minSubArrayLen(...args))

var minSubArrayLen_1 = function (target, nums) {
  let len = nums.length
  let ans = len + 1
  let left = 0
  let right = 0
  let sum = 0
  while (right < len) {
    while (sum < target && right < len) {
      sum += nums[right++]
    }
    if (sum < target) break
    ans = Math.min(ans, right - left)
    while (left <= right && sum >= target) {
      sum -= nums[left++]
    }
    ans = Math.min(ans, right - left + 1)
  }

  return ans > len ? 0 : ans
}
