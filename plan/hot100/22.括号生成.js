/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = []
  const backtrack = (l, r, path) => {
    if (l > n || r > n || r > l) {
      return
    }
    if (l === n && r === n) {
      ans.push(path.join(''))
      return
    }
    path.push('(')
    backtrack(l + 1, r, path)
    path.pop()

    path.push(')')
    backtrack(l, r + 1, path)
    path.pop()
  }
  backtrack(0, 0, [])
  return ans
}
// @lc code=end
console.log(generateParenthesis(3))

var generateParenthesis_1 = function (n) {
  const ans = []
  const backtrack = (l, r, path) => {
    if (l < 0 || r < 0 || r < l) {
      return
    }
    if (l === 0 && r === 0) {
      ans.push(path.join(''))
      return
    }
    path.push('(')
    backtrack(l - 1, r, path)
    path.pop()

    path.push(')')
    backtrack(l, r - 1, path)
    path.pop()
  }
  backtrack(n, n, [])
  return ans
}
