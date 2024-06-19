/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let f0 = 0,
    f1 = 1
  for (let i = 0; i < n; i++) {
    let _f = f0 + f1
    f0 = f1
    f1 = _f
  }
  return f1
}
// @lc code=end
console.log(climbStairs(44)) // 1134903170

var climbStairs_3 = function (n) {
  let dp = new Array(n + 2).fill(0)
  dp[1] = 1
  for (let i = 0; i < n; i++) {
    dp[i + 2] = dp[i + 1] + dp[i]
  }
  return dp[n + 1]
}

var climbStairs_2 = function (n) {
  let cache = new Map()
  const dfs = (n) => {
    if (cache.has(n)) {
      return cache.get(n)
    }
    if (n < 3) return n
    const res = dfs(n - 1) + dfs(n - 2)
    cache.set(n, res)
    return res
  }

  return dfs(n)
}
