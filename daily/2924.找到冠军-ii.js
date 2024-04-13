/*
 * @lc app=leetcode.cn id=2924 lang=javascript
 *
 * [2924] 找到冠军 II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
  let map = new Array(n).fill(0)
  for (const [, b] of edges) {
    map[b]++
  }
  let ans = []
  map.forEach((num, index) => {
    if (num === 0) {
      ans.push(index)
    }
  })
  return ans.length !== 1 ? -1 : ans[0]
}
// @lc code=end
const args = [
  [0, 2],
  [1, 3],
  [1, 2],
]
console.log(findChampion(2, [[1, 0]]))
