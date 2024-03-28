/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let len = nums.length
  let max = -Infinity
  let i = 0
  let prevalue = -Infinity
  while (i < len) {
    prevalue = Math.max(nums[i], nums[i] + prevalue)
    max = Math.max(prevalue, max)
    i++
  }
  return max
}
// @lc code=end
const args = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(args))

var maxSubArray_1 = function (nums) {
  let len = nums.length
  let arr = new Array(len)
  arr[0] = nums[0]
  let max = nums[0]
  let i = 1
  while (i < len) {
    arr[i] = Math.max(nums[i], nums[i] + arr[i - 1])
    max = Math.max(arr[i], max)
    i++
  }
  return max
}
