/*
 * @lc app=leetcode.cn id=1658 lang=javascript
 *
 * [1658] 将 x 减到 0 的最小操作数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  let target = nums.reduce((a, b) => {
    return a + b
  }, 0)
  if (target === x) {
    return nums.length
  }
  target -= x
  let left = 0
  let ans = 0
  let sum = 0
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]
    while (sum > target) {
      sum -= nums[left++]
    }
    if (sum === target) {
      ans = Math.max(ans, right - left + 1)
    }
  }
  return ans ? nums.length - ans : -1
}
// @lc code=end
// const args = [[1, 1, 4, 2, 3], 5]
const args = [[5, 6, 7, 8, 9], 4]
// const args = [[3, 2, 20, 1, 1, 3], 10]
console.log(minOperations(...args))
