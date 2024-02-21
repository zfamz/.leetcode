/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits r
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const NUMS = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let chars = digits.split('')
  if (chars.length === 0) return []
  const res = []
  chars.forEach((val, i) => {
    chars[i] = NUMS[val].split('')
  })
  const getChar = (arr, index, char) => {
    arr[index].forEach((v) => {
      if (arr[index + 1]) {
        getChar(arr, index + 1, char + v)
      } else {
        res.push(char + v)
      }
    })
  }
  getChar(chars, 0, '')
  return res
}
// @lc code=end
const args = '239'
console.log(letterCombinations(args))
