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
  const getMinIndex = (arr, t) => {
    let l = 1
    let r = arr.length - 1
    while (l <= r) {
      const mid = l + ((r - l) >> 1)
      if (nums[mid] < t) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
    return l
  }
  let m = nums.length - 1
  let left = nums[0] > nums[m] ? getMinIndex(nums, nums[0]) : 0

  let right = m
  if (target >= nums[0] && nums[m] < nums[0]) {
    right = left - 1
    left = 0
  }

  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
// @lc code=end
const args = [1]
// const args = [4, 5, 6, 7, 0, 1, 2]
console.log(search(args, 1))
