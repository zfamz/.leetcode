/*
 * @lc app=leetcode.cn id=2028 lang=javascript
 *
 * [2028] 找出缺失的观测数据
 */

// @lc code=start
/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  let sum = rolls.reduce((a, b) => a - b, mean * (rolls.length + n))
  if (sum <= 6 * n && sum > n) {
    const ans = Array(n).fill(1)
    sum -= n
    for (let i = 0; sum > 0; i++) {
      if (sum > 5) {
        ans[i] = 6
        sum -= 5
      } else {
        ans[i] = sum + 1
        sum = 0
      }
    }
    return ans
  }
  return []
}
// @lc code=end
