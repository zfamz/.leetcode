/*
 * @lc app=leetcode.cn id=2923 lang=javascript
 *
 * [2923] 找到冠军 I
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
  let m = grid.length
  let winSet = new Set()
  let loseSet = new Set()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      if (i !== j && grid[i][j] === 1) {
        winSet.add(i)
        loseSet.add(j)
      }
    }
  }
  let arr = Array.from(winSet)
  for (let i = 0; i < arr.length; i++) {
    if (!loseSet.has(arr[i])) {
      return arr[i]
    }
  }
}
// @lc code=end
const args = [
  [0, 0, 1],
  [1, 0, 1],
  [0, 0, 0],
]
console.log(findChampion(args))
