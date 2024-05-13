/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = -1
  let right = nums.length
  const isBlue = (index) => {
    let end = nums[nums.length - 1]
    if (nums[index] > end) {
      if (target > end && nums[index] >= target) {
        return true
      }
    } else {
      if (target > end || nums[index] >= target) {
        return true
      }
    }
  }
  while (left + 1 < right) {
    let mid = (left + right) >> 1
    // let mid = left + Math.floor((right - left) / 2)
    if (isBlue(mid)) {
      right = mid
    } else {
      left = mid
    }
  }
  if (right === nums.length || nums[right] !== target) {
    return -1
  }
  return right
}
// @lc code=end
const args = [[4, 5, 6, 7, 0, 1, 2], 0]
// const args = [[1, 3], 3]
// const args = [[3, 5, 1], 3]
console.log(search(...args))
