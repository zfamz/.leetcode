/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split(' ')
  let result = []
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length) {
      result.push(arr[i])
    }
  }
  return result.join(' ')
}
// @lc code=end
