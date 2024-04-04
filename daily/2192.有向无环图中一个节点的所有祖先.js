/*
 * @lc app=leetcode.cn id=2192 lang=javascript
 *
 * [2192] 有向无环图中一个节点的所有祖先
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function (n, edges) {
  const g = Array.from({ length: n }, () => [])
  for (let i = 0; i < edges.length; i++) {
    let [from, to] = edges[i]
    g[from].push(to)
  }
  let start

  const visited = new Array(n).fill(-1)
  const ans = Array.from({ length: n }, () => [])
  const dfs = (x) => {
    visited[x] = start
    for (const y of g[x]) {
      if (visited[y] !== start) {
        ans[y].push(start)
        dfs(y)
      }
    }
  }
  for (let i = 0; i < n; i++) {
    start = i
    dfs(i)
  }
  return ans
}
// @lc code=end
const args = [
  [0, 3],
  [0, 4],
  [1, 3],
  [2, 4],
  [2, 7],
  [3, 5],
  [3, 6],
  [3, 7],
  [4, 6],
]
console.log(getAncestors(8, args))

// 反向DFS
var getAncestors = function (n, edges) {
  const g = Array.from({ length: n }, () => [])
  for (let i = 0; i < edges.length; i++) {
    let [from, to] = edges[i]
    g[to].push(from)
  }
  const dfs = (x) => {
    visited[x] = true
    for (const y of g[x]) {
      if (!visited[y]) {
        dfs(y)
      }
    }
  }
  const visited = new Array(n)
  const ans = Array.from({ length: n }, () => [])
  for (let i = 0; i < n; i++) {
    visited.fill(false)
    dfs(i)
    visited[i] = false
    for (let j = 0; j < n; j++) {
      if (visited[j]) {
        ans[i].push(j)
      }
    }
  }
  return ans
}
