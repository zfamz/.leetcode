/*
 * @lc app=leetcode.cn id=2713 lang=javascript
 *
 * [2713] 矩阵中严格递增的单元格数
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var maxIncreasingCells = function (mat) {
  let ans = 1
  let set = new Set()
  let m = mat.length
  let n = mat[0].length
  let _mat = Array.from({ length: m }, () => new Array(n).fill(-1))

  const move = (i, j) => {
    return
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (_mat[i][j] !== -1) {
        move(i, j)
      }
    }
  }
  return ans
}
// @lc code=end
const args = [
  [3, 1],
  [3, 4],
]
console.log(maxIncreasingCells(args))
