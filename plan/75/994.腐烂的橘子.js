/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const queue = []
  let count = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const value = grid[i][j]
      if (value === 1) {
        count++
      } else if (value === 2) {
        queue.push([i, j])
      }
    }
  }
  let timer = 0
  const bfs = () => {
    while (queue.length) {
      if (count === 0) return
      const size = queue.length
      timer++
      for (let i = 0; i < size; i++) {
        let [x, y] = queue.shift()
        const addNewNode = (row, col) => {
          if (row >= 0 && row < m && col >= 0 && col < n && grid[row][col] === 1) {
            queue.push([row, col])
            grid[row][col] = 2
            count--
          }
        }
        addNewNode(x, y + 1)
        addNewNode(x, y - 1)
        addNewNode(x + 1, y)
        addNewNode(x - 1, y)
      }
    }
  }
  bfs()
  return count > 0 ? -1 : timer
}
// @lc code=end
const args = [[2], [1]]

console.log(orangesRotting(args))
