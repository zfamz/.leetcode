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
  let sum = mean * (rolls.length + n)
  for (const r of rolls) {
    sum -= r
  }

  if (sum > n * 6 || sum < n) {
    return []
  }

  let base = Math.floor(sum / n)
  sum = sum - base * n
  let ans = new Array(n).fill(base)
  let max = 6 - base

  let i = 0
  while (sum > 0) {
    if (sum > max) {
      ans[i] = 6
      sum -= max
    } else {
      ans[i] = base + sum
      sum = 0
    }
    i++
  }

  return ans
}
// @lc code=end
const args = [[3, 2, 4, 3], 4, 2]
console.log(missingRolls(...args))
