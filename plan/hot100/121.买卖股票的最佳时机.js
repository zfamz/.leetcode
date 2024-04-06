/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let ans = 0
  let cost = Infinity
  for (const price of prices) {
    cost = Math.min(price, cost)
    ans = Math.max(ans, price - cost)
  }
  return ans
}
// @lc code=end
const args = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(args))
