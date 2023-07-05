/*
 * @lc app=leetcode.cn id=1456 lang=javascript
 *
 * [1456] 定长子串中元音的最大数目
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let count = 0
  let i = (j = 0)
  let vowels = 'aeiou'
  const isVowel = (char) => vowels.indexOf(char) > -1
  while (j < k) {
    if (isVowel(s[j])) {
      count++
    }
    j++
  }

  let max = count
  while (j < s.length) {
    if (isVowel(s[i])) {
      count--
    }
    if (isVowel(s[j])) {
      count++
      if (count > max) {
        if (count === k) {
          return count
        }
        max = count
      }
    }
    i++
    j++
  }

  return max
}
// @lc code=end

console.log(maxVowels('weallloveyou', 7))
