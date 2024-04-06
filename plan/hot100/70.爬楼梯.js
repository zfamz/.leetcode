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
  const cache = new Array(n + 1).fill(0)
  cache[0] = 1
  cache[1] = 1
  cache[2] = 2
  const dfs = (i) => {
    if (cache[i]) return cache[i]
    const res = dfs(i - 1) + dfs(i - 2)
    cache[i] = res
    return res
  }
  return dfs(n)
}
// @lc code=end
console.log(climbStairs(44))

// 回溯
var climbStairs = function (n) {
  let ans = 0
  const backtrack = (total, n) => {
    if (total >= n) {
      if (total === n) ans++
      return
    }
    backtrack(total + 1, n)
    backtrack(total + 2, n)
  }
  backtrack(0, n)
  return ans
}

// 动态规划
var climbStairs_1 = function (n) {
  let dp = new Array(n + 1)
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
