/*
 * @lc app=leetcode.cn id=2529 lang=javascript
 *
 * [2529] 正整数和负整数的最大计数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  const search = (arr, l, r, t) => {
    while (l <= r) {
      const mid = l + ((r - l) >> 1)
      if (arr[mid] < t) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
    return l
  }
  let m = nums.length - 1
  let zeroIndex = search(nums, 0, m, 0)
  let oneIndex = search(nums, 0, m, 1)
  return Math.max(zeroIndex, m - oneIndex + 1)
}
// @lc code=end
// const args = [-3, -2, -1, 0, 0, 1, 2]
const args = [-1563, -236, -114, -55, 427, 447, 687, 752, 1021, 1636]
console.log(maximumCount(args))
