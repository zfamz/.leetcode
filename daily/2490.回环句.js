/*
 * @lc app=leetcode.cn id=2490 lang=javascript
 *
 * [2490] 回环句
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const arr = sentence.split(' ')
  for (let i = 0; i < arr.length; i++) {
    let n = i + 1
    let s1 = arr[i]
    let end = s1[s1.length - 1]
    if (n === arr.length) {
      n = 0
    }
    let s2 = arr[n]
    let start = s2[0]
    if (end !== start) {
      return false
    }
  }
  return true
}
// @lc code=end
