/*
 * @lc app=leetcode.cn id=1466 lang=javascript
 *
 * [1466] 重新规划路线
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const t = new Array(n).fill(0).map(() => [])
  for (const edge of connections) {
    let [from, to] = edge
    t[from].push([to, 1])
    t[to].push([from, 0])
  }
  let ans = 0
  const dfs = (index, fa) => {
    for (const edge of t[index]) {
      let [i, flag] = edge
      if (i !== fa) {
        if (flag) ans++
        dfs(i, index)
      }
    }
  }
  dfs(0, -1)
  return ans
}
// @lc code=end
const args = [
  [1, 0],
  [1, 2],
  [3, 2],
  [3, 4],
]
console.log(minReorder(5, args))

// 暴力超时
var minReorder_ = function (n, connections) {
  const s = new Set([0])
  let count = 0
  while (connections.length) {
    let node = connections.shift()
    let [a, b] = node
    if (s.has(b)) {
      s.add(a)
      continue
    } else if (s.has(a)) {
      count++
      s.add(b)
    } else {
      connections.push(node)
    }
  }
  return count
}
