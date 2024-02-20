/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const visited = new Array(isConnected.length).fill(false)
  const dfs = (i) => {
    if (visited[i]) {
      return
    }
    visited[i] = true
    const link = isConnected[i]
    for (let index = 0; index < link.length; index++) {
      const ele = link[index]
      if (index !== i && ele === 1) {
        dfs(index)
      }
    }
  }
  let count = 0
  for (let i = 0; i < isConnected.length; i++) {
    if (visited[i]) {
      continue
    }
    count++
    dfs(i)
  }
  return count
}
// @lc code=end
const args = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]
console.log(findCircleNum(args))
