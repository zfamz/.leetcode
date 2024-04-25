/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 *
 * [1518] 换水问题
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let ans = numBottles
  let count = 0
  while (numBottles >= numExchange) {
    let x = Math.floor(numBottles / numExchange)
    count += x
    numBottles = (numBottles % numExchange) + x
  }
  return ans + count
}
// @lc code=end
const args = [15, 4]
console.log(numWaterBottles(...args))
