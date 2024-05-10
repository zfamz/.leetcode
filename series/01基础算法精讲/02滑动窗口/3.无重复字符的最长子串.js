/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = {}
  let left = 0
  let right = 0
  let ans = 0
  while (right < s.length) {
    let char = s[right]
    if (map[char]) {
      ans = Math.max(ans, right - left)
      while (left <= right && s[left] !== char) {
        map[s[left]] = false
        left++
      }
      left++
    } else {
      map[char] = true
    }
    right++
  }
  ans = Math.max(ans, right - left)
  return ans
}
// @lc code=end
// const args = 'abcabcbb'
const args = ' '
console.log(lengthOfLongestSubstring(args))
