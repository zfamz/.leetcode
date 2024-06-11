/*
 * @lc app=leetcode.cn id=419 lang=javascript
 *
 * [419] 甲板上的战舰
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let m = board.length
  let n = board[0].length
  let ans = 0

  const dfs = (i, j) => {
    if (i >= m || j >= n || board[i][j] !== 'X') {
      return
    }
    board[i][j] = '.'
    dfs(i + 1, j)
    dfs(i, j + 1)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'X') {
        ans++
        dfs(i, j)
      }
    }
  }

  return ans
}
// @lc code=end
const args = [
  ['X', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
]
console.log(countBattleships(args))
