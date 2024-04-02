/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length

  for (let i = 0; i < n >> 1; i++) {
    for (let j = 0; j < (n + 1) >> 1; j++) {
      let tmp = matrix[i][j]
      matrix[i][j] = matrix[n - 1 - j][i]
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]
      matrix[j][n - 1 - i] = tmp
    }
  }
  return matrix
}
// @lc code=end

const args = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
console.log(rotate(args))

// 辅助直接转换
var rotate_1 = function (matrix) {
  const n = matrix.length
  const _m = structuredClone(matrix)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // matrix[j][n - 1 - i] = _m[i][j]
      matrix[i][j] = _m[n - 1 - j][i]
    }
  }
  return matrix
}
