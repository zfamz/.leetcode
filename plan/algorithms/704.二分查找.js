/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    const num = nums[mid]
    if (num === target) {
      return mid
    } else if (num > target) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return -1
}
// @lc code=end

// notes
/**
 * 边界情况判断， 及start, end偏移多 1
 */
