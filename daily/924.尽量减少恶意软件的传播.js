/*
 * @lc app=leetcode.cn id=924 lang=javascript
 *
 * [924] 尽量减少恶意软件的传播
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
 */
var minMalwareSpread = function (graph, initial) {
  let initialSet = new Set(initial)
  initial.sort((a, b) => a - b)
  const dfs = (node, visited) => {
    if (visited.has(node)) return
    visited.add(node)
    let e = graph[node]
    for (let i = 0; i < e.length; i++) {
      if (i !== node) {
        if (e[i] === 1 && !visited.has(i)) {
          if (initialSet.has(i)) {
            return true
          } else {
            let _res = dfs(i, visited)
            if (_res) return true
          }
        }
      }
    }
  }
  let ans = [-1, 0]
  for (const node of initial) {
    let set = new Set()
    let res = dfs(node, set)
    if (res !== true) {
      if (ans[1] < set.size) {
        ans[0] = node
        ans[1] = set.size
      }
    }
  }
  return ans[0] === -1 ? initial[0] : ans[0]
}
// @lc code=end
const args = [
  [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ],
  [0, 1, 2],
]
console.log(minMalwareSpread(...args))
