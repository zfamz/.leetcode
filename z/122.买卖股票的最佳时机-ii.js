/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let m = prices.length
  let cache = Array.from({ length: m }, () => [-1, -1])
  // 第n天是否持有股票
  const dfs = (n, hold) => {
    if (n < 0) {
      return hold ? -Infinity : 0
    }
    if (cache[n][hold] !== -1) {
      return cache[n][hold]
    }
    let res
    // 如果持有
    // 1. 前一天就持有，当天不操作
    // 2. 前一天不持有，当天买入
    if (hold) {
      res = Math.max(dfs(n - 1, 1), dfs(n - 1, 0) - prices[n])
    } else {
      // 如果不持有
      // 1. 前一天就持有，当天卖出
      // 2. 前一天不持有，当天不操作
      res = Math.max(dfs(n - 1, 1) + prices[n], dfs(n - 1, 0))
    }
    cache[n][hold] = res
    return res
  }
  return dfs(m - 1, 0)
}
// @lc code=end

const args = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(args))

//  递增就买入
var maxProfit = function (prices) {
  let ans = 0
  let prev = Infinity
  for (const p of prices) {
    if (p > prev) {
      ans += p - prev
    }
    prev = p
  }
  return ans
}
