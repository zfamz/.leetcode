/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let len = s.length
  let n = p.length
  let ans = []

  let map = {}
  const clear = () => {
    for (const key in map) {
      map[key] = 0
    }
  }
  const toString = (map) => {
    let str = ''
    for (const key in map) {
      str += key + map[key]
    }
    return str
  }
  p.split('').forEach((char) => {
    if (!map[char]) {
      map[char] = 1
    } else {
      map[char]++
    }
  })
  let same_str = toString(map)
  clear()

  let left = 0,
    right = 0
  let dirty = false
  while (right < len) {
    while (right - left < n && right < len) {
      let char = s.charAt(right)
      if (!(char in map)) {
        right++
        left = right
        dirty && clear()
      } else {
        dirty = true
        map[char]++
        right++
      }
    }
    if (toString(map) === same_str) {
      ans.push(left)
    }
    map[s.charAt(left)]--
    left++
  }
  return ans
}
// @lc code=end

const args = ['baa', 'aa']
// const args = ['cbaebabacd', 'abc']
console.log(findAnagrams(...args))
