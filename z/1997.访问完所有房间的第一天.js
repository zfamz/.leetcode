/*
 * @lc app=leetcode.cn id=1997 lang=javascript
 *
 * [1997] 访问完所有房间的第一天
 */

// @lc code=start
/**
 * @param {number[]} nextVisit
 * @return {number}
 */
const MOD = 1000000007
var firstDayBeenInAllRooms = function (nextVisit) {
  let n = nextVisit.length
  let visited = new Array(n).fill(1)
  let visitedCount = 0
  let i = 0
  let day = -1
  while (visitedCount < n) {
    let count = visited[i]
    visited[i]++
    if (count === 1) {
      visitedCount++
    }
    if (count & 1) {
      i = nextVisit[i]
    } else {
      i = ((i + 1) % n) % MOD
    }
    day++
  }
  return day
}
// @lc code=end
const args = [0, 1, 2, 0]
console.log(firstDayBeenInAllRooms(args))
