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
  let ans = 0
  let l = 0
  let r = height.length - 1
  while (l < r) {
    let sum = (r - l) * Math.min(height[l], height[r])
    ans = Math.max(sum, ans)
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return ans
}
// @lc code=end
const args = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(args))
