/*
 * @lc app=leetcode.cn id=2008 lang=javascript
 *
 * [2008] 出租车的最大盈利
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} rides
 * @return {number}
 */
var maxTaxiEarnings = function (n, rides) {
  let dp = new Array(n + 1).fill(0)
  let map = new Map()
  for (let i = 0; i < rides.length; i++) {
    let [start, end, tip] = rides[i]
    if (!map.has(end)) {
      map.set(end, [])
    }
    map.get(end).push([start, end - start + tip])
  }

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1]
    if (map.has(i)) {
      for (const [start, earn] of map.get(i)) {
        dp[i] = Math.max(dp[i], dp[start] + earn)
      }
    }
  }

  return dp[n]
}
// @lc code=end
let args = [
  5,
  [
    [2, 5, 4],
    [1, 5, 1],
  ],
]
console.log(maxTaxiEarnings(...args))
