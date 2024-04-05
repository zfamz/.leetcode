/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length
  let n = matrix[0].length
  let l = 0
  let r = m - 1
  while (l <= r) {
    let mid = l + ((r - l + 1) >> 1)
    const val = matrix[mid][0]
    if (val < target) {
      l = mid + 1
    } else if (val > target) {
      r = mid - 1
    } else {
      return true
    }
  }
  if (l === 0) return false
  const row = l - 1
  l = 0
  r = n - 1
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    const val = matrix[row][mid]
    if (val < target) {
      l = mid + 1
    } else if (val > target) {
      r = mid - 1
    } else {
      return true
    }
  }

  return matrix[row][l] === target
}
// @lc code=end
const args = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
]
console.log(searchMatrix(args, 10))
