/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  const count = {
    A: 0,
    L: 0,
  }
  for (const char of s) {
    if (char === 'L') {
      if (count[char] === 2) {
        return false
      }
      count[char]++
    } else {
      count.L = 0
      if (char === 'A' && count[char] > 0) {
        return false
      }
      count[char]++
    }
  }
  return true
}
// @lc code=end
const args = 'PPALLP'
console.log(checkRecord(args))
