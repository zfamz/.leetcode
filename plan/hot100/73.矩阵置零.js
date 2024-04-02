/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let rowSet = new Set()
  let colSet = new Set()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rowSet.add(i)
        colSet.add(j)
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rowSet.has(i) || colSet.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}
// @lc code=end

const args = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]
console.log(setZeroes(args))
