/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let num_arr = []
  let str_arr = []
  let num = ''
  let str = ''
  for (const char of s) {
    if (char === ']') {
      str = str_arr.pop() + str.repeat(num_arr.pop())
    } else if (char === '[') {
      str_arr.push(str)
      str = ''
      num_arr.push(num)
      num = ''
    } else if (isNum(char)) {
      num += char
    } else {
      str = str + char
    }
  }
  return str
}

const isStr = (s) => {
  return s >= 'a' && s <= 'z'
}
const isNum = (s) => {
  return s >= '0' && s <= '9'
}

// @lc code=end

console.log(decodeString('3[a2[c]]'))

function decodeString_(s) {
  let ans = []
  let N = s.length
  let i = 0
  while (i < N) {
    let str = s[i]
    if (isStr(str)) {
      while (isStr(s[i + 1])) {
        str += s[++i]
      }
    } else if (isNum(str)) {
      while (isNum(s[i + 1])) {
        str += s[++i]
      }
    } else if (str === ']') {
      let cur = ans.pop()
      let _s = ''
      while (cur !== '[') {
        _s = cur + _s
        cur = ans.pop()
      }
      let num = ans.pop()
      str = ''
      for (let j = num; j > 0; j--) {
        str += _s
      }
    }
    ans.push(str)
    i++
  }
  return ans.join('')
}
