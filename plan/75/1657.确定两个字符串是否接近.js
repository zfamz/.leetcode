/*
 * @lc app=leetcode.cn id=1657 lang=javascript
 *
 * [1657] 确定两个字符串是否接近
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false
  }
  let map1 = new Map()
  for (let i = 0; i < word1.length; i++) {
    const ele = word1[i]
    map1.has(ele) ? map1.set(ele, map1.get(ele) + 1) : map1.set(ele, 1)
  }
  let map2 = new Map()
  for (let i = 0; i < word2.length; i++) {
    const ele = word2[i]
    map2.has(ele) ? map2.set(ele, map2.get(ele) + 1) : map2.set(ele, 1)
  }
  if (map1.size !== map2.size) {
    return false
  }
  for (const key of map1.keys()) {
    if (!map2.has(key)) {
      return false
    }
  }
  let str1 = Array.from(map1.values()).sort().join()
  let str2 = Array.from(map2.values()).sort().join()
  return str1 === str2
}
// @lc code=end

console.log(closeStrings('cabbba', 'abbccc'))
