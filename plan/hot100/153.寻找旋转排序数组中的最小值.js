/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let m = nums.length - 1
  let l = 0,
    r = m
  while (l <= r) {
    if (nums[r] >= nums[l]) {
      return nums[l]
    }
    const mid = l + ((r - l) >> 1)
    let val = nums[mid]
    if (val > nums[r]) {
      if (val > nums[mid + 1]) {
        return nums[mid + 1]
      }
      l = mid + 1
    } else if (val < nums[l]) {
      if (mid > 0 && val < nums[mid - 1]) {
        return val
      }
      r = mid - 1
    }
  }
  return nums[l]
}
// @lc code=end
const args = [2, 3, 4, 5, 1]
console.log(findMin(args))
