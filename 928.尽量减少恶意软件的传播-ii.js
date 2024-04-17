/*
 * @lc app=leetcode.cn id=928 lang=javascript
 *
 * [928] 尽量减少恶意软件的传播 II
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
 */
var minMalwareSpread = function (graph, initial) {
  let m = graph.length
  let initialSet = new Set(initial)
  let _visited = new Array(m).fill(0)
  const dfs = (node, visited, bads) => {
    if (visited.has(node)) return -1
    visited.add(node)
    let ins = graph[node]
    for (let i = 0; i < m; i++) {
      if (i !== node && ins[i] === 1) {
        if (initialSet.has(i)) {
          bads.push(i)
        } else {
          dfs(i, visited, bads)
        }
      }
    }
  }
  let ans = [-1, 0]
  let map = {}
  for (let i = 0; i < m; i++) {
    if (_visited[i] === 0 && !initialSet.has(i)) {
      let bads = []
      let _set = new Set()
      dfs(i, _set, bads)
      bads = Array.from(new Set(bads))
      let flag = bads.length > 1 ? 1 : -1
      _set.forEach((item) => {
        _visited[item] = flag
      })
      if (bads.length === 1) {
        let size = _set.size
        let bad = bads[0]
        if (map[bad]) {
          map[bad] += size
          size = map[bad]
        } else {
          map[bad] = size
        }
        if (size > ans[1]) {
          ans = [bads[0], size]
        } else if (size === ans[1]) {
          ans[0] = Math.min(ans[0], bads[0])
        }
      }
    }
  }
  return ans[0] > -1 ? ans[0] : Math.min(...initial)
}
// @lc code=end
const args = [
  [
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 1, 1, 0, 0, 1],
  ],
  [8, 4, 2, 0],
]
console.log(minMalwareSpread(...args))
