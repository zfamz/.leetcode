/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let ans = []
  let [start, end] = intervals[0]
  for (let i = 0; i < intervals.length; i++) {
    let [s, e] = intervals[i]
    if (s <= end) {
      end = Math.max(end, e)
    } else {
      ans.push([start, end])
      start = s
      end = e
    }
  }
  ans.push([start, end])
  return ans
}
// @lc code=end
const args = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]
console.log(merge(args))
