/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = (sum = 0)
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  max = sum
  let j = k
  while (j < nums.length) {
    sum = sum + nums[j] - nums[j - k]
    if (max < sum) {
      max = sum
    }
    j++
  }
  return max / k
}
// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
// @lc code=end
