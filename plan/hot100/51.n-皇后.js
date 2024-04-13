/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const ans = []
  let cols = {},
    diag1 = {},
    diag2 = {}
  let strTmp = new Array(n).fill('.')
  const backstrack = (row, path) => {
    if (row === n) {
      ans.push(
        path.map((index) => {
          strTmp[index] = 'Q'
          let _s = strTmp.join('')
          strTmp[index] = '.'
          return _s
        })
      )
      return
    }
    for (let col = 0; col < n; col++) {
      if (!cols[col] && !diag1[row + col] && !diag2[row - col]) {
        cols[col] = diag1[row + col] = diag2[row - col] = true
        path.push(col)
        backstrack(row + 1, path)
        path.pop()
        cols[col] = diag1[row + col] = diag2[row - col] = false
      }
    }
  }
  backstrack(0, [])
  return ans
}
// @lc code=end
console.log(solveNQueens(4))
