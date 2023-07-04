/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let code = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let arr = s.split('')
  let start = 0
  let end = arr.length - 1
  while (start < end) {
    while (!code.includes(arr[start]) && start <= end) {
      start++
    }
    while (!code.includes(arr[end]) && start <= end) {
      end--
    }
    if (start < end) {
      let temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp
      start++
      end--
    }
  }
  return arr.join('')
}
console.log(reverseVowels('.,'))
// @lc code=end
