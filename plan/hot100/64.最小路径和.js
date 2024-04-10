/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length
  let n = grid[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue
      if (i === 0) {
        grid[i][j] = grid[i][j - 1] + grid[i][j]
      } else if (j === 0) {
        grid[i][j] = grid[i - 1][j] + grid[i][j]
      } else {
        grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j]
      }
    }
  }
  return grid[m - 1][n - 1]
}
// @lc code=end
const args = [
  [1, 2, 3],
  [4, 5, 6],
]
console.log(minPathSum(args))

var minPathSum_1 = function (grid) {
  let m = grid.length
  let n = grid[0].length
  let dp = Array.from({ length: m }, () => new Array(n).fill(0))

  let i = 1
  dp[0][0] = grid[0][0]
  while (i < n) {
    dp[0][i] = dp[0][i - 1] + grid[0][i]
    i++
  }
  i = 1
  while (i < m) {
    dp[i][0] = dp[i - 1][0] + grid[i][0]
    i++
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j]
    }
  }
  return dp[m - 1][n - 1]
}
