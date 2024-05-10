/*
 * @lc app=leetcode.cn id=2302 lang=javascript
 *
 * [2302] 统计得分小于 K 的子数组数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  let ans = 0
  let sum = 0
  let left = 0
  // 固定右端点，向左查询满足条件个数
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]
    let len = right - left + 1
    while (sum * len >= k) {
      sum -= nums[left]
      left++
      len--
    }
    ans += right - left + 1
  }
  return ans
}
// @lc code=end
const args = [[2, 1, 4, 3, 5], 10]
console.log(countSubarrays(...args))
