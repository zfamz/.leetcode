/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  n = n ^ (n >> 1)
  return !(n & (n + 1))
}
// @lc code=end

// notes
/**
 * (n >> 1)  ^ n 或者 + n 都应该得到全1的二进制数
 * 1..n..1 + 1 = 10..n..0
 */
