/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const res = new Array(m).fill(new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    res[i][0] = 1
  }
  for (let i = 0; i < n; i++) {
    res[0][i] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      res[i][j] = res[i - 1][j] + res[i][j - 1]
    }
  }
  return res[m - 1][n - 1]
}
// @lc code=end

console.log(uniquePaths(7, 3))
