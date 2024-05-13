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
  let end = nums.length - 1
  let left = 0
  let right = end
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] >= nums[end]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left > end ? nums[left - 1] : nums[left]
}
// @lc code=end
// const args = [4, 5, 6, 7, 0, 1, 2]
const args = [3]
console.log(findMin(args))
