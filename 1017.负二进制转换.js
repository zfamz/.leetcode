/*
 * @lc app=leetcode.cn id=1017 lang=javascript
 *
 * [1017] 负二进制转换
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function (n) {
  if (n == 0) return '0'
  let base = -2
  let ans = ''
  while (n !== 0) {
    let mod = n % base
    n = (n / base) | 0
    if (mod === -1) {
      n++
      mod = 1
    }
    ans = mod + ans
  }
  return ans
}
// @lc code=end
const args = 4
console.log(baseNeg2(args))
