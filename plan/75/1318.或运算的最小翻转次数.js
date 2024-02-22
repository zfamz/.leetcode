/*
 * @lc app=leetcode.cn id=1318 lang=javascript
 *
 * [1318] 或运算的最小翻转次数
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  let count = 0
  while (a || b || c) {
    let _a = a & 1
    let _b = b & 1
    let _c = c & 1
    if (_c) {
      if (!(_a | _b)) {
        count++
      }
    } else {
      if (_a & _b) {
        count += 2
      } else if (_a | _b) {
        count++
      }
    }
    a = a >> 1
    b = b >> 1
    c = c >> 1
  }
  return count
}
// @lc code=end
const args = [8, 3, 5]
console.log(minFlips(...args))
