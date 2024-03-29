/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const m = s.length
  let al = -1,
    ar = m
  let left = 0
  let sMap = {}
  let tMap = {}
  let less = 0
  for (const char of t) {
    if (Object.hasOwn(tMap, char)) {
      tMap[char]++
    } else {
      less++
      sMap[char] = 0
      tMap[char] = 1
    }
  }
  for (let right = 0; right < m; right++) {
    const char = s[right]
    if (tMap[char]) {
      if (++sMap[char] === tMap[char]) {
        less--
      }
    }
    while (less === 0) {
      if (right - left < ar - al) {
        ar = right
        al = left
      }

      // console.log(s.substring(left, right + 1))
      let _char = s[left]
      if (tMap[_char]) {
        if (sMap[_char] === tMap[_char]) {
          less++
        }
        sMap[_char]--
      }
      left++
    }
  }

  return al < 0 ? '' : s.substring(al, ar + 1)
}
// @lc code=end
const args = ['ADOBECODEBANC', 'ABC']
console.log(minWindow(...args))

var minWindow_1 = function (s, t) {
  const isCover = (a, b) => {
    for (const key in b) {
      if (!a[key] || a[key] < b[key]) {
        return false
      }
    }
    return true
  }
  const m = s.length
  let al = -1,
    ar = m
  let left = 0
  let sMap = {}
  let tMap = {}
  for (const char of t) {
    if (Object.hasOwn(tMap, char)) {
      tMap[char]++
    } else {
      tMap[char] = 1
    }
  }
  for (let right = 0; right < m; right++) {
    const char = s[right]
    sMap[char] = Object.hasOwn(sMap, char) ? sMap[char] + 1 : 1
    while (isCover(sMap, tMap)) {
      if (right - left < ar - al) {
        ar = right
        al = left
      }
      sMap[s[left]]--
      left++
    }
  }
  // console.log(ar, al)

  return al < 0 ? '' : s.substring(al, ar + 1)
}
