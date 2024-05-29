/*
 * @lc app=leetcode.cn id=2981 lang=javascript
 *
 * [2981] 找出出现至少三次的最长特殊子字符串 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  const map = {}
  let n = s.length
  for (let i = 0; i < n; ) {
    let char = s[i]
    let j = i + 1
    while (j < n && s[j] === char) {
      j++
    }
    let len = j - i
    if (!(char in map)) {
      map[char] = new Array(len).fill(0)
    }
    let num = len

    let _arr = map[char]
    for (let index = 0; index < len; index++) {
      if (index >= _arr.length) {
        _arr[index] = num
      } else {
        _arr[index] += num
      }
      num--
    }
    i = j
  }

  let ans = -1
  Object.values(map).forEach((v) => {
    for (let i = 0; i < v.length; i++) {
      if (v[i] >= 3) {
        if (i > ans) {
          ans = i
        }
      } else {
        break
      }
    }
  })

  return ans > -1 ? ans + 1 : ans
}
// @lc code=end
const args = 'abcdef'
console.log(maximumLength(args))
