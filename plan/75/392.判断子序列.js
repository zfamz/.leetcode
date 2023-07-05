/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let j = (k = 0)
  while (j < s.length && k < t.length) {
    if (s[j] === t[k]) {
      j++
    }
    k++
  }
  return j === s.length
}
// console.log(isSubsequence('abc', 'ahbgdc'))
// @lc code=end
