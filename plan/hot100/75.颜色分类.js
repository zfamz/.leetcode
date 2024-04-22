/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0
  let right = nums.length - 1
  let cur = 0
  while (cur <= right) {
    while (nums[left] === 0) left++
    while (nums[right] === 2) right--
    if (cur < left) {
      cur = left
    }
    if (nums[cur] === 0) {
      nums[cur] = nums[left]
      nums[left] = 0
      left++
    } else if (nums[cur] === 2 && cur < right) {
      nums[cur] = nums[right]
      nums[right] = 2
      right--
    } else {
      cur++
    }
  }
  return nums
}
// @lc code=end
const args = [2]
// const args = [2, 0, 2, 1, 1, 0]
console.log(sortColors(args))
