/*
 * @lc app=leetcode.cn id=1732 lang=javascript
 *
 * [1732] 找到最高海拔
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let maxH = 0
  let h = 0
  for (const d of gain) {
    h += d
    if (h > maxH) {
      maxH = h
    }
  }
  return maxH
}
// @lc code=end

console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]))
