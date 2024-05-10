/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0
  let ans = 0
  let left = 0
  let m = nums.length
  let product = 1
  for (let right = 0; right < m; right++) {
    product *= nums[right]
    while (product >= k) {
      product /= nums[left++]
    }
    ans += right - left + 1
  }
  return ans
}
// @lc code=end
// const args = [[10, 5, 2, 6], 100]
const args = [[2, 2, 2, 2, 2], 2]
console.log(numSubarrayProductLessThanK(...args))

var numSubarrayProductLessThanK_1 = function (nums, k) {
  let ans = 0
  let m = nums.length
  for (let i = 0; i < m; i++) {
    let product = nums[i]
    let j = i + 1
    while (product < k) {
      ans++
      if (j >= m) {
        break
      }
      product *= nums[j++]
    }
  }
  return ans
}
