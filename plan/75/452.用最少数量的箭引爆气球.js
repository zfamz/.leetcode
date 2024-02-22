/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0])
  console.log(points)
  let ans = 1
  let r = points[0][1]
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= r) {
      if (points[i][1] <= r) {
        r = points[i][1]
      }
      continue
    }
    r = points[i][1]
    ans++
  }
  return ans
}

// @lc code=end

const args = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
]
// 2
console.log(findMinArrowShots(args))

// 右端排序
var findMinArrowShots_1 = function (points) {
  points.sort((a, b) => a[1] - b[1])
  let ans = 1
  let r = points[0][1]
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > r) {
      r = points[i][1]
      ans++
    }
  }
  return ans
}
