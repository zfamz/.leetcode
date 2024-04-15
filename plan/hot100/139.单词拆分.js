/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let m = s.length
  let dp = new Array(m + 1).fill(false)
  dp[0] = true
  let set = new Set(wordDict)
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j]) {
        let _str = s.substring(j, i)
        if (set.has(_str)) {
          dp[i] = true
          break
        }
      }
    }
  }
  return dp[m]
}
// @lc code=end
// const args = ['catsanddog', ['cats', 'dog', 'sand', 'and', 'cat']]
const args = ['leetcode', ['leet', 'code']]
console.log(wordBreak(...args))

// 暴力回溯，超时
var wordBreak = function (s, wordDict) {
  const dfs = (str, dic) => {
    if (str === '') return true
    for (let i = 0; i < dic.length; i++) {
      let chars = dic[i]
      let len = chars.length
      if (chars === str.substring(0, len)) {
        let res = dfs(str.substring(len), dic)
        if (res) {
          return true
        }
      }
    }
    return false
  }
  return dfs(s, wordDict)
}
