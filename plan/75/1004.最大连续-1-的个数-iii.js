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
  let left = 0
  let right = 0
  let count = 0
  let max = 0
  // 边界处理很混乱
  while (right < nums.length) {
    if (nums[right] === 0) {
      count++
    }
    if (count > k) {
      let len = right - left
      if (len > max) {
        max = len
      }
      while (nums[left] !== 0) {
        left++
      }
      left++
      count--
    }
    right++
  }
  if (count <= k && right === nums.length) {
    max = Math.max(max, right - left)
  }
  return max
}
// @lc code=end

// let args = [[0, 0, 1, 1, 1, 0, 0], 0]
let args = [[0, 0, 0, 1, 0, 0, 0, 0, 0], 4]
console.log(longestOnes(...args))
