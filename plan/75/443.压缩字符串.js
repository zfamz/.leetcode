/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let res = 0
  let len = 0
  let id = chars[0]
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === id) {
      len++
    } else {
      upRes()
      id = chars[i]
      len = 1
    }
  }
  function upRes() {
    chars[res] = id
    if (len < 2) {
      res++
      return
    }
    const arr = len.toString().split('')
    for (let i = 0; i < arr.length; i++) {
      chars[i + res + 1] = arr[i]
    }
    res = res + arr.length + 1
  }
  upRes()
  // console.log(chars, res)
  return res
}
// compress(['a', 'a', 'a', 'b', 'b', 'a', 'a'])
// @lc code=end
