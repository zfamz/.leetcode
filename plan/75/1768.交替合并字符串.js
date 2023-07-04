/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let arr = []
  let min = word1.length
  let diff = min - word2.length
  let end = ''
  if (diff > 0) {
    min = word2.length
    end = word1.slice(-diff)
  } else if (diff < 0) {
    end = word2.slice(diff)
  }
  for (let i = 0; i < min; i++) {
    arr.push(word1[i])
    arr.push(word2[i])
  }
  arr.push(end)
  return arr.join('')
}
// @lc code=end
