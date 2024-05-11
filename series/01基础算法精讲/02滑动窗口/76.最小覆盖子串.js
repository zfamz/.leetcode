/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let ans = ''
  let ans_len = s.length + 1
  let map = {}
  for (const char of t) {
    if (map[char]) {
      map[char]++
    } else {
      map[char] = 1
    }
  }
  let left = 0
  for (let right = 0; right < s.length; right++) {
    if (s[right] in map) {
      map[s[right]]--
      while (Object.keys(map).every((key) => map[key] < 1)) {
        let len = right - left + 1
        if (len < ans_len) {
          ans_len = len
          ans = s.substring(left, right + 1)
        }
        if (s[left] in map) {
          map[s[left]]++
        }
        left++
      }
    }
  }
  return ans
}
// @lc code=end
// const args = ['ADOBECODEBANC', 'ABC']
const args = ['a', 'aa']
console.log(minWindow(...args))
