/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let m = heights.length
  let stack = []
  const left = new Array(m).fill(-1)
  for (let i = 0; i < m; i++) {
    let h = heights[i]
    while (stack.length && h <= heights[stack[stack.length - 1]]) {
      stack.pop()
    }
    if (stack.length) {
      left[i] = stack[stack.length - 1]
    }
    stack.push(i)
  }
  stack.length = 0
  const right = new Array(m).fill(m)
  for (let i = m - 1; i >= 0; i--) {
    let h = heights[i]
    while (stack.length && h <= heights[stack[stack.length - 1]]) {
      stack.pop()
    }
    if (stack.length) {
      right[i] = stack[stack.length - 1]
    }
    stack.push(i)
  }

  let ans = 0
  for (let i = 0; i < m; i++) {
    ans = Math.max(ans, heights[i] * (right[i] - left[i] - 1))
  }
  return ans
}
// @lc code=end
const args = [2, 1, 5, 6, 2, 3]
console.log(largestRectangleArea(args))
