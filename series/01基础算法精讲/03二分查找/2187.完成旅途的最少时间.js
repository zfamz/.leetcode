/*
 * @lc app=leetcode.cn id=2187 lang=javascript
 *
 * [2187] 完成旅途的最少时间
 */

// @lc code=start
/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function (time, totalTrips) {
  time.sort((a, b) => a - b)
  let left = time[0]
  let right = left * totalTrips
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    let s = 0
    for (const t of time) {
      s += Math.floor(mid / t)
    }
    if (s < totalTrips) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left
}
// @lc code=end
// const args = [[1, 2, 3], 5]
// const args = [[2], 1]
const args = [[10000], 10000000]
console.log(minimumTime(...args))
