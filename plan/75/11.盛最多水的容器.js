/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0
  let start = 0
  let end = height.length - 1
  while (start < end) {
    let w = end - start
    let h = height[start] < height[end] ? height[start++] : height[end--]
    let sum = w * h
    if (sum > max) {
      max = sum
    }
  }
  return max
}
// @lc code=end

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
