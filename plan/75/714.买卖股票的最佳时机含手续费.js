/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const len = prices.length
  const f = new Array(len + 1).fill(0).map(() => [0, 0])
  f[0][1] = -Infinity
  for (let i = 0; i < len; i++) {
    f[i + 1][0] = Math.max(f[i][0], f[i][1] + prices[i] - fee)
    f[i + 1][1] = Math.max(f[i][0] - prices[i], f[i][1])
  }
  return f[len][0]
}
// @lc code=end
const args = [[1, 3, 7, 5, 10, 3], 3]
console.log(maxProfit(...args))

var maxProfit_1 = function (prices, fee) {
  const len = prices.length
  const cache = new Array(len).fill(0).map(() => [-1, -1])
  const dfs = (i, hold) => {
    if (i < 0) {
      return hold ? -Infinity : 0
    }
    if (cache[i][hold] !== -1) {
      return cache[i][hold]
    }
    let res
    if (hold) {
      res = Math.max(dfs(i - 1, 1), dfs(i - 1, 0) - prices[i])
    } else {
      res = Math.max(dfs(i - 1, 1) + prices[i] - fee, dfs(i - 1, 0))
    }
    cache[i][hold] = res
    return res
  }

  return dfs(len - 1, 0)
}

console.log(maxProfit_1(...args))
