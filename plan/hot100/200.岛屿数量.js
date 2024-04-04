/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let m = grid.length
  let n = grid[0].length
  let ans = 0

  const inArea = (x, y) => {
    return x >= 0 && x < m && y >= 0 && y < n
  }
  const dfs = (grid, x, y) => {
    if (!inArea(x, y)) return
    if (grid[x][y] !== '1') return

    grid[x][y] = '2'
    dfs(grid, x - 1, y)
    dfs(grid, x + 1, y)
    dfs(grid, x, y - 1)
    dfs(grid, x, y + 1)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j)
        ans++
      }
    }
  }
  return ans
}
// @lc code=end
const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]
console.log(numIslands(grid))
