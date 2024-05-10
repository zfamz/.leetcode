/*
 * @lc app=leetcode.cn id=2730 lang=javascript
 *
 * [2730] 找到最长的半重复子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestSemiRepetitiveSubstring = function (s) {
  if (s.length < 3) return s.length
  let ans = 0
  let left = 0
  let mid = -1
  for (let right = 1; right < s.length; right++) {
    if (s[right] === s[right - 1]) {
      ans = Math.max(ans, right - left)
      if (mid !== -1) {
        left = mid
      }
      mid = right
    }
  }
  if (left === 0) {
    return s.length
  }
  // 计算结束的时候长度
  ans = Math.max(ans, s.length - left)

  return ans === 0 ? s.length : ans
}
// @lc code=end
// const args = '001'
const args = '52233'
console.log(longestSemiRepetitiveSubstring(args))
