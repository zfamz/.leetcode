/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map()
  for (const str of strs) {
    let key = str.split('').sort().toString()
    if (map.has(key)) {
      map.get(key).push(str)
    } else {
      map.set(key, [str])
    }
  }
  return Array.from(map.values())
}
// @lc code=end

let args = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
console.log('🚀 ~ args:', groupAnagrams(args))
