/*
 * @lc app=leetcode.cn id=2390 lang=javascript
 *
 * [2390] 从字符串中移除星号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let ans = []
  for (let i = 0; i < s.length; i++) {
    let val = s[i]
    val === '*' ? ans.pop() : ans.push(val)
  }
  return ans.join('')
}
// @lc code=end
