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
  let m = height.length
  let l = new Array(m)
  l[0] = height[0]
  let r = new Array(m)
  r[m - 1] = height[m - 1]

  for (let i = 1; i < m; i++) {
    l[i] = Math.max(height[i], l[i - 1])
  }
  for (let i = m - 2; i >= 0; i--) {
    r[i] = Math.max(height[i], r[i + 1])
  }
  for (let i = 0; i < m; i++) {
    ans += Math.min(l[i], r[i]) - height[i]
  }

  return ans
}
// @lc code=end
const args = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(trap(args))

var trap_1 = function (height) {
  let ans = 0
  let l = 0
  let lh = 0
  let r = height.length - 1
  let rh = 0

  while (l <= r) {
    lh = Math.max(lh, height[l])
    rh = Math.max(rh, height[r])
    if (lh < rh) {
      ans += lh - height[l]
      l++
    } else {
      ans += rh - height[r]
      r--
    }
  }

  return ans
}
