/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0
  let start = 0
  let end = height.length - 1
  let h = 0
  let prev_h = h
  while (start < end) {
    while (height[start] < h && start < end) {
      start++
    }
    while (height[end] < h && start < end) {
      end--
    }
    if (start >= end) {
      return ans
    }
    h = Math.min(height[start], height[end])
    let i = start,
      j = end
    while (i < j) {
      if (height[i] < h) {
        ans += h - Math.max(height[i], prev_h)
      }
      i++
    }
    prev_h = h
    // console.log(h, ': ', ans, start, end)
    h++
  }
  return ans
}
// @lc code=end
// const args = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
const args = [4, 2, 0, 3, 2, 5]
console.log(trap(args))
