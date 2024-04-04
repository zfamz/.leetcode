/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0
  let r = nums.length - 1
  let mid
  while (l <= r) {
    mid = (l + r) >> 1
    if (nums[mid] < target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return l
}
// @lc code=end
const args = [[1, 3, 5, 6], 2]
console.log(searchInsert(...args))
