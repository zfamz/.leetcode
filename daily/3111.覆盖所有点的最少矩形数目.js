/*
 * @lc app=leetcode.cn id=3111 lang=javascript
 *
 * [3111] 覆盖所有点的最少矩形数目
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} w
 * @return {number}
 */
var minRectanglesToCoverPoints = function (points, w) {
  points.sort((a, b) => a[0] - b[0])
  let ans = 0
  let end = -1
  for (const [x, y] of points) {
    if (x > end) {
      ans++
      end = x + w
    }
  }
  return ans
}
// @lc code=end
const args = [
  [2, 1],
  [1, 0],
  [1, 4],
  [1, 8],
  [3, 5],
  [4, 6],
]
console.log(minRectanglesToCoverPoints(args, 1))

var minRectanglesToCoverPoints_2 = function (points, w) {
  let set = new Set()
  for (const [x, y] of points) {
    set.add(x)
  }
  if (w === 0) {
    return set.size
  }
  let xs = Array.from(set).sort((a, b) => a - b)
  let ans = 1
  let end = xs[0] + w
  for (let i = 1; i < xs.length; i++) {
    if (xs[i] > end) {
      end = xs[i] + w
      ans++
    }
  }
  return ans
}
