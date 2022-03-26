/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let ans = 0
  while (n > 4) {
    n = Math.floor(n / 5)
    ans += n
  }
  return ans
}
// @lc code=end

// notes:
/**
 * [1,n] 中 p 的倍数有 n/p 个
 */
