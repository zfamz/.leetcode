/*
 * @lc app=leetcode.cn id=522 lang=javascript
 *
 * [522] 最长特殊序列 II
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  const isSubseq = (s, t) => {
    let i = 0
    for (const char of t) {
      if (char === s[i]) {
        i++
        if (i === s.length) {
          return true
        }
      }
    }
    return false
  }

  strs.sort((a, b) => {
    return b.length - a.length
  })
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i]
    let hit = false
    for (let j = 0; j < strs.length; j++) {
      if (i !== j && isSubseq(str, strs[j])) {
        hit = true
        break
      }
    }
    if (!hit) {
      return str.length
    }
  }
  return -1
}
// @lc code=end
// const args = ['aba', 'cdc', 'eae']
// const args = ['aaa', 'aaa', 'aa']
const args = ['aabbcc', 'aabbcc', 'c', 'e', 'aabbcd']
console.log(findLUSlength(args))
