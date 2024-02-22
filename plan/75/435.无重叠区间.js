/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1])
  let count = 1
  let r = intervals[0][1]
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] >= r) {
      count++
      r = intervals[i][1]
    }
  }

  return intervals.length - count
}
// @lc code=end

const args = [
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
]
console.log(eraseOverlapIntervals(args))
