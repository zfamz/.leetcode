/*
 * @lc app=leetcode.cn id=1926 lang=javascript
 *
 * [1926] 迷宫中离入口最近的出口
 */

// @lc code=start
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  let m = maze.length - 1
  let n = maze[0].length - 1
  const isExit = (row, col) => {
    return row === 0 || row === m || col === 0 || col === n
  }
  let count = 0
  let flag = false

  const bfs = () => {
    const queue = [entrance]
    maze[entrance[0]][entrance[1]] = '+'
    const addNode = (row, col) => {
      if (row < 0 || col < 0 || row > m || col > n) {
        return
      }
      if (maze[row][col] === '.') {
        if (isExit(row, col)) {
          flag = true
        }
        queue.push([row, col])
        maze[row][col] = '+'
      }
    }
    while (queue.length) {
      let size = queue.length
      count++
      for (let i = 0; i < size; i++) {
        let node = queue.shift()
        let [x, y] = node
        addNode(x, y + 1)
        addNode(x, y - 1)
        addNode(x + 1, y)
        addNode(x - 1, y)
        if (flag) {
          return
        }
      }
    }
  }
  bfs()
  return flag ? count : -1
}
// @lc code=end
const args = [['.', '+']]
console.log(nearestExit(args, [0, 0]))
