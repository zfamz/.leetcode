/*
 * @lc app=leetcode.cn id=2810 lang=javascript
 *
 * [2810] 故障键盘
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let ans = []
  // for 96ms : forof 105ms
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char === 'i') {
      ans.reverse()
    } else {
      ans.push(char)
    }
  }
  return ans.join('')
}
// @lc code=end

const args = 'string'
console.log(finalString(args))
