/*
 * @lc app=leetcode.cn id=2864 lang=javascript
 *
 * [2864] 最大二进制奇数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  let f = ''
  let z = ''
  for (const char of s) {
    if (char === '1') {
      f += char
    } else {
      z += char
    }
  }
  if (f.length === 1) {
    return z + f
  }
  return f.slice(1) + z + '1'
}
// @lc code=end
const args = '1010'
console.log(maximumOddBinaryNumber(args))
