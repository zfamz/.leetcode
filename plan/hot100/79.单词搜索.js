/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let point = []
  let m = board.length
  let n = board[0].length
  word = word.split('')
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        point.push([i, j])
      }
    }
  }
  const getKey = (i, j) => {
    return i + ':' + j
  }
  let hit = false
  let strLen = word.length - 1
  const backstack = (arr, i, j, str, index, visited) => {
    if (i < 0 || i >= m || j < 0 || j >= n || hit) return
    if (visited.includes(getKey(i, j))) return
    if (arr[i][j] !== str[index]) {
      return
    } else {
      if (index === strLen) {
        hit = true
        return
      }
    }
    const ps = [
      [i - 1, j],
      [i + 1, j],
      [i, j - 1],
      [i, j + 1],
    ]
    visited.push(getKey(i, j))
    for (const [row, col] of ps) {
      !hit && backstack(arr, row, col, str, index + 1, visited)
    }
    visited.pop()
  }
  for (const [i, j] of point) {
    !hit && backstack(board, i, j, word, 0, [])
  }

  return hit
}
// @lc code=end
const args = [
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  'ABCB',
]
console.log(exist(...args))
