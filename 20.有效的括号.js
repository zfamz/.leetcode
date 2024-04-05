/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const queue = []
  const map = {
    ']': '[',
    '}': '{',
    ')': '(',
  }
  for (const char of s) {
    if (map[char]) {
      const _char = queue.pop()
      if (_char !== map[char]) {
        return false
      }
    } else {
      queue.push(char)
    }
  }
  return !queue.length
}
// @lc code=end
const args = '()[]{}'
console.log(isValid(args))
