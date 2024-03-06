// 0-1 背包问题
// https://www.hello-algo.com/chapter_dynamic_programming/knapsack_problem/
import assert from 'assert'
var args = [[1, 2, 3, 4, 5], [5, 12, 15, 21, 24], 5, 29]

function unbounded_knapsack(wgt, val, cap) {
  let len = wgt.length
  let dp = new Array(len + 1).fill(0).map(() => new Array(cap + 1).fill(0))
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= cap; j++) {
      if (j < wgt[i - 1]) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - wgt[i - 1]] + val[i - 1])
      }
    }
  }
  return dp[len][cap]
}
assert.equal(unbounded_knapsack(...args), args[args.length - 1])

function knapsack(wgt, val, cap) {
  const len = wgt.length
  let dp = Array.from({ length: len + 1 }, () => new Array(cap + 1).fill(0))
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= cap; j++) {
      if (j < wgt[i - 1]) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - wgt[i - 1]] + val[i - 1])
      }
    }
  }
  // console.log(dp)
  return dp[len][cap]
}
var args = [[1, 2, 3, 4, 5], [5, 12, 15, 21, 24], 5, 27]
// console.log(knapasack(...args))
assert.equal(knapsack(...args), args[args.length - 1])

function knapsack_dfs(wgt, val, cap) {
  const dfs = (wgt, val, i, cap) => {
    if (i === 0 || cap === 0) return 0
    if (cap < wgt[i]) {
      return dfs(wgt, val, i - 1, cap)
    }
    return Math.max(dfs(wgt, val, i - 1, cap), dfs(wgt, val, i - 1, cap - wgt[i]) + val[i])
  }
  return dfs(wgt, val, wgt.length - 1, cap)
}
