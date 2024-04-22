/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let m = s.length
  if (m < 2) {
    return 0
  }
  let ans = 0
  let dp = new Uint32Array(m)
  for (let i = 1; i < m; i++) {
    if (s.charAt(i) === ')') {
      if (s.charAt(i - 1) === '(') {
        dp[i] = (dp[i - 2] || 0) + 2
      } else {
        let prv = i - dp[i - 1] - 1
        if (s.charAt(prv) === '(') {
          dp[i] = dp[i - 1] + 2 + (prv > 0 ? dp[prv - 1] : 0)
        }
      }
    }
    if (ans < dp[i]) {
      ans = dp[i]
    }
  }
  return ans
}
// @lc code=end

const args = '())()()(()'
console.log(longestValidParentheses(args))

// 贪心
var longestValidParentheses_ = function (s) {
  let m = s.length
  let ans = 0
  let left = 0
  let right = 0

  for (let i = 0; i < m; i++) {
    if (s.charAt(i) === ')') {
      right++
      if (right === left) {
        ans = Math.max(ans, left * 2)
      } else if (right > left) {
        right = 0
        left = 0
      }
    } else {
      left++
    }
  }

  right = 0
  left = 0
  for (let i = m - 1; i >= 0; i--) {
    if (s.charAt(i) === ')') {
      right++
    } else {
      left++
      if (right === left) {
        ans = Math.max(ans, left * 2)
      } else if (left > right) {
        right = 0
        left = 0
      }
    }
  }

  return ans
}
