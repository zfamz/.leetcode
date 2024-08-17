/*
 * @lc app=leetcode.cn id=3148 lang=javascript
 *
 * [3148] 矩阵中的最大得分
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function (grid) {
  // 把最小值存起来
  let m = grid.length
  let n = grid[0].length
  let ans = -Infinity
  let t = new Array(n).fill(Infinity)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let x = grid[i][j]
      let min = j === 0 ? t[j] : Math.min(t[j], t[j - 1])
      ans = Math.max(ans, x - min)
      t[j] = Math.min(min, x)
    }
  }
  return ans
}
// @lc code=end
const args = [
  [9, 5, 7, 3],
  [8, 9, 6, 1],
  [6, 7, 14, 3],
  [2, 5, 3, 1],
]
console.time('run')
console.log(maxScore(args))
console.timeEnd('run')

// dp
var maxScore_2 = function (grid) {
  let m = grid.length
  let n = grid[0].length
  let ans = -Infinity
  let t = new Array(n).fill(-Infinity)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        if (j > 0) {
          let diff = grid[i][j] - grid[i][j - 1]
          t[j] = t[j - 1] > 0 ? diff + t[j - 1] : diff
        }
      } else if (j === 0) {
        let diff = grid[i][j] - grid[i - 1][j]
        t[j] = t[j] > 0 ? diff + t[j] : diff
      } else {
        let diff = grid[i][j] - grid[i][j - 1]
        let max_left = t[j - 1] > 0 ? diff + t[j - 1] : diff
        diff = grid[i][j] - grid[i - 1][j]
        let max_top = t[j] > 0 ? diff + t[j] : diff
        t[j] = Math.max(max_left, max_top)
      }
    }
    ans = Math.max(ans, ...t)
  }
  return ans
}
