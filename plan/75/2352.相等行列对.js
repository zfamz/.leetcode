/*
 * @lc app=leetcode.cn id=2352 lang=javascript
 *
 * [2352] 相等行列对
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let N = grid.length
  let ans = 0
  let map = {}
  for (const item of grid) {
    const s = item.join()
    map[s] ? (map[s] += 1) : (map[s] = 1)
  }
  for (let i = 0; i < N; i++) {
    let _s = []
    for (let j = 0; j < N; j++) {
      _s.push(grid[j][i])
    }
    let s = _s.join()
    if (map[s]) {
      ans += map[s]
    }
  }

  return ans
}
// @lc code=end

console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 4],
    [2, 4, 2, 2],
    [2, 5, 2, 2],
  ])
)

var equalPairs_ = function (grid) {
  let N = grid.length
  if (N === 1) {
    return 1
  }
  let arr = new Array(N)
  for (let i = 0; i < N; i++) {
    const m = new Map()
    arr[i] = m
    const ele = grid[i]
    let j = 0
    while (j < N) {
      if (m.has(ele[j])) {
        m.get(ele[j]).push(j)
      } else {
        m.set(ele[j], [j])
      }
      j++
    }
  }

  let ans = 0
  for (let i = 0; i < N; i++) {
    let row = grid[i]
    let trans = null
    if (arr[0].has(row[0])) {
      trans = arr[0].get(row[0])
    } else {
      continue
    }
    let j = 1
    for (; j < N; j++) {
      if (arr[j].has(row[j])) {
        let _arr = arr[j].get(row[j])
        trans = trans.filter((item) => _arr.includes(item))
        if (trans.length === 0) {
          break
        }
      } else {
        break
      }
    }
    if (j === N) {
      ans += trans.length
    }
  }
  return ans
}
