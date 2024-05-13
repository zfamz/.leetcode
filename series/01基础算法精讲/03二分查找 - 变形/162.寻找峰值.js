/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = -1
  let right = nums.length
  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] < nums[mid + 1]) {
      left = mid
    } else {
      right = mid
    }
  }
  return right
}
// @lc code=end
const args = [1, 2, 1, 3, 5, 6, 4]
console.log(findPeakElement(args))

var findPeakElement_1 = function (nums) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left
}
