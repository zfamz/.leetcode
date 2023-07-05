/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0
  let len = nums.length
  while (nums[j] !== 0 && j < len) {
    j++
  }
  let k = j + 1
  while (k < len) {
    if (nums[k] !== 0) {
      nums[j] = nums[k]
      nums[k] = 0
      j++
    }
    k++
  }
  return nums
}
// console.log(moveZeroes([0, 0]))
// @lc code=end
