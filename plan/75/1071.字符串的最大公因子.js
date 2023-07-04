/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let minLen = Math.min(str1.length, str2.length)
  let repeatIndex = []
  let start = str1[0]
  for (let i = 1; i < minLen; i++) {
    if (str1[i] !== str2[i]) {
      return ''
    }
    if (str1[i] === start && str1.length % i === 0 && str2.length % i === 0) {
      repeatIndex.push(i)
    }
  }
  repeatIndex.push(minLen)
  let len = repeatIndex.length
  for (let i = len - 1; i >= 0; i--) {
    let s = str1.slice(0, repeatIndex[i])
    if (str1.split(s).join('') === '' && str2.split(s).join('') === '') {
      return s
    }
    // if (s.padEnd(str1.length, s) === str1 && s.padEnd(str2.length, s) === str2) {
    //   return s
    // }
  }
  return ''
}

// console.log(gcdOfStrings('abab', 'ababab'))
// @lc code=end
